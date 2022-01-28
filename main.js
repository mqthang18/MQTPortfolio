
        var url = window.location.href;
        var url = new URL(url);
        var topic = url.searchParams.get("topic");
        if (topic == 'subject/IT' || topic == 'subject/DA' || topic == 'subject/EL') {
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
                4: ['body', 'script', {
                    0: ['name', 'homepage'],
                    1: ['id', 'homepage'],
                    2: ['src', './src/database/Category/Category.vue.js'],}
                ],
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
                    2: ['src', './src/views/pages/'.concat(topic,'/data.js')],
                }],
                9: ['body', 'script', {
                    0: ['name', 'homepage'],
                    1: ['id', 'homepage'],
                    2: ['src', './src/views/pages/subject/News/news.js']
                }],
                // 9: ['body', 'script', {
                //     0: ['name', 'homepage'],
                //     1: ['id', 'homepage'],
                //     2: ['src', './src/views/pages/'.concat(topic,'/EL/data.js')],
                // }],
                // 10: ['body', 'script', {
                //     0: ['name', 'homepage'],
                //     1: ['id', 'homepage'],
                //     2: ['src', './src/views/pages/'.concat(topic,'/IT/data.js')],
                // }],
                10: ['body', 'script', {
                    0: ['name', 'homepage'],
                    1: ['id', 'homepage'],
                    2: ['src', './src/views/pages/subject/content.vue.js'],
                }],
                11: ['body', 'script', {
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
                    2: ['src', './src/database/Category/Category.vue.js'],}
                ], 
                4: ['body', 'script', {
                    0: ['name', 'homepage'],
                    1: ['id', 'homepage'],
                    2: ['src', './src/views/blocks/navigationbar.vue.js'],
                }],
                5: ['body', 'script', {
                    0: ['name', 'homepage'],
                    1: ['id', 'homepage'],
                    2: ['src', './src/views/pages/homepage/homepage.vue.js'],
                }],
                6: ['body', 'script', {
                    0: ['name', 'homepage'],
                    1: ['id', 'homepage'],
                    2: ['src', './public/js/homepage/homepage.js'],
                }],
                7: ['body', 'script', {
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
                    2: ['src', './src/database/Category/Category.vue.js'],}
                ],
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
                    2: ['src', './src/views/pages/me/content.vue.js'],
                }],
                9: ['body', 'script', {
                    0: ['name', 'homepage'],
                    1: ['id', 'homepage'],
                    2: ['src', './src/models/me.js'],
                }]
            }

            for (var i = 0; i < Object.keys(listElement).length; i++) {
                CreateTag(listElement[i][0], listElement[i][1], listElement[i][2])
            }
        }

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
