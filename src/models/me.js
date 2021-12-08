try {
    me = me[0].concat(nav, me[1], me[2])
    test = me
    var app = new Vue({
        el: "#app",
        template: test
    })
} catch (err) {
    window.location.href = url;
}