 //This only works if it is last, due to it being DOM reliant
 //For collapsible section in sidebar nav
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
    content.style.display = "none";
    } else {
    content.style.display = "block";
    }
});
} 


//This is for the sidebar and makeing it appear
function openSideNavBar () {
    document.getElementById("main").style.marginLeft = "20%";
    document.getElementById("OpenSideBar").style.width = "20%";
    document.getElementById("OpenSideBar").style.display = "inline-block";
    document.getElementById("openNav").style.display = "none";
}

function closeSideNavBar () {
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("OpenSideBar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
}

