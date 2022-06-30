
// navbar recolor on scroll
var navigation = document.getElementById('header');
window.addEventListener('scroll', () => {
    const scrollTop =
     document.body.scrollTop || document.documentElement.scrollTop;

    if (scrollTop > 0) {
        navigation.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    } else {
        navigation.style.backgroundColor = "transparent";
    }
});

function closeSide() {
    document.getElementById('sidebar').style.display = "none";
}

function openSide() {
    document.getElementById('sidebar').style.display = "block";
}


//socmed links toogler
window.addEventListener('scroll', ()=> {
    const scrollTop =
     document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    scrollPercent = (scrollTop / height) * 100;

    if(scrollPercent >= 30) {
        document.getElementById('links-container').style.display = "flex";
    } else {
        document.getElementById('links-container').style.display = "none";
    }
});