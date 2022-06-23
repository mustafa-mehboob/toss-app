var head = "Head";
var tail = "Tail";
var zz;

var num = Math.random() * 1;
var finalNum = Math.ceil(num);

if (finalNum === 1) {
    zz = head;
} else {
    zz = tail;
}


function myfunction() {

    var player1 = document.querySelector("#player1").value;
    var player2 = document.querySelector("#player2").value;

    document.getElementById("p1").innerHTML = ("Player 1 is " + player1);
    document.getElementById("p2").innerHTML = ("Player 2 is " + player2);

    var numb = Math.random() * 2
    var numbf = Math.round(numb)
    var player9 = document.querySelector("#player1").value;
    var player0 = document.querySelector("#player2").value;
    var mm

    if (numbf === 1) {
        mm = player9
    } else {
        mm = player0
    }
    document.getElementById("p3").innerHTML = (mm + " Turn");

    // for hide button
    var hSlect = document.getElementById("slect1");

    if (hSlect.style.display == "none") {
        hSlect.style.display = "block";
    }

}


function function1() {
    var head = "Head";

    var tail = "Tail";

    var zz;

    var num = Math.random() * 2;
    var finalNum = Math.round(num);

    if (finalNum === 1) {
        zz = head;
    } else {
        zz = tail;
    }

    var player5 = document.querySelector("#player1").value;
    var player6 = document.querySelector("#player2").value;

    if (zz === "Head") {
        document.getElementById("winer").innerHTML = ( player5 + " WIN")

    } else {
        document.getElementById("winer").innerHTML = (player6 + " WIN")

    }

    var numb1 = Math.random() * 2
    var numbf1 = Math.round(numb1)
    var player91= document.querySelector("#player1").value;
    var player01 = document.querySelector("#player2").value;
    var mm1

    if (numbf1 === 1) {
        mm1= player91
    } else {
        mm1 = player01
    }
    document.getElementById("p3").innerHTML = (mm1 + " Turn");

}

function function2() {
    var head = "Head";
    var tail = "Tail";
    var zz;

    var num = Math.random() * 2;
    var finalNum = Math.round(num);

    if (finalNum === 1) {
        zz = head;
    } else {
        zz = tail;
    }

    var player7 = document.querySelector("#player1").value;
    var player8 = document.querySelector("#player2").value;

    if (zz === "Tail") {
        document.getElementById("winer").innerHTML = (player7 + " WIN")

    } else {
        document.getElementById("winer").innerHTML = (player8 + "  WIN")
    }

    var numb2 = Math.random() * 2
    var numbf2 = Math.round(numb2)
    var player92 = document.querySelector("#player1").value;
    var player02 = document.querySelector("#player2").value;
    var mm2

    if (numbf2 === 1) {
        mm2 = player92
    } else {
        mm2 = player02
    }
    document.getElementById("p3").innerHTML = (mm2 + " Turn");

}