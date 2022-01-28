try {
    "use strict";
    var listBlog; 
    subject = subject[0].concat(nav, subject[1], subject[2], footer, subject[3])
    test = subject
    let PageListBlogs = {} 
    
    // if (Math.floor(data.length/12) > 0) {
    //     var OrderPage = []
    //     var List = []
    //     for (var i = 0; i <= Math.ceil(data.length/12); i++) {
    //         OrderPage.push(i+1);
    //         if (data.length >= 12) {
    //             List.push(data.splice(0,12));
    //         } else {
    //             List.push(data.splice(0,data.length));
    //         }        
    //     }
    //     for (var i = 0; i < OrderPage.length; i++) {
    //         PageListBlogs[OrderPage[i]] = List[i]
    //     }
    // } else {
    //     PageListBlogs = data;
    // }

    var OrderPage = []
    var List = []
    var getNumPage = Math.ceil(data.length/12)
    
    if (ListNews.length >= 5) {
        ListNews = ListNews.splice(0,5)
    }

    for (var i = 0; i < getNumPage; i++) {
        OrderPage.push(i+1);
        if (data.length >= 12) {
            List.push(data.splice(0,12));
        } else {
            List.push(data.splice(0,data.length));
        }        
    }
  
    for (var i = 0; i < OrderPage.length; i++) {
        PageListBlogs[OrderPage[i]] = List[i]
    }

    var app;
    app = new Vue({
        el: "#app",
        template: test,
        data: {
            numPage: 1,
            listBlogs: PageListBlogs,
            Category: category,
            title: topic,
            news: ListNews
        },
        methods: {
            // ChangeBtn(param) {
            //     this.numPage = param
            //     return this.numPage
            // }
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
    
    // app.NumberListPosts()
    var numPage = Object.keys(app.listBlogs).length; // Xac dinh numPage de han che listBlogs data
    if (numPage > 1) {
        var ListNumPage = document.getElementById("ListOrderPage");
        for (var i = 0; i < numPage; i++) {
            var Numtag = document.createElement('button'); 
            Numtag.setAttribute('onclick','app.numPage ='.concat(i+1));
            ListNumPage.appendChild(Numtag).innerText = i + 1;
        }
    }
    
} catch (err) {
    window.location.href = url;
    // console.log(err)
}