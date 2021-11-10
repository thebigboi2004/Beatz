const clientEvents = (event) => require(`../../events/client/${event}`);
const messageEvents = (event) => require(`../../events/message/${event}`);

module.exports = (client) => {
    client.on("ready", () => clientEvents("ready")(client));
    client.on("messageCreate", async (message) => messageEvents("messageCreate")(client, message));
};
