const chalk = require('chalk');

module.exports = (client) => {
    client.user.setPresence({ status: client.bot_config.presence.status });
    client.user.setActivity(`${client.guilds.cache.size} Servers`, { type: client.bot_config.presence.type });

    let clientMembers = new Set();
    client.guilds.cache.forEach((guild) => {
        guild.members.cache.forEach((member) => {
            clientMembers.add(member.user.id);
        });
    });

    console.log(chalk.bgBlueBright.black(` ${client.guilds.cache.size} server`));
    client.manager.init(client.user.id);
}