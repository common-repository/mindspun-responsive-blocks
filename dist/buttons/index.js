(()=>{var t,e={464:(t,e,r)=>{"use strict";const o=window.wp.blocks;var s=r(609);const i=window.wp.primitives,n=(0,s.createElement)(i.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,s.createElement)(i.Path,{d:"M14.5 17.5H9.5V16H14.5V17.5Z M14.5 8H9.5V6.5H14.5V8Z M7 3.5H17C18.1046 3.5 19 4.39543 19 5.5V9C19 10.1046 18.1046 11 17 11H7C5.89543 11 5 10.1046 5 9V5.5C5 4.39543 5.89543 3.5 7 3.5ZM17 5H7C6.72386 5 6.5 5.22386 6.5 5.5V9C6.5 9.27614 6.72386 9.5 7 9.5H17C17.2761 9.5 17.5 9.27614 17.5 9V5.5C17.5 5.22386 17.2761 5 17 5Z M7 13H17C18.1046 13 19 13.8954 19 15V18.5C19 19.6046 18.1046 20.5 17 20.5H7C5.89543 20.5 5 19.6046 5 18.5V15C5 13.8954 5.89543 13 7 13ZM17 14.5H7C6.72386 14.5 6.5 14.7239 6.5 15V18.5C6.5 18.7761 6.72386 19 7 19H17C17.2761 19 17.5 18.7761 17.5 18.5V15C17.5 14.7239 17.2761 14.5 17 14.5Z"})),l=window.wp.blockEditor,a=window.mrblx,u=window.wp.components,b=window.wp.i18n;var d=r(85);const c=t=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l.InspectorControls,{children:(0,d.jsxs)("div",{className:"wp-block-mindspun-buttons--controls",children:[(0,d.jsxs)(a.ContainerContents,{children:[(0,d.jsx)(a.JustifyContentControl,{attributes:t.attributes.style,setAttributes:e=>{t.setAttributes({style:{...t.attributes.style,...e}})},options:["left","center","right","space-between"],isResponsive:!0}),(0,d.jsx)(u.ToggleControl,{label:(0,b.__)("Allow to wrap to multiple lines."),checked:void 0===t.attributes.style.flexWrap||"wrap"===t.attributes.style.flexWrap,onChange:e=>{const r={...t.attributes.style,flexWrap:e?void 0:"nowrap"};t.setAttributes({style:r})}}),(0,d.jsx)(a.ColorsGroup,{isResponsive:!0,children:(0,d.jsx)(a.BackgroundColorControl,{attributes:t.attributes.style,setAttributes:e=>{t.setAttributes({style:{...t.attributes.style,...e}})},isResponsive:!0,hideHeader:!0})}),(0,d.jsx)(a.GapControl,{attributes:t.attributes.style,setAttributes:e=>{t.setAttributes({style:{...t.attributes.style,...e}})},isResponsive:!0}),(0,d.jsx)(a.MarginControl,{attributes:t.attributes.style,setAttributes:e=>{t.setAttributes({style:{...t.attributes.style,...e}})},isResponsive:!0}),(0,d.jsx)(a.PaddingControl,{attributes:t.attributes.style,setAttributes:e=>{t.setAttributes({style:{...t.attributes.style,...e}})},isResponsive:!0})]}),(0,d.jsx)(a.ContainerControl,{title:"Custom CSS",children:(0,d.jsx)(a.ContainerContents,{children:(0,d.jsx)(a.CustomCSSControl,{blockId:t.attributes.blockId,attributes:t.attributes.style,setAttributes:e=>{t.setAttributes({style:{...t.attributes.style,...e}})},isResponsive:!0})})})]})}),(0,d.jsxs)(l.InspectorAdvancedControls,{children:[(0,d.jsx)(a.BlockId,{attributes:t.attributes}),(0,d.jsx)(a.ViewAll,{attributes:t.attributes.style,onClear:()=>t.setAttributes({style:{}})})]})]}),p=(0,s.createElement)(i.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,s.createElement)(i.Path,{d:"M8 12.5h8V11H8v1.5Z M19 6.5H5a2 2 0 0 0-2 2V15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a2 2 0 0 0-2-2ZM5 8h14a.5.5 0 0 1 .5.5V15a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V8.5A.5.5 0 0 1 5 8Z"}));var v=r(373),m=r.n(v);const C=(0,s.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,s.createElement)(i.Path,{d:"M18 5.5H6a.5.5 0 00-.5.5v3h13V6a.5.5 0 00-.5-.5zm.5 5H10v8h8a.5.5 0 00.5-.5v-7.5zm-10 0h-3V18a.5.5 0 00.5.5h2.5v-8zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"})),h=(0,s.createElement)(i.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,s.createElement)(i.Path,{d:"M12 4c-4.4 0-8 3.6-8 8v.1c0 4.1 3.2 7.5 7.2 7.9h.8c4.4 0 8-3.6 8-8s-3.6-8-8-8zm0 15V5c3.9 0 7 3.1 7 7s-3.1 7-7 7z"})),y=t=>(0,d.jsx)(a.BorderControl,{label:"Border",attributes:{borderTop:t.attributes.borderTopHover,borderRight:t.attributes.borderRightHover,borderBottom:t.attributes.borderBottomHover,borderLeft:t.attributes.borderLeftHover,tabletBorderTop:t.attributes.tabletBorderTopHover,tabletBorderRight:t.attributes.tabletBorderRightHover,tabletBorderBottom:t.attributes.tabletBorderBottomHover,tabletBorderLeft:t.attributes.tabletBorderLeftHover,mobileBorderTop:t.attributes.mobileBorderTopHover,mobileBorderRight:t.attributes.mobileBorderRightHover,mobileBorderBottom:t.attributes.mobileBorderBottomHover,mobileBorderLeft:t.attributes.mobileBorderLeftHover},setAttributes:e=>{const r={...t.attributes,borderTopHover:e.borderTop,borderRightHover:e.borderRight,borderBottomHover:e.borderBottom,borderLeftHover:e.borderLeft,tabletBorderTopHover:e.tabletBorderTop,tabletBorderRightHover:e.tabletBorderRight,tabletBorderBottomHover:e.tabletBorderBottom,tabletBorderLeftHover:e.tabletBorderLeft,mobileBorderTopHover:e.mobileBorderTop,mobileBorderRightHover:e.mobileBorderRight,mobileBorderBottomHover:e.mobileBorderBottom,mobileBorderLeftHover:e.mobileBorderLeft};t.setAttributes(r)},isResponsive:!0,disableRadiusControl:!0}),x=t=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.ContainerContents,{children:(0,d.jsx)(a.BaseControls,{attributes:t.attributes.style?t.attributes.style:{},setAttributes:e=>{t.setAttributes({style:{...t.attributes.style,...e}})},options:{color:{responsive:!0},backgroundColor:{responsive:!0},fontSize:{responsive:!0},fontAppearance:!0,letterCase:!0,margin:{responsive:!0},padding:{responsive:!0},border:{responsive:!0}}})}),(0,d.jsx)(a.ContainerControl,{title:(0,b.__)("Hover"),children:(0,d.jsxs)(a.ContainerContents,{children:[(0,d.jsxs)(a.ColorsGroup,{isResponsive:!0,children:[(0,d.jsx)(a.ColorControl,{label:"Color",attributes:{color:t.attributes.style.colorHover,tabletColor:t.attributes.style.tabletColorHover,mobileColor:t.attributes.style.mobileColorHover},setAttributes:e=>{const r={...t.attributes.style,colorHover:e.color,tabletColorHover:e.tabletColor,mobileColorHover:e.mobileColor};t.setAttributes({style:r})},isResponsive:!0,hideHeader:!0}),(0,d.jsx)(a.ColorControl,{label:"Background",attributes:{color:t.attributes.style.backgroundColorHover,tabletColor:t.attributes.style.tabletBackgroundColorHover,mobileColor:t.attributes.style.mobileBackgroundColorHover},setAttributes:e=>{const r={...t.attributes.style,backgroundColorHover:e.color,tabletBackgroundColorHover:e.tabletColor,mobileBackgroundColor:e.mobileColor};t.setAttributes({style:r})},isResponsive:!0,hideHeader:!0})]}),(0,d.jsx)(y,{attributes:t.attributes.style,setAttributes:e=>{t.setAttributes({style:{...t.attributes.style,...e}})}})]})}),(0,d.jsx)(a.ContainerControl,{title:(0,b.__)("Custom CSS"),children:(0,d.jsx)(a.ContainerContents,{children:(0,d.jsx)(a.CustomCSSControl,{blockId:t.attributes.blockId,attributes:t.attributes.style,setAttributes:e=>{t.setAttributes({style:{...t.attributes.style,...e}})},isResponsive:!0})})})]}),f=[{label:"Primary",value:"primary"},{label:"Outline",value:"outline"},{label:"Link",value:"link"}],g=t=>(0,d.jsxs)("div",{className:"mrblx--button-variant-control",children:[(0,d.jsx)(a.ControlHeader,{title:(0,b.__)("Button Type")}),(0,d.jsx)(u.SelectControl,{value:t.attributes.variant,options:f,onChange:e=>t.setAttributes({variant:e}),__nextHasNoMarginBottom:!0})]}),j=t=>(0,d.jsxs)("div",{className:"mrblx--custom-event-control",children:[(0,d.jsx)(u.TextControl,{label:(0,b.__)("Custom Event"),value:t.attributes.customEvent.type?t.attributes.customEvent.type:"",onChange:e=>{const r={...t.attributes.customEvent,type:e||void 0};t.setAttributes({customEvent:r})},help:(0,b.__)("The custom event type to be emitted when the button is clicked.")}),t.attributes.customEvent.type?(0,d.jsx)(u.TextControl,{label:(0,b.__)("Custom Event Detail"),value:t.attributes.customEvent.detail?t.attributes.customEvent.detail:"",onChange:e=>{const r={...t.attributes.customEvent,detail:e||null};t.setAttributes({customEvent:r})},help:(0,b.__)("The detail attribute included with the event.")}):null]}),B=t=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l.InspectorControls,{children:(0,d.jsx)("div",{className:"wp-block-mindspun-button--controls",children:(0,d.jsxs)(a.TabbedControl,{children:[(0,d.jsx)(a.TabbedContainer,{icon:C,children:(0,d.jsxs)(a.ContainerContents,{children:[(0,d.jsx)(g,{attributes:t.attributes,setAttributes:t.setAttributes}),(0,d.jsx)(a.WidthHeightControl,{label:(0,b.__)("Width"),propertyName:"width",attributes:t.attributes.style,setAttributes:e=>{t.setAttributes({style:{...t.attributes.style,...e}})},isResponsive:!0}),(0,d.jsx)("hr",{}),(0,d.jsx)(a.LinkControl,{attributes:t.attributes.link,setAttributes:e=>{t.setAttributes({link:{...t.attributes.link,...e}})}})]})},"General"),(0,d.jsx)(a.TabbedContainer,{icon:h,children:(0,d.jsx)(x,{attributes:t.attributes,setAttributes:t.setAttributes})},"Style")]})})}),(0,d.jsxs)(l.InspectorAdvancedControls,{children:[(0,d.jsx)(j,{attributes:t.attributes,setAttributes:t.setAttributes}),(0,d.jsx)(a.BlockId,{attributes:t.attributes}),(0,d.jsx)(a.ViewAll,{attributes:t.attributes.style,onClear:()=>t.setAttributes({style:{}})})]})]});function w(t){let e=null;if(t&&t.type)if(t.detail){const r=t.detail.trim();e=`new CustomEvent('${t.type}',{detail:'${r}'})`}else e=`new CustomEvent('${t.type}')`;if(e)return`javascript:window.dispatchEvent(${e})`}function k(t){const e=t.link.rel?[...t.link.rel]:[];return t.link.target&&!e.includes("noopener")&&e.push("noopener"),e.length?e.join(" "):void 0}const H="mindspun/button";var A;A={name:H,title:"Button",description:"A single button in a button group.",parent:["mindspun/buttons"],attributes:{blockId:{type:"string"},fullWidth:{type:"boolean",default:!1},variant:{type:"string",default:"primary"},text:{type:"string"},link:{type:"object",default:{rel:["noopener"]}},customEvent:{type:"object",default:{}},style:{type:"object",default:{}}},usesContext:["mindspun/buttons"],edit:function(t){const e=(0,a.useBlockPropsWithId)(t,{className:m()(`variant-${t.attributes.variant}`,{"wp-element-button":"link"!==t.attributes.variant})});return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(B,{...t}),(0,d.jsx)(a.StylePortalClientId,{clientId:t.clientId,attributes:t.attributes.style}),(0,d.jsx)(l.RichText,{...e,tagName:"a",onChange:e=>{t.setAttributes({text:e})},value:t.attributes.text,allowedFormats:[],placeholder:"Button"})]})},save:function(t){const e=t.attributes.variant||"primary",r=a.useBlockPropsWithId.save(t,{className:m()(`variant-${e}`,{"wp-element-button":"link"!==e})});return(0,d.jsx)("a",{...r,href:t.attributes.link.href,target:t.attributes.link.target,rel:k(t.attributes),onClick:w(t.attributes.customEvent),children:t.attributes.text})},icon:{foreground:"#005ffe",src:p}},(0,o.registerBlockType)(A.name,{$schema:"https://schemas.wp.org/trunk/block.json",apiVersion:3,category:"mindspun-responsive-blocks",textdomain:"mrblx",...A});const _=JSON.parse('{"UU":"mindspun/buttons"}'),R={foreground:"#005ffe",src:n};(0,o.registerBlockType)(_.UU,{edit:function(t){const e=(0,a.useBlockPropsWithId)(t),r=(0,l.useInnerBlocksProps)(e,{template:[[H]],allowedBlocks:[H]});return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(c,{...t}),(0,d.jsx)(a.StylePortalClientId,{clientId:t.clientId,attributes:t.attributes.style}),(0,d.jsx)("div",{...r})]})},save:function(t){const e=a.useBlockPropsWithId.save(t),r=l.useInnerBlocksProps.save(e);return(0,d.jsx)("div",{...r})},icon:R})},335:(t,e,r)=>{"use strict";var o=r(609),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,l=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(t,e,r){var o,i={},u=null,b=null;for(o in void 0!==r&&(u=""+r),void 0!==e.key&&(u=""+e.key),void 0!==e.ref&&(b=e.ref),e)n.call(e,o)&&!a.hasOwnProperty(o)&&(i[o]=e[o]);if(t&&t.defaultProps)for(o in e=t.defaultProps)void 0===i[o]&&(i[o]=e[o]);return{$$typeof:s,type:t,key:u,ref:b,props:i,_owner:l.current}}e.Fragment=i,e.jsx=u,e.jsxs=u},85:(t,e,r)=>{"use strict";t.exports=r(335)},609:t=>{"use strict";t.exports=window.React},373:(t,e)=>{var r;!function(){"use strict";var o={}.hasOwnProperty;function s(){for(var t="",e=0;e<arguments.length;e++){var r=arguments[e];r&&(t=n(t,i(r)))}return t}function i(t){if("string"==typeof t||"number"==typeof t)return t;if("object"!=typeof t)return"";if(Array.isArray(t))return s.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var e="";for(var r in t)o.call(t,r)&&t[r]&&(e=n(e,r));return e}function n(t,e){return e?t?t+" "+e:t+e:t}t.exports?(s.default=s,t.exports=s):void 0===(r=function(){return s}.apply(e,[]))||(t.exports=r)}()}},r={};function o(t){var s=r[t];if(void 0!==s)return s.exports;var i=r[t]={exports:{}};return e[t](i,i.exports,o),i.exports}o.m=e,t=[],o.O=(e,r,s,i)=>{if(!r){var n=1/0;for(b=0;b<t.length;b++){for(var[r,s,i]=t[b],l=!0,a=0;a<r.length;a++)(!1&i||n>=i)&&Object.keys(o.O).every((t=>o.O[t](r[a])))?r.splice(a--,1):(l=!1,i<n&&(n=i));if(l){t.splice(b--,1);var u=s();void 0!==u&&(e=u)}}return e}i=i||0;for(var b=t.length;b>0&&t[b-1][2]>i;b--)t[b]=t[b-1];t[b]=[r,s,i]},o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={954:0,949:0};o.O.j=e=>0===t[e];var e=(e,r)=>{var s,i,[n,l,a]=r,u=0;if(n.some((e=>0!==t[e]))){for(s in l)o.o(l,s)&&(o.m[s]=l[s]);if(a)var b=a(o)}for(e&&e(r);u<n.length;u++)i=n[u],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(b)},r=globalThis.webpackChunk_mindspun_block_library=globalThis.webpackChunk_mindspun_block_library||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})();var s=o.O(void 0,[949],(()=>o(464)));s=o.O(s)})();