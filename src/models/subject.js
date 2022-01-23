try {
    "use strict";
    var listBlog; 
    subject = subject[0].concat(nav, subject[1], subject[2], footer, subject[3])
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
        method: {
            
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
            },
            NumberListPosts: function() {
                var numPage = this.listBlogs.length/12;

            //  for (var i = 0; i <= numPage; i++) {
                    
            //  }
                return numPage;
            }         
        }
    })
} catch (err) {
    window.location.href = url;
    // console.log(err)
}