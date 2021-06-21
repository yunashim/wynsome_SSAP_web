// function move() {
//     document.querySelector(".firstcircle").classList.add("go")
//     document.querySelector(".firstcircleundertext").classList.add("see")
// }
// function move1() {
//     document.querySelector(".secondcircle").classList.add("go")
//     document.querySelector(".secondcircleundertext").classList.add("see")
// }

document.getElementById('move').addEventListener('click', function() {
    document.getElementById('text').classList.toggle('hidden')
})
