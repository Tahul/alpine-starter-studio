import _ from"./ContentSlot.e0fc1f0c.js";import y from"./ButtonLink.bcdd364d.js";import h from"./Terminal.4fa9796a.js";import k from"./VideoPlayer.211801a4.js";import{a as v,o as s,e as a,f as o,h as c,s as r,j as l,i as u,c as i,F as $,t as d,E as B,m as w}from"./entry.643eb91a.js";/* empty css                      *//* empty css                       */import"./index.d67b06cf.js";/* empty css                     *//* empty css                        */const S={class:"block-hero"},C={class:"layout"},V={class:"content"},g={key:0,class:"announce"},q={class:"title"},H={class:"description"},N={key:1,class:"extra"},b={class:"actions"},A=["href"],T={class:"support"},x=v({__name:"BlockHero",props:{cta:{type:Array,required:!1,default:()=>[]},secondary:{type:Array,required:!1,default:()=>[]},video:{type:String,required:!1,default:""},snippet:{type:[Array,String],required:!1,default:""}},setup(e){return(t,E)=>{const n=_,p=y,m=h,f=k;return s(),a("section",S,[o("div",C,[o("div",V,[t.$slots.announce?(s(),a("p",g,[c(n,{use:t.$slots.announce,unwrap:"p"},null,8,["use"])])):r("",!0),o("h1",q,[c(n,{use:t.$slots.title,unwrap:"p"},{default:l(()=>[u(" Hero Title ")]),_:1},8,["use"])]),o("p",H,[c(n,{use:t.$slots.description,unwrap:"p"},{default:l(()=>[u(" Hero default description. ")]),_:1},8,["use"])]),t.$slots.extra?(s(),a("div",N,[c(n,{use:t.$slots.extra,unwrap:"p"},null,8,["use"])])):r("",!0),o("div",b,[t.$slots.actions?(s(),i(n,{key:0,use:t.$slots.actions,unwrap:"p"},null,8,["use"])):(s(),a($,{key:1},[e.cta?(s(),i(p,{key:0,class:"cta",bold:"",size:"medium",href:e.cta[1]},{default:l(()=>[u(d(e.cta[0]),1)]),_:1},8,["href"])):r("",!0),e.secondary?(s(),a("a",{key:1,href:e.secondary[1],class:"secondary"},d(e.secondary[0]),9,A)):r("",!0)],64))])]),o("div",T,[B(t.$slots,"support",{},()=>[e.snippet?(s(),i(m,{key:0,content:e.snippet},null,8,["content"])):e.video?(s(),i(f,{key:1,src:e.video},null,8,["src"])):r("",!0)],!0)])])])}}}),M=w(x,[["__scopeId","data-v-b7c89672"]]);export{M as default};
