try {     
    let APIurl = "https://docs.google.com/spreadsheets/d/1uSydLZo2x6dG1tVMuvyTQ1uIT6CvYEOVh1m8dibeKr4/gviz/tq?sheet=";
    var queryStr = 'Select A, B, C, D'
    var query = encodeURIComponent(queryStr);
    var APIurl_3 = APIurl + 'NavTopic' + '&tq=' + query; 
    fetch(APIurl_3).then(res=>res.text()).then(rep=>{
        const datasetThree = JSON.parse(rep.substr(47).slice(0,-2));
        var dataThree = HandleAPI(datasetThree)
        test = homepage[0].concat(nav, homepage[1])

        CallUI(test, dataThree)
    })
} catch (err) {
    // console.log(err)
    window.location.href = url;
}

async function CallUI(VueTemplate /*Vue template*/, Category /*Category for navigation bar*/) {
    var app;
    var app = new Vue({
        el: "#app",
        template: VueTemplate,
        data: {
            Category: Category
        }
    })
}