try {
    "use strict";
    // console.log(topic.split('/'))
    let APIurl = "https://docs.google.com/spreadsheets/d/1uSydLZo2x6dG1tVMuvyTQ1uIT6CvYEOVh1m8dibeKr4/gviz/tq?sheet=";
    var queryStr = 'Select A, B, C, D, E, F, G, H, I, J'
    console.log(queryStr)
    var query = encodeURIComponent(queryStr);
    console.log(query);
    APIurl_1 = APIurl + 'Post' + '&tq=' + query; 
    console.log(APIurl);
    fetch (APIurl_1).then(res => res.text()).then(rep=>{
        // console.log(rep)
        const datasetOne = JSON.parse(rep.substr(47).slice(0,-2));

        // Define varfable
        var dataOne = HandleAPI(datasetOne)
        
        // Get data two ============================================
        var queryStr = 'Select A, B, C, D, E, F, G, H, I, J where C = "'+topic.split('/')[1]+'"';
        var query = encodeURIComponent(queryStr);
        APIurl_2 = APIurl + 'Post' + '&tq=' + query; 
        fetch(APIurl_2).then(res => res.text()).then(rep=>{
            const datasetTwo = JSON.parse(rep.substr(47).slice(0,-2));
            // console.log(datasetTwo.table.rows);
            // Define varfable
            var dataTwo = HandleAPI(datasetTwo)
            
            // Get navigation category
            var queryStr = 'Select A, B, C, D';
            var query = encodeURIComponent(queryStr);
            var APIurl_3 = APIurl + 'NavTopic' + '&tq=' + query; 
            fetch(APIurl_3).then(res=>res.text()).then(rep=>{
                const datasetThree = JSON.parse(rep.substr(47).slice(0,-2));
                var dataThree = HandleAPI(datasetThree)
                CallUI(subject /*Vue template*/, dataTwo /*API*/, dataOne /*API ListNews*/, dataThree /*Category for navigation bar*/)
            })
            
        })
        
    })

} catch (err) {
    window.location.href = url
}


async function CallUI(subject /*Vue template*/, data /*API*/, ListNews /*API*/, Category /*Category for navigation bar*/) {
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
            Category: Category,
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
