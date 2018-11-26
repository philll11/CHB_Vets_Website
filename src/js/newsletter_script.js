function newsletter(x) {
    console.log(x);
    var newsletters = document.getElementsByClassName("newsletters");  
    if(x == 0) {
        newsletters[0].style.display = "block";
        newsletters[1].style.display = "none";
        newsletters[2].style.display = "none";
    }
    if(x == 1) {
        newsletters[1].style.display = "block";
        newsletters[0].style.display = "none";
        newsletters[2].style.display = "none";
    }
    if(x == 2) {
        newsletters[2].style.display = "block";
        newsletters[0].style.display = "none";
        newsletters[1].style.display = "none";
    }
}