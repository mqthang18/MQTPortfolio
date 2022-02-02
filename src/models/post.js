try {
    "use strict";
    // console.log(topic.split('/'))
    var id = url.searchParams.get("id");
    // console.log(id)
    let APIurl = "https://docs.google.com/spreadsheets/d/1uSydLZo2x6dG1tVMuvyTQ1uIT6CvYEOVh1m8dibeKr4/gviz/tq?sheet=";
    var queryStr = 'Select A, B, C, D, E, F, G, H, I, J'
    // console.log(queryStr)
    var query = encodeURIComponent(queryStr);
    // console.log(query);
    APIurl_1 = APIurl + 'Post' + '&tq=' + query; 
    // console.log(APIurl);
    // Get data one ==========================================
    fetch(APIurl_1).then(res=>res.text()).then(rep=>{
        const datasetOne = JSON.parse(rep.substr(47).slice(0,-2));
        var dataOne = HandleAPI(datasetOne)
        
        // Get data two ============================================
        var queryStr = 'Select A, B, C, D, E, F, G, H, I, J where A = '+id;
        var query = encodeURIComponent(queryStr);
        var APIurl_2 = APIurl + 'Post' + '&tq=' + query; 
        fetch (APIurl_2).then(res=>res.text()).then(rep=>{
            const datasetTwo = JSON.parse(rep.substr(47).slice(0,-2));
            var dataTwo = HandleAPI(datasetTwo)

            // Get navigation category
            var queryStr = 'Select A, B, C, D';
            var query = encodeURIComponent(queryStr);
            var APIurl_3 = APIurl + 'NavTopic' + '&tq=' + query; 
            fetch (APIurl_3).then(res=>res.text()).then(rep=>{
                const datasetThree = JSON.parse(rep.substr(47).slice(0,-2));
                var dataThree = HandleAPI(datasetThree)

                var test = post[0].concat(nav, post[1], footer, post[2])
                CallUI(test, dataOne, dataTwo, dataThree)
            })
        })
    })

} catch (err) {
    window.location.href = url
}



async function CallUI(VueTemplate /*Vue template*/, RelatedPost /*API*/, PostData /*API*/, Category /*Category for navigation bar*/) {
    var app;
    app = new Vue({
        el: "#app",
        template: VueTemplate,
        data: {
            // numPage: 1,
            // listBlogs: PageListBlogs,
            Category: Category,
            // title: topic,
            news: RelatedPost,
            post: PostData
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
}


