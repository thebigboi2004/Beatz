module.exports = (node, error, client) => {
    client.error(`LAVALINK`, `Lavalink: Node ${node.options.identifier} had an error: ${error.message}`);
}