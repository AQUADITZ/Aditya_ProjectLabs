
let kerupuk = document.querySelector('.kerupuk');
const jmlkerupuk = document.querySelector('.jumlahBelikerupuk');


let ciki = document.querySelector('.ciki');
const jmlciki = document.querySelector('.jumlahBeliciki');


let es = document.querySelector('.es');
const jmles = document.querySelector('.jumlahBelies');


const hasil = document.querySelector('#total');


const proses = document.querySelector('input[type="button"]');
proses.addEventListener('click', function () {
    
    if (kerupuk.checked === false && ciki.checked === false && es.checked === false) {
        alert('Check makanan terlebih dahulu!');
    }


    let hargakerupuk = 120; 
    if (kerupuk.checked === true) {
        hargakerupuk *= jmlkerupuk.value;
        hasil.value = hargakerupuk;
    }


    let hargaciki = 500; 
    if (ciki.checked === true) {
        hargaciki *= jmlciki.value;
        hasil.value = hargaciki;
    }

  
    let hargaes = 3000; 
    if (es.checked === true) {
        hargaes *= jmles.value;
        hasil.value = hargaes;
    }

    
    if (kerupuk.checked === true && ciki.checked === true && es.checked === true) {
        hasil.value = hargakerupuk + hargaciki + hargaes;

      
    } else if (kerupuk.checked === true && ciki.checked === true) {
        hasil.value = hargakerupuk + hargaciki;

       
    } else if (kerupuk.checked === true && es.checked === true) {
        hasil.value = hargakerupuk + hargaes;

        
    } else if (ciki.checked === true && es.checked === true) {
        hasil.value = hargaciki + hargaes;
    }
});