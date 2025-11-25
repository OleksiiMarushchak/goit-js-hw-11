import{a as f,S as u,i}from"./assets/vendor-Cq7ZUixy.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const m="53402842-8b5ac7b96fa102848e26b89cd",p="https://pixabay.com/api/",g=o=>{const r={key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"};return f.get(p,{params:r}).then(t=>t.data).catch(t=>{throw t})},y=new u(".gallery a",{captions:!0,captionsData:"alt"}),h=o=>{const r=document.getElementById("gallery"),t=o.map(a=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${a.largeImageURL}">
        <img
          class="gallery-image"
          src="${a.webformatURL}"
          alt="${a.tags}"
        />
      </a>
      <div class="gallery-info">
        <div class="info-item">
          <span class="info-label">Likes</span>
          <span class="info-value">${a.likes}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Views</span>
          <span class="info-value">${a.views}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Comments</span>
          <span class="info-value">${a.comments}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Downloads</span>
          <span class="info-value">${a.downloads}</span>
        </div>
      </div>
    </li>
  `).join("");r.insertAdjacentHTML("beforeend",t),y.refresh()},v=()=>{const o=document.getElementById("gallery");o.innerHTML=""},b=()=>{document.getElementById("loader").classList.add("is-visible")},l=()=>{document.getElementById("loader").classList.remove("is-visible")},d=document.getElementById("search-form"),c=d.querySelector('input[name="search-text"]');d.addEventListener("submit",o=>{o.preventDefault();const r=c.value.trim();if(r===""){i.error({title:"Error",message:"Please enter a search query",position:"topRight"});return}v(),b(),g(r).then(t=>{if(l(),t.hits.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(t.hits),c.value=""}).catch(t=>{l(),i.error({title:"Error",message:"Failed to fetch images. Please try again.",position:"topRight"}),console.error("Error fetching images:",t)})});
//# sourceMappingURL=index.js.map
