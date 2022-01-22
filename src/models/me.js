try {
    me = me[0].concat(nav, me[1], footer, me[2])
    test = me
    var app = new Vue({
        el: "#app",
        template: test,
        data: {
            Category: category
        }
    })
} catch (err) {
    window.location.href = url;
}