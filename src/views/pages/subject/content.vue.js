var subject = [
    `<div class="wrapper" id="homepage" name="homepage">
    <div class="container">`,
        `
        <div class="body">
            <div class="LiPostHead">
                <span> {{ ShowCategory }} </span>
            </div>
            <div class="bodyContent">
                <div class="Content">
                    <div v-for="abc in listBlogs" class="Posts">
                        <div>
                            <h3> {{ abc.title }} </h1>
                            <p> {{ abc.DateCreated }} </p>
                            <p> {{ abc.Author }} </p>
                        </div>
                    </div>
                </div>
                
                <div class="News">
                    <p>Hello</p>
                </div>
            </div>
        </div>
        `,
    `</div></div>`
]