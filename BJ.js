const numbers = [];
function hit(){
    var b = Math.floor(Math.random() * 10)+1;
    numbers.push(b);
    var x = document.createElement("IMG");
    if (b==1){x.setAttribute("src", "/cards/1S.png")};
    if (b==2){x.setAttribute("src", "/cards/2S.png")};
    if (b==3){x.setAttribute("src", "/cards/3S.png")};
    if (b==4){x.setAttribute("src", "/cards/4S.png")};
    if (b==5){x.setAttribute("src", "/cards/5S.png")};
    if (b==6){x.setAttribute("src", "/cards/6S.png")};
    if (b==7){x.setAttribute("src", "/cards/7S.png")};
    if (b==8){x.setAttribute("src", "/cards/8S.png")};
    if (b==9){x.setAttribute("src", "/cards/9S.png")};
    if (b==10){x.setAttribute("src", "/cards/10S.png")};
    document.body.appendChild(x);
    var c = numbers
    console.log(numbers);
    var xx = numbers.length;
    var count = 0
    for (var i = 0; i < xx; i++){
        var count = count + numbers[i]
    }
    document.getElementById("number").innerHTML = count

    if (count > 21){
        document.getElementById("text").innerHTML = "Дилер хожлоо!";
        // document.getElementById("start").style.display = "none";
        document.getElementById("hit").disabled = true;
    }
}
function start(){
    location.reload();
}