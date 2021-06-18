var texts = [
    {
        Btxt: "손잡이",
        Stxt: "압축을 진행할 때에, 손잡이를 잡고 같이 힘을 가해 압축을 할 수 있도록 설계하였습니다",
    },
    {
        Btxt: "우레탄 줄",
        Stxt: "도르레에 연결되어 있는 줄을 늘어짐이 없는 우레탄 줄을 활용하여 압축의 편리성을 높였습니다",
    },
    {
        Btxt: "발판",
        Stxt: "팔힘으로 압축하는 것이 아니라, 몸무게를 활용해 압축함으로서 안전성을 높이려고 노력하였습니다",
    }
]

for (var i in texts) {
    var text = texts[i];
    document.getElementById("info_Box").innerHTML += `
    <div class="info hidden">
        <div class="info_image">
            확대사진
        </div>
        <div class="info_txt">
            <div id="info_Btxt">
                <strong>${text.Btxt}</strong>
            </div>
            <div id="info_Stxt">
                ${text.Stxt}
            </div>
        </div>
    </div>
    `;
}

var icon1 =  document.getElementById('icon1')
var icon2 =  document.getElementById('icon2')
var icon3 =  document.getElementById('icon3')

var Before = document.getElementsByClassName('Before')[0]
var info_Box = document.getElementById('info_Box')
var info1 = document.getElementsByClassName('info')[0]
var info2 = document.getElementsByClassName('info')[1]
var info3 = document.getElementsByClassName('info')[2]


function open1() {
    Before.classList.add('hidden')
    info_Box.classList.toggle('hidden')
    info1.classList.toggle('hidden')
}

function open2() {
    Before.classList.toggle('hidden')
    info_Box.classList.toggle('hidden')
    info2.classList.toggle('hidden')
}

function open3() {
    Before.classList.toggle('hidden')
    info_Box.classList.toggle('hidden')
    info3.classList.toggle('hidden')
}