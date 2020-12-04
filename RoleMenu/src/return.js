module.exports = {
    roleObjReturn: async function() {
        const fs = require('fs');
        const readline = require('readline');

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

        var text = new Vue({
            el: '#roles',
            data: {
                message: roleList
            }
        })
    }
}