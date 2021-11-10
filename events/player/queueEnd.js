const { MessageEmbed } = require('discord.js');

module.exports = (player, client) => {
    const QueueChannel = client.channels.cache.get(player.textChannel);
    QueueChannel.send({ embeds: [new MessageEmbed().setColor(client.colors.success).setDescription("The queue has ended.")]});
    player.destroy();
}