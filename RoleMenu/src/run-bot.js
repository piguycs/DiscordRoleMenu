const botjs = require('./modules/bot.js')
fs = require('fs')

var vue = new Vue({
    el: '#StartButtons',
    
    methods: {
        runBot: function() {
            botjs.botsrc()
        },

        // My Return.js in this file coz smol code
        outputRoles: function() {
            fs.readFile('temp.txt', 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }
                var app = new Vue({
                    el: '#app',
                    data: {
                        message: data
                    }})
            })}
    }
})