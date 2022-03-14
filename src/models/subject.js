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
        console.log(url.searchParams.get("abbreviate"));
        var abbreviate = url.searchParams.get("abbreviate");
        var queryStr = 'Select A, B, C, D, E, F, G, H, I, J where C = "'+topic.split('/')[1]+'"';
        if (abbreviate != null) {
            var queryStr = queryStr+'and D ="'+abbreviate+'"';
        } 
        
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

                var queryStr = 'Select B, C, D, E where C="'+topic.split('/')[1]+'"';
                var query = encodeURIComponent(queryStr);
                var APIurl_4 = APIurl + 'SubTopic' + '&tq=' + query;
                fetch(APIurl_4).then(res=>res.text()).then(rep=>{
                    var datasetFour = JSON.parse(rep.substr(47).slice(0,-2));;
                    var dataFour = HandleAPI(datasetFour);
                    CallUI(subject /*Vue template*/, topic /*Title*/, dataTwo /*API*/, dataOne /*API ListNews*/, dataFour /*API ListSubTopic*/, dataThree /*Category for navigation bar*/);
                })
            })    
        })    
    })
} catch (err) {
    window.location.href = url;
}


async function CallUI(subject /*Vue template*/, topic /*Title*/, data /*API*/, ListNews /*API*/, ListSubTopic /*API*/, Category /*Category for navigation bar*/) {
    "use strict";
    // console.log(ListNews);
    // console.log(ListSubTopic);
    // console.log(data);
    var listBlog; 
    subject = subject[0].concat(nav, searchBox, subject[1], subject[2], footer, subject[3]);
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
            subtopic: ListSubTopic,
            styleNews: {
                display: 'none'
            },
            styleSubTopic: {
                display: 'None'
            }
        },
        methods: {
            search: function(id) {
                const APIurl = "https://docs.google.com/spreadsheets/d/1uSydLZo2x6dG1tVMuvyTQ1uIT6CvYEOVh1m8dibeKr4/gviz/tq?sheet=";
                var keyword = document.getElementById(id).value;
                if (keyword.length == 0) {
                    keyword = ["No post in this query"];
                } else {
                    keyword = keyword.split(" ");
                }
                var queryStr = 'SELECT A, B, C, D, E, F, G, H, I, J WHERE'; 
                var Condition = '';
                for (var i = 0; i < keyword.length; i++) {
                    var Condition = Condition.concat('(A contains "'+keyword[i]+'") or (B contains "'+keyword[i]+'") or (C contains "'+keyword[i]+'") or (D contains "'+keyword[i]+'") or (E contains "'+keyword[i]+'") or (F contains "'+keyword[i]+'") or (G contains "'+keyword[i]+'") or (H contains "'+keyword[i]+'") or (I contains "'+keyword[i]+'") or (J contains "'+keyword[i]+'") or ');
                    // console.log(queryStr);   
                }
                var Condition = Condition.concat(' (A contains "'+keyword.join(" ")+'") or (B contains "'+keyword.join(" ")+'") or (C contains "'+keyword.join(" ")+'") or (D contains "'+keyword.join(" ")+'") or (E contains "'+keyword.join(" ")+'") or (F contains "'+keyword.join(" ")+'") or (G contains "'+keyword.join(" ")+'") or (H contains "'+keyword.join(" ")+'") or (I contains "'+keyword.join(" ")+'") or (J contains "'+keyword.join(" ")+'")');
                queryStr = queryStr.concat(Condition);
                // console.log(queryStr);
                var query = encodeURIComponent(queryStr);
                var APIurl_search = APIurl + 'Post' + '&tq=' + query; 
                // console.log(APIurl_search);
                fetch (APIurl_search).then(res => res.text()).then(rep=>{
                    const datasetOne = JSON.parse(rep.substr(47).slice(0,-2));
                    // Define variable
                    var dataOne = HandleAPI(datasetOne);
                    console.log(dataOne)
                    // Change List Post header text 
                    var LiPostHeadel = document.getElementsByClassName("LiPostHead");
                    LiPostHeadel[0].childNodes[0].innerHTML = "Search results";
                    // Remove all child el in Content block
                    var Contentel = document.getElementById("Content");
                    // Change element display in content block
                    let PageListBlogs = {};
                    var OrderPage = [];
                    var List = [];
                    var getNumPage = Math.ceil(dataOne.length/12);
                    console.log(getNumPage);
                    for (var i = 0; i < getNumPage; i++) {
                        OrderPage.push(i+1);
                        if (dataOne.length >= 12) {
                            List.push(dataOne.splice(0,12));
                        } else {
                            List.push(dataOne.splice(0,dataOne.length));
                        }        
                    }
                
                    for (var i = 0; i < OrderPage.length; i++) {
                        PageListBlogs[OrderPage[i]] = List[i];
                    }
                    this.listBlogs = PageListBlogs;
                    console.log(this.listBlogs);           
                })
            },
            redirect: function(IDPost, page) {
                var url = window.location.href;
                url = new URL(url);
                var search_params = url.searchParams;

                switch (page) {
                    case 'post':
                        search_params.set('topic', page);
                        search_params.set('id', IDPost);
                        break;
                    case 'subject':
                        var el = this.subtopic;
                        for (var i = 0; i <= el.length; i++) {
                            if (el[i].abbreviate == IDPost) {
                                el = el[i];
                                break;
                            }
                        }
                        // console.log(el)
                        // console.log(el.topic.concat('/',el.path))
                        search_params.set('topic', el.topic.concat('/',el.path));
                        search_params.set('abbreviate', el.abbreviate);
                        break;
                }
                
                url.search = search_params.toString();
                var new_url = url.toString();
                window.location.href = new_url;
            },
            ChangeDisplayRelatedPost: function() {
                var lengthListNewsPost;
                if (Object.keys(this.news).length==0) {
                    lengthListNewsPost = 0; 
                } else {
                    lengthListNewsPost = Object.keys(this.news[0]).length; 
                }
                // console.log(lengthListNewsPost)
                if (lengthListNewsPost > 1) {
                    this.styleNews.display = 'block';
                }
            },
            ChangeDisplaySubTopic: function() {
                var lengthSubTopic; 
                if (Object.keys(this.subtopic).length==0) {
                    lengthSubTopic = 0; 
                } else {
                    lengthSubTopic = Object.keys(this.subtopic[0]).length;
                }

                if (lengthSubTopic > 1) {
                    this.styleSubTopic.display = 'block'
                }
            },
            ChangeNumPage: function(param) {
                this.numPage = param;
                console.log(param);
                return this.numPage;
            }  
        },
        computed: {
            ShowCategory: function() {
                var target; 
                for (var i = 0; i < this.Category.length; i++) {
                    var path = this.Category[i].topic + '/' + this.Category[i].path;
                    if (this.title == path) {
                        target = this.Category[i].topicName;
                        break;
                    }
                }
                return target; 
            }
        }
    })
    app.ChangeDisplayRelatedPost();
    app.ChangeDisplaySubTopic();
}
