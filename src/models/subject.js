try {
    "use strict";
    let APIurl = "https://docs.google.com/spreadsheets/d/1uSydLZo2x6dG1tVMuvyTQ1uIT6CvYEOVh1m8dibeKr4/gviz/tq?sheet=";
    var queryStr = 'Select A, B, C, D, E, F, G, H, I, J where C = "'+topic.split('/')[1]+'"';
    var query = encodeURIComponent(queryStr);
    APIurl_1 = APIurl + 'Post' + '&tq=' + query; 
    fetch (APIurl_1).then(res => res.text()).then(rep=>{
        const datasetOne = JSON.parse(rep.substr(47).slice(0,-2));

        // Define varfable
        var dataOne = HandleAPI(datasetOne);

        // Get data two ============================================
        var queryStr = 'Select A, B, C, D, E, F, G, H, I, J where C = "'+topic.split('/')[1]+'"';
        var query = encodeURIComponent(queryStr);
        APIurl_2 = APIurl + 'Post' + '&tq=' + query; 
        fetch(APIurl_2).then(res => res.text()).then(rep=>{
            const datasetTwo = JSON.parse(rep.substr(47).slice(0,-2));
            // Define varfable
            var dataTwo = HandleAPI(datasetTwo);
            
            // Get navigation category
            var queryStr = 'Select A, B, C, D';
            var query = encodeURIComponent(queryStr);
            var APIurl_3 = APIurl + 'NavTopic' + '&tq=' + query; 
            fetch(APIurl_3).then(res=>res.text()).then(rep=>{
                const datasetThree = JSON.parse(rep.substr(47).slice(0,-2));
                var dataThree = HandleAPI(datasetThree);
                CallUI(subject /*Vue template*/, topic /*Title*/, dataTwo /*API*/, dataOne /*API ListNews*/, dataThree /*Category for navigation bar*/);
            })    
        })    
    })
} catch (err) {
    window.location.href = url;
}


async function CallUI(subject /*Vue template*/, topic /*Title*/, data /*API*/, ListNews /*API*/, Category /*Category for navigation bar*/) {
    "use strict";

    var listBlog; 
    subject = subject[0].concat(nav, subject[1], subject[2], footer, subject[3]);
    var test = subject;
    let PageListBlogs = {};
    var OrderPage = [];
    var List = [];
    var getNumPage = Math.ceil(data.length/12);
    
    if (ListNews.length >= 5) {
        var endPos = ListNews.length;
        var beginPos = endPos - 5; 
        ListNews = ListNews.splice(beginPos,endPos);
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
        PageListBlogs[OrderPage[i]] = List[i];
    }

    var app;
    app = new Vue({
        el: "#app",
        template: subject,
        data: {
            numPage: 1,
            totalNum: Object.keys(PageListBlogs),
            listBlogs: PageListBlogs,
            Category: Category,
            title: topic,
            news: ListNews,
            styleNews: {
                display: 'none'
            }
        },
        methods: {
            redirect: function(IDPost) {
                var url = window.location.href;
                url = new URL(url);
                var search_params = url.searchParams;
                search_params.set('topic', 'post')
                search_params.set('id', IDPost)
                url.search = search_params.toString();
                var new_url = url.toString()
                window.location.href = new_url
            },
            ChangeDisplayRelatedPost: function() {
                var lengthListNewsPost = Object.keys(this.news[0]).length; 
                // console.log(lengthListNewsPost)
                if (lengthListNewsPost > 1) {
                    this.styleNews.display = 'block';
                }
            },
            ChangeNumPage: function(param) {
                this.numPage = param;
                console.log(param)
                return this.numPage
            }  
        },
        computed: {
            ShowCategory: function() {
                var target; 
                for (var i = 0; i < this.Category.length; i++) {
                    var path = this.Category[i].topic + '/' + this.Category[i].path;
                    if (this.title == path) {
                        target = this.Category[i].category;
                        break;
                    }
                }
                return target; 
            }
        }
    })
    app.ChangeDisplayRelatedPost();
}
