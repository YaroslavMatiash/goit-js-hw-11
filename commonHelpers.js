import{S as c,i as u}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const d="43258004-167cb59a45a78bad01bc517c7",f="https://pixabay.com/api/?";function m(o){const r=new URLSearchParams({key:d,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${f}${r}`).then(n=>{if(!n.ok)throw new Error("Failed to fetch");return n.json()})}console.log(window);const p=new c(".card-item a",{captionsData:"alt",captionDelay:250});function h(o,r){if(!r.hits.length){u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const n=g(r.hits);o.insertAdjacentHTML("beforeend",n),p.refresh()}function g(o){return o.map(({webformatURL:r,largeImageURL:n,tags:s,likes:e,views:t,comments:i,downloads:l})=>`<li class="card-item">
  <a href=${n}
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
        <p>${i}</p>
      </li>
      <li>
        Downloads
        <p>${l}</p>
      </li>
    </ul></a
  >
</li>`).join("")}const y=document.querySelector(".search-form"),L=document.querySelector(".card-list"),S=document.querySelector(".loader");y.addEventListener("submit",b);new c(".card-item a",{captionsData:"alt",captionDelay:250});function b(o){o.preventDefault();const r=o.currentTarget.elements.search.value.trim();o.currentTarget.elements.search.value="",L.innerHTML="",a(),m(r).then(n=>{h(n)}).then(()=>a())}function a(){S.classList.toggle("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
