import{i as m,S as f}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const l=document.querySelector(".form"),p=document.querySelector(".form-input");document.querySelector(".btn");const a=document.querySelector(".gallery"),c=document.querySelector(".span"),d=new URLSearchParams({key:"42127236-8bfdbbfbeed8a2dadaca720e8",q:`${encodeURIComponent(p.value)}`,image_type:"photo",orientation:"horizontal",safesearch:!0});l.addEventListener("submit",n=>{n.preventDefault(),c.classList.add("loader"),a.innerHTML="",h(d).then(r=>u(r)).catch(r=>console.log(r)).finally(()=>c.remove()),l.reset()});function h(n){const r=`https://pixabay.com/api/?${n}`;return fetch(r).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{t.hits.length===0?m.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):u(t)})}function u(n){const r=n.hits.map(s=>`<li class="gallery-item">
        <a class="gallery-link" href="${s.largeImageURL}">
            <img 
                class="gallery-image"
                src="${s.webformatURL}" 
                alt="${s.tags}"
            />
        </a>
        <div class="description">
        <p><b>Likes: </b>${s.likes}</p>
        <p><b>Views: </b>${s.views}</p>
        <p><b>Comments: </b>${s.comments}</p>
        <p><b>Downloads: </b>${s.downloads}</p>
        </div>
        </li>`).join("");a.innerHTML=r;let t=new f(".gallery a",g);t.on("show.simplelightbox"),t.refresh()}const g={captionDelay:250};
//# sourceMappingURL=commonHelpers.js.map
