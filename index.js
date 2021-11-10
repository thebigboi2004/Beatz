const { Client, Collection, Intents, MessageEmbed } = require("discord.js");
const eventHandlers = (handler) => require(`./core/handlers/${handler}`);
const { Manager } = require("erela.js")
const Logger  = require("./core/Logger");
const Embed = require("./core/Embed");

const client = new Client({
    shards: "auto",
    allowedMentions: { parse: ["users", "roles", "everyone"]},
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES,
    ],
    partials: ["CHANNEL", "MESSAGE", "REACTION", "USER"],
});

client.colors = {
    error: "RED",
    success: "BLUE",
};
client.commands = new Collection();
client.aliases = new Collection();
client.logger = new Logger;
client.embed = Embed;
client.bot_config = require('./config');
client.error = function (type, err) {
    client.logger.error(type, err);
};
client.log = function (type, message) {
    client.logger.log(type, message);
};

client.manager = new Manager({
    autoPlay: true,
    nodes: client.bot_config.nodes,
    send(id, payload) {
        const guild = client.guilds.cache.get(id);
        if (guild) guild.shard.send(payload);
    }
});
eventHandlers("EventHandler")( client);
eventHandlers("CommandHandler")(client);
eventHandlers("PlayerHandler")(client.manager, client);


if (client.bot_config.client.TOKEN === "") {
    return new TypeError("The bot token is blank in config.js! Please try again!")
} else {
    client.login(client.bot_config.client.TOKEN);
}