// This part does the thing
module.exports = {
    botsrc: async function runBot() {

        // its definately dotenv
        const budgetenv = require('../secret/token.js')
        const output = require('./output.js')

        const Discord = require('discord.js')
        const client = new Discord.Client()
        const { writeFileSync } = require('fs')

        // The main part of the thing
        client.on('ready', () => {
            console.log(`Logged in as ${client.user.tag}!`)
        });

        client.on('message', msg => {
            if (msg.attachments.size > 0) {
                console.log(`${msg.member.user.tag}: ATTACHED FILE, Captions: ${msg.content}`)
            } else {
                console.log(`${msg.member.user.tag}: ${msg.content}`)
            }
        });


        // Write JSON stuff to file
        client.on('message', msg => {
            if (msg.content === 'role') {
                let roleList = msg.guild.roles.cache
                    .sort((a, b) => b.position - a.position)
                    .map(r => r)
                    .join("\n")
                if (!roleList) roleList = "No roles"
                

                var listLength = roleList.split(/\r\n|\r|\n/).length
                var i = 0

                var outputRoles = "Role List:\n" 

                while (i != listLength) {
                    var thisLine = roleList.split('\n')[i]
                    
                    thisLine = thisLine.replace('<@&', '')
                    thisLine = thisLine.replace('>', '')
                    thisLine = thisLine.replace('@', '')
                    
                    outputRoles = outputRoles + thisLine + '\n'
                    
                    i += 1
                }
                
                msg.channel.send(outputRoles)

                writeFileSync("temp.txt", roleList)
            }
        });


        client.on('message', msg => {
            if (msg.content === 'ping') {
                msg.reply('Pong!')
            }
        });


        // login
        client.login(budgetenv.token)
    }
}