module.exports = {
    roleListReturn: function (roleList) {
        var text = new Vue({
            el: '#roles',
            data: {
                message: roleList
            }
        })
    }
}