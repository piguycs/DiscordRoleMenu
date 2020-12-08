module.exports = {
    roleObjReturn: async function() {
        const fs = require('fs');
        const readline = require('readline');
        const vueReturn = require("./vue-role-list-data")

        var roleList = {
            roles: [ ],
            heriechy: [ ]
        }

        const fileStream = fs.createReadStream('temp.txt');

        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity
        });

        for await (const line of rl) {
            roleList.roles.push(`${line}`)
        }

        vueReturn.roleListReturn(roleList)
    }
}