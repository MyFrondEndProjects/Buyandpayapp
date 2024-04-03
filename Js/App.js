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
let info=document.querySelector(".info");
let shoppingb=document.querySelector(".shoppingb");
let games=document.querySelector(".games");
let sayac=0;
info.textContent="";
let shoppinglist=[];
let urunfiyati=0;



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







function buy ()
{
    games.textContent="";
    const div=document.createElement("div");

    div.style.position="absolute";
    div.style.width="30em";
    div.style.height="44em";
    div.style.backgroundColor="white";
    div.style.left="35%";
    div.style.top="1%";
    div.style.borderRadius="0.5em";
    div.style.overflow="scroll";


    
    for(let x=0; x<shoppinglist.length; x++)
    {
    
  if(shoppinglist[x].id=="pcpes2018")
  {
    
   urunfiyati=300;
    let urun=document.createElement("div");
    urun.classList.add("urun");
    urun.style.width="100%";
    urun.style.height="10%";
    let foto=document.createElement("img");
    foto.src="İmg/1500x500 (1).jpeg";
    foto.style.width="10em";
    foto.style.height="4.4em";
    urun.appendChild(foto);

    div.appendChild(urun);
  }



  if(shoppinglist[x].id=="pcfrostpunk2")
  {

    urunfiyati=500;
    let urun=document.createElement("div");
    urun.classList.add("urun");
    urun.style.width="100%";

    urun.style.height="10%";
    let foto=document.createElement("img");
    foto.src="İmg/1500x500 (2).jpeg";
    foto.style.width="10em";
    foto.style.height="4.4em";
    urun.appendChild(foto);

    div.appendChild(urun);
  }
  if(shoppinglist[x].id=="pcbannerlord")
  {

    urunfiyati=600;
    let urun=document.createElement("div");
    urun.classList.add("urun");
    urun.style.width="100%";

    urun.style.height="10%";
    let foto=document.createElement("img");
    foto.src="İmg/1500x500.jpeg";
    foto.style.width="10em";
    foto.style.height="4.4em";
    urun.appendChild(foto);

    div.appendChild(urun);
  }

  if(shoppinglist[x].id=="pcGta6") //4
  {
    
   urunfiyati=900;
    let urun=document.createElement("div");
    urun.classList.add("urun");
    urun.style.width="100%";
    urun.style.height="10%";
    let foto=document.createElement("img");
    foto.src="İmg/1500x500 (1).jpeg";
    foto.style.width="10em";
    foto.style.height="4.4em";
    urun.appendChild(foto);
    let bilgi=document.createElement("p");


    div.appendChild(urun);
  }
  if(shoppinglist[x].id=="pccyberpunk")
  {
    
   urunfiyati=1000;
    let urun=document.createElement("div"); //5
    urun.classList.add("urun");
    urun.style.width="100%";
    urun.style.height="10%";
    let foto=document.createElement("img");
    foto.src="İmg/1500x500 (1).jpeg";
    foto.style.width="10em";
    foto.style.height="4.4em";
    urun.appendChild(foto);

 
    div.appendChild(urun);
  }
  if(shoppinglist[x].id=="pcageofempires")
  {
    
   urunfiyati=1200;
    let urun=document.createElement("div"); //6
    urun.classList.add("urun");
    urun.style.width="100%";
    urun.style.height="10%";
    let foto=document.createElement("img");
    foto.src="İmg/GJNymz3XcAAxbze.jpeg";
    foto.style.width="10em";
    foto.style.height="4.4em";
    urun.appendChild(foto);


    div.appendChild(urun);
  }
  if(shoppinglist[x].id=="pccyberpunk")
  {
    
   urunfiyati=1000;
    let urun=document.createElement("div"); //7
    urun.classList.add("urun");
    urun.style.width="100%";
    urun.style.height="10%";
    let foto=document.createElement("img");
    foto.src="İmg/maxresdefault.jpg";
    foto.style.width="10em";
    foto.style.height="4.4em";
    urun.appendChild(foto);

 
    div.appendChild(urun);
  }
  if(shoppinglist[x].id=="pceurotrucksimulator")
  {
    
   urunfiyati=1000;
    let urun=document.createElement("div"); //8
    urun.classList.add("urun");
    urun.style.width="100%";
    urun.style.height="10%";
    let foto=document.createElement("img");
    foto.src="İmg/ss_e040f74641ac21f15e3ec7c2415fc8b4de0b6bf9.600x338.jpg";
    foto.style.width="10em";
    foto.style.height="4.4em";
    urun.appendChild(foto);

    div.appendChild(urun);
  }
  if(shoppinglist[x].id=="pcfifa")
  {
    
   urunfiyati=400;
    let urun=document.createElement("div"); //9
    urun.classList.add("urun");
    urun.style.width="100%";
    urun.style.height="10%";
    let foto=document.createElement("img");
    foto.src="İmg/-K8XvV0Z_400x400.jpg";
    foto.style.width="10em";
    foto.style.height="4.4em";
    urun.appendChild(foto);
  
 

    div.appendChild(urun);
  }
  if(shoppinglist[x].id=="pcGrandTheftAutoSanAndreas")
  {
    
   urunfiyati=600;
    let urun=document.createElement("div"); //10
    urun.classList.add("urun");
    urun.style.width="100%";
    urun.style.height="10%";
    let foto=document.createElement("img");
    foto.src="İmg/EGS_GrandTheftAutoSanAndreasTheDefinitiveEdition_RockstarGames_S1_2560x1440-3daa3396c39d5310e071d9093689fdde.jpeg";
    foto.style.width="10em";
    foto.style.height="4.4em";
    urun.appendChild(foto);



    div.appendChild(urun);
  }
    }
    games.appendChild(div);


    
}

shoppingb.addEventListener("click",buy);