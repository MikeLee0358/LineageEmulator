import{u as r}from"./role.de8a291e.js";import{_ as s,a,c as n,b as c,u as l}from"./index.626b8d85.js";const u={class:"logoutPage"},_=["src"],i={__name:"LogoutPage",setup(g){const e=r(),o=()=>{window.location.replace("https://mikelee0358.github.io/LineageEmulator/#/login")},t=()=>e.role.currentRole==="royal"&&e.role.currentGender==="male"?"logout/prince.mp4":"logout/classic.mp4";return(d,p)=>(a(),n("section",u,[c("video",{src:l(e).getUrlForHashWhenProd(t()),autoplay:"",onEnded:o},null,40,_)]))}},h=s(i,[["__scopeId","data-v-e8b9d6af"]]);export{h as default};
