document.getElementById('toggle-menu').addEventListener('click', function () {
    document.querySelector('.newmenu').classList.toggle('hidden');
})
function move() {
    document.querySelector(".firstcircle").classList.toggle("go")
    document.querySelector(".firsttext").classList.toggle("see")
}
function move1() {
    document.querySelector(".secondcircle").classList.toggle("go")
    document.querySelector(".secondtext").classList.toggle("see")
}


var perphoto = document.getElementsByClassName("personalPhoto")
var perInfo = document.getElementsByClassName("")
for (var i in perphoto) {
    var photo = perphoto[i]
    photo.addEventListener('click', function show() {
        
    })
}