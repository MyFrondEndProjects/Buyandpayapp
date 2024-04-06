let pcpes2018=document.querySelector("#pcpes2018");
let pcfrostpunk2=document.querySelector("#pcfrostpunk2");
let pcbannerlord=document.querySelector("#pcbannerlord");
let pcGta6=document.querySelector("#pcGta6");
let pccyberpunk=document.querySelector("#pccyberpunk");
let pcageofempires=document.querySelector("#pcageofempires");
let pcneedforspeedmostwanted=document.querySelector("#pcneedforspeedmostwanted");
let pceurotrucksimulator=document.querySelector("#pceurotrucksimulator");
let pcfifa=document.querySelector("#pcfifa");
let pcGrandTheftAutoSanAndreas=document.querySelector("#pcGrandTheftAutoSanAndreas");
let header=document.getElementsByTagName("header");
let info=document.querySelector(".info");
let shoppingb=document.querySelector(".shoppingb");
let container=document.querySelector(".container");
let games=document.querySelector(".games");
let faturaonay=document.querySelector(".fatura1");
let list=document.querySelector(".list");
let sayac=0;
info.textContent="";
let shoppinglist=[];
let urunfiyati=0;
faturaonay.remove();

const carddata=[
  {
    kartno:"1",
    sifre:"1"
  }
]

const pcpes2018buy=() =>
{
sayac=sayac+1;
info.textContent=sayac;

shoppinglist.push(pcpes2018);



}


pcpes2018.addEventListener("click",pcpes2018buy);




const pcfrostpunk2buy=() =>
{
sayac=sayac+1;
info.textContent=sayac;
shoppinglist.push(pcfrostpunk2);




}
pcfrostpunk2.addEventListener("click",pcfrostpunk2buy);







const pcbannerlordbuy=() =>
{
sayac=sayac+1;
info.textContent=sayac;
shoppinglist.push(pcbannerlord);




}
pcbannerlord.addEventListener("click",pcbannerlordbuy);







const pcGta6buy=() =>
{
sayac=sayac+1;
info.textContent=sayac;
shoppinglist.push(pcGta6);




}
pcGta6.addEventListener("click",pcGta6buy);




const pccyberpunkbuy=() =>
{
sayac=sayac+1;
info.textContent=sayac;
shoppinglist.push(pccyberpunk);




}
pccyberpunk.addEventListener("click",pccyberpunkbuy);



const pcageofempiresbuy=() =>
{
sayac=sayac+1;
info.textContent=sayac;
shoppinglist.push(pcageofempires);




}
pcageofempires.addEventListener("click",pcageofempiresbuy);




const pcneedforspeedmostwantedbuy=() =>
{
sayac=sayac+1;
info.textContent=sayac;
shoppinglist.push(pcneedforspeedmostwanted);




}
pcneedforspeedmostwanted.addEventListener("click",pcneedforspeedmostwantedbuy);




const pceurotrucksimulatorbuy=() =>
{
sayac=sayac+1;
info.textContent=sayac;
shoppinglist.push(pceurotrucksimulator);




}
pceurotrucksimulator.addEventListener("click",pceurotrucksimulatorbuy);




const pcfifabuy=() =>
{
sayac=sayac+1;
info.textContent=sayac;
shoppinglist.push(pcfifa);




}
pcfifa.addEventListener("click",pcfifabuy);




const pcGrandTheftAutoSanAndreasbuy=() =>
{
sayac=sayac+1;
info.textContent=sayac;
shoppinglist.push(pcGrandTheftAutoSanAndreas);




}
pcGrandTheftAutoSanAndreas.addEventListener("click",pcGrandTheftAutoSanAndreasbuy);





let toplamtutar=0;

