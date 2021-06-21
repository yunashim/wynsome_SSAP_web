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