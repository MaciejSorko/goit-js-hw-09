const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]");t.disabled=!0;let d=null;e.addEventListener("click",(()=>{d=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),e.disabled=!0,t.disabled=!1})),t.addEventListener("click",(()=>{clearInterval(d),console.log(`Interval with id ${d} has stopped!`),e.disabled=!1,t.disabled=!0}));
//# sourceMappingURL=01-color-switcher.20748758.js.map
