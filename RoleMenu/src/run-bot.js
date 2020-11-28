const botjs = require('./modules/bot.js')

var vue = new Vue({
    el: '#StartButtons',
    
    methods: {
        runBot: function() {
            botjs.botsrc()
        },

        // My Return.js in this file coz smol code
        outputRoles: function() {
            const lineReader = require('line-reader');
            var out1 = ""

            lineReader.eachLine('temp.txt', function (line) {
                out1 = out1.concat(line)
                console.log(line);
            });
        }
    
    }
})