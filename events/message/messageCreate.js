

module.exports = (client, message) => {
    if (message.author.bot) return;
    if (!message.guild) return;

    const DEFAULT_PREFIX = client.bot_config.client.default_prefix;

    if (message.content.startsWith(DEFAULT_PREFIX)) {
        const args = message.content.slice(DEFAULT_PREFIX.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        const cmd = client.commands.get(command) || 
                    client.commands.find((x) => x.aliases && x.aliases.includes(command));
        cmd.exec(message, args, client);
    }
    
}