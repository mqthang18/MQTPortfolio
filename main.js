"use strict";
var url = window.location.href;
var url = new URL(url);
var topic = url.searchParams.get("topic");
// Get Navtopic 
let APIurl = "https://docs.google.com/spreadsheets/d/1uSydLZo2x6dG1tVMuvyTQ1uIT6CvYEOVh1m8dibeKr4/gviz/tq?sheet=";
var queryStr = 'Select C';
var query = encodeURIComponent(queryStr);
APIurl = APIurl + 'NavTopic' + '&tq=' + query; 
fetch (APIurl).then(res => res.text()).then(rep=>{
    const datasetOne = JSON.parse(rep.substr(47).slice(0,-2));

    // Define varfable
    var dataOne = HandleAPI(datasetOne);
    // console.log(dataOne);
    if (topic == 'subject/'.concat(dataOne[0].path) || topic == 'subject/'.concat(dataOne[1].path) || topic == 'subject/'.concat(dataOne[2].path)) {
        // Xóa các DOM trong trang homepage
        var myobj = document.getElementsByName("homepage");
        for (var index = myobj.length - 1; index >= 0; index--) {
            myobj[index].parentNode.removeChild(myobj[index]);
        }

        var listElement = {
            0: ['head', 'link', {
                0: ['rel', "stylesheet"],
                1: ['name', topic],
                2: ['href', './public/style/navigation/homepage/navigationbar.css']
            }],
            1: ['head', 'link', {
                0: ['rel', "stylesheet"],
                1: ['name', topic],
                2: ['href', './public/style/navigation/otherpages/responsivenavbar.css']
            }],
            2: ['head', 'link', {
                0: ['rel', "stylesheet"],
                1: ['name', topic],
                2: ['href', './public/style/footer/footer.css']
            }],
            3: ['head', 'link', {
                0: ['rel', "stylesheet"],
                1: ['name', topic],
                2: ['href', './public/style/subject/content.css']
            }],
            4: ['head', 'link', {
                0: ['rel', "stylesheet"],
                1: ['name', topic],
                2: ['href', './public/style/search/searchBox.css']
            }],
            5: ['body', 'script', {
                0: ['name', 'homepage'],
                1: ['id', 'homepage'],
                2: ['src', './src/views/blocks/footer.vue.js'],}
            ],
            6: ['body', 'script', {
                0: ['name', 'homepage'],
                1: ['id', 'homepage'],
                2: ['src', './src/views/blocks/searchBox.vue.js'],}
            ],
            7: ['body', 'script', {
                0: ['name', 'homepage'],
                1: ['id', 'homepage'],
                2: ['src', './public/js/homepage/homepage.js'],
            }],
            8: ['body', 'script', {
                0: ['name', 'homepage'],
                1: ['id', topic],
                2: ['src', './src/views/blocks/navigationbar.vue.js'],
            }],
            9: ['body', 'script', {
                0: ['name', 'homepage'],
                1: ['id', 'homepage'],
                2: ['src', './src/views/pages/subject/content.vue.js'],
            }],
            10: ['body', 'script', {
                0: ['name', 'homepage'],
                1: ['id', 'homepage'],
                2: ['src', './src/models/subject.js'],
            }]
        }

        for (var i = 0; i < Object.keys(listElement).length; i++) {
            CreateTag(listElement[i][0], listElement[i][1], listElement[i][2])
        }
    } else if (topic == 'homepage' || topic == null) {
        var listElement = {
            0: ['head', 'link', {
                0: ['rel', "stylesheet"],
                1: ['name', 'homepage'],
                2: ['href', './public/style/homepage/homepage.css']
            }],
            1: ['head', 'link', {
                0: ['rel', "stylesheet"],
                1: ['name', 'homepage'],
                2: ['href', './public/style/navigation/homepage/navigationbar.css']
            }],
            2: ['head', 'link', {
                0: ['rel', "stylesheet"],
                1: ['name', 'homepage'],
                2: ['href', './public/style/navigation/homepage/responsivenavbar.css']
            }],
            3: ['body', 'script', {
                0: ['name', 'homepage'],
                1: ['id', 'homepage'],
                2: ['src', './src/views/blocks/navigationbar.vue.js'],
            }],
            4: ['body', 'script', {
                0: ['name', 'homepage'],
                1: ['id', 'homepage'],
                2: ['src', './src/views/pages/homepage/homepage.vue.js'],
            }],
            5: ['body', 'script', {
                0: ['name', 'homepage'],
                1: ['id', 'homepage'],
                2: ['src', './public/js/homepage/homepage.js'],
            }],
            6: ['body', 'script', {
                0: ['name', 'homepage'],
                1: ['id', 'homepage'],
                2: ['src', './src/models/homepage.js'],
            }]
        }

        for (var i = 0; i < Object.keys(listElement).length; i++) {
            CreateTag(listElement[i][0], listElement[i][1], listElement[i][2])
        }
    } else if (topic == 'me') {
        // Xóa các DOM trong trang homepage
        var myobj = document.getElementsByName("homepage");
        for (var index = myobj.length - 1; index >= 0; index--) {
            myobj[index].parentNode.removeChild(myobj[index]);
        }

        var listElement = {
            0: ['head', 'link', {
                0: ['rel', "stylesheet"],
                1: ['name', topic],
                2: ['href', './public/style/navigation/homepage/navigationbar.css']
            }],
            1: ['head', 'link', {
                0: ['rel', "stylesheet"],
                1: ['name', topic],
                2: ['href', './public/style/navigation/otherpages/responsivenavbar.css']
            }],
            2: ['head', 'link', {
                0: ['rel', "stylesheet"],
                1: ['name', topic],
                2: ['href', './public/style/footer/footer.css']
            }],
            3: ['head', 'link', {
                0: ['rel', "stylesheet"],
                1: ['name', topic],
                2: ['href', './public/style/me/content.css']
            }],
            4: ['body', 'script', {
                0: ['name', 'homepage'],
                1: ['id', 'homepage'],
                2: ['src', './src/views/blocks/footer.vue.js'],}
            ],
            5: ['body', 'script', {
                0: ['name', 'homepage'],
                1: ['id', 'homepage'],
                2: ['src', './public/js/homepage/homepage.js'],
            }],
            6: ['body', 'script', {
                0: ['name', 'homepage'],
                1: ['id', topic],
                2: ['src', './src/views/blocks/navigationbar.vue.js'],
            }],
            7: ['body', 'script', {
                0: ['name', 'homepage'],
                1: ['id', 'homepage'],
                2: ['src', './src/views/pages/me/content.vue.js'],
            }],
            8: ['body', 'script', {
                0: ['name', 'homepage'],
                1: ['id', 'homepage'],
                2: ['src', './src/models/me.js'],
            }]
        }

        for (var i = 0; i < Object.keys(listElement).length; i++) {
            CreateTag(listElement[i][0], listElement[i][1], listElement[i][2])
        }
    } else if (topic == 'post') {
         // Xóa các DOM trong trang homepage
         var myobj = document.getElementsByName("homepage");
         for (var index = myobj.length - 1; index >= 0; index--) {
             myobj[index].parentNode.removeChild(myobj[index]);
         }

         var listElement = {
            0: ['head', 'link', {
                0: ['rel', "stylesheet"],
                1: ['name', topic],
                2: ['href', './public/style/navigation/homepage/navigationbar.css']
            }],
            1: ['head', 'link', {
                0: ['rel', "stylesheet"],
                1: ['name', topic],
                2: ['href', './public/style/navigation/otherpages/responsivenavbar.css']
            }],
            2: ['head', 'link', {
                0: ['rel', "stylesheet"],
                1: ['name', topic],
                2: ['href', './public/style/footer/footer.css']
            }],
            3: ['head', 'link', {
                0: ['rel', "stylesheet"],
                1: ['name', topic],
                2: ['href', './public/style/subject/content.css']
            }],
            4: ['head', 'link', {
                0: ['rel', "stylesheet"],
                1: ['name', topic],
                2: ['href', './public/style/post/content.css']
            }],
            5: ['body', 'script', {
                0: ['name', 'homepage'],
                1: ['id', 'homepage'],
                2: ['src', './src/views/blocks/footer.vue.js'],}
            ],
            6: ['body', 'script', {
                0: ['name', 'homepage'],
                1: ['id', 'homepage'],
                2: ['src', './public/js/homepage/homepage.js'],
            }],
            7: ['body', 'script', {
                0: ['name', 'homepage'],
                1: ['id', topic],
                2: ['src', './src/views/blocks/navigationbar.vue.js'],
            }],
            8: ['body', 'script', {
                0: ['name', 'homepage'],
                1: ['id', 'homepage'],
                2: ['src', './src/views/pages/post/content.vue.js'],
            }],
            9: ['body', 'script', {
                0: ['name', 'homepage'],
                1: ['id', 'homepage'],
                2: ['src', './src/models/post.js'],
            }]
        }

        for (var i = 0; i < Object.keys(listElement).length; i++) {
            CreateTag(listElement[i][0], listElement[i][1], listElement[i][2])
        }
    }
})

        
// Insert tag to render HTML 
        function CreateTag(HtmlPart, Tag, Attr) {
            var tag = document.createElement(Tag);
            for (var i = 0; i < Object.keys(Attr).length; i++) {
                tag.setAttribute(Attr[i][0], Attr[i][1])
            }
            switch (HtmlPart) {
                case 'head':
                    document.head.appendChild(tag)
                    break;
                case 'body':
                    document.body.appendChild(tag)
                    break;
            }
        }
// Handle API data is queried 
        function HandleAPI(dataset) {
            // Define variable
            var data = [];
            var dict =  {};
            var keys = [];
            // console.log(dataset);
            // Get datasetOne cols and rows
            var cols = dataset.table.cols;
            var rows = dataset.table.rows;
            // Create list key for dict
            for (var i = 0; i < Object.keys(cols).length; i++) {
                keys.push(cols[i].label);
            }
        
            // Create list value for dict
            for (var i = 0; i < Object.keys(rows).length; i++) {
                var value = {};
                var el = rows[i].c;
                for (var j = 0; j < Object.keys(keys).length; j++) {
                    if (el[j] != null) {
                        value[keys[j]] = el[j].v;
                    } else {
                        value[keys[j]] = null;
                    }
                }
                data.push(value);
            }
            return data;
        }
