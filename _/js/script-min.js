!function(){"use strict";var e=1,t=.3,o=17,n=12,l=2,r=1.5,i="rgba(130,210,255,0.8)",a=20,s=42,y=25,c=3e3,d="Right",p=document.querySelectorAll(".spinDot"),f=document.querySelectorAll(".spinner"),u=document.querySelectorAll(".spinnerContainer"),g="rotate("+y+"deg)",h=t/o,v=l+"px",m=n+"px";p[0].style.width=v,p[0].style.height=m,r+="px",p[0].style.borderRadius=r,p[0].style.backgroundColor=i,p[0].style.opacity=e,o-=1;var x=s+"px";f[0].style.width=x,f[0].style.height=x,u[0].style.width=x,u[0].style.height=x;for(var N=function(){var e=u[0].parentNode.offsetWidth,t=u[0].parentNode.offsetHeight,o=e/2-s/2,n=t/2-s/2,l=o+"px",r=n+"px";u[0].style.left=l,u[0].style.top=r}(N),b=function(){var e=s/2-l/2;e+="px",p[0].style.left=e}(b),q=0;q<o;q++)var w=function(){var e=f[0].cloneNode(!0);f[0].parentNode.appendChild(e);var o=-(a+a*q)+"deg";t-=h,e.style.transform="rotate("+o+")",e.style.opacity=t}();var A=function(){var e=c/1e3;console.log(e);var t='"'+e;t+="s rotate"+d+' infinite linear"',console.log(t),u[0].style.animation="rotate"+d,console.log(d),u[0].style.animation+=" "+e+"s",console.log(e),u[0].style.animation+=" linear infinite"}(A)}();