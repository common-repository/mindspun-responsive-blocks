(()=>{"use strict";var t,e={852:(t,e,r)=>{const s=window.wp.blocks;var o=r(609);const n=window.wp.primitives,i=(0,o.createElement)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(n.Path,{d:"m9.99609 14v-.2251l.00391.0001v6.225h1.5v-14.5h2.5v14.5h1.5v-14.5h3v-1.5h-8.50391c-2.76142 0-5 2.23858-5 5 0 2.7614 2.23858 5 5 5z"})),l=window.wp.blockEditor,a=window.mrblx;var c=r(85);const u=t=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(l.InspectorControls,{children:[(0,c.jsx)(a.ContainerContents,{children:(0,c.jsx)(a.BaseControls,{attributes:t.attributes.style?t.attributes.style:{},setAttributes:e=>{t.setAttributes({style:{...t.attributes.style,...e}})},options:{color:{responsive:!0},backgroundColor:{responsive:!0},textAlign:{responsive:!0},fontSize:{responsive:!0},letterCase:!0,fontAppearance:!0,margin:{responsive:!0},padding:{responsive:!0}}})}),(0,c.jsx)(a.ContainerControl,{title:"Custom CSS",children:(0,c.jsx)(a.ContainerContents,{children:(0,c.jsx)(a.CustomCSSControl,{blockId:t.attributes.blockId,attributes:t.attributes.style,setAttributes:e=>{t.setAttributes({style:{...t.attributes.style,...e}})},isResponsive:!0})})})]}),(0,c.jsxs)(l.InspectorAdvancedControls,{children:[(0,c.jsx)(a.BlockId,{attributes:t.attributes}),(0,c.jsx)(a.ViewAll,{attributes:t.attributes.style,onClear:()=>t.setAttributes({style:{}})})]})]}),p=JSON.parse('{"UU":"mindspun/paragraph"}'),d={foreground:"#005ffe",src:i};(0,s.registerBlockType)(p.UU,{edit:function(t){const e=(0,a.useBlockPropsWithId)(t);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(u,{...t}),(0,c.jsx)(a.StylePortalClientId,{clientId:t.clientId,attributes:t.attributes.style}),(0,c.jsx)(l.RichText,{identifier:"content",...e,tagName:"p",onChange:e=>{t.setAttributes({content:e})},value:t.attributes.content,allowedFormats:["core/bold","core/italic","core/link"],placeholder:"Enter text..."})]})},save:function(t){return(0,c.jsx)(l.RichText.Content,{...a.useBlockPropsWithId.save(t),tagName:"p",value:t.attributes.content})},icon:d})},335:(t,e,r)=>{var s=r(609),o=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(t,e,r){var s,n={},c=null,u=null;for(s in void 0!==r&&(c=""+r),void 0!==e.key&&(c=""+e.key),void 0!==e.ref&&(u=e.ref),e)i.call(e,s)&&!a.hasOwnProperty(s)&&(n[s]=e[s]);if(t&&t.defaultProps)for(s in e=t.defaultProps)void 0===n[s]&&(n[s]=e[s]);return{$$typeof:o,type:t,key:c,ref:u,props:n,_owner:l.current}}e.Fragment=n,e.jsx=c,e.jsxs=c},85:(t,e,r)=>{t.exports=r(335)},609:t=>{t.exports=window.React}},r={};function s(t){var o=r[t];if(void 0!==o)return o.exports;var n=r[t]={exports:{}};return e[t](n,n.exports,s),n.exports}s.m=e,t=[],s.O=(e,r,o,n)=>{if(!r){var i=1/0;for(u=0;u<t.length;u++){for(var[r,o,n]=t[u],l=!0,a=0;a<r.length;a++)(!1&n||i>=n)&&Object.keys(s.O).every((t=>s.O[t](r[a])))?r.splice(a--,1):(l=!1,n<i&&(i=n));if(l){t.splice(u--,1);var c=o();void 0!==c&&(e=c)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[r,o,n]},s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={187:0,332:0};s.O.j=e=>0===t[e];var e=(e,r)=>{var o,n,[i,l,a]=r,c=0;if(i.some((e=>0!==t[e]))){for(o in l)s.o(l,o)&&(s.m[o]=l[o]);if(a)var u=a(s)}for(e&&e(r);c<i.length;c++)n=i[c],s.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return s.O(u)},r=globalThis.webpackChunk_mindspun_block_library=globalThis.webpackChunk_mindspun_block_library||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})();var o=s.O(void 0,[332],(()=>s(852)));o=s.O(o)})();