function buy ()
{
 
    games.textContent="";
    const div=document.createElement("div");

    div.style.position="absolute";
    div.style.width="30em";
    div.style.height="37em";
    div.style.backgroundColor="white";
    div.style.left="35%";
    div.style.top="1%";
    div.style.borderRadius="0.5em";
    div.style.overflow="scroll";


    let tutar=document.createElement("a");
    tutar.style.position="absolute";
    tutar.style.bottom="5%";
    tutar.style.width="13em";
    tutar.style.height="3em";
    tutar.href="#";
    tutar.style.marginBottom="1em";
    tutar.style.right="44.2%";
    tutar.style.color="green";
    tutar.style.backgroundColor="white";
    tutar.style.borderRadius="0.2em";
    tutar.style.border="solid";
    tutar.textContent="1";
    tutar.style.textAlign="center";
    tutar.style.textDecoration="none";
    tutar.style.paddingTop="0.8em";
    tutar.style.fontSize="large";
    

    


    
    for(let x=0; x<shoppinglist.length; x++)
    {
    
  if(shoppinglist[x].id=="pcpes2018")
  {
    
   urunfiyati=300;
   toplamtutar=toplamtutar+urunfiyati
    let urun=document.createElement("div");
    urun.classList.add("urun");
    urun.style.width="100%";
    urun.style.marginLeft="1em";
    urun.style.height="10%";
   urun.style.marginTop="1em";
    let foto=document.createElement("img");
  
    foto.src="İmg/1500x500 (1).jpeg";
    foto.style.width="10em";
    foto.style.height="4.4em";
    urun.appendChild(foto);
    let bilgi=document.createElement("h2");
    bilgi.style.marginLeft="8em";
bilgi.style.marginTop="-2.1em";
bilgi.textContent="Fiyat:"+urunfiyati+" TL ";
    urun.appendChild(bilgi);
    div.appendChild(urun);
  }



  if(shoppinglist[x].id=="pcfrostpunk2")
  {

    urunfiyati=500;
    toplamtutar=toplamtutar+urunfiyati;
    let urun=document.createElement("div");
    urun.classList.add("urun");
    urun.style.width="100%";
    urun.style.marginLeft="1em";
    urun.style.marginTop="1em";
    urun.style.height="10%";
    let foto=document.createElement("img");
    foto.src="İmg/1500x500 (2).jpeg";
    foto.style.width="10em";
    foto.style.height="4.4em";
    urun.appendChild(foto);
    let bilgi=document.createElement("h2");
    bilgi.style.marginLeft="8em";
bilgi.style.marginTop="-3em";
bilgi.style.marginTop="-2.1em";
bilgi.textContent="Fiyat:"+urunfiyati+" TL ";
    urun.appendChild(bilgi);
    div.appendChild(urun);
  }
  if(shoppinglist[x].id=="pcbannerlord")
  {

    urunfiyati=600;
    toplamtutar=toplamtutar+urunfiyati;
    let urun=document.createElement("div");
    urun.style.marginTop="1em";
    urun.classList.add("urun");
    urun.style.width="100%";
    urun.style.marginLeft="1em";
    urun.style.marginLeft="1em";
    urun.style.height="10%";
    let foto=document.createElement("img");
    foto.src="İmg/1500x500.jpeg";
    foto.style.width="10em";
    foto.style.height="4.4em";
    urun.appendChild(foto);
    let bilgi=document.createElement("h2");
    bilgi.style.marginLeft="8em";
bilgi.style.marginTop="-3em";
bilgi.style.marginTop="-2.1em";
bilgi.textContent="Fiyat:"+urunfiyati+" TL ";
    urun.appendChild(bilgi);
    div.appendChild(urun);
  }

  if(shoppinglist[x].id=="pcGta6") //4
  {
    
   urunfiyati=900;
   toplamtutar=toplamtutar+urunfiyati;
    let urun=document.createElement("div");
    urun.style.marginTop="1em";
    urun.classList.add("urun");
    urun.style.marginLeft="1em";
    urun.style.width="100%";
    urun.style.height="10%";
    let foto=document.createElement("img");
    foto.src="İmg/1500x500 (1).jpeg";
    foto.style.width="10em";
    foto.style.height="4.4em";
    urun.appendChild(foto);
    let bilgi=document.createElement("h2");

    bilgi.style.marginLeft="8em";
bilgi.style.marginTop="-3em";
bilgi.style.marginTop="-2.1em";
bilgi.textContent="Fiyat:"+urunfiyati+" TL ";
    urun.appendChild(bilgi);

    div.appendChild(urun);
  }
  if(shoppinglist[x].id=="pccyberpunk")
  {
    
   urunfiyati=1000;
   toplamtutar=toplamtutar+urunfiyati;
    let urun=document.createElement("div"); //5
    urun.style.marginTop="1em";
    urun.classList.add("urun");
    urun.style.marginLeft="1em";
    urun.style.width="100%";
    urun.style.height="10%";
    let foto=document.createElement("img");
    foto.src="İmg/1500x500 (1).jpeg";
    foto.style.width="10em";
    foto.style.height="4.4em";
    urun.appendChild(foto);
    let bilgi=document.createElement("h2");
    bilgi.style.marginLeft="8em";
bilgi.style.marginTop="-3em";
bilgi.style.marginTop="-2.1em";
bilgi.textContent="Fiyat:"+urunfiyati+" TL ";
    urun.appendChild(bilgi);
 
    div.appendChild(urun);
  }
  if(shoppinglist[x].id=="pcageofempires")
  {
    
   urunfiyati=1200;
   toplamtutar=toplamtutar+urunfiyati;
    let urun=document.createElement("div"); //6
    urun.style.marginTop="1em";
    urun.classList.add("urun");
    urun.style.marginLeft="1em";
    urun.style.width="100%";
    urun.style.height="10%";
    let foto=document.createElement("img");
    foto.src="İmg/GJNymz3XcAAxbze.jpeg";
    foto.style.width="10em";
    foto.style.height="4.4em";
    urun.appendChild(foto);
    let bilgi=document.createElement("h2");
    bilgi.style.marginLeft="8em";
bilgi.style.marginTop="-3em";
bilgi.textContent="Fiyat:"+urunfiyati+" TL ";
    urun.appendChild(bilgi);

    div.appendChild(urun);
  }
  if(shoppinglist[x].id=="pccyberpunk")
  {
    
   urunfiyati=1000;
   toplamtutar=toplamtutar+urunfiyati;
    let urun=document.createElement("div"); //7
    urun.style.marginTop="1em";
    urun.classList.add("urun");
    urun.style.marginLeft="1em";
    urun.style.width="100%";
    urun.style.height="10%";
    let foto=document.createElement("img");
    foto.src="İmg/maxresdefault.jpg";
    foto.style.width="10em";
    foto.style.height="4.4em";
    urun.appendChild(foto);
    let bilgi=document.createElement("h2");
    bilgi.style.marginLeft="8em";
bilgi.style.marginTop="-3em";
bilgi.style.marginTop="-2.1em";
bilgi.textContent="Fiyat:"+urunfiyati+" TL ";
    urun.appendChild(bilgi);
 
    div.appendChild(urun);
  }
  if(shoppinglist[x].id=="pceurotrucksimulator")
  {
    
   urunfiyati=1000;
   toplamtutar=toplamtutar+urunfiyati;
    let urun=document.createElement("div"); //8
    urun.style.marginTop="1em";
    urun.classList.add("urun");
    urun.style.width="100%";
    urun.style.marginLeft="1em";
    urun.style.height="10%";
    let foto=document.createElement("img");
    foto.src="İmg/ss_e040f74641ac21f15e3ec7c2415fc8b4de0b6bf9.600x338.jpg";
    foto.style.width="10em";
    foto.style.height="4.4em";
    urun.appendChild(foto);
    let bilgi=document.createElement("h2");
    bilgi.style.marginLeft="8em";
bilgi.style.marginTop="-3em";
bilgi.style.marginTop="-2.1em";
bilgi.textContent="Fiyat:"+urunfiyati+" TL ";
    urun.appendChild(bilgi);
    div.appendChild(urun);
  }
  if(shoppinglist[x].id=="pcfifa")
  {
    
   urunfiyati=400;
   toplamtutar=toplamtutar+urunfiyati;
    let urun=document.createElement("div"); //9
    urun.style.marginTop="1em";
    urun.classList.add("urun");
    urun.style.width="100%";
    urun.style.marginLeft="1em";
    urun.style.height="10%";
    let foto=document.createElement("img");
    foto.src="İmg/-K8XvV0Z_400x400.jpg";
    foto.style.width="10em";
    foto.style.height="4.4em";
    urun.appendChild(foto);
    let bilgi=document.createElement("h2");
    bilgi.style.marginLeft="8em";
bilgi.style.marginTop="-3em";
bilgi.style.marginTop="-2.1em";
bilgi.textContent="Fiyat:"+urunfiyati+" TL ";
    urun.appendChild(bilgi);
 

    div.appendChild(urun);
  }
  if(shoppinglist[x].id=="pcGrandTheftAutoSanAndreas")
  {
    
   urunfiyati=600;
   toplamtutar=toplamtutar+urunfiyati;
    let urun=document.createElement("div"); //10
    urun.style.marginTop="1em";
    urun.classList.add("urun");
    urun.style.marginLeft="1em";
    urun.style.width="100%";
    urun.style.height="10%";
    let foto=document.createElement("img");
    foto.src="İmg/EGS_GrandTheftAutoSanAndreasTheDefinitiveEdition_RockstarGames_S1_2560x1440-3daa3396c39d5310e071d9093689fdde.jpeg";
    foto.style.width="10em";
    foto.style.height="4.4em";
    urun.appendChild(foto);
    let bilgi=document.createElement("h2");
    bilgi.style.marginLeft="8em";
    bilgi.style.marginTop="-2.1em";
bilgi.style.marginTop="-3em";
bilgi.textContent="Fiyat:"+urunfiyati+" TL ";
    urun.appendChild(bilgi);


    div.appendChild(urun);
  }
    }
    tutar.textContent="Toplam tutar : "+toplamtutar+" TL satın al";


    function pay()
    {

   
      
        games.textContent="";

let kredikart=document.createElement("img");
kredikart.src="İmg/kredi karti credit Card Icon, Card Icons, Credit Icons, Atm Icon PNG and Vector with Transparent Background for Free Download.jpg";
kredikart.style.width="40em";
kredikart.style.height="25em";
kredikart.style.position="absolute";
kredikart.style.top="15%";
kredikart.style.left="32%";


let isim=document.createElement("span");
isim.style.position="absolute";
isim.style.fontSize="large";
isim.textContent="isim soyisim";
isim.style.top="17%";
isim.style.color="white";
isim.style.left="35%";


let creditcardno=document.createElement("p");
creditcardno.style.position="absolute";
creditcardno.style.fontSize="2em";
creditcardno.style.top="43%";
creditcardno.style.left="35%";
creditcardno.style.color="white";
creditcardno.textContent="219410274092174";



        let kartno=document.createElement("h2");
        kartno.textContent="Kart numaranızı giriniz";
        kartno.style.position="absolute";
        kartno.style.bottom="22%";
        kartno.style.color="green";
        kartno.style.left="26.9%";
        kartno.style.backgroundColor="white";
        kartno.style.borderRadius="0.2em";

        let pass=document.createElement("h2");
        pass.textContent="Sifrenizi giriniz";
        pass.style.position="absolute";
        pass.style.bottom="15%";
        pass.style.color="green";
        pass.style.left="32%";
        pass.style.backgroundColor="white";
        pass.style.borderRadius="0.2em";

        let isimsoyisimm=document.createElement("h2");
        isimsoyisimm.textContent="İsim soy isim giriniz";
        isimsoyisimm.style.position="absolute";
        isimsoyisimm.style.bottom="7.4%";
        isimsoyisimm.style.color="green";
        isimsoyisimm.style.left="29.2%";
        isimsoyisimm.style.backgroundColor="white";
        isimsoyisimm.style.borderRadius="0.2em";

        let kartnumarasi=document.createElement("input");
        kartnumarasi.style.width="15em";
        kartnumarasi.style.height="2.2em";
        kartnumarasi.style.position="absolute";
        kartnumarasi.style.fontSize="large";
        kartnumarasi.style.bottom="21%";
        kartnumarasi.style.left="44%";
        kartnumarasi.style.borderRadius="0.2em";

        let sifre=document.createElement("input");
        sifre.style.width="15em";
       sifre.style.height="1.8em";
       sifre.type="password";
         sifre.style.position="absolute";
         sifre.style.fontSize="large";
         sifre.style.bottom="14%";
        sifre.style.left="44%";
        sifre.style.borderRadius="0.2em";
      

      let adsoyad=document.createElement("input");
      adsoyad.style.width="15em";
      adsoyad.style.height="1.9em";
       adsoyad.style.position="absolute";
       adsoyad.style.bottom="7%";
       adsoyad.style.fontSize="large"
       adsoyad.style.left="44%";
       adsoyad.style.borderRadius="0.2em";


       let kaydet=document.createElement("button");
       kaydet.style.position="absolute";
       kaydet.style.bottom="1%";
       kaydet.style.left="55.5%";
       kaydet.style.width="5em";
       kaydet.style.height="3em";

       kaydet.style.borderRadius="0.5em";
       kaydet.textContent="Kaydet";
       
       let information =document.createElement("h1");
       information.style.position="absolute";
       information.style.top="5%";
       information.style.left="39%";
       information.style.textContent="212421421421421";
       information.style.color="white";




       games.appendChild(information);
        games.appendChild(kartnumarasi);
        games.appendChild(kredikart);
        games.appendChild(sifre);
        games.appendChild(adsoyad);
        games.appendChild(kaydet);
        games.appendChild(kartno);
        games.appendChild(pass);
        games.appendChild(isimsoyisimm);
        games.appendChild(creditcardno);
        games.appendChild(isim);


        const cardinfo=() =>
        {
             for(let w=0; w<carddata.length; w++)
             {
              if(carddata[w].kartno==kartnumarasi.value && carddata[w].sifre==sifre.value)
              {
                let cardnosave=kartnumarasi.value;
                let passwordsave=sifre.value;
                isim.textContent=adsoyad.value;
                creditcardno.textContent=kartnumarasi.value;


                games.textContent="";

                let adressb=document.createElement("h1");
                adressb.style.position="absolute";
                adressb.style.color="white";
                adressb.style.top="11%";
                adressb.style.left="42.5%";
                adressb.textContent="Adresinizi giriniz";


                let adress=document.createElement("div");
                adress.style.width="30em";
                adress.style.height="15em";
                adress.style.backgroundColor="white";
                adress.style.borderRadius="0.2em";
              adress.style.position="absolute";
              adress.style.bottom="20em";
              adress.style.left="37.6em";
              adress.style.backgroundColor="#66CDAA";

                adressinput=document.createElement("input");
                adressinput.style.width="20em";
                adressinput.style.height="1.5em";
                adressinput.style.fontSize="1.5em";
                adressinput.style.borderRadius="0.2em";
                adressinput.style.position="absolute";
                adressinput.style.bottom="11em";
                adressinput.style.left="35%";

                adresssavebuton=document.createElement("button");
                adresssavebuton.style.width="20em";
                adresssavebuton.style.height="1.5em";
                adresssavebuton.style.fontSize="1.5em";
                adresssavebuton.style.borderRadius="0.2em";
                adresssavebuton.style.position="absolute";
                adresssavebuton.style.bottom="7.9em";
                adresssavebuton.style.left="35%";
                adresssavebuton.textContent="Adresi kaydet";
                adresssavebuton.style.backgroundColor="#66CDAA";
                adresssavebuton.style.color="black";
                



                const siparistamamla=() =>
                {
                  if(adressinput.value!="" && adressinput.value.length>5)
                  {
                    let adressave=document.createElement("h1");

                  adressave.textContent=adressinput.value;

                  adress.appendChild(adressave);
               
                  adresssavebuton.textContent="Siparişi tamamla";
                  adressinput.value="";
                  }


                  if(adresssavebuton.textContent=="Siparişi tamamla")
                  {

                    const faturayaz=() =>
                    {
                      games.textContent="";

                      games.appendChild(faturaonay)

                      let adressprint=document.querySelector(".adresonay");
                      adressprint.textContent=adress.textContent;
                  
                      list.style.flexwrap="wrap";
                      let adet=document.createElement("h1");
                    
                      adet.textContent=sayac+" adet oyun "+toplamtutar+" TL";
                      list.appendChild(adet);

             
                   
                    let siparisonay=document.querySelector(".siparisonay");


                    const siparischeck=() =>
                    {
                    games.textContent="";



                    let thankyou=document.createElement("div");
                    thankyou.style.position="absolute";
                    thankyou.style.fontSize="3em";
                    thankyou.style.paddingTop="1em";
                    thankyou.style.top="25%";
                    thankyou.style.left="25%";
                    thankyou.style.width="50%";
                    thankyou.style.height="50%";
                    thankyou.style.borderRadius="0.2em";
                    thankyou.style.textAlign="center";
                    thankyou.style.color="white";
                    thankyou.style.backgroundColor="#66CDAA";
                    thankyou.textContent="Siparişiniz tamamlanmıştır bizi tercih ettiğiniz için teşekkür ederiz";




                    games.appendChild(thankyou);



                      
                    }
                    siparisonay.addEventListener("click",siparischeck);
                    }
                    adresssavebuton.addEventListener("click",faturayaz);
                  }
                }




                adresssavebuton.addEventListener("click", siparistamamla);

                games.appendChild(adressb);
                games.appendChild(adress);
                games.appendChild(adressinput);
                games.appendChild(adresssavebuton);
              

             
              }
              else 
              {
                information.innerHTML="Kart numarası veya şifre yanlış";
              }
             }
        }
        kaydet.addEventListener("click",cardinfo)

       

    }

    tutar.addEventListener("click",pay);
    games.appendChild(div);
    games.appendChild(tutar);

    
}

shoppingb.addEventListener("click",buy);
