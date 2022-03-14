const searchBox = `
    <div class="searchBox">
        <input type="text" class="textBox" id="textBox" required>
        <button v-on:click="search('textBox')">
            <i class="fa fa-search"></i>
        </button>
    </div>
`