const gtasatinal=document.querySelector(".gtasatinal");
const info=document.querySelector(".info");
const Header=document.querySelector(".Header");
info.remove();
let sayac=0;
function Gtaal()
{
Header.appendChild(info);
sayac=sayac+1
info.textContent=sayac;
}
let a=1;
gtasatinal.addEventListener("click",Gtaal)
