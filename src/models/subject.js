try {
    "use strict";
    var listBlog; 
    subject = subject[0].concat(nav, subject[1], footer, subject[2])
    test = subject
    // console.log(data)
    var app;
    app = new Vue({
        el: "#app",
        template: test,
        data: {
            listBlogs: data,
            Category: category,
            title: topic
        },
        computed: {
            ShowCategory: function() {
                var target; 
                for (var i = 0; i < this.Category.length; i++) {
                    if (this.Category[i].path == this.title) {
                        target = this.Category[i].category;
                    }
                }
                return target; 
            }
        }
    })
} catch (err) {
    window.location.href = url;
    // console.log(err)
}