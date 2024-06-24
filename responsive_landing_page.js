window.addEventListener("scroll", function() {
    var navbar = document.getElementById("navbar");
    var up = document.getElementById("up");
    var logo = document.getElementById("logo");
    var home = document.getElementById("home");
    var courses = document.getElementById("courses");
    var about = document.getElementById("about");
    var contact = document.getElementById("Contact");
    // var feed = document.getElementById("feed");
    var check = document.getElementById("check");
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = "rgb(255, 255, 255,0.95)";
        logo.style.color= "#4D869C";
        home.style.color = "#4D869C";
        home.style.backgroundColor = "transparent";
        courses.style.color = "#4D869C";
        about.style.color = "#4D869C";
        contact.style.color = "#4D869C";
        // feed.style.color = "#4D869C";
        check.style.color= "#4D869C";
    } else {
        navbar.style.backgroundColor = "";
        logo.style.color= "";
        home.style.color = "";
        home.style.backgroundColor = "";
        courses.style.color = "";
        about.style.color = "";
        contact.style.color = "";
        // feed.style.color = "";
        check.style.color= "";
    }

    if (window.scrollY > 200) {
        
       up.style.display = "inline"; 
    }
    else {
        up.style.display = "";
    }
    
});