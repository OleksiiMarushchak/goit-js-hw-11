import{a as u,S as m,i as n}from"./assets/vendor-Cq7ZUixy.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const p="53402842-8b5ac7b96fa102848e26b89cd",f="https://pixabay.com/api/",g=a=>{const r={key:p,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"};return u.get(f,{params:r}).then(t=>t.data).catch(t=>{throw t})},h=new m(".gallery a",{captions:!0,captionsData:"alt"}),y=a=>{const r=document.getElementById("gallery"),t=a.map(o=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${o.largeImageURL}">
        <img
          class="gallery-image"
          src="${o.webformatURL}"
          alt="${o.tags}"
        />
      </a>
      <div class="gallery-info">
        <div class="info-item">
          <span class="info-label">Likes</span>
          <span class="info-value">${o.likes}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Views</span>
          <span class="info-value">${o.views}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Comments</span>
          <span class="info-value">${o.comments}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Downloads</span>
          <span class="info-value">${o.downloads}</span>
        </div>
      </div>
    </li>
  `).join("");r.insertAdjacentHTML("beforeend",t),h.refresh()},v=()=>{const a=document.getElementById("gallery");a.innerHTML=""},b=()=>{document.getElementById("loader").classList.add("is-visible")},l=()=>{document.getElementById("loader").classList.remove("is-visible")},d=document.getElementById("search-form"),c=d.querySelector('input[name="search-text"]');d.addEventListener("submit",a=>{a.preventDefault();const r=c.value.trim();if(r===""){n.error({title:"Error",message:"Please enter a search query",position:"topRight"});return}v(),b(),g(r).then(t=>{if(l(),t.hits.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(t.hits),n.success({title:"Success",message:`Found ${t.hits.length} images`,position:"topRight"}),c.value=""}).catch(t=>{l(),n.error({title:"Error",message:"Failed to fetch images. Please try again.",position:"topRight"}),console.error("Error fetching images:",t)})});
//# sourceMappingURL=index.js.map
