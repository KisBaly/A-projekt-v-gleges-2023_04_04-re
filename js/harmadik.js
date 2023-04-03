//Keszitok kiirasa a konzolra
//console.log("\r\n   __ ______________  ______________________________  \r\n  / //_/ __/ __/_  / /  _/_  __/ __/_  __/_  __/ __/  \r\n / ,< / _/_\\ \\  / /__/ /  / / / _/  / /   / / / _/    \r\n/_/|_/___/___/ /___/___/ /_/ /___/ /_/   /_/ /___/    \r\n                                                      \r\n");
//console.log("\r\n   ___         _    __                ___       ___      __ \r\n  / _ )__ __  (_)__/ /__  ___ ___    / _ )___ _/ (_)__  / /_\r\n / _  / // / / / _  / _ \\(_-</ _ \\  / _  / _ `/ / / _ \\/ __/\r\n/____/\\_,_/_/ /\\_,_/\\___/___/\\___/ /____/\\_,_/_/_/_//_/\\__/ \r\n         |___/                                              \r\n");
//console.log("\r\n   ________\r\n  / __/ __/\r\n / _/_\\ \\  \r\n/___/___/  \r\n           \r\n");
//console.log("\r\n   ______  _______  ___  ____  _____________  ____  ___ \r\n  / __/  |/  / __ \\/ _ \\/  _/ /_  __/  _/ _ )/ __ \\/ _ \\\r\n / _// /|_/ / /_/ / // // /    / / _/ // _  / /_/ / , _/\r\n/___/_/  /_/\\____/____/___/   /_/ /___/____/\\____/_/|_| \r\n                                                        \r\n");
//kartyaadatok
var kartyAdatok = [

    { id: 1, value: -3, sign: '' },
    { id: 2, value: 2, sign: '' },
    { id: 3, value: 5, sign: '' },
    { id: 4, value: 4, sign: '' },
    { id: 5, value: 3, sign: '' },
    { id: 6, value: 0, sign: 'pap' },
    { id: 7, value: -6, sign: '' },
    { id: 8, value: 6, sign: '' },
    { id: 9, value: 0, sign: 'taliga' },
    { id: 10, value: 2, sign: '' },
    { id: 11, value: 0, sign: 'hegy' },
    { id: 12, value: -5, sign: '' },
    { id: 13, value: 4, sign: '' },
    { id: 14, value: 0, sign: 'sarkany' },
    { id: 15, value: 5, sign: '' },
    { id: 16, value: 6, sign: '' },
    { id: 17, value: -4, sign: '' },
    { id: 18, value: 1, sign: '' },
    { id: 19, value: -1, sign: '' },
    { id: 20, value: -2, sign: '' },
    { id: 21, value: 0, sign: 'hegy' },
    { id: 22, value: 3, sign: '' },
    { id: 23, value: 1, sign: '' }

];
//varadatok
var varadatok =
    [
        { id: 1, color: 1, value: 1 },
        { id: 2, color: 1, value: 2 },
        { id: 3, color: 1, value: 3 },
        { id: 4, color: 1, value: 4 },
        { id: 5, color: 2, value: 1 },
        { id: 6, color: 2, value: 2 },
        { id: 7, color: 2, value: 3 },
        { id: 8, color: 2, value: 4 },
        { id: 9, color: 3, value: 1 },
        { id: 10, color: 3, value: 2 },
        { id: 11, color: 3, value: 3 },
        { id: 12, color: 3, value: 4 },
        { id: 13, color: 4, value: 1 },
        { id: 14, color: 4, value: 2 },
        { id: 15, color: 4, value: 3 },
        { id: 16, color: 4, value: 4 }


    ];
// hasznalt valtozok
var tabla = document.createElement("div");
var kartyaBox = document.createElement("div");
var leftside = document.createElement("div")
var pontBox = document.createElement("div");
var korBox = document.createElement("div");
var cellak = [];
var korszamhely = document.getElementById("korszam");
var kepKivalasztva=false;
var kepElhelyezve =true;
var kepIndex;
var jatekter = document.getElementById("jatekter");
var aktossz = 0;
var osszegek = [];
var lepesek = 0;
var vartemp = 0;
var kepszam = 0;
var korszamol=1;
var indexemajatekvegehez = 0;
korszamhely.innerHTML=korszamol+". kör";
var maindiv = document.createElement("div");
korBox.appendChild(maindiv);
var akt_kor;

//elhelyezes, osszekotes
function JatekterBetoltese() {

    leftside.appendChild(kartyaBox);
    leftside.appendChild(pontBox);
    jatekter.appendChild(leftside);
    jatekter.appendChild(tabla);
    jatekter.appendChild(korBox);
}
//divek id-val ellatasa
function JatekterElrendezese() {
    kartyaBox.id = "kartyabox";
    korBox.id = "korbox";
    leftside.id = "leftside";
    tabla.id = "tabla";
    pontBox.id = "pontbox";
}

