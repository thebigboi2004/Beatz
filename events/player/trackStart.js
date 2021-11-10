module.exports = (player, track, client) => {
    const QueueChannel = client.channels.cache.get(player.textChannel);
    const PEmbed = client.embed.createEmbed(client.colors.success, "Now Playing ♪", `Started playing \`${track.title}\'`, player.queue.current.displayThumbnail());
    QueueChannel.send({ embeds: [PEmbed]});
    if (track.isStream) return;
}