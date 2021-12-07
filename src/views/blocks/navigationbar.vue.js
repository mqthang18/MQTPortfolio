const nav = `
    <div class="navigation-bar">               
        <div class="logo">
            <img src="./public/img/logo/Logo.jpg" alt="Logo">
        </div>
        <div class="navi" id="navi">
            <ul class="parent-menu">
                <li class="child-menu"><a href="index.html?topic=homepage">HOME</a></li>
                <li class="child-menu">
                    <a href="#">SUBJECT</a>
                    <ul class="c-child-menu">
                        <li><a href="index.html?topic=IT">Information technology</a></li>
                        <li><a href="index.html?topic=EL">English</a></li>
                        <li><a href="index.html?topic=DA">Datascience</a></li>
                    </ul>
                </li>
                <li class="child-menu"><a href="index.html?topic=Me">ABOUT ME</a></li>
            </ul>
        </div>
        <div class="icon">
            <a href="javascript:void(0);" onclick="IconNaviEffect()">
                <i class="fa fa-bars"></i>
            </a>
        </div>
    </div>
`