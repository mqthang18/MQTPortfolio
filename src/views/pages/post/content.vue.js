var post = [
    `<div class="wrapper" id="homepage" name="homepage">
    <div class="container">`,
        `
        <div class="body">
            <div class="LiPostHead">
                <span> {{ post[0].title }} </span>
            </div>
            <div class="bodyContent">
                <div id="Content" class="Content">`,

                `</div>               
                <div class="News">
                    <h3 style="color:white; text-align: center;">Related Posts</h3>
                    <div v-for="n in news" class="NewBlog">
                        <div class="BlogElement">
                            <div class="item">
                                <div class="itemMessage" style="text-align:unset;" v-on:click="redirect(n.id)">
                                    <h3> {{ n.title }} </h3>
                                    <div class="BlogNote">
                                        <p> {{ n.category }} </p>
                                        <p> {{ n.dateCreated }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </div>`
    ,
    `</div></div>`
]