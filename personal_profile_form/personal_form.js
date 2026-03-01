let yil = new Date().getFullYear();
let ay = new Date().getMonth(); //* ayı 0 dan başlatır
let gun = new Date().getDate(); //*get date ayın gününü verir get day 0(pazar) , 1(pzt) şeklinde verir

const dogum_yili = 2009;
const dogum_ayi = 2;  //*ay 0 dan başladığı için mart=2
const dogum_gunu = 24;

let yas = yil - dogum_yili;

if (ay > dogum_ayi) { //*doğum ayı geçmişse
    yas = yil - dogum_yili;
}
else { //*doğum ayı geçmemişse
    
    if (ay == dogum_ayi) { //*doğduğu aydaysak
       
        if (gun < dogum_gunu) { //*doğum günü daha gelmemişse 1 eksilt
            yas--;  
        }
        
        else { //*doğum günü geçmişse aynı kalsın
            yas = yil - dogum_yili;
        }
    }
}

//*html de input içine yaşı yazdır
let yas_input = document.querySelector("#yas");
yas_input.value = yas;