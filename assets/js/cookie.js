function setCookie(type){
    document.cookie = "type="+type;
}

function isSelected(type){
    return document.cookie == "type="+type;
}

function updateButtons(){
    let buttons = document.getElementsByClassName("btn");
    for (let button of buttons){
        let type = button.getAttribute("aria-controls");
        let accordionItem = document.getElementById(type);
        let selected = isSelected(type);
        button.setAttribute("aria-expanded", selected);
        if (selected){
            accordionItem.classList.add("show");
            button.classList.remove("collapsed");
        }else{
            accordionItem.classList.remove("show");
            button.classList.add("collapsed");
        }
        
    }
}