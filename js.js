function funkcja1(element){
    var max = 20;
    if (element.value.length > max){
        element.value = element.value.substr(0, max);
    } 
}
function funkcja2(){
    document.body.style.backgroundColor = "#121212"
    document.body.style.color = "white"
}

function funkcja3(){
    document.body.style.backgroundColor = "#FFFFFF"
    document.body.style.color = "black"
}

function funkcja4(){
    alert("Zresetowano pomyślnie.")
}

function funkcja5(){
    if (document.getElementById('z1').value!='' && document.getElementById('z2').value!='' && document.getElementById("z3").value!=''){
        alert("Pomyślnie przesłano.")
        document.getElementById('z1').value=''
        document.getElementById('z2').value=''
        document.getElementById('z3').value=''
    } else {
        alert("Formularz uzupełniono błędnie.")
    }
}