const { MessageEmbed } = require("discord.js");

function errorMessage(channel, errorMessage, client) {
    if (!errorMessage) {
        throw Error("Missing `errorMessage` parameter at core/handlers/Embed.js (errorMessage)");
    };

    const errorEmbed = new MessageEmbed()
    .setColor(client.colors.error)
    .setDescription(errorMessage);

    return channel.send({ embeds: [errorEmbed]}).catch(err => client.logger.error("MESSAGE", err));
}

function errorInteraction(interaction, errorMessage, client) {
    if (!interaction) {
        throw Error("Missing `interaction` parameter at core/handlers/Embed.js (errorMessage)");
    }
    if (!errorMessage) {
        throw Error("Missing `errorMessage` parameter at core/handlers/Embed.js (errorMessage)");
    }

    const errorEmbedI = new MessageEmbed()
    .setColor(client.colors.error)
    .setDescription(errorMessage);

    return interaction.editReply({ embeds: [errorEmbedI], ephemeral: true}).catch(err => client.logger.error("INTERACTION", err));
}

function createEmbed(color, title, message, msg, client, thumbnail) {

    if(!color || !title || !message )  return;
    
    const embed = new MessageEmbed()
    .setColor(color)
    .setAuthor(`${title}`, client.user.displayAvatarURL({ dynamic: true }))
    .setThumbnail(thumbnail)
    .setDescription(`${message}`);
    
    return embed
}