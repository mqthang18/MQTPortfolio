"use strict";
console.log(topic.split('/'))
let APIurl = "https://docs.google.com/spreadsheets/d/1uSydLZo2x6dG1tVMuvyTQ1uIT6CvYEOVh1m8dibeKr4/gviz/tq?sheet=Post";
var queryStr = 'Select A, B, C, D, E, F, G, H, I, J where C = "'+topic.split('/')[1]+'"';
console.log(queryStr)
const query = encodeURIComponent(queryStr);
console.log(query);
APIurl = APIurl + '&tq=' + query; 
console.log(APIurl);
fetch (APIurl).then(res => res.text()).then(rep=>{
    console.log(rep)
    const dataset = JSON.parse(rep.substr(47).slice(0,-2));
    // console.log(dataset.table.rows);
    // Define varfable
    var data = []
    var dict =  {}
    var keys = []
    // var value = [] 
    // Get dataset cols and rows
    var cols = dataset.table.cols
    var rows = dataset.table.rows
    // Create list key for dict
    for (var i = 0; i < Object.keys(cols).length; i++) {
        keys.push(cols[i].label)
    }
    // console.log('Key for larging data')
    // console.log(keys)
    // Create list value for dict
    for (var i = 0; i < Object.keys(rows).length; i++) {
        // console.log(rows[i].c)
        var value = {};
        var el = rows[i].c;
        for (var j = 0; j < Object.keys(keys).length; j++) {
            // console.log(keys[j])
            var lengthEl = Object.keys(el[i]).length;
            if (el[j] != null) {
                value[keys[j]] = el[j].v;
                // console.log(el[j].v)
            } else {
                value[keys[j]] = null;
                // console.log('Null')
                // console.log(el[j].v)
            }
            // value[keys[j]] = el[j];
        }
        // console.log(value)
        data.push(value)
    }
    // console.log(data)
    CallUI(subject /*Vue template*/, data /*API*/)
})


async function CallUI(subject /*Vue template*/, data /*API*/) {
    "use strict";
    // console.log(data)
    var listBlog; 
    subject = subject[0].concat(nav, subject[1], subject[2], footer, subject[3])
    var test = subject
    let PageListBlogs = {} 
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
    // console.log(PageListBlogs)
    var app;
    app = new Vue({
        el: "#app",
        template: subject,
        data: {
            numPage: 1,
            listBlogs: PageListBlogs,
            Category: category,
            title: topic,
            news: ListNews
        },
        methods: {
            redirect: function(IDPost) {
                var url = window.location.href;
                url = new URL(url);
                var search_params = url.searchParams;
                search_params.set('topic', 'post')
                search_params.set('id',IDPost)
                url.search = search_params.toString();
                var new_url = url.toString()
                // console.log(new_url)
                window.location.href = new_url
            }
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

    var numPage = Object.keys(app.listBlogs).length; // Xac dinh numPage de han che listBlogs data
    if (numPage > 1) {
        var ListNumPage = document.getElementById("ListOrderPage");
        for (var i = 0; i < numPage; i++) {
            var Numtag = document.createElement('button'); 
            Numtag.setAttribute('onclick','app.numPage ='.concat(i+1));
            ListNumPage.appendChild(Numtag).innerText = i + 1;
        }
    }
}
