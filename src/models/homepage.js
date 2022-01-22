try {  
    test = homepage[0].concat(nav, homepage[1])
    var app = new Vue({
        el: "#app",
        template: test,
        data: {
            Category: category
        }
    })
} catch (err) {
    // console.log(err)
    window.location.href = url;
}