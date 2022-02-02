var post = [
    `<div class="wrapper" id="homepage" name="homepage">
    <div class="container">`,
        `
        <div class="body">
            <div class="LiPostHead">
                <span> {{ post[0].title }} </span>
            </div>
            <div class="bodyContent">
                <div id="Content" class="Content" v-html="post[0].content">
                </div>               
                <div class="News">
                    <h3 style="color:white; text-align: center;">Related Posts</h3>
                </div>
            </div>
        </div>`
    ,
    `</div></div>`
]