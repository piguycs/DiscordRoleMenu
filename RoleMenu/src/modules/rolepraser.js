module.exports = {
    praser: async function praser() {
        let rolemap = msg.guild.roles.cache
            .sort((a, b) => b.position - a.position)
            .map(r => r)
            .join(",");
        if (!rolemap) rolemap = "No roles";
        msg.channel.send(rolemap);
    }
}