//Tablakigeneralas es kepbberakas
function Tablageneralasa() {
    var k = 0;
    var pothely = document.getElementById("potHely");
    for (var i = 0; i < 5; i++) {
        var sordiv = document.createElement("div");
        sordiv.classList += " sordiv";
        for (var j = 0; j < 6; j++) {
            var oszlopdiv = document.createElement("div");
            //oszlopdiv.innerHTML=5*i+j+"x";
            oszlopdiv.classList += " oszlopdiv";
            oszlopdiv.id = k;
            k++;
            oszlopdiv.addEventListener("click",function(){
                if(kepKivalasztva && !kepElhelyezve)
                {
                    kepElhelyezve=true;
                    kepKivalasztva=false;
                    var kep1 = document.createElement("img");
                    kep1.src="../babuk/"+kepszam+".png";
                    kep1.style.height="100%";
                    kep1.style.width="100%";
                    this.appendChild(kep1);
                    lepesek++;
                    korszamolas();
                    this.setAttribute("onclick", "");
                    console.log(lepesek);
                    
                }
            })
            //oszlopdiv.setAttribute("onclick","Kepkivalasztas(this)")
            oszlopdiv.setAttribute("onclick","cellaRanyomsz(this)");
            //console.log(lepesek);
            sordiv.appendChild(oszlopdiv);
        }
        tabla.appendChild(sordiv);
    }
    kartyaBox.setAttribute("onclick","kartyaBoxRanyom(this)");
}

//Kartyaberakashoz tartozo ellenorzo funk.
var ranyom;
function kartyaBoxRanyom(){
    ranyom = true;
    korszamolas();
    console.log(lepesek);
}

//Cellaranyomhoz tartozo valtozok
var temp = 0;
var tombhely =0;
var szamok = Array(30);
//Ranyomas a cellara es beteves a helyere
function cellaRanyomsz(div) {
    if (ranyom && temp < 24) {
        console.log(div);
        lepesek++;
        var velkartyaszam = Math.floor(Math.random() * 23 + 1);
        while (szamok.includes(velkartyaszam)) {
            velkartyaszam = Math.floor(Math.random() * 23 + 1);
        }
        szamok.push(velkartyaszam);
        var img = document.createElement("img");
        img.src = "../kartya/" + velkartyaszam + ".png";
        img.style.height = "20px";
        img.style.width = "20px";
        img.value = velkartyaszam;
        div.appendChild(img);
        console.log(img)
        var img2 = document.createElement("img");
        korBox.innerHTML = "";
        img2.src = "../kartya/" + velkartyaszam + ".png";
        img.style.height = "100%";
        img.style.width = "100%";
        img2.style.height = "100px";
        img2.style.width = "100px";
        //---------------------------------------
        var divo1 = document.createElement("div");
        divo1.id="divo1";
        divo1.style.border = "1px solid black";
        divo1.style.alignItems = "center";
        var divo = document.createElement("div");
        divo.style.border = "1px solid black";
        divo.style.alignItems = "center";
        var h1 = document.createElement("h1");
        h1.style.color = "white";
        h1.innerHTML = "A jelenlegi kör:";
        h1.style.textAlign = "center";
        var pjel = document.createElement("p");
        pjel.style.color = "white";
        pjel.innerHTML = "Legutoljára lerakott kártya:";
        korBox.appendChild(divo);
        divo.appendChild(h1);
        divo.appendChild(divo1);
        divo1.appendChild(pjel);
        divo1.appendChild(img2);
        div.setAttribute("onclick", "");
        temp++;
        console.log(szamok);
    }
    ranyom = false;

}

//Varak kigeneralasa
function VarGen()
{
    //egy sztin 4 egyes szintu 3 kettesszintu harmas szint 2 negyes szintu 1
    for(var i=0;i<10;i++)
    {
        var hely = document.getElementById("potHely");
        var kep1 = document.createElement("img");
        if(i <4)
        {
        kep1.src = "../babuk/"+"5"+".png";
        kep1.className="kep1";
        kep1.style.height="100px";
        kep1.style.width="100px";
        kep1.value = 5;
        }
        else if(i<7)
        {
        kep1.src = "../babuk/"+"6"+".png";
        kep1.className="kep1";
        kep1.style.height="100px";
        kep1.style.width="100px";
        kep1.value = 6;
        }
        else if(i < 9)
        {
        kep1.src = "../babuk/"+"7"+".png";
        kep1.className="kep1";
        kep1.style.height="100px";
        kep1.style.width="100px";
        kep1.value = 7;
        }
        else if(i = 10)
        {
        kep1.src = "../babuk/"+"8"+".png";
        kep1.className="kep1";
        kep1.style.height="100px";
        kep1.style.width="100px";
        kep1.value = 8;
        }
        
        kep1.addEventListener("click",function(){
        if(!kepKivalasztva && kepElhelyezve)
        {
            //kepIndex = varszamok[vartemp];
            kepKivalasztva = true;
            this.style.visibility="hidden";
            kepElhelyezve = false;
            kepszam = this.value;
            indexemajatekvegehez++;
        }
        })
        hely.appendChild(kep1);
    }
}


