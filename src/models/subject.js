try {
    "use strict";
    var listBlog; 
    subject = subject[0].concat(nav, subject[1], footer, subject[2])
    test = subject
    data = []
    for (var i = 0; i < dataDA.length; i++) {
        data.push(dataDA[i]) 
    }
    for (var i = 0; i < dataIT.length; i++) {
        data.push(dataIT[i]) 
    }
    for (var i = 0; i < dataEL.length; i++) {
        data.push(dataEL[i]) 
    }

    console.log(data)
    var app;
    app = new Vue({
        el: "#app",
        template: test,
        data: {
            listBlogs: data,
            Category: category
        }
    })
} catch (err) {
    window.location.href = url;
    // console.log(err)
}