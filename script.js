alert(1);
//console.log(1)
let zina = document.querySelector('.zina').value
let zinas = document.querySelector('.cataZina')
function sutitZinu()
{
    console.log('sutitZinu()darbojas')
    zinas.innerHTML = zinas.innerHTML+'<br>'+zina.value;

}
function ieladetChatZinu()
{

}let datiNoServera= await fetch();