var subject = [
    `<div class="wrapper" id="homepage" name="homepage">
    <div class="container">`,
        `
        <div class="body">
            <div class="LiPostHead">
                <span> {{ ShowCategory }} </span>
            </div>
            <div class="bodyContent">
                <div id="Content" class="Content">
                    <div v-for="post in listBlogs[numPage]" class="Posts">
                        <button style="text-align:unset;">
                            <h3> {{ post.title }} </h1>
                            <p> {{ post.datecreate }} </p>
                            <p> {{ post.author }} </p>
                        </button>
                    </div> 
                </div>               
                <div class="News">
                    <div v-for="n in news" class="NewBlog">
                        <div class="BlogElement">
                            <div class="item">
                                <button class="itemMessage" style="text-align:unset;">
                                    <h3> {{ n.title }} </h3>
                                    <div class="BlogNote">
                                        <p> {{ n.category }} </p>
                                        <p> {{ n.dateCreated }}</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `,
        `<div class="OrderPage">
            <div>
                <div id="ListOrderPage" class="ListOrderPage">
                </div>
            </div>
        </div>`,
    `</div></div>`
]


        