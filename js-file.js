const Gameboard = (function() {
    let name = prompt("Player Name?")
    let  nameplacement = document.getElementById("player-name")
    nameplacement.textContent = name
    
    let gamebutton = document.getElementById("restart")
    gamebutton.style.visibility = 'hidden'

    gamebutton.addEventListener('click', function (e) {
        gamebutton.style.visibility = 'hidden'
        slot1.textContent = ""
        slot2.textContent = ""
        slot3.textContent = ""
        slot4.textContent = ""
        slot5.textContent = ""
        slot6.textContent = ""
        slot7.textContent = ""
        slot8.textContent = ""
        slot9.textContent = ""
    })

    let board = new Array("","","","","","","","","")
    let compchoice = (function () {
        if (slot1.textContent == "") {
            board[0] = "O"
            slot1.textContent += board[0]
            cpdecision()
        } else if (slot2.textContent == ""){
            board[1] = "O"
            slot2.textContent += board[1]
            cpdecision()
        } else if (slot3.textContent == ""){
            board[2] = "O"
            slot3.textContent += board[2]
            cpdecision()
        } else if (slot4.textContent == ""){
            board[3] = "O"
            slot4.textContent += board[3]
            cpdecision()
        } else if (slot5.textContent == ""){
            board[4] = "O"
            slot5.textContent += board[4]
            cpdecision()
        } else if (slot6.textContent == ""){
            board[5] = "O"
            slot6.textContent += board[5]
            cpdecision()
        } else if (slot7.textContent == ""){
            board[6] = "O"
            slot7.textContent += board[6]
            cpdecision()
        } else if (slot8.textContent == ""){
            board[7] = "O"
            slot8.textContent += board[7]
            cpdecision()
        } else if (slot9.textContent == ""){
            board[8] = "O"
            slot9.textContent += board[8]
            cpdecision()
        } else {

        }
    })

    let gamedecision = (function() {
        if (slot1.textContent == "X" && slot4.textContent == "X" && slot7.textContent == "X") {
            alert("YOU WIN")
            gamebutton.style.visibility = 'visible'
        } else if (slot1.textContent == "X" && slot2.textContent == "X" && slot3.textContent == "X") {
            alert("YOU WIN")
            gamebutton.style.visibility = 'visible'
        } else if (slot3.textContent == "X" && slot6.textContent == "X" && slot9.textContent == "X") {
            alert("YOU WIN")
            gamebutton.style.visibility = 'visible'
        } else if (slot7.textContent == "X" && slot8.textContent == "X" && slot9.textContent == "X") {
            alert("YOU WIN")
            gamebutton.style.visibility = 'visible'
        } else if (slot2.textContent == "X" && slot5.textContent == "X" && slot8.textContent == "X") {
            alert("YOU WIN")
            gamebutton.style.visibility = 'visible'
        } else if (slot1.textContent == "X" && slot5.textContent == "X" && slot9.textContent == "X") {
            alert("YOU WIN")
            gamebutton.style.visibility = 'visible'
        } else if (slot3.textContent == "X" && slot5.textContent == "X" && slot7.textContent == "X") {
            alert("YOU WIN")
            gamebutton.style.visibility = 'visible'
        } else if (slot1.textContent != "" && slot2.textContent != "" && slot3.textContent != "" && slot4.textContent != "" && slot5.textContent != "" && slot6.textContent != "" && slot7.textContent != "" && slot8.textContent != "" && slot9.textContent != "") {
            alert("TIE")
        } else {
            compchoice()
        }
    })
    let cpdecision = (function() {
        if (slot1.textContent == "O" && slot4.textContent == "O" && slot7.textContent == "O") {
            alert("GAME OVER CP WINs")
            gamebutton.style.visibility = 'visible'
        } else if (slot1.textContent == "O" && slot2.textContent == "O" && slot3.textContent == "O") {
            alert("GAME OVER CP WINs")
            gamebutton.style.visibility = 'visible'
        } else if (slot3.textContent == "O" && slot6.textContent == "O" && slot9.textContent == "O") {
            alert("GAME OVER CP WINs")
            gamebutton.style.visibility = 'visible'
        } else if (slot7.textContent == "O" && slot8.textContent == "O" && slot9.textContent == "O") {
            alert("GAME OVER CP WINs")
            gamebutton.style.visibility = 'visible'
        } else if (slot2.textContent == "O" && slot5.textContent == "O" && slot8.textContent == "O") {
            alert("GAME OVER CP WINs")
            gamebutton.style.visibility = 'visible'
        } else if (slot1.textContent == "O" && slot5.textContent == "O" && slot9.textContent == "O") {
            alert("GAME OVER CP WINs")
            gamebutton.style.visibility = 'visible'
        } else if (slot3.textContent == "O" && slot5.textContent == "O" && slot7.textContent == "O") {
            alert("GAME OVER CP WINs")
            gamebutton.style.visibility = 'visible'
        } else {

        }
    })

    let slot1 = document.getElementById('s1')
    slot1.addEventListener('click', function (e) {
        if (slot1.textContent == "") {
            board[0] = "X"
            slot1.textContent += board[0]
            gamedecision()
        } else {

        }
    })

    let slot2 = document.getElementById('s2')
    slot2.addEventListener('click', function (e) {
        if (slot2.textContent == "") {
            board[1] = "X"
            slot2.textContent += board[1]
            gamedecision()
        } else {

        }
    })

    let slot3 = document.getElementById('s3')
    slot3.addEventListener('click', function (e) {
        if (slot3.textContent == "") {
            board[2] = "X"
            slot3.textContent += board[2]
            gamedecision()
        } else {

        }
    })

    let slot4 = document.getElementById('s4')
    slot4.addEventListener('click', function (e) {
        if (slot4.textContent == "") {
            board[3] = "X"
            slot4.textContent += board[3]
            gamedecision()
        } else {

        }
    })

    let slot5 = document.getElementById('s5')
    slot5.addEventListener('click', function (e) {
        if (slot5.textContent == "") {
            board[4] = "X"
            slot5.textContent += board[4]
            gamedecision()
        } else {

        }
    })

    let slot6 = document.getElementById('s6')
    slot6.addEventListener('click', function (e) {
        if (slot6.textContent == "") {
            board[5] = "X"
            slot6.textContent += board[5]
            gamedecision()
        } else {

        }
    })

    let slot7 = document.getElementById('s7')
    slot7.addEventListener('click', function (e) {
        if (slot7.textContent == "") {
            board[6] = "X"
            slot7.textContent += board[6]
            gamedecision()
        } else {
            
        }
    })

    let slot8 = document.getElementById('s8')
    slot8.addEventListener('click', function (e) {
        if (slot8.textContent == "") {
            board[7] = "X"
            slot8.textContent += board[7]
            gamedecision()
        } else {

        }
    })

    let slot9 = document.getElementById('s9')
    slot9.addEventListener('click', function (e) {
        if (slot9.textContent == "") {
            board[8] = "X"
            slot9.textContent += board[8]
            gamedecision()
        } else {

        }
    })
})();