try {  
    test = homepage[0].concat(nav, homepage[1])
    var app = new Vue({
        el: "#app",
        template: test
    })
} catch (err) {
    window.location.href = url;
}