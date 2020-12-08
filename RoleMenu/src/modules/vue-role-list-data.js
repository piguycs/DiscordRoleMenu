module.exports = {
    roleListReturn: function (roleList) {
        var text = new Vue({
            el: '#roles',
            data: {
                message: roleList
            }
        })
    },
	
	btnLink: function() {
		const botjs = require('./bot.js')
		const getObj = require('./return.js')

		var vue = new Vue({
			el: '#StartButtons',

			methods: {
				runBot: function () {
					botjs.botsrc()
				},

				// My Return.js in this file coz smol code
				outputRoles: function () {
					getObj.roleObjReturn()
				}
			}
		})
	}
}
