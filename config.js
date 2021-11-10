

module.exports = {
    support_server: {
        serverID: "880160050998554654",
        serverInvite: "https://discord.gg/2kBuWQnuyZ",
    },  
    client: {
        bot_admin: ["847976407798906890", "868092439976607785"],
        TOKEN: process.env.DISCORD_TOKEN || "ODgwMTc0MzI5NDgzMTE2NTk3.YSacOA.dsEGb6ReFIPTzbCQk_2VQaogWZw",
        default_prefix: process.env.PREFIX || ">"
    },
    presence: {
        status: "online",
        type: "LISTENING", 
    },
    database: {
        mongo_uri: process.env.MONGO_URI || "",
    },
    nodes: [{
        host: "localhost",
        password: 'youshallnotpass',
        port: 2333,
    }]
}