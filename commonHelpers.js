import{S as l,i as d}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const f="43258004-167cb59a45a78bad01bc517c7",m="https://pixabay.com/api/?";function p(o){const r=new URLSearchParams({key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${m}${r}`).then(i=>{if(!i.ok)throw new Error("Failed to fetch");return i.json()})}const h=new l(".card-item a",{captionsData:"alt",captionDelay:250});function g(o,r){if(!r.hits.length){d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const i=y(r.hits);o.insertAdjacentHTML("beforeend",i),h.refresh()}function y(o){return o.map(({webformatURL:r,largeImageURL:i,tags:s,likes:e,views:t,comments:n,downloads:u})=>`<li class="card-item">
  <a href=${i}
    ><img src=${r} alt="${s}" height="200"/>
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
        <p>${n}</p>
      </li>
      <li>
        Downloads
        <p>${u}</p>
      </li>
    </ul></a
  >
</li>`).join("")}const L=document.querySelector(".search-form"),a=document.querySelector(".card-list"),S=document.querySelector(".loader");L.addEventListener("submit",b);new l(".card-item a",{captionsData:"alt",captionDelay:250});function b(o){o.preventDefault();const r=o.currentTarget.elements.search.value.trim();o.currentTarget.elements.search.value="",a.innerHTML="",c(),p(r).then(i=>{g(a,i)}).then(()=>c())}function c(){S.classList.toggle("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
