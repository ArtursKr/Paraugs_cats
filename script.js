alert(1);
//console.log(1)
let zina = document.querySelector('.zina').value
let zinas = document.querySelector('.cataZina')
function sutitZinu()
{
    console.log('sutitZinu()darbojas')
    zinas.innerHTML = zinas.innerHTML+'<br>'+zina.value;

}
async function ieladetChatZinu()
{
    let datiNoServera = await fetch('chatazinas.txt');
    let dati = await datiNoServera.text;
    //console.log(dati);
    zinas.innerHTML = dati;
}