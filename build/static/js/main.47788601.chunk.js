(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){},16:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var l=t(0),o=t.n(l),n=t(6),c=t.n(n);t(15),t(16);function s(){const[e,a]=Object(l.useState)({color:"black",backgroundColor:"white"}),[t,n]=Object(l.useState)("Enable Dark mode");return o.a.createElement("div",{className:"container",style:e},o.a.createElement("h1",{className:"my-2"},"About us"),o.a.createElement("div",{className:"accordion",id:"accordionExample"},o.a.createElement("div",{className:"accordion-item",style:e},o.a.createElement("h2",{className:"accordion-header"},o.a.createElement("button",{className:"accordion-button",type:"button",style:e,"data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},"Accordion Item #1")),o.a.createElement("div",{id:"collapseOne",className:"accordion-collapse collapse show","data-bs-parent":"#accordionExample"},o.a.createElement("div",{className:"accordion-body"},o.a.createElement("strong",null,"This is the first item's accordion body.")," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",o.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),o.a.createElement("div",{className:"accordion-item",style:e},o.a.createElement("h2",{className:"accordion-header"},o.a.createElement("button",{className:"accordion-button collapsed",style:e,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"},"Accordion Item #2")),o.a.createElement("div",{id:"collapseTwo",className:"accordion-collapse collapse","data-bs-parent":"#accordionExample"},o.a.createElement("div",{className:"accordion-body"},o.a.createElement("strong",null,"This is the second item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",o.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),o.a.createElement("div",{className:"accordion-item",style:e},o.a.createElement("h2",{className:"accordion-header"},o.a.createElement("button",{className:"accordion-button collapsed",type:"button",style:e,"data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"},"Accordion Item #3")),o.a.createElement("div",{id:"collapseThree",className:"accordion-collapse collapse","data-bs-parent":"#accordionExample"},o.a.createElement("div",{className:"accordion-body"},o.a.createElement("strong",null,"This is the third item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",o.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow.")))),o.a.createElement("div",{className:"container"},o.a.createElement("button",{onClick:()=>{"white"===e.color?(a({color:"black",backgroundColor:"white"}),n("Enable Dark mode")):(a({color:"white",backgroundColor:"black",border:"1px solid white"}),n("Enable Light mode"))},className:"btn btn-success mx-2 my-2"},t)))}var r=t(3);function i(e){return o.a.createElement("div",null,o.a.createElement("nav",{className:"navbar navbar-expand-lg bg-body-tertiary","data-bs-theme":"".concat(e.mode)},o.a.createElement("div",{className:"container-fluid"},o.a.createElement(r.b,{className:"navbar-brand",to:"/"},e.title),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},o.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(r.b,{className:"nav-link active","aria-current":"page",to:"/"},"Home")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(r.b,{className:"nav-link",to:"/about"},"About"))),o.a.createElement("form",{className:"d-flex",role:"search"},o.a.createElement("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),o.a.createElement("button",{className:"btn btn-success",type:"submit"},"Search")),o.a.createElement("div",{className:"form-check form-switch  mx-3 text-".concat("light"===e.mode?"dark":"light")},o.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),o.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable DarkMode"))))))}function m(e){const[a,t]=Object(l.useState)(""),[n,c]=Object(l.useState)("Copy"),s=a.length;let r=a.split(" ").length;return 0!==s&&" "!==a.charAt(a.length-1)||(r-=1),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"}},o.a.createElement("h1",{className:"my-3"},e.heading),o.a.createElement("textarea",{style:{backgroundColor:"dark"===e.mode?"#495057":"white",color:"dark"===e.mode?"white":"black"},className:"form-control my-2",id:"myBox",rows:"8",value:a,onChange:e=>{console.log("OnChange"),t(e.target.value)}}),o.a.createElement("button",{className:"btn btn-success mx-2 my-2",onClick:()=>{console.log("You have clicked on handleUpClick");const l=a.toUpperCase();t(l),e.showAlert("Converted to Uppercase","success"),0===a.length&&e.showAlert("There is no text to convert","warning")}},"Convert to Uppercase"),o.a.createElement("button",{className:"btn btn-success mx-2 my-2",onClick:()=>{console.log("You have clicked on handleUpClick");const l=a.toLowerCase();t(l),e.showAlert("Converted to Lowercase","success"),0===a.length&&e.showAlert("There is no text to convert","warning")}},"Convert to Lowercase"),o.a.createElement("button",{className:"btn btn-success mx-2 my-2",onClick:()=>{console.log("You have clicked on handleClearClick");t("")}},"Clear Text"),o.a.createElement("button",{className:"btn btn-success mx-2 my-2",onClick:()=>{console.log("You clicked on Copy button");var e=document.getElementById("myBox");e.select(),navigator.clipboard.writeText(e.value),c("Copied to clipboard"),setTimeout(()=>{c("Copy")},800)}},n),o.a.createElement("button",{className:"btn btn-success mx-2 my-2",onClick:()=>{console.log("You clicked on Clear Extra Spaces");let l=a.split(/[ ]+/);t(l.join(" ")),e.showAlert("Extra Spaces removed !","success"),0===a.length&&e.showAlert("There is no text to convert","warning")}},"Remove Extra Spaces"),o.a.createElement("button",{className:"btn btn-success mx-2 my-2",onClick:()=>{console.log("You clicked on Capitalize Sentence Case");let l=a.split(". ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(". ");t(l),e.showAlert("Capitalised the first letter of every sentence","success"),0===a.length&&e.showAlert("There is no text to convert","warning")}},"Capitalise Sentences")),o.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"}},o.a.createElement("h2",null,"Your Text Sumamry"),o.a.createElement("p",null,r," words and ",s," characters"),o.a.createElement("p",null,r/125," Minutes to read"),o.a.createElement("h2",null,"Preview"),o.a.createElement("p",null,a.length>0?a:"Enter something in the text box above to preview it here.")))}function d(e){return e.alert&&o.a.createElement("div",null,o.a.createElement("div",{class:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},o.a.createElement("strong",null,(e=>{const a=e.toLowerCase();return a.charAt(0).toUpperCase()+a.slice(1)})(e.alert.type)),": ",e.alert.msg,o.a.createElement("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})))}var u=t(1);var h=function(){const[e,a]=Object(l.useState)("light"),[t,n]=Object(l.useState)(null),c=(e,a)=>{n({msg:e,type:a}),setTimeout(()=>{n(null)},1500)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(r.a,null,o.a.createElement(i,{title:"TextUtils",mode:e,toggleMode:()=>{"light"===e?(a("dark"),document.body.style.backgroundColor="#495057",c("Dark mode is Enabled","success")):(a("light"),document.body.style.backgroundColor="white",c("Light mode is Enabled","success"))}}),o.a.createElement(d,{alert:t}),o.a.createElement("div",{className:"container my-3"},o.a.createElement(u.c,null,o.a.createElement(u.a,{exact:!0,path:"/about",element:o.a.createElement(s,null)}),o.a.createElement(u.a,{exact:!0,path:"/",element:o.a.createElement(m,{heading:"Enter text to analyze",mode:e,showAlert:c})})))))};var b=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,18)).then(a=>{let{getCLS:t,getFID:l,getFCP:o,getLCP:n,getTTFB:c}=a;t(e),l(e),o(e),n(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null))),b()},7:function(e,a,t){e.exports=t(17)}},[[7,1,2]]]);
//# sourceMappingURL=main.47788601.chunk.js.map