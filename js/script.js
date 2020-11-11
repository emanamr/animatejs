
//my animated background

VANTA.NET({
    el: "#animate",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00
});

//mack navbar sticky when scroll

window.onscroll = function () {

    var navbar = document.getElementById("nav");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.style.position = "fixed";
        navbar.style.backgroundColor = "rgba(71, 3, 60,.8)"; 
        navbar.style.zIndex="1";
    }else{
        navbar.style.position = "static";
        navbar.style.backgroundColor = "transparent";
    }
};
