(this["webpackJsonpdrum-machine-fcc"]=this["webpackJsonpdrum-machine-fcc"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(3),s=a.n(r),o=(a(13),a(4),a(5)),d=a(6),i=a(8),u=a(7),m=a(0),p=[{key:"Q",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{key:"W",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{key:"E",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{key:"A",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{key:"S",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{key:"D",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{key:"Z",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{key:"X",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{key:"C",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}],l=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var c;return Object(o.a)(this,a),(c=t.call(this,e)).playSound=function(){c.audio.current.play();var e=c.audio.current.id,t=c.audio.current.parentNode;t.classList.add("active"),t.parentNode.querySelector("h1").innerText="".concat(e," is in Effect")},c.audio=n.a.createRef(),c}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.audio.current.addEventListener("ended",(function(e){e.target.parentNode.classList.remove("active")}))}},{key:"render",value:function(){var e=this.props,t=e.text,a=e.audio;return Object(m.jsxs)("div",{className:"drum-pad",onClick:this.playSound,id:"drum-".concat(t),children:[t,Object(m.jsx)("audio",{ref:this.audio,src:a,className:"clip",id:t})]})}}]),a}(n.a.Component);document.addEventListener("keydown",(function(e){var t=e.key.toUpperCase(),a=document.getElementById(t);if(a){a.currentTime=0;var c=a.parentNode;c.classList.add("active"),c.parentNode.querySelector("h1").innerText="".concat(t," is in Effect"),a.play()}}));var f=function(){return Object(m.jsxs)("div",{id:"display",className:"display",children:[Object(m.jsx)("h1",{children:"Drum Machinery"}),p.map((function(e,t){return Object(m.jsx)(l,{text:e.key,audio:e.url},t)}))]})},h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(f,{})}),document.getElementById("drum-machine")),h()},4:function(e,t,a){}},[[15,1,2]]]);
//# sourceMappingURL=main.032c07ef.chunk.js.map