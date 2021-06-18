function buttonadd() {
    var i = 0
    var timeBox = document.querySelectorAll(".timeBox")[i]
    for (i=0; i<timeLineText.length; i++) {
        timeBox[i].addEventListener('click', show())
        if (event.target === timeBox[0]) {
            var t1 = document.getElementsByClassName("t1")
            t1.setAttribute('style', 'display:none;')
        }
    }
}
