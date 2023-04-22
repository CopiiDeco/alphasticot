(function(){"use strict";var t={7534:function(t,e,n){var r=n(9242),i=n(3396);function s(t,e,n,r,s,a){const o=(0,i.up)("NavBar"),l=(0,i.up)("LetterGuess");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(o),(0,i.Wm)(l,{class:"home"})],64)}var a=n(7139);const o=t=>((0,i.dD)("data-v-6e4fe03c"),t=t(),(0,i.Cn)(),t),l={class:"home card"},c={class:"home grid main-container min-h-full p-4"},u={class:"col left"},d={class:"flex flex-wrap justify-content-end card-container gap-0 w-full"},f={class:"flex flex-wrap card-container gap-0 max-w-8rem"},p={class:"col middle text-8xl font-bold align-content-center text-center vertical-align-middle"},m={key:1,class:"flex flex-wrap justify-content-center card-container gap-0 w-full"},h={class:"flex align-items-center justify-content-center w-12rem h-12rem font-bold border-round m-2 align-content-center surface-500"},g={key:0},k={key:0},v=o((()=>(0,i._)("i",{class:"pi pi-play",style:{"font-size":"6rem"}},null,-1))),y=[v],w={key:1},b=o((()=>(0,i._)("i",{class:"pi pi-thumbs-up-fill",style:{"font-size":"6rem"}},null,-1))),S=[b],x={key:2},j={class:"col right justify-content-start"},O={class:"flex flex-wrap justify-content-start card-container gap-0 w-full"},D={class:"flex flex-column card-container green-container"},C={key:0,class:"flex align-items-center justify-content-center h-4rem font-bold border-round m-2"},T={key:1,class:"flex align-items-center justify-content-center h-4rem font-bold border-round m-2"},_={key:2,class:"flex align-items-center justify-content-center h-4rem font-bold border-round m-2"},A={key:3,class:"flex align-items-center justify-content-center h-4rem font-bold border-round m-2"},L={class:"flex align-items-center justify-content-center h-4rem font-bold border-round m-2"},G={key:4};function N(t,e,n,r,s,o){const v=(0,i.up)("StatsScreen"),b=(0,i.up)("Button");return(0,i.wg)(),(0,i.iD)("div",l,[(0,i._)("div",c,[(0,i._)("div",u,[(0,i._)("div",d,[(0,i._)("div",f,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.lettersWithBackground,(t=>((0,i.wg)(),(0,i.iD)("div",{key:t.letter,class:(0,a.C_)(["w-2rem h-2rem font-bold flex align-items-center justify-content-center",t.background])},(0,a.zw)(t.letter),3)))),128))])])]),(0,i._)("div",p,[s.statsActive?((0,i.wg)(),(0,i.j4)(v,{key:0})):(0,i.kq)("",!0),s.statsActive?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",m,[(0,i._)("div",h,[s.statsActive?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",g,["NOT_STARTED"===s.gameStatus?((0,i.wg)(),(0,i.iD)("div",k,[(0,i._)("a",{onClick:e[0]||(e[0]=(...t)=>o.startGame&&o.startGame(...t))},y)])):(0,i.kq)("",!0),"WON"===s.gameStatus?((0,i.wg)(),(0,i.iD)("div",w,S)):(0,i.kq)("",!0),"STARTED"===s.gameStatus?((0,i.wg)(),(0,i.iD)("div",x,(0,a.zw)(s.pickedLetter),1)):(0,i.kq)("",!0)]))])]))]),(0,i._)("div",j,[(0,i._)("div",O,[(0,i._)("div",D,["STARTED"===s.gameStatus?((0,i.wg)(),(0,i.iD)("div",C,[(0,i.Wm)(b,{onClick:o.foundLetter,icon:"pi pi-check",rounded:""},null,8,["onClick"])])):(0,i.kq)("",!0),"STARTED"===s.gameStatus?((0,i.wg)(),(0,i.iD)("div",T,[(0,i.Wm)(b,{onClick:o.notFoundLetter,icon:"pi pi-times",rounded:""},null,8,["onClick"])])):(0,i.kq)("",!0),"STARTED"===s.gameStatus&&s.letters[s.pickedLetter].tries?((0,i.wg)(),(0,i.iD)("div",_,[(0,i.Wm)(b,{onClick:o.speakLetter,icon:"pi pi-volume-up",rounded:""},null,8,["onClick"])])):(0,i.kq)("",!0),"STARTED"!==s.gameStatus?((0,i.wg)(),(0,i.iD)("div",A,[s.statsActive?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(b,{key:0,onClick:o.showStats,rounded:"",icon:"pi pi-chart-bar"},null,8,["onClick"])),s.statsActive?((0,i.wg)(),(0,i.j4)(b,{key:1,onClick:o.hideStats,rounded:"",icon:"pi pi-step-backward"},null,8,["onClick"])):(0,i.kq)("",!0)])):(0,i.kq)("",!0),(0,i._)("div",L,[s.statsActive?((0,i.wg)(),(0,i.j4)(b,{key:0,onClick:o.clearStats,rounded:"",icon:"pi pi-trash"},null,8,["onClick"])):(0,i.kq)("",!0)]),"WON"===s.gameStatus?((0,i.wg)(),(0,i.iD)("div",G,[(0,i.Wm)(b,{onClick:o.startGame,rounded:"",icon:"pi pi-undo"},null,8,["onClick"])])):(0,i.kq)("",!0)])])])])])}n(7658);const R={className:"card"},E={key:1,className:"p-d-flex p-jc-center p-ai-center p-text-center p-text-bold p-text-italic p-mt-5rem"},q=(0,i._)("p",null,"Start playing to see your stats",-1),W=[q];function I(t,e,n,r,s,a){const o=(0,i.up)("Chart");return(0,i.wg)(),(0,i.iD)("div",R,[s.lastGames.length>0?((0,i.wg)(),(0,i.j4)(o,{key:0,type:"line",data:s.chartData,options:s.chartOptions,class:"h-30rem"},null,8,["data","options"])):((0,i.wg)(),(0,i.iD)("div",E,W))])}var P=n(1299),Z={name:"StatsScreen",components:{Chart:P.Z},data(){return{lastGames:[],chartData:null,chartOptions:null}},mounted(){this.lastGames=JSON.parse(localStorage.getItem("lastGames"))||[],this.chartData=this.getRates(),this.chartOptions=this.setChartOptions()},methods:{setChartOptions(){const t=getComputedStyle(document.documentElement),e=t.getPropertyValue("--text-color"),n=t.getPropertyValue("--text-color-secondary"),r=t.getPropertyValue("--surface-border");return{stacked:!1,maintainAspectRatio:!1,aspectRatio:.6,plugins:{legend:{labels:{color:e}}},scales:{x:{ticks:{color:n},grid:{color:r}},y:{type:"linear",display:!0,position:"left",ticks:{beginAtZero:!0,suggestedMax:26,color:n},grid:{color:r}}}}},getRates(){let t=[],e=[],n=[];return this.lastGames.sort(((t,e)=>new Date(t.date)-new Date(e.date))),this.lastGames.forEach((r=>{let i=new Date(r.date);i=i.getDate()+"/"+(i.getMonth()+1)+"/"+i.getFullYear(),t.push(i);let s=Object.keys(r.letters).filter((t=>r.letters[t].found&&!r.letters[t].tries)).length,a=Object.keys(r.letters).filter((t=>r.letters[t].found&&r.letters[t].tries)).length;n.push(s),e.push(a)})),{labels:t,datasets:[{label:"Known",data:n,fill:!1,tension:.2},{label:"Unknown",data:e,fill:!1,tension:.2}]}}}},B=n(89);const M=(0,B.Z)(Z,[["render",I]]);var V=M,F=n(2236),J={name:"LetterGuess",components:{StatsScreen:V,Button:F.Z},data(){return{gameStatus:"NOT_STARTED",letters:{},synth:window.speechSynthesis,pickedLetter:"",statsActive:!1}},computed:{lettersWithBackground(){return Object.keys(this.letters).map((t=>({letter:t,background:this.letters[t].found?"bg-green-500":this.letters[t].tries?"bg-red-500":"opacity-0"})))}},mounted(){console.log("mounted starting"),this.gameStarted=!1},methods:{hideStats:function(){this.statsActive=!1},clearStats:function(){localStorage.setItem("lastGames",JSON.stringify([])),this.statsActive=!1},showStats:function(){this.statsActive=!0},speakLetter:function(){var t=new SpeechSynthesisUtterance(this.pickedLetter.toLowerCase());t.voice=this.synth.getVoices().find((t=>"fr-FR"===t.lang)),window.speechSynthesis.speak(t)},incrementTries(t){t.tries?t.tries++:t.tries=1},notFoundLetter:function(){this.letters[this.pickedLetter].found=!1,this.incrementTries(this.letters[this.pickedLetter]),this.startRound()},foundLetter:function(){this.letters[this.pickedLetter].found=!0,this.startRound()},startGame:function(){this.gameStatus="STARTED",this.letters={};for(var t=65;t<=90;t++)this.letters[String.fromCharCode(t)]={found:!1};this.startRound()},startRound:function(){this.pickLetter()},pickLetter(){let t=Object.keys(this.letters).filter((t=>!this.letters[t].found&&!this.letters[t].tries));0===t.length&&(t=Object.keys(this.letters).filter((t=>!this.letters[t].found))),0!==t.length?this.pickedLetter=t[Math.floor(Math.random()*t.length)]:this.endGame()},endGame(){this.gameStatus="WON",localStorage.getItem("lastGames")||localStorage.setItem("lastGames",JSON.stringify([]));let t={date:new Date,letters:this.letters,known:Object.keys(this.letters).filter((t=>t.found&&!t.tries)).length,unknown:Object.keys(this.letters).filter((t=>t.found&&t.tries)).length},e=JSON.parse(localStorage.getItem("lastGames"));e.push(t),this.letters={},localStorage.setItem("lastGames",JSON.stringify(e))}}};const z=(0,B.Z)(J,[["render",N],["__scopeId","data-v-6e4fe03c"]]);var U=z;const Y={class:"flex flex-wrap card-container gap-0 max-w-8rem"},H={class:"flex align-content-end"},K=(0,i._)("i",{class:"pi pi-sun"},null,-1),Q=(0,i._)("i",{class:"pi pi-moon"},null,-1);function X(t,e,n,r,s,a){const o=(0,i.up)("InputSwitch");return(0,i.wg)(),(0,i.iD)("div",Y,[(0,i._)("div",H,[K,(0,i.Wm)(o,{modelValue:s.dark,"onUpdate:modelValue":e[0]||(e[0]=t=>s.dark=t)},null,8,["modelValue"]),Q])])}var $=n(2439),tt={name:"NavBar",components:{InputSwitch:$.Z},data(){return{dark:!0}}};const et=(0,B.Z)(tt,[["render",X]]);var nt=et,rt=n(3852),it={name:"App",components:{LetterGuess:U,NavBar:nt},mounted(){(0,rt._)().changeTheme("md-dark-indigo","md-dark-indigo","theme-link",(()=>{}))}};const st=(0,B.Z)(it,[["render",s]]);var at=st;const ot=(0,r.ri)(at);ot.use(rt.Z),ot.mount("#app")}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var s=e[r]={exports:{}};return t[r](s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,r,i,s){if(!r){var a=1/0;for(u=0;u<t.length;u++){r=t[u][0],i=t[u][1],s=t[u][2];for(var o=!0,l=0;l<r.length;l++)(!1&s||a>=s)&&Object.keys(n.O).every((function(t){return n.O[t](r[l])}))?r.splice(l--,1):(o=!1,s<a&&(a=s));if(o){t.splice(u--,1);var c=i();void 0!==c&&(e=c)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[r,i,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+".b08516bd.js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="alphasticot:";n.l=function(r,i,s,a){if(t[r])t[r].push(i);else{var o,l;if(void 0!==s)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+s){o=d;break}}o||(l=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,n.nc&&o.setAttribute("nonce",n.nc),o.setAttribute("data-webpack",e+s),o.src=r),t[r]=[i];var f=function(e,n){o.onerror=o.onload=null,clearTimeout(p);var i=t[r];if(delete t[r],o.parentNode&&o.parentNode.removeChild(o),i&&i.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=f.bind(null,o.onerror),o.onload=f.bind(null,o.onload),l&&document.head.appendChild(o)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t={143:0};n.f.j=function(e,r){var i=n.o(t,e)?t[e]:void 0;if(0!==i)if(i)r.push(i[2]);else{var s=new Promise((function(n,r){i=t[e]=[n,r]}));r.push(i[2]=s);var a=n.p+n.u(e),o=new Error,l=function(r){if(n.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var s=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;o.message="Loading chunk "+e+" failed.\n("+s+": "+a+")",o.name="ChunkLoadError",o.type=s,o.request=a,i[1](o)}};n.l(a,l,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,s,a=r[0],o=r[1],l=r[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(i in o)n.o(o,i)&&(n.m[i]=o[i]);if(l)var u=l(n)}for(e&&e(r);c<a.length;c++)s=a[c],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(u)},r=self["webpackChunkalphasticot"]=self["webpackChunkalphasticot"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(7534)}));r=n.O(r)})();
//# sourceMappingURL=app.e3e85b80.js.map