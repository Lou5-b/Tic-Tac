const Gameboard = (function() {
    let board = new Array("","","","","","","","","")

    let slot1 = document.getElementById('s1')
    slot1.addEventListener('click', function (e) {
        board[0] = "X"
        console.log("hi")
        slot1.innerHTML += board[0]
    })
    let slot2 = document.getElementById('s2')
    slot2.addEventListener('click', function (e) {
        board[1] = "X"
        console.log("hi")
        slot2.innerHTML += board[1]
    })
    let slot3 = document.getElementById('s3')
    slot3.innerHTML += board[2]
    let slot4 = document.getElementById('s4')
    slot4.innerHTML += board[3]
    let slot5 = document.getElementById('s5')
    slot5.innerHTML += board[4]
    let slot6 = document.getElementById('s6')
    slot6.innerHTML += board[5]
    let slot7 = document.getElementById('s7')
    slot7.innerHTML += board[6]
    let slot8 = document.getElementById('s8')
    slot8.innerHTML += board[7]
    let slot9 = document.getElementById('s9')
    slot9.innerHTML += board[8]
})();