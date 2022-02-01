"use strict"; 
var test = post[0].concat(nav, post[1], footer, post[2])

var app;
    app = new Vue({
        el: "#app",
        template: test,
        data: {
            // numPage: 1,
            // listBlogs: PageListBlogs,
            Category: category,
            // title: topic,
            // news: ListNews
        },
        methods: {
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