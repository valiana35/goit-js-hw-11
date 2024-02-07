import{i as a,S as c}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const l=document.querySelector(".form");document.querySelector(".form-input");document.querySelector(".btn");const u=document.querySelector(".gallery");l.addEventListener("submit",f);const m=new URLSearchParams({key:42256594-6,q:`"${image.tags}"`,image_type:"photo",orientation:"horizontal",safesearch:!0});function f(){fetch(`https://pixabay.com/api/images?${m}`).then(t=>(t.ok||a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),t.json())).then(t=>{const o=t.map(s=>`<li class="gallery-item">
            <a class="gallery-link" href="${s.largeImageURL}">
                <img 
                    class="gallery-image"
                    src="${s.webformatURL}" 
                    alt="${s.tags}"
                />
            </a>
            </li>`).join("");u.insertAdjacentHTML("beforeend",o)})}new c(".gallery a",{});
//# sourceMappingURL=commonHelpers.js.map
