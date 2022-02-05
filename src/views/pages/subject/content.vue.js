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
                    <div v-if="Object.keys(listBlogs).length === 0">
                        <p>Mục này hiện không có nội dung</p>
                    </div>
                    <div v-for="post in listBlogs[numPage]" class="Posts" v-else="Object.keys(listBlogs).length !== 0">
                        <div style="text-align:unset;" v-on:click="redirect(post.id)">
                            <div class="head">
                                <h3> {{ post.title }} </h1>
                                <p> {{ post.datecreate }} </p>
                                <p> {{ post.author }} </p>
                            </div>    
                        </div>
                    </div> 
                </div>               
                <div class="News" v-bind:style="styleNews">
                    <h3 style="color:white; text-align:center;">Related Posts</h3>
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
        </div>
        `,
        `<div class="OrderPage" v-if="totalNum.length > 1">
            <div>
                <div id="ListOrderPage" class="ListOrderPage">
                    <button v-for="item in totalNum" v-on:click="ChangeNumPage(item)"> {{ item }} </button>
                </div>
            </div>
        </div>`,
    `</div></div>`
]


        