var course = document.getElementById("COURSE").textContent;
// console.log(course)
document.getElementById("COURSE").onmouseenter = function(){
    this.textContent = "ZU COURSES";
    this.style.backgroundColor = "rgb(202, 151, 22)";
}

document.getElementById('COURSE').onmouseleave = function(){
    this.style.backgroundColor = "";
    this.textContent = course;
}


var classe = document.getElementById("CLASS").textContent;
// console.log(course)
document.getElementById("CLASS").onmouseenter = function(){
    this.textContent = "ZU CLASSES";
    this.style.backgroundColor = "rgb(202, 151, 22)";
}

document.getElementById('CLASS').onmouseleave = function(){
    this.style.backgroundColor = "";
    this.textContent = classe;
}


var meet = document.getElementById("MEET").textContent;
// console.log(course)
document.getElementById("MEET").onmouseenter = function(){
    this.textContent = "ZU MEETING";
    this.style.backgroundColor = "rgb(202, 151, 22)";
}

document.getElementById('MEET').onmouseleave = function(){
    this.style.backgroundColor = "";
    this.textContent = meet;
}

var imgal = setInterval(func , 1000);
var i = 0 ;
function func(){
    i++;
    document.getElementById("im").setAttribute("src","photos/" + i.toString() + ".jpeg");
    if(i==5){
        i=0;
    }
}