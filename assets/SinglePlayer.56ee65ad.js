import{_ as p,i as T,u as o,a as i,c as _,b as s,n as k,F as C,r as N,j as v,v as $,t as d,k as P,p as L,l as A,s as K,m as z,f as M,q as X,o as O,w as I,x as Y,d as g,h as Z,y as q,R as B}from"./index.83a4ccf1.js";import{u as h,a as V,bi as G,bj as H,bk as ee}from"./role.b3e29ff8.js";import{u as U}from"./audio.3e1fe2ca.js";const te=["src"],se={__name:"ViewMage",setup(c){T(r=>({f4b90742:o(e).getGifUrl()}));const e=h(),t=[{id:0,class:"npc gereng",src:"mage/gif_gereng.gif"},{id:1,class:"npc tree",src:"mage/gif_tree.gif"},{id:1,class:"monster arachnevil",src:"mage/gif_arachnevil.gif"},{id:2,class:"monster zombie topLeft no1",src:"mage/gif_zombieTopLeft.gif"},{id:3,class:"monster zombie topLeft no2",src:"mage/gif_zombieTopLeft.gif"},{id:4,class:"monster zombie topLeft no3",src:"mage/gif_zombieTopLeft.gif"},{id:5,class:"monster zombie topLeft no4",src:"mage/gif_zombieTopLeft.gif"},{id:6,class:"monster zombie top no1",src:"mage/gif_zombieTop.gif"},{id:7,class:"monster zombie top no2",src:"mage/gif_zombieTop.gif"},{id:8,class:"monster zombie topRight no1",src:"mage/gif_zombieTopRight.gif"},{id:9,class:"monster zombie topRight no2",src:"mage/gif_zombieTopRight.gif"},{id:10,class:"monster zombie topRight no3",src:"mage/gif_zombieTopRight.gif"},{id:11,class:"monster zombie topRight no4",src:"mage/gif_zombieTopRight.gif"},{id:12,class:"monster zombie right no1",src:"mage/gif_zombieRight.gif"},{id:13,class:"monster zombie right no2",src:"mage/gif_zombieRight.gif"},{id:14,class:"monster zombie bottomRight no1",src:"mage/gif_zombieBottomRight.gif"},{id:15,class:"monster zombie bottomRight no2",src:"mage/gif_zombieBottomRight.gif"},{id:16,class:"monster zombie bottom no1",src:"mage/gif_zombieBottom.gif"},{id:17,class:"monster zombie bottom no2",src:"mage/gif_zombieBottom.gif"},{id:18,class:"monster zombie bottomLeft no1",src:"mage/gif_zombieBottomLeft.gif"},{id:19,class:"monster zombie bottomLeft no2",src:"mage/gif_zombieBottomLeft.gif"}];return(r,l)=>(i(),_(C,null,[s("figure",{class:k(o(e).getGenderClass())},null,2),(i(),_(C,null,N(t,n=>s("img",{key:n.id,class:k(n.class),src:o(e).getUrlForHashWhenProd(n.src)},null,10,te)),64))],64))}},oe=p(se,[["__scopeId","data-v-09b5d25a"]]);const F=c=>(L("data-v-2df5a92f"),c=c(),A(),c),ae={class:"deathKnight male"},le={key:0,class:"nameContainer"},ce=F(()=>s("p",{class:"title"},"\u86C7\u9AEE \u540D\u6A21\u2199",-1)),ne=F(()=>s("p",{class:"name"},"\u71B1\u8840\u72C2\u5FD7",-1)),re={key:0,class:"nameContainer"},ie=F(()=>s("p",{class:"title"},"\u86C7\u9AEE \u540D\u6A21\u2199",-1)),_e=F(()=>s("p",{class:"name"},"\u71B1\u8840\u72C2\u5FD7",-1)),de={__name:"ViewKnight",setup(c){T(r=>({"4a259fc8":o(e).getGifUrl()}));const e=h(),t=V();return e.role.currentGender==="male"&&t.repeatTalkChatEvent(15),(r,l)=>(i(),_(C,null,[v(s("figure",ae,[o(e).isGenderType("male")?(i(),_("figcaption",le,[ce,ne,v(s("p",{class:"chatEvent"}," \u71B1\u8840\u72C2\u5FD7: "+d(o(t).game.chatMsg),513),[[$,o(t).game.isShowGameChat]])])):P("",!0)],512),[[$,o(t).game.isDeathKnight]]),v(s("figure",{class:k(o(e).getGenderClass())},[o(e).isGenderType("male")?(i(),_("figcaption",re,[ie,_e,v(s("p",{class:"chatEvent"}," \u71B1\u8840\u72C2\u5FD7: "+d(o(t).game.chatMsg),513),[[$,o(t).game.isShowGameChat]])])):P("",!0)],2),[[$,!o(t).game.isDeathKnight]])],64))}},ue=p(de,[["__scopeId","data-v-2df5a92f"]]);const ge=["src"],me={__name:"ViewRoyal",setup(c){T(r=>({"16f9a529":o(e).getGifUrl()}));const e=h(),t=[{id:0,class:"mage rowOne1",src:"royal/gif_mage.gif"},{id:1,class:"mage rowOne2",src:"royal/gif_mage.gif"},{id:2,class:"elf rowOne1",src:"royal/gif_elfMale.gif"},{id:3,class:"elf rowOne2",src:"royal/gif_elfMale.gif"},{id:4,class:"elf rowOne3",src:"royal/gif_elfMale.gif"},{id:5,class:"elf rowOne4",src:"royal/gif_elfMale.gif"},{id:6,class:"elf rowOne5",src:"royal/gif_elfMale.gif"},{id:7,class:"elf rowOne6",src:"royal/gif_elfMale.gif"},{id:8,class:"elf rowOne7",src:"royal/gif_elfMale.gif"},{id:9,class:"elf rowTwo1 female",src:"royal/gif_elfFemale.gif"},{id:10,class:"elf rowTwo2 female",src:"royal/gif_elfFemale.gif"},{id:11,class:"elf rowTwo3",src:"royal/gif_elfMale.gif"},{id:12,class:"elf rowTwo4",src:"royal/gif_elfMale.gif"},{id:13,class:"monster rowOne1",src:"royal/gif_skeleton.gif"},{id:14,class:"monster rowOne2",src:"royal/gif_skeleton.gif"},{id:15,class:"monster rowOne3",src:"royal/gif_skeleton.gif"},{id:16,class:"monster rowOne4",src:"royal/gif_skeleton.gif"},{id:17,class:"monster rowOne5",src:"royal/gif_skeleton.gif"},{id:18,class:"monster rowTwo1",src:"royal/gif_skeleton.gif"},{id:19,class:"monster rowTwo2",src:"royal/gif_skeleton.gif"},{id:20,class:"monster rowTwo3",src:"royal/gif_skeleton.gif"},{id:21,class:"monster rowTwo4",src:"royal/gif_skeleton.gif"},{id:22,class:"monster rowTwo5",src:"royal/gif_skeleton.gif"},{id:23,class:"chair",src:"royal/gif_chair.gif"},{id:24,class:"table",src:"royal/gif_table.gif"}];return(r,l)=>(i(),_(C,null,[s("figure",{class:k(o(e).getGenderClass())},null,2),(i(),_(C,null,N(t,n=>s("img",{key:n.id,class:k(n.class),src:o(e).getUrlForHashWhenProd(n.src)},null,10,ge)),64))],64))}},fe=p(me,[["__scopeId","data-v-09fbeb7a"]]);const pe=["src"],he={__name:"ViewDarkElf",setup(c){T(t=>({a84c7d2c:o(e).getGifUrl()}));const e=h();return(t,r)=>(i(),_(C,null,[s("figure",{class:k(o(e).getGenderClass())},null,2),s("img",{class:"deathKnight",src:o(e).getUrlForHashWhenProd("darkElf/img_deathKnight.webp")},null,8,pe)],64))}},ye=p(he,[["__scopeId","data-v-9ca9e372"]]);const be={__name:"ViewElf",setup(c){T(t=>({"094ffff8":o(e).getGifUrl()}));const e=h();return(t,r)=>(i(),_("figure",{class:k(o(e).getGenderClass())},null,2))}},ve=p(be,[["__scopeId","data-v-1036f14d"]]);const $e={class:"panelView"},Ie={__name:"PanelView",setup(c){const e=h(),{role:t}=K(e);return(r,l)=>(i(),_("figure",$e,[o(t).currentRole==="elf"?(i(),z(ve,{key:0})):o(t).currentRole==="mage"?(i(),z(oe,{key:1})):o(t).currentRole==="royal"?(i(),z(fe,{key:2})):o(t).currentRole==="knight"?(i(),z(ue,{key:3})):o(t).currentRole==="darkElf"?(i(),z(ye,{key:4})):P("",!0)]))}};const we={class:"uiHp"},ke={class:"hp"},Ce={class:"mp"},Ue={__name:"UIHp",setup(c){const e=h();return(t,r)=>(i(),_("ul",we,[s("li",ke," HP:"+d(o(e).role.currentData.basic.hp)+"/"+d(o(e).role.currentData.basic.hp),1),s("li",Ce," MP:"+d(o(e).role.currentData.basic.mp)+"/"+d(o(e).role.currentData.basic.mp),1)]))}},xe=p(Ue,[["__scopeId","data-v-5cbeba43"]]);const Re={class:"uiChat"},Te={__name:"UIChat",setup(c){const e=G();return(t,r)=>(i(),_("ul",Re,[(i(!0),_(C,null,N(o(e).chat.lines,(l,n)=>(i(),_("li",{key:n},d(l),1))),128))]))}},Se=p(Te,[["__scopeId","data-v-c9f9246d"]]),Ee=[{id:0,hotkey:"F5",src:"slot/slot_empty.webp",name:"\u505C\u6B62\u6372\u8EF8\u529F\u80FD",description:""},{id:1,hotkey:"F6",src:"slot/slot_whiteArmor.webp",name:"\u5C0D\u76D4\u7532\u65BD\u6CD5\u7684\u5377\u8EF8",description:"\u80FD\u589E\u52A0\u9632\u5177\u7684\u9632\u79A6\u529B"},{id:2,hotkey:"F7",src:"slot/slot_blessedArmor.webp",name:"\u5C0D\u76D4\u7532\u65BD\u6CD5\u7684\u5377\u8EF8",description:"\u5F37\u5316\u6210\u529F\u53EF\u5C07\u88DD\u5099\u5F37\u5316\u6578\u503C(+1~3)"},{id:3,hotkey:"F8",src:"slot/slot_cursedArmor.webp",name:"\u5C0D\u76D4\u7532\u65BD\u6CD5\u7684\u5377\u8EF8",description:"\u5F37\u5316\u6210\u529F\u53EF\u5C07\u88DD\u5099\u5F37\u5316\u6578\u503C(-1)"},{id:4,hotkey:"F9",src:"slot/slot_empty.webp",name:"\u505C\u6B62\u6372\u8EF8\u529F\u80FD",description:""},{id:5,hotkey:"F10",src:"slot/slot_whiteWeapon.webp",name:"\u5C0D\u6B66\u5668\u65BD\u6CD5\u7684\u5377\u8EF8",description:"\u80FD\u589E\u52A0\u6B66\u5668\u7684\u653B\u64CA\u529B"},{id:6,hotkey:"F11",src:"slot/slot_blessedWeapon.webp",name:"\u5C0D\u6B66\u5668\u65BD\u6CD5\u7684\u5377\u8EF8",description:"\u5F37\u5316\u6210\u529F\u53EF\u5C07\u6B66\u5668\u5F37\u5316\u6578\u503C(+1~3)"},{id:7,hotkey:"F12",src:"slot/slot_cursedWeapon.webp",name:"\u5C0D\u6B66\u5668\u65BD\u6CD5\u7684\u5377\u8EF8",description:"\u5F37\u5316\u6210\u529F\u53EF\u5C07\u6B66\u5668\u5F37\u5316\u6578\u503C(-1)"}];const Le=["onClick"],Ae=["src"],ze={class:"slotInfo"},Ne={__name:"UISlot",setup(c){T(a=>({e98a3412:e.value}));const e=M(""),t=M(Ee),r=h(),l=G(),n=H(),y=a=>{const m=u=>{if(u.target.tagName==="IMG")return u.target.parentElement.classList[0]};n.clearClickScorllTimer(),D(m(a),!0)},w=a=>{a.preventDefault(),a.stopPropagation(),n.clearClickScorllTimer(),D(a.key)},D=(a,m=!1)=>{const u=Array.from(document.querySelector(".uiSlot").children),x=b=>{const f={grey:"var(--color-grey)",white:"var(--color-white)",yellow:"var(--color-yellow)",red:"var(--color-red)"};return/blessed/.test(b)?e.value=f.yellow:/cursed/.test(b)?e.value=f.red:e.value=f.white};u.forEach(b=>{const f=E=>{b.lastElementChild.style.opacity=E},S=E=>b.classList.remove(E),R=E=>b.classList.add(E);S("active"),f(0),b.className===a&&(m&&(n.clickTimerId=setInterval(()=>n.changeScroll(a),750)),n.changeScroll(a),x(b.firstChild.src),R("active"),f(1),l.updateChatScroll())})};return X(()=>document.addEventListener("keydown",w)),O(()=>document.removeEventListener("keydown",w)),(a,m)=>(i(),_("section",{class:"uiSlot",onClick:I(y,["stop"])},[(i(!0),_(C,null,N(t.value,u=>(i(),_("figure",{key:u.id,class:k(u.hotkey)},[s("img",{src:o(r).getUrlForHashWhenProd(u.src)},null,8,Ae),s("figcaption",ze,[s("h1",null,d(u.name),1),s("p",null,d(u.description),1)])],2))),128))],8,Le))}},De=p(Ne,[["__scopeId","data-v-f2d65657"]]);const W=c=>(L("data-v-c217ee78"),c=c(),A(),c),Fe={class:"uiNumber"},Pe=W(()=>s("li",{class:"line1"},[s("div",{class:"lv"},"1"),s("div",{class:"exp"},"0.00%")],-1)),Me={class:"line2"},Ve={class:"ac"},Ge=W(()=>s("div",{class:"state"},"0",-1)),He={__name:"UINumber",setup(c){const e=h();return(t,r)=>(i(),_("ul",Fe,[Pe,s("li",Me,[s("div",Ve,d(o(e).getAC),1),Ge])]))}},Be=p(He,[["__scopeId","data-v-c217ee78"]]);const Ke=["onClick"],Oe=s("li",{class:"close"},null,-1),We=s("li",{class:"content"},"\u672A\u958B\u653E",-1),je=[Oe,We],Je={__name:"UIRelationShip",setup(c){const e=U(),t=r=>{const l=r.target,n=()=>{e.clickToPlayAudio("UI/audio_itemsClose.mp3"),l.parentElement.classList.remove("visible")};if(l.tagName!=="UL"&&l.className==="close")return n()};return(r,l)=>(i(),_("ul",{class:"uiRelationship",onClick:I(t,["stop"])},je,8,Ke))}};const Qe=["onClick"],Xe=s("li",{class:"close"},null,-1),Ye=[Xe],Ze={__name:"UIItems",setup(c){const e=U(),t=r=>{const l=r.target,n=()=>{e.clickToPlayAudio("UI/audio_itemsClose.mp3"),l.parentElement.classList.remove("visible")};if(l.tagName!=="FIGURE"&&l.className==="close")return n()};return(r,l)=>(i(),_("figure",{class:"uiItems",onClick:I(t,["stop"])},Ye,8,Qe))}};const qe=["onClick"],et=s("li",{class:"close"},null,-1),tt={class:"magicNumber"},st=s("li",{class:"magicPower"},"0",-1),ot={class:"magicResist"},at={__name:"UIMagic",setup(c){const e=h(),t=U(),r=l=>{const n=l.target,y=()=>{t.clickToPlayAudio("UI/audio_itemsClose.mp3"),n.parentElement.classList.remove("visible")};n.tagName!=="UL"&&n.className==="close"&&y()};return(l,n)=>(i(),_("ul",{class:"uiMagic",onClick:I(r,["stop"])},[et,s("ul",tt,[st,s("li",ot,d(o(e).getMR),1)])],8,qe))}};const j=c=>(L("data-v-437ef26f"),c=c(),A(),c),lt=["onClick"],ct=j(()=>s("li",{class:"close"},null,-1)),nt=j(()=>s("li",{class:"textContainer"},[s("h1",{class:"title"},"Side project\u7531\u4F86"),s("p",{class:"content"},d(`     
    \u9748\u611F\u4F86\u6E90\u70BA\u201C\u5929\u5802\u7206\u7206\u6A02\u903C\u771F\u7248\u201D\uFF0C\u4E3B\u8981\u662F\u7DF4\u7FD2\u6280\u80FD\u548C\u56DE\u61B6\u5929\u5802\u3002

    \u7576\u7B2C\u4E00\u7248\u5FA9\u523B\u5B8C\u6210\u5F8C\uFF0C\u7E3D\u89BA\u5F97\u9084\u53EF\u4EE5\u52A0\u4E9B\u4EC0\u9EBC\uFF0C\u6240\u4EE5\u5C31\u8E0F\u4E0A\u4E86\u7684\u512A\u5316\u65C5\u7A0B\u3002
    
    \u8CC7\u6599\u548C\u7D20\u6750\u53D6\u81EA\u7DB2\u8DEF\u3001\u5929\u5802\uFF37\u3001\u5DF4\u54C8\u59C6\u7279\u3001\u5B98\u65B9\u7DB2\u7AD9\u4EE5\u53CA\u904A\u6232\u4E3B\u7A0B\u5F0F\u3002`))],-1)),rt=[ct,nt],it={__name:"UIHelp",setup(c){const e=U(),t=r=>{const l=r.target,n=()=>{e.clickToPlayAudio("UI/audio_itemsClose.mp3"),l.parentElement.classList.remove("visible")};l.tagName!=="UL"&&l.className==="close"&&n()};return(r,l)=>(i(),_("ul",{class:"uiHelp",onClick:I(t,["stop"])},rt,8,lt))}},_t=p(it,[["__scopeId","data-v-437ef26f"]]);const dt={class:"uiRoleNumber"},ut={class:"level"},gt={class:"lv"},mt={class:"exp"},ft={class:"basic"},pt={class:"attributes"},ht={class:"er"},yt={__name:"UIRoleNumber",setup(c){const e=h(),{role:t}=K(e);return(r,l)=>(i(),_("ul",dt,[s("ul",ut,[s("li",gt,d(o(t).currentData.basic.lv),1),s("li",mt,d(o(t).currentData.basic.exp),1)]),s("ul",ft,[s("li",null,d(o(t).currentData.basic.hp)+"/"+d(o(t).currentData.basic.hp),1),s("li",null,d(o(t).currentData.basic.mp)+"/"+d(o(t).currentData.basic.mp),1),s("li",null,d(o(e).getAC),1)]),s("ul",pt,[s("li",null,d(o(t).currentData.basic.str),1),s("li",null,d(o(t).currentData.basic.dex),1),s("li",null,d(o(t).currentData.basic.con),1),s("li",null,d(o(t).currentData.basic.int),1),s("li",null,d(o(t).currentData.basic.wis),1),s("li",null,d(o(t).currentData.basic.cha),1)]),s("li",ht,d(o(e).getER()),1)]))}};const bt={class:"uiRoleEquip"},vt=["onClick","data-displayEquipInfo"],$t={__name:"uiRoleEquip",setup(c){T(a=>({"2b2c1202":n(),"99da825a":w(5)}));const e=h(),t=ee(),r=H(),l=V(),n=()=>r.targetScroll===null?`url(${e.getUrlForHashWhenProd("UI/UI_pointer.webp")}), auto`:`url(${e.getUrlForHashWhenProd("UI/UI_target.webp")}), auto`,y=a=>{const m=f=>f>=0?`+${f}`:f,u=()=>{const f=()=>`${m(a.value)} ${a.name} (\u4F7F\u7528\u4E2D)
\u9632\u79A6 ${a.armor}${m(a.value)}`,S=()=>`${m(a.value)} ${a.name} (\u63EE\u821E)
\u653B\u64CA\u529B ${a.attack.small}${m(a.value)}/${a.attack.large}${m(a.value)}`+E(),R=()=>e.role.currentRole==="knight"&&e.role.currentGender==="male"&&a.category.includes("right-ring")?a.name="\u9EDE\u64CA\u8B8A\u8EAB":e.role.currentRole==="knight"&&e.role.currentGender==="female"&&a.category.includes("right-ring")?a.name="\u5F62\u9AD4\u63A7\u5236\u6212\u6307 (\u4F7F\u7528\u4E2D)":`${a.name} (\u4F7F\u7528\u4E2D)`,E=()=>/雙手武器/.test(a.grip)?`
  \u96D9\u624B\u6B66\u5668`:"";if(a.category==="weapon")return S();if(a.category.includes("armor"))return f();if(a.category.includes("jewelry"))return R()},x=()=>{const f=()=>{const R=()=>{if(a.mr===void 0)return"";if(/cloak/.test(a.category))return m(a.mr+a.value*2);if(/helmet|bodyArmor/.test(a.category))return m(a.mr+a.value)};return`\u53EF\u4F7F\u7528\u8077\u696D:
${a.occupation}
  ${a.feature} ${R()}`},S=()=>`\u53EF\u4F7F\u7528\u8077\u696D:
${a.occupation}`;return a.feature?a.category.includes("jewelry")?"":f():S()},b=()=>a.category.includes("jewelry")?"":`\u6750\u8CEA:${a.material}
  \u91CD\u91CF ${a.weight}`;return`${u()}
  ${x()}
  ${b()}`},w=a=>{const m=e.role.currentRole,u=e.role.currentData.equips,x={grey:"var(--color-grey)",white:"var(--color-white)",yellow:"var(--color-yellow)",red:"var(--color-red)"};return(({index:S,armorType:R})=>{if(u[S].category.includes(R))switch(m){case"royal":if(R==="cloak")return x.yellow;break;default:return x.white}})([{index:0,armorType:"weapon"},{index:1,armorType:"helmet"},{index:2,armorType:"amulet"},{index:3,armorType:"shirt"},{index:4,armorType:"bodyArmor"},{index:5,armorType:"cloak"},{index:6,armorType:"left-ring"},{index:7,armorType:"belt"},{index:8,armorType:"shield"},{index:9,armorType:"gloves"},{index:10,armorType:"right-ring"},{index:11,armorType:"boots"}][a])},D=(a,m)=>{const u=()=>setTimeout(()=>a.value=t.target.value,0);a.name==="\u9EDE\u64CA\u8B8A\u8EAB"&&l.game.isDeathKnight?l.getGameChatEvent("toBeKnight"):a.name==="\u9EDE\u64CA\u8B8A\u8EAB"&&!l.game.isDeathKnight&&l.getGameChatEvent("toBeDeathKnight"),t.target.name=a.name,t.target.category=a.category,t.target.safetyValue=a.safetyValue,t.target.value=a.value,t.algorithmSystem(a,m),u()};return(a,m)=>(i(),_("ul",bt,[(i(!0),_(C,null,N(o(e).role.currentData.equips,u=>(i(),_("li",{key:u.id,class:k(["equip",u.category]),style:Y({backgroundImage:`url(${o(e).getUrlForHashWhenProd(u.src)})`}),onClick:I(x=>D(u,x),["stop"]),"data-displayEquipInfo":y(u)},null,14,vt))),128))]))}},It=p($t,[["__scopeId","data-v-186f126c"]]);const wt=c=>(L("data-v-cefb5c5e"),c=c(),A(),c),kt=["onClick"],Ct=wt(()=>s("div",{class:"close"},null,-1)),Ut={__name:"UIRole",setup(c){const e=U(),t=r=>{const l=r.target,n=()=>{e.clickToPlayAudio("UI/audio_itemsClose.mp3")};l.tagName!=="SECTION"&&l.className==="close"&&n()};return(r,l)=>(i(),_("section",{class:"uiRole",onClick:I(t,["stop"])},[Ct,g(yt),g(It)],8,kt))}},xt=p(Ut,[["__scopeId","data-v-cefb5c5e"]]);const J=c=>(L("data-v-921def3e"),c=c(),A(),c),Rt=["onClick"],Tt=J(()=>s("li",{class:"close"},null,-1)),St=J(()=>s("li",null,"\u9078\u9805",-1)),Et={class:"music"},Lt={__name:"UISetting",setup(c){const e=U(),t=Z(()=>e.state?"\u958B":"\u95DC"),r=l=>{const n=l.target,y=()=>{e.clickToPlayAudio("UI/audio_itemsClose.mp3"),n.parentElement.classList.remove("visible")},w=()=>{e.state=!e.state,e.state===!0?e.playAudio():e.pauseAudio()};n.tagName!=="UL"&&(n.className==="music"&&w(),n.className==="close"&&y())};return(l,n)=>(i(),_("ul",{class:"uiSetting",onClick:I(r,["stop"])},[Tt,St,s("li",Et,[q(" \u80CC\u666F\u97F3\u6548: "),s("span",null,d(o(t)),1)])],8,Rt))}},At=p(Lt,[["__scopeId","data-v-921def3e"]]);const Q=c=>(L("data-v-35370e12"),c=c(),A(),c),zt=["onClick"],Nt=Q(()=>s("li",{class:"close"},null,-1)),Dt=Q(()=>s("li",{class:"cancel"},null,-1)),Ft={__name:"UILogout",setup(c){const e=U(),t=r=>{const l=r.target,n=()=>{e.clickToPlayAudio("UI/audio_itemsClose.mp3"),l.parentElement.classList.remove("visible")};if(l.tagName!=="FIGURE"){if(["close","cancle"].includes(l.className))return n();e.clickToPlayAudio("UI/audio_itemsClose.mp3")}};return(r,l)=>(i(),_("figure",{class:"uiLogout",onClick:I(t,["stop"])},[Nt,g(o(B),{to:"/roles",class:"restart"}),g(o(B),{to:"/logout",class:"quit"}),Dt],8,zt))}},Pt=p(Ft,[["__scopeId","data-v-35370e12"]]);const Mt=["onClick"],Vt={class:"btnHelp"},Gt={class:"btnRole"},Ht={class:"btnMagic"},Bt={class:"btnItems"},Kt={class:"btnRelationship"},Ot={class:"btnSetting"},Wt={class:"btnLogout"},jt={__name:"UIFunction",setup(c){const e=U();let t=M("");const r=l=>{const n=l.target,y=()=>n.firstElementChild.className.includes("visible"),w=()=>{y()?e.clickToPlayAudio("UI/audio_itemsClose.mp3"):e.clickToPlayAudio("UI/audio_itemsOpen.mp3")};l.target.tagName!=="UL"&&(t.value=n.className,w())};return(l,n)=>(i(),_("ul",{class:"uiFunction",onClick:I(r,["stop"])},[s("li",Vt,[v(g(_t,null,null,512),[[$,o(t)==="btnHelp"]])]),s("li",Gt,[v(g(xt,null,null,512),[[$,o(t)==="btnRole"]])]),s("li",Ht,[v(g(at,null,null,512),[[$,o(t)==="btnMagic"]])]),s("li",Bt,[v(g(Ze,null,null,512),[[$,o(t)==="btnItems"]])]),s("li",Kt,[v(g(Je,null,null,512),[[$,o(t)==="btnRelationship"]])]),s("li",Ot,[v(g(At,null,null,512),[[$,o(t)==="btnSetting"]])]),s("li",Wt,[v(g(Pt,null,null,512),[[$,o(t)==="btnLogout"]])])],8,Mt))}},Jt=p(jt,[["__scopeId","data-v-9f38fd43"]]);const Qt={class:"panelUI"},Xt={__name:"PanelUI",setup(c){return(e,t)=>(i(),_("section",Qt,[g(xe),g(Se),g(De),g(Be),g(Jt)]))}};const Yt={class:"singlePlayerContainer"},Zt=["src"],ss={__name:"SinglePlayer",setup(c){T(y=>({d29a6c22:o(t).role.currentBackGround}));const e=G(),t=h(),r=U(),l=H(),n=V();return O(()=>{n.game.isDeathKnight=!1,n.clearRepeatTalkChatEventTimer(),l.clearClickScorllTimer(),l.targetScroll=null,e.cleanChat()}),(y,w)=>(i(),_("article",Yt,[g(Ie),g(Xt),s("audio",{autoplay:"",loop:"",src:o(r).getRoleAudioUrl()},null,8,Zt)]))}};export{ss as default};
