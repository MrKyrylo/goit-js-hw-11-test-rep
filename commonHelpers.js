import{a as b,i as m,S as L}from"./assets/vendor-b42c18af.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();async function y(s,e){const n="43280076-efaf032a147c4a401dc5ab87e",i="https://pixabay.com/api/";return(await b.get(i,{params:{key:n,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}})).data}function g(s){return s.hits.map(e=>`<div class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
                <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
            </a>
            <div class="gallery-item-info">
                <p class="gallery-item-info-par">
                    <span class="gallery-item-info-span">Likes: <span>${e.likes}</span>
                    </span>
                </p>
                <p class="gallery-item-info-par">
                    <span class="gallery-item-info-span">Views: <span>${e.views}</span>
                    </span>
                </p>
                <p class="gallery-item-info-par">
                    <span class="gallery-item-info-span">Comments: <span>${e.comments}</span>
                    </span>
                </p>
                <p class="gallery-item-info-par">
                    <span class="gallery-item-info-span">Downloads: <span>${e.downloads}</span>
                    </span>
                </p>
            </div>
        </div>`).join("")}function h(){m.info({timeout:3e3,position:"topRight",message:"We're sorry, but you've reached the end of search results."})}function v(){m.info({timeout:3e3,position:"topRight",message:"The search query can not be epty!"})}function w(){m.error({timeout:3e3,position:"topRight",message:"There are no images matching your search query. Please, enter something else!"})}const p=new L(".gallery a",{nav:!0,captions:!0,captionsData:"alt",captionDelay:150}),c=document.querySelector(".search-form"),a=document.querySelector(".gallery"),f=document.querySelector(".loader"),o=document.querySelector(".load-btn");let l="",d;c.addEventListener("submit",M);o.addEventListener("click",q);async function M(s){if(d=1,s.preventDefault(),a.innerHTML="",l=c.elements.searchWord.value.trim(),o.style.display="block",l===""){v(),a.innerHTML="",o.style.display="none",c.reset();return}f.style.display="block";try{const e=await y(l,d),n=g(e);if(e.hits.length===0){w(),o.style.display="none",f.style.display="none";return}a.insertAdjacentHTML("beforeend",n),p.refresh(),f.style.display="none",e.hits.length<15&&(o.style.display="none",h(),p.refresh())}catch(e){console.error("Error:",e)}c.reset()}async function q(){d+=1;try{const s=await y(l,d),e=g(s);a.insertAdjacentHTML("beforeend",e),p.refresh();const n=a.getBoundingClientRect().height;window.scrollBy({top:2*n,behavior:"smooth"}),s.hits.length<15&&(o.style.display="none",h(),p.refresh())}catch(s){console.error("Error:",s)}}
//# sourceMappingURL=commonHelpers.js.map
