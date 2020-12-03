const botjs = require('./modules/bot.js')
const getObj = require('./return.js')
fs = require('fs')

var vue = new Vue({
    el: '#StartButtons',
    
    methods: {
        runBot: function() {
            botjs.botsrc()
        },

        // My Return.js in this file coz smol code
        outputRoles: function() {
            getObj.roleObjReturn()
        }
    }
})