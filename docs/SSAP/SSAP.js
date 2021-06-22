document.getElementById('firstcircle').addEventListener('click', function () {
    document.querySelector(".firstcircle").classList.toggle("go")
    document.querySelector(".firsttext").classList.toggle("see")
})

document.getElementById('secondcircle').addEventListener('click', function () {
    document.querySelector(".secondcircle").classList.toggle("go")
    document.querySelector(".secondtext").classList.toggle("see")
})

document.getElementById('toggle-menu').addEventListener('click', function () {
    document.querySelector('.newmenu').classList.toggle("show");
})