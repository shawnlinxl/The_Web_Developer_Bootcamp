// DOM manipulation on www.google.com

// select logo
var logo = document.querySelector("#hplogo");

// change logo and adjust width and height
logo.setAttribute("srcset","https://r.hswstatic.com/w_907/gif/tesla-cat.jpg");
logo.style.width = "200px";
logo.style.height = "100px";
logo.style.boarder = "1px solid grey";

// select all anchor tags and set href attribution
var links = document.getElementsByTagName("a");

for (var i = 0; i < links.length; i++) {
//    links[i].style.border = "1px dashed blue";
//    links[i].style.color = "purple";
//    console.log(links[i].getAttribute("href"));
    links[i].setAttribute("href", "https://www.bing.com");
}
