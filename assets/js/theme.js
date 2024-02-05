function setMode(){
    if (document.cookie.indexOf("theme=dark")){

    }
}

function switchMode(){
    var text = "light mode";
    if (document.body.classList.toggle("dark-mode")){
        text = "dark mode";
        document.cookie.indexOf("theme=");
    }
    document.getElementById("theme-btn").innerText = text;
}