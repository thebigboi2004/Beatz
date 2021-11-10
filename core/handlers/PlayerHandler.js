const playerEvents = (event) => require(`../../events/player/${event}`);

module.exports = (manager, client) => {
    manager.on("nodeConnect", (node) => playerEvents("nodeConnect")(node, client));
    manager.on("nodeError", (node, error) => playerEvents("nodeError")(node, error, client));
    manager.on("trackStart", (player, track) => playerEvents("trackStart")(player, track, client));
    manager.on("queueEnd", (player) => playerEvents("queueEnd")(player, client));
    manager.on("raw", (data) => playerEvents("raw")(data, client));
}