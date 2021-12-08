try {
    subject = subject[0].concat(nav, subject[1], subject[2])
    test = subject
    var app = new Vue({
        el: "#app",
        template: test
    })
} catch (err) {
    window.location.href = url;
}