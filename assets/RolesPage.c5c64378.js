import{o as p,a as e,c as o,b as t,F as a,r as d,u as r,d as k,n as f,w as g,R}from"./index.bf19c2eb.js";import{u as h}from"./role.fd1ef2d7.js";import{u as y}from"./audio.75a1a34b.js";const v={class:"rolesPage"},P=t("div",{class:"background"},null,-1),$={class:"linkContainer"},B=["src"],b={__name:"RolesPage",setup(x){const l=y(),n=h();return p(s=>{n.role.currentGender=s.params.gender,n.role.currentRole=s.params.role}),(s,i)=>(e(),o("article",v,[P,t("div",$,[(e(),o(a,null,d(["male","female"],(u,_)=>(e(),o(a,{key:_},[(e(),o(a,null,d(["elf","mage","royal","knight","darkElf"],(c,m)=>k(r(R),{key:m,to:`/${u}/${c}`,class:f(`${u} ${c}`),onClick:i[0]||(i[0]=g(A=>r(l).clickToPlayAudio("UI/audio_click.mp3"),["stop"]))},null,8,["to","class"])),64))],64))),64))]),t("audio",{src:r(l).getUrlForHashWhenProd("login/rolesPage_audio.mp3"),autoplay:"",loop:""},null,8,B)]))}};export{b as default};
