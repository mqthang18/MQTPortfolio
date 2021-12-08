
    window.onresize = resize;

    function resize()
    {
        var screenW = screen.width; 
        if (screenW > 760) {
            document.getElementById("navi").style.visibility = "visible";
            document.getElementById("navi").style.opacity = "1";
        }
    }

    function IconNaviEffect() {
        var element = document.getElementById('navi');
        var style = window.getComputedStyle(element);
        var visibility = style.getPropertyValue('visibility');
        
        if (visibility == "hidden") {
            document.getElementById("navi").style.visibility = "visible";
            document.getElementById("navi").style.opacity = '1';
        } else {
            document.getElementById("navi").style.visibility = "hidden";
            document.getElementById("navi").style.opacity = '0';
        }
        
    }

