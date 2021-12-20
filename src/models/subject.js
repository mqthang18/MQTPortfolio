try {
    "use strict";
    var listBlog; 
    subject = subject[0].concat(nav, subject[1], subject[2])
    test = subject
    var app;
    fetch ("../json/post.json").then(function(response) {
        return response.json();
    }).then(function(data) {
        // listBlog = data.listBlogs
        app = new Vue({
            el: "#app",
            template: test,
            data: {
                listBlogs: data.listBlogs
            }
        })
    })

} catch (err) {
    window.location.href = url;
}