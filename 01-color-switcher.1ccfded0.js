const t=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]"),e=document.querySelector("body");let c=null;t.addEventListener("click",(function(){t.classList.add("no-click"),o.classList.remove("no-click"),c=setInterval((()=>{e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),o.addEventListener("click",(function(){t.classList.remove("no-click"),o.classList.add("no-click"),clearTimeout(c),console.log("No more color")}));
//# sourceMappingURL=01-color-switcher.1ccfded0.js.map
