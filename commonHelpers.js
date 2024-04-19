import{a as C,S as v,i as d}from"./assets/vendor-da186403.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function p(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=p(e);fetch(e.href,o)}})();async function h(r,t){return await C({url:"https://pixabay.com/api/",params:{key:"16991331-df0a6792d36af314f174a3b15",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})}function f(r){return r.hits.map(({webformatURL:p,largeImageURL:n,tags:e,likes:o,views:l,comments:b,downloads:w})=>`
        <li class="card">
            <div class="place-for-image">
                <a href="${n}">
                    <img src="${p}" alt="${e}" class="picture"/>
                </a>
            </div>
            <div class="info-text">
                <div class="description">
                    <span class="bold-text">Likes</span>
                    <span class="info-value">${o}</span>
                </div>
                <div class="description">
                    <span class="bold-text">Views</span>
                    <span class="info-value">${l}</span>
                </div>
                <div class="description">
                    <span class="bold-text">Comments</span>
                    <span class="info-value">${b}</span>
                </div>
                <div class="description">
                    <span class="bold-text">Downloads</span>
                    <span class="info-value">${w}</span>
                </div>
            </div>
        </li>`).join("")}const L=document.querySelector(".form-search"),s=document.querySelector(".loader");s.style.borderColor="white";s.style.borderBottomColor="transparent";const c=document.querySelector(".images-place"),i=document.querySelector(".buttonMore"),m=new v(".card .place-for-image a",{captionsData:"alt",captionDelay:250});L.addEventListener("submit",S);i.addEventListener("click",O);let a=1,y,u;async function S(r){r.preventDefault(),i.hidden=!0,c.innerHTML="",s.style.borderColor="black",s.style.borderBottomColor="transparent",u=r.currentTarget.elements.inputSearch.value,a=1;try{const t=await h(u,a);if(t.total===0){d.show({title:"Ops.",titleColor:"white",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",color:"red",position:"topCenter",timeout:5e3});return}else c.insertAdjacentHTML("beforeend",f(t.data)),c.children.length&&(i.hidden=!1),m.refresh(),r.target.reset(),a=a+1,y=Math.floor(t.data.totalHits/15),g()}catch(t){d.show({title:"Ops.",titleColor:"white",message:t,messageColor:"white",color:"red",position:"topCenter",timeout:5e3})}finally{s.style.borderColor="white",s.style.borderBottomColor="transparent"}}async function O(r){i.hidden=!0,s.style.borderColor="black",s.style.borderBottomColor="transparent";try{const t=await h(u,a);if(t.total===0){d.show({title:"Ops.",titleColor:"white",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",color:"red",position:"topCenter",timeout:5e3});return}else c.insertAdjacentHTML("beforeend",f(t.data)),c.children.length&&(i.hidden=!1),m.refresh(),a=a+1,g()}catch(t){d.show({title:"Ops.",titleColor:"white",message:t,messageColor:"white",color:"red",position:"topCenter",timeout:5e3})}}function g(){a>=y&&(d.show({titleColor:"white",message:"We're sorry, but you've reached the end of search results.!",messageColor:"white",color:"blue",position:"topCenter",timeout:5e3}),i.hidden=!0)}
//# sourceMappingURL=commonHelpers.js.map
