try {
    let APIurl = "https://docs.google.com/spreadsheets/d/1uSydLZo2x6dG1tVMuvyTQ1uIT6CvYEOVh1m8dibeKr4/gviz/tq?sheet=";
    var queryStr = 'Select A, B, C, D'
    var query = encodeURIComponent(queryStr);
    var APIurl_1 = APIurl + 'NavTopic' + '&tq=' + query; 

    fetch(APIurl_1).then(res=>res.text()).then(rep=>{
        const datasetOne = JSON.parse(rep.substr(47).slice(0,-2));
        var dataOne = HandleAPI(datasetOne)
        
        var VueTemplate = me[0].concat(nav, me[1], footer, me[2])
        CallUI(VueTemplate, dataOne)
    })
    

    
} catch (err) {
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