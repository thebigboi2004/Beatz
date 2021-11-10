const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "play",
    description: "Plays your songs",
    aliases: ["p"],
    async exec(message, args, client) {
        if (!message.member.voice.channel) {
            return client.embed.errorMessage(message.channel, 
                "You must be in a voice channel to play music, please try again!", client
            );
        };
        if (message.guild.me.voice.channel && 
            message.member.voice.channel.id !== message.guild.me.voice.channel.id) {
            return client.embed.errorMessage(message.channel, 
                "You must be in the same voice channel as me to use this command!", 
            client);
        };
        let songString = args.slice(0).join(" ");
        if (!songString) {
            return client.embed.errorMessage(message.channel, 
                 "**Command Usage:** -play [song]",
            );
        };


        const Musictrack = await client.manager.search(songString, message.author);
        if (Musictrack.loadType === 'NO_MATCHES') return client.embed.errorMessage(message.channel, 
            "⛔ | No result found.", client 
        );
        const guildPlayer = client.manager.players.get(message.guild.id);
        if (!guildPlayer) {
            const player = await client.manager.create({
                guild: message.guild.id,
                voiceChannel: message.member.voice.channel.id,
                textChannel: message.channel.id,
                selfDeafen: true,
            });
            player.connect();

            if (Musictrack.loadType === 'PLAYLIST_LOADED') {
                for (const track of Musictrack.tracks) {
                    player.queue.add(track);
                }
                message.channel.send({ embeds: [new MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor("Added Playlist", client.user.displayAvatarURL())
                    .setDescription(`${Musictrack.playlist.name}`)]})
            } else {
                player.queue.add(Musictrack.tracks[0]);
                message.channel.send({ embeds: [new MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor("Queued", client.user.displayAvatarURL())
                    .setDescription(`${Musictrack.playlist.name}`)
                ]})
            }
            return player.play();
        }
    }
}