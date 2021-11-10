const path = require('path');
const fs = require("fs");

module.exports = (client) => {
    let commandDir = path.join(__dirname, "..", "..", "commands");
    fs.readdir(commandDir, (err, files) => {
        if (err) return client.logger.error("FILE", err);
        files.forEach((file) => {
            let command = require(commandDir + "/" + file);
            if (!command.name || !command.description || !command.exec) {
                return client.error("HANDLER", `Cannot load command: ${file.split(".")[0]}`)
            }
            client.commands.set(file.split(".")[0], command);
            if(command.aliases && Array.isArray(command.aliases)) command.aliases.forEach((alias) => client.aliases.set(alias, command));

            client.log("LOADED", `Loaded ${file.split(".")[0]}`);
        });
    });
}