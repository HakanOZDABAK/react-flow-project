(this["webpackJsonpmind-node"]=this["webpackJsonpmind-node"]||[]).push([[0],{10:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),a=n(2),r=n.n(a),c=(n(10),n(3)),l=n(1),u=[],d=function(e){e.fitView()},s={width:"100%",height:"90vh"},p=function(){var e=Object(o.useState)(u),t=Object(c.a)(e,2),n=t[0],a=t[1],r=Object(o.useState)(""),p=Object(c.a)(r,2),h=p[0],m=p[1];return i.a.createElement(o.Fragment,null,i.a.createElement(l.e,{elements:n,onLoad:d,style:s,onConnect:function(e){return a((function(t){return Object(l.d)(e,t)}))},connectionLineStyle:{stroke:"#ddd",strokeWidth:2},connectionLineType:"bezier",snapToGrid:!0,snapGrid:[16,16]},i.a.createElement(l.a,{color:"#888",gap:16}),i.a.createElement(l.c,{nodeColor:function(e){return"input"===e.type?"blue":"red"}}),i.a.createElement(l.b,null)),i.a.createElement("div",null,i.a.createElement("input",{type:"text",onChange:function(e){return m(e.target.value)},name:"title"}),i.a.createElement("button",{style:{width:"50px",height:"50px",marginLeft:"10px",borderRadius:"50%"},type:"button",onClick:function(){a((function(e){return e.concat({id:(e.length+1).toString(),data:{label:h},type:"default",position:{x:.1*window.innerWidth,y:.1*window.innerHeight}})}))}},"API "),i.a.createElement("button",{style:{width:"50px",height:"50px",borderRadius:"50%",marginLeft:"10px"},type:"button",onClick:function(){a((function(e){return e.concat({id:(e.length+1).toString(),data:{label:h},type:"output",position:{x:.1*window.innerWidth,y:.1*window.innerHeight},style:{backgroundColor:"blue"}})}))}},"Users "),i.a.createElement("button",{style:{width:"50px",height:"50px",marginLeft:"10px",borderRadius:"50%"},type:"button",onClick:function(){a((function(e){return e.concat({id:(e.length+1).toString(),type:"input",data:{label:h},position:{x:0,y:0}})}))}},"DB "),i.a.createElement("button",{style:{width:"100px",height:"50px",marginLeft:"100px"},type:"button",onClick:function(){var e=JSON.stringify(n,null,2);console.log(e);var t=new Blob([e],{type:"application/json"}),o=URL.createObjectURL(t),i=document.createElement("a");i.href=o,i.download="diagram.json",i.click(),URL.revokeObjectURL(o)}}," Save As a JSON File")))};n(14);var h=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,n){e.exports=n(15)}},[[5,1,2]]]);
//# sourceMappingURL=main.60a2b6ec.chunk.js.map