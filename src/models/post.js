try {
    "use strict";
    // console.log(topic.split('/'))
    var id = url.searchParams.get("id");
    // console.log(id)
    let APIurl = "https://docs.google.com/spreadsheets/d/1uSydLZo2x6dG1tVMuvyTQ1uIT6CvYEOVh1m8dibeKr4/gviz/tq?sheet=Post";
    var queryStr = 'Select A, B, C, D, E, F, G, H, I, J'
    // console.log(queryStr)
    var query = encodeURIComponent(queryStr);
    // console.log(query);
    APIurl_1 = APIurl + '&tq=' + query; 
    // console.log(APIurl);

    fetch(APIurl_1).then(res=>res.text()).then(rep=>{
        // console.log(rep)
        const datasetOne = JSON.parse(rep.substr(47).slice(0,-2));
    
            // Define varfable
            var dataOne = []
            var dict =  {}
            var keys = []
    
            // Get datasetOne cols and rows
            var cols = datasetOne.table.cols
            var rows = datasetOne.table.rows
            // Create list key for dict
            for (var i = 0; i < Object.keys(cols).length; i++) {
                keys.push(cols[i].label)
            }
    
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
                dataOne.push(value)
            }
        // Get data two
        var queryStr = 'Select A, B, C, D, E, F, G, H, I, J where A = '+id;
        var query = encodeURIComponent(queryStr);
        APIurl_2 = APIurl + '&tq=' + query; 
        fetch (APIurl_2).then(res=>res.text()).then(rep=>{
            // console.log(rep)
            const datasetTwo = JSON.parse(rep.substr(47).slice(0,-2));
    
            // Define varfable
            var dataTwo = []
            var dict =  {}
            var keys = []
    
            // Get datasetTwo cols and rows
            var cols = datasetTwo.table.cols
            var rows = datasetTwo.table.rows
            // Create list key for dict
            for (var i = 0; i < Object.keys(cols).length; i++) {
                keys.push(cols[i].label)
            }
    
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
                dataTwo.push(value)
            }
            // console.log(dataTwo)
    
            var test = post[0].concat(nav, post[1], footer, post[2])
            CallUI(test, dataOne, dataTwo)
        })
    })
    
} catch (err) {
    window.location.href = url
}

async function CallUI(VueTemplate /*Vue template*/, RelatedPost /*API*/, PostData /*API*/) {
    // console.log(RelatedPost);
    // console.log(PostData);
    var app;
    app = new Vue({
        el: "#app",
        template: VueTemplate,
        data: {
            // numPage: 1,
            // listBlogs: PageListBlogs,
            Category: category,
            // title: topic,
            news: RelatedPost,
            post: PostData
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
}


