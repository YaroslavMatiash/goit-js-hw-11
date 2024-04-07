import{S as u,i as d}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const f="43258004-167cb59a45a78bad01bc517c7",m="https://pixabay.com/api/?";function p(r){const o=new URLSearchParams({key:f,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${m}${o}`).then(n=>{if(!n.ok)throw new Error("Failed to fetch");return n.json()})}console.log(window);const h=document.querySelector(".search-form"),a=document.querySelector(".card-list"),g=document.querySelector(".loader");h.addEventListener("submit",L);const y=new u(".card-item a",{captionsData:"alt",captionDelay:250});function L(r){r.preventDefault();const o=r.currentTarget.elements.search.value.trim();r.currentTarget.elements.search.value="",a.innerHTML="",c(),p(o).then(n=>{S(n)}).then(()=>c())}function S({hits:r}){if(!r.length){d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const o=b(r);a.insertAdjacentHTML("beforeend",o),y.refresh()}function b(r){return r.map(({webformatURL:o,largeImageURL:n,tags:s,likes:e,views:t,comments:i,downloads:l})=>`<li class="card-item">
  <a href=${n}
    ><img src=${o} alt="${s}" height="200"/>
    <ul class="card-info">
      <li>
        Likes
        <p>${e}</p>
      </li>
      <li>
        Views
        <p>${t}</p>
      </li>
      <li>
        Comments
        <p>${i}</p>
      </li>
      <li>
        Downloads
        <p>${l}</p>
      </li>
    </ul></a
  >
</li>`).join("")}function c(){g.classList.toggle("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
