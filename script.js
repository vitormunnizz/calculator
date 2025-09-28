let titulo = document.getElementById("title").innerHTML;
document.getElementById("title").innerHTML = titulo.toUpperCase();

function clean(){
    document.getElementById("result").innerHTML = ""
}

function insert(value){
    document.getElementById('result').innerHTML += value 
}

function calculate(){
    try{
        document.getElementById('result').innerHTML = eval(document.getElementById('result').innerHTML)
    } catch{
        document.getElementById('result').innerHTML = "ERROR"
    }
}