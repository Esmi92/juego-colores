

var hexadecimal = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]

function colorAle () {   
numRandom1=Math.floor(Math.random()*16)
numRandom2=Math.floor(Math.random()*16)
numRandom3=Math.floor(Math.random()*16)
numRandom4=Math.floor(Math.random()*16)
numRandom5=Math.floor(Math.random()*16)
numRandom6=Math.floor(Math.random()*16)
colorRandom='#'+hexadecimal[numRandom1]+hexadecimal[numRandom2]+hexadecimal[numRandom3]+hexadecimal[numRandom4]+hexadecimal[numRandom5]+hexadecimal[numRandom6]
console.log(colorRandom)

}

colorAle()
var fondo = document.getElementById('estilo')
fondo.style.backgroundColor=colorRandom

var h3=document.querySelector('h3')
h3.innerHTML=''

var button=document.querySelector('button')

button.addEventListener('click',function(){

var input=document.querySelector('input')

if(input.value==colorRandom){
h3.innerHTML='CORRECTO'
}else{
    h3.innerHTML='INCORRECTO'
}
})




