function changingTag() {
    var paragraph = document.getElementsByTagName("p");
    for (var i = 0; i < paragraph.length; i++) {
        paragraph[i].innerHTML = "We're changing!!";
    }
}

function changingNames() {
    var p = document.getElementsByName("paragraphs");
    for (var j = 0; j < p.length; j++) {
        p[j].innerHTML = "We're transforming us!!";
    }
}

function changingId() {
    var unique = document.getElementById("unique-paragraph");
    unique.innerHTML = "I'm changing!!";
}

function changingName() {
    var paragraphName = document.getElementsByName("paragraph2");
    for (var k = 0; k < paragraphName.length; k++) {
        paragraphName[k].innerHTML = "I'm transforming me!!";
    }
}

function reset() {
    var cleanParagraph = document.getElementsByTagName("p");
    for (var l = 0; l < cleanParagraph.length; l++) {
        cleanParagraph[l].innerHTML = "";
    }
}


var dad = document.getElementById("father");
var father = document.getElementById("one");
var par = document.createElement("div");
par.innerHTML = "hello";
var uni = document.getElementById("father").getElementsByTagName("p")[0];
console.log(uni);
var unique = document.getElementById("unique-paragraph");
var daddy = unique.parentNode;
console.log(daddy);
console.log(unique);

//dad.insertBefore(par, unique);
//father.appendChild(par);
//dad.insertBefore(par, uni);
//dad.removeChild(uni);
//dad.replaceChild(par, uni);
//daddy.insertBefore(par, unique);
//daddy.replaceChild(par, unique);
//daddy.removeChild(unique);
//unique.parentNode.removeChild(unique);