//fejlecet kigeneralo funkcio
function FejlecGen()
{
    var fejlec = document.getElementById("nev");
    fejlec.style.alignItems="center";
    var p =document.createElement("p");
    p.style.textAlign ="center";
    var kep =document.createElement("img");
    kep.src="../hatterek/kiralysagoklogo.png"
    kep.className="kiralysag";
    fejlec.appendChild(p);
    p.appendChild(kep);
}

//penz begeneralas,penz leosztas
var ertek;
function penz() {
    ertek = 1081;
    while(ertek !=0)
    {
        if(ertek - 100 >= 0)
        {
            var img = document.createElement('img'); 
            img.src = "../Penzek/100.png";
            img.style.paddingTop = "20px";
            img.style.height = "50px";
            img.style.width = "50px";
            pontBox.appendChild(img);
            ertek -=100;
        }
        else if(ertek - 50 >= 0 && ertek - 100 < 0)
        {
            var img = document.createElement('img'); 
            img.src = "../Penzek/50.png";
            img.style.paddingTop = "20px";
            img.style.height = "50px";
            img.style.width = "50px";
            pontBox.appendChild(img);
            ertek -=50; 
        }
        else if (ertek - 10 >= 0 && ertek - 50 < 0)
        {
            var img = document.createElement('img'); 
            img.src = "../Penzek/10.png";
            img.style.paddingTop = "20px";
            img.style.height = "50px";
            img.style.width = "50px";
            pontBox.appendChild(img);
            ertek -=10;
        }
        else if(ertek - 5 >= 0 && ertek - 10 < 0)
        {
            var img = document.createElement('img'); 
            img.src = "../Penzek/5.png";
            img.style.paddingTop = "20px";
            img.style.height = "50px";
            img.style.width = "50px";
            pontBox.appendChild(img);
            ertek -=5;
        }
        else if(ertek - 1 >= 0 && ertek - 5 < 0)
        {
            var img = document.createElement('img'); 
            img.src = "../Penzek/1.png";
            img.style.paddingTop = "20px";
            img.style.height = "50px";
            img.style.width = "50px";
            pontBox.appendChild(img);
            ertek -=1;
        }
    }
}

function korszamolas()
{
    //console.log("lepesek aktuális száma:",lepesek);
    if(lepesek == 30){
        lepesek = 1;
        akt_kor++;
        korszamol++;
        var korszamhely = document.getElementById("korszam");
        korszamhely.innerHTML=korszamol+" kör";
        console.log(akt_kor,"ADAWDAWDAWDAWDAWDAD");
        var jatekter = document.getElementById("tabla");
        jatekter.innerHTML="";
        Tablageneralasa();
        var vara = document.getElementById("potHely");
        vara.innerHTML="";
        VarGen();
        cellak = [];
        kepKivalasztva=false;
        kepElhelyezve =true;
        kepIndex;
        aktossz = 0;
        osszegek = [];
        lepesek = 0;
        vartemp = 0;
        kepszam = 0;
        indexemajatekvegehez = 0;
        temp = 0;
        tombhely =0;
        szamok = [];
        var divo1 = document.getElementById("divo1");
        divo1.innerHTML ="";
        korszamhely.innerHTML=korszamol+". kör";
        Sorokosszege();
    }
    if(korszamol >3)
        {
            Eredmenygen();
        }
}
function Eredmenygen()
{
            document.body.innerHTML="";
            var p = document.createElement("p");
            p.innerHTML =ertek;
            var div1 = document.createElement("div");
            var h1 = document.createElement("h1");
            h1.innerHTML="Játék vége";
            div1.style.border="5px solid red";
            div1.appendChild(h1);
            div1.appendChild(p);    
}



function Sorokosszege() 
{
    var osszeguks = new Array();
    for (let z = 0; z < 5; z++) 
    {
        var osszegs = 0;
        for (let y = 0; y < 6; y++) 
        {
            osszegs += cellak[z*6+y].info.value;
        }   
        console.log(osszegs);
        osszeguks.push(osszegs);
    }

    var hely = document.getElementById("sorosszeg");
    for(let i = 0; i < 5; i++)
    {
        var p = document.createElement("p");
        p.innerHTML=osszeguks[i];
        hely.appendChild(p);
    }
   
    console.log(osszeguks);
}
function Oszlopsszeg()
{
    var osszeguko = new Array();
  for(let k = 0; k < 5; k++)
  {
    var osszego = 0;
    for(let p = 0; p < 6; p+6)
    {
        osszego += cellak[k*5+p].info.value;
    }
    osszeguko.push(osszego);
    console.log(osszego);
  }
}
//A fugveny amiben lefut
function Main() {
    

    FejlecGen();
    JatekterBetoltese();
    JatekterElrendezese();
    Tablageneralasa();
    VarGen();
    penz();
}
Main();
