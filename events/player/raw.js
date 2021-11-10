module.exports = (data, client) => {
    //Data means Discord Gateway data
    client.manager.updateVoiceState(data);
}