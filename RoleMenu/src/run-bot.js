const activateBtn = document.getElementById("startbutton");

activateBtn.onclick = runBot;


// This part does the thing
async function runBot() {

    // its definately dotenv
    const budgetenv = require('./secret/token.js');

    const Discord = require('discord.js');
    const client = new Discord.Client();
    const { writeFile } = require('fs');

    // Helps in doing that
    const storeData = (data, path) => {
        writeFile(path, JSON.stringify(data, null, 2))
    }


    // The main part of the thing
    client.on('ready', () => {
        console.log(`Logged in as ${client.user.tag}!`);
    });

    client.on('message', msg => {
        if (msg.attachments.size > 0) {
            console.log(`${msg.member.user.tag}: ATTACHED FILE, Captions: ${msg.content}`);
        } else {
            console.log(`${msg.member.user.tag}: ${msg.content}`);
        }
    });


    // Write JSON stuff to file
    client.on('message', msg => {
        if (msg.content === 'role') {
            const roleList = msg.guild.roles;
            console.log(roleList)
        }
    });

    client.on('message', msg => {
        if (msg.content === 'ping') {
            msg.reply('Pong!');
        }
    });


    // login
    client.login(budgetenv.token);
}
