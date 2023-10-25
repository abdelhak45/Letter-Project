let creat = document.getElementById('creat')
let delet = document.getElementById('delet')
let prent = document.getElementById('prent')
let lot = document.getElementById('lot')



//id of input in html

let inputConsome = document.getElementById('NameOfSetweb')
let inputUserName = document.getElementById('userName2')
let inputNumber = document.getElementById('number2')
let inputAdres = document.getElementById('yourAdriss')
let inputDate = document.getElementById('userdate')
let textarea = document.getElementById('textarea')


// id in html

let consome = document.getElementById('consome')
let con = document.getElementById('con')
let userName = document.getElementById('userName')
let number = document.getElementById('number')
let adres = document.getElementById('adres')
let date = document.getElementById('date')
let p = document.getElementById('p')



creat.onclick= ()=>{
    consome.innerHTML = inputConsome.value;
    userName.innerHTML = inputUserName.value;
    con.innerHTML = inputUserName.value;
    number.innerHTML = inputNumber.value;
    date.innerHTML = inputDate.value;
    adres.innerHTML = inputAdres.value;
    p.innerHTML = textarea.value
    prent.style.display= 'block';
    lot.style.display = 'block';
    local()
}
delet.onclick= ()=>{
    inputConsome.value = "";
    inputUserName.value = "";
    inputNumber.value = "";
    inputDate.value = "";
    inputAdres.value = "";
    textarea.value = "";
    location.reload()
}

function local(){

    localStorage.titel = inputConsome.value
    localStorage.name = inputUserName.value
    localStorage.number = inputNumber.value
    localStorage.adres = inputDate.value
    localStorage.date = inputAdres.value
    localStorage.paragraph = textarea.value

}
if (localStorage.paragraph  && localStorage.titel &&  localStorage.name && localStorage.number && localStorage.adres && localStorage.date) {
    consome.innerHTML = localStorage.titel
    userName.innerHTML = localStorage.name
    con.innerHTML = localStorage.name
    number.innerHTML = localStorage.number
    date.innerHTML = localStorage.adres
    adres.innerHTML = localStorage.date
    p.innerHTML = localStorage.paragraph

    prent.style.display= 'block';
    lot.style.display = 'block';


}else{
    localStorage.titel = inputConsome.value
    localStorage.name = inputUserName.value
    localStorage.name = con.value
    localStorage.number = inputNumber.value
    localStorage.adres = inputDate.value
    localStorage.date = inputAdres.value
    localStorage.paragraph = textarea.value
    prent.style.display= 'none';
    lot.style.display = 'none';
}


lot.onclick= ()=> {
    prent.style.display= 'none';
    lot.style.display = 'none'
    creat.style.display = "none"
    localStorage.clear()
}

textarea.onkeyup= () =>{
    if (textarea.value == "") {
        creat.style.display = "none"
    }else if (textarea.value !== "") {
        creat.style.display = "inline-block"
        
    }
}
