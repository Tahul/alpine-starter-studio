import v from"./TabsHeader.dd25006c.js";import{a as b,V as c,m}from"./entry.643eb91a.js";/* empty css                      *//* empty css                       */const o=(t,r)=>t.type&&t.type.tag&&t.type.tag===r,u=b({data(){return{activeTabIndex:0,counter:0}},render(){var i,p;const t=((p=(i=this.$slots)==null?void 0:i.default)==null?void 0:p.call(i))||[],r=t.map((e,d)=>{var a,n,s;return{label:((a=e==null?void 0:e.props)==null?void 0:a.filename)||((n=e==null?void 0:e.props)==null?void 0:n.label)||`${d}`,active:((s=e==null?void 0:e.props)==null?void 0:s.active)||!1,component:e}});return c("div",{class:{"code-group":!0,"first-tab":this.activeTabIndex===0}},[c(v,{ref:"tabs-header",activeTabIndex:this.activeTabIndex,tabs:r,"onUpdate:activeTabIndex":e=>this.activeTabIndex=e}),c("div",{class:"code-group-content",text:this.activeTabIndex},t.map((e,d)=>{var a,n;return c("div",{style:{display:d===this.activeTabIndex?"block":"none"},class:{"":!o(e,"code")}},[o(e,"code")?e:c("div",{class:{"preview-canvas":!0}},[((n=(a=e.children)==null?void 0:a.default)==null?void 0:n.call(a))||e.children])])}))])}}),I=m(u,[["__scopeId","data-v-577cdd71"]]);export{I as default};
