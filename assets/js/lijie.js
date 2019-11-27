var content = document.getElementById("content");
var button = document.getElementById("show-more");

button.onclick = function(){

    if(content.className == "Open"){
    ontent.ClassName = "";
    button.innerHTML = "Show More";
    } else {
        content.ClassName = "Open";
        button.innerHTML = "Show Less";
    }

};