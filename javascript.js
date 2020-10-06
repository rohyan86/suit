let gantiKiri = Math.floor(Math.random()*3);
let gantiKanan= Math.floor(Math.random()*3);
let pathImageP1 = "";
let pathImageP2 = "";

pathImageP1 = ["images/kertas-kiri.png","images/gunting-kiri.png","images/batu-kiri.png"];
pathImageP2 = ["images/kertas-kanan.png","images/gunting-kanan.png","images/batu-kanan.png"]


//script ganti Player Kiri

document.querySelector("#player1").setAttribute("src",pathImageP1[gantiKiri]);


// script ganti Player Kanan

document.querySelector("#player2").setAttribute("src",pathImageP2[gantiKanan]);


//script untuk seri

if (gantiKiri==gantiKanan) {
    document.querySelector("#pesan_p1").innerHTML="Seri neh Bro !";
    document.querySelector("#pesan_p2").innerHTML="Seri neh Bro !";
    document.querySelector("#pesan_p1").classList.add("seri");
    document.querySelector("#pesan_p2").classList.add("seri");
}

//script untuk Player 1 menang

if ((gantiKiri==0 && gantiKanan==2) || (gantiKiri==1 && gantiKanan==0) || (gantiKiri==2 && gantiKanan==1) ) {
    document.querySelector("#pesan_p1").innerHTML="Kamu Menang !";
    document.querySelector("#pesan_p2").innerHTML="Yaahh...kalah";
    document.querySelector("#pesan_p1").classList.add("menang");
    document.querySelector("#pesan_p2").classList.add("kalah");

}

//script untuk Player 2 menang

if ((gantiKanan==0 && gantiKiri==2) || (gantiKanan==1 && gantiKiri==0) || (gantiKanan==2 && gantiKiri==1) ) {
    document.querySelector("#pesan_p1").innerHTML="Yaahh...kalah";
    document.querySelector("#pesan_p2").innerHTML="Kamu Menang !";
    document.querySelector("#pesan_p1").classList.add("kalah");
    document.querySelector("#pesan_p2").classList.add("menang");

}

