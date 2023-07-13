(function(){"use strict";var n={395:function(n,e,o){var i=o(963),a=o(252),t=o.p+"img/logo.5e5a6c94.png";const r={class:"container-fluid"},s={class:"container-fluid"},l={class:"row"},c={class:"col-md-3"},d=(0,a._)("img",{src:t,class:"iconoGame webName"},null,-1),u=(0,a._)("div",{class:"col-md-6"},null,-1),p={class:"col-md-3"},m=(0,a._)("footer",{class:"miFooter"},[(0,a._)("p",null,"Copyright 2023 © / Dev Trainning, Oscar Rodríguez")],-1);function f(n,e){const o=(0,a.up)("router-link"),i=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("nav",r,[(0,a._)("div",s,[(0,a._)("div",l,[(0,a._)("div",c,[(0,a.Wm)(o,{to:"/",class:"estiloHome"},{default:(0,a.w5)((()=>[d,(0,a.Uk)("Game's Opinion")])),_:1})]),u,(0,a._)("div",p,[(0,a.Wm)(o,{to:"/about",class:"estiloAbout"},{default:(0,a.w5)((()=>[(0,a.Uk)("About")])),_:1})])])])]),(0,a.Wm)(i),m],64)}var b=o(744);const v={},g=(0,b.Z)(v,[["render",f]]);var h=g,_=o(201);const w={class:"home"};function y(n,e,o,i,t,r){const s=(0,a.up)("Juegos");return(0,a.wg)(),(0,a.iD)("div",w,[(0,a.Wm)(s)])}var k=o(577);const C=n=>((0,a.dD)("data-v-04477b66"),n=n(),(0,a.Cn)(),n),E={id:"Juegos"},O=C((()=>(0,a._)("h1",{class:"tituloH1"},"Game's Opinion",-1))),x=C((()=>(0,a._)("br",null,null,-1))),A=C((()=>(0,a._)("h2",{class:"tituloH1"},"Listado de Juegos Disponibles",-1))),D=C((()=>(0,a._)("br",null,null,-1))),N={class:"contenedorPadre"},z=["src"],j={class:"card-body"},L={class:"card-title"},B={class:"card-text"},F={class:"list-group list-group-flush"},H={class:"list-group-item"},R={class:"list-group-item"},U={class:"list-group-item"},P={class:"card-body"},S=["onClick"],V=["onClick"],J=C((()=>(0,a._)("i",{class:"fa-solid fa-heart"},null,-1))),T=[J];function I(n,e,o,i,t,r){return(0,a.wg)(),(0,a.iD)("div",E,[O,x,A,D,(0,a._)("div",N,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.juegos,((n,e)=>((0,a.wg)(),(0,a.iD)("div",{key:e,class:"card m-2",style:{width:"18rem"}},[(0,a._)("img",{src:n.background_image,class:"card-img-top",alt:"logo"},null,8,z),(0,a._)("div",j,[(0,a._)("h5",L,(0,k.zw)(n.name),1),(0,a._)("p",B,"ESRB Rating: "+(0,k.zw)(n.esrb_rating.name),1)]),(0,a._)("ul",F,[(0,a._)("li",H,"Rating: "+(0,k.zw)(n.rating),1),(0,a._)("li",R,"Released: "+(0,k.zw)(n.released),1),(0,a._)("li",U,"Updated: "+(0,k.zw)(n.updated),1)]),(0,a._)("div",P,[(0,a._)("a",{onClick:e=>r.mostrarOpiniones(n.name),class:"btn btn-primary"},"Opinar",8,S),(0,a._)("a",{onClick:e=>r.irAdministracion(n.name),class:"btn btnColor"},T,8,V)])])))),128))])])}var q=o(154),M={name:"Juegos",data:function(){return{cantidadJuegos:0,juegos:[]}},methods:{consumirApi:function(){let n="https://api.rawg.io/api/games?key=0ec7e270048d439dac9b19b316e6a25e";(0,q.Z)(n).then((n=>{this.cantidadJuegos=n.data.results.length;for(let e=0;e<this.cantidadJuegos;e++)this.juegos.push(n.data.results[e])})).catch((n=>{console.log(n)}))},mostrarOpiniones:function(n){this.$router.push(`/opiniones/${n}`)},irAdministracion:function(n){this.$router.push(`/administracion/${n}`)}},created(){this.consumirApi()}};const W=(0,b.Z)(M,[["render",I],["__scopeId","data-v-04477b66"]]);var Z=W,$={name:"HomeView",components:{Juegos:Z}};const Y=(0,b.Z)($,[["render",y]]);var G=Y,K=o.p+"img/404.bbddf0a6.png";const Q=n=>((0,a.dD)("data-v-7529f023"),n=n(),(0,a.Cn)(),n),X={id:"NotFound"},nn=Q((()=>(0,a._)("h1",null,"404 - Page Not Founb",-1))),en=Q((()=>(0,a._)("p",null,"Página no encontrada",-1))),on=Q((()=>(0,a._)("img",{src:K,alt:"404",class:"error404"},null,-1))),an=Q((()=>(0,a._)("br",null,null,-1))),tn=Q((()=>(0,a._)("br",null,null,-1))),rn=Q((()=>(0,a._)("i",{class:"fa-solid fa-rotate-left"},null,-1)));function sn(n,e,o,i,t,r){const s=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",X,[nn,en,on,an,tn,(0,a.Wm)(s,{to:"/",class:"volver"},{default:(0,a.w5)((()=>[rn,(0,a.Uk)(" Volver")])),_:1})])}var ln={name:"NotFound",data:function(){return{}},methods:{}};const cn=(0,b.Z)(ln,[["render",sn],["__scopeId","data-v-7529f023"]]);var dn=cn;const un=n=>((0,a.dD)("data-v-7a30ce19"),n=n(),(0,a.Cn)(),n),pn={id:"OpinionesView"},mn=un((()=>(0,a._)("h2",null,"Comentarios de los Juegos",-1))),fn=un((()=>(0,a._)("p",null,"Escribe tu opinión acerca del juego: ",-1))),bn={class:"fw-bolder"},vn=un((()=>(0,a._)("hr",null,null,-1))),gn={class:"container",id:"divForm"},hn={class:"mb-3"},_n=un((()=>(0,a._)("label",{for:"txtNombre",class:"form-label"},"Nombre:",-1))),wn=un((()=>(0,a._)("div",{id:"txtNombreHelp",class:"form-text"},"Ingrese su nombre para la opinión.",-1))),yn={class:"mb-3"},kn=un((()=>(0,a._)("label",{for:"txtOpinion",class:"form-label"},"Opinion:",-1))),Cn=un((()=>(0,a._)("hr",null,null,-1))),En=un((()=>(0,a._)("h3",null,"A continuación podras ver tu opinión",-1))),On={key:0,class:"container",id:"sinOpiniones"},xn=un((()=>(0,a._)("p",null,null,-1))),An=un((()=>(0,a._)("p",null,"No existen opiniones para mostrar",-1))),Dn=[xn,An],Nn={key:1,class:"accordion",id:"accordionExample"},zn={class:"accordion-item"},jn={class:"accordion-header"},Ln={class:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},Bn={id:"collapseOne",class:"accordion-collapse collapse show","data-bs-parent":"#accordionExample"},Fn={class:"accordion-body"},Hn=["onClick"],Rn=["onClick"],Un=un((()=>(0,a._)("br",null,null,-1)));function Pn(n,e,o,t,r,s){const l=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",pn,[mn,fn,(0,a._)("p",bn,(0,k.zw)(o.nombre),1),vn,(0,a._)("div",gn,[(0,a._)("form",null,[(0,a._)("div",hn,[_n,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"txtNombre","onUpdate:modelValue":e[0]||(e[0]=e=>n.nombreEnviado=e),"aria-describedby":"textNombreHelp"},null,512),[[i.nr,n.nombreEnviado]]),wn]),(0,a._)("div",yn,[kn,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"txtOpinion","onUpdate:modelValue":e[1]||(e[1]=e=>n.opinionEnviada=e)},null,512),[[i.nr,n.opinionEnviada]])]),(0,a._)("button",{type:"submit",onClick:e[2]||(e[2]=(0,i.iM)((n=>s.agregarOpinion()),["prevent"])),class:"btn btn-info"},(0,k.zw)(n.nombreBoton),1)])]),Cn,En,n.cantidadOpiniones<1?((0,a.wg)(),(0,a.iD)("div",On,Dn)):(0,a.kq)("",!0),n.cantidadOpiniones>0?((0,a.wg)(),(0,a.iD)("div",Nn,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.opiniones,((n,e)=>((0,a.wg)(),(0,a.iD)("div",zn,[(0,a._)("h2",jn,[(0,a._)("button",Ln," Opinion creada por: "+(0,k.zw)(n.nombre),1)]),(0,a._)("div",Bn,[(0,a._)("div",Fn,(0,k.zw)(n.opinion),1),(0,a._)("button",{class:"btn btn-danger",onClick:n=>s.eliminarOpinion(e)},"Eliminar",8,Hn),(0,a._)("button",{class:"btn btn-warning",onClick:n=>s.editarOpinion(e)},"Editar",8,Rn)])])))),256))])):(0,a.kq)("",!0),Un,(0,a.Wm)(l,{to:"/"},{default:(0,a.w5)((()=>[(0,a.Uk)("Volver")])),_:1})])}var Sn={name:"OpinionesView",props:["nombre"],data:function(){return{cantidadOpiniones:0,nombreEnviado:"",opinionEnviada:"",opiniones:[],nombreBoton:"Agregar",indiceActualizar:0}},methods:{agregarOpinion:function(){if("Agregar"==this.nombreBoton){this.cantidadOpiniones++;let n={nombre:this.nombreEnviado,opinion:this.opinionEnviada};this.opiniones.push(n),this.nombreEnviado="",this.opinionEnviada=""}else if("Actualizar"==this.nombreBoton){let n={nombre:this.nombreEnviado,opinion:this.opinionEnviada};this.opiniones.splice(this.indiceActualizar,1,n),alert("La opinión fue actualizada. Revise el acordeon con la nueva información")}},eliminarOpinion:function(n){this.cantidadOpiniones--,this.opiniones.splice(n,1)},editarOpinion:function(n){this.nombreEnviado=this.opiniones[n].nombre,this.opinionEnviada=this.opiniones[n].opinion,this.nombreBoton="Actualizar",this.indiceActualizar=n,alert("Va a editar una opinión. Revise el formulario con la información cargada")}}};const Vn=(0,b.Z)(Sn,[["render",Pn],["__scopeId","data-v-7a30ce19"]]);var Jn=Vn;const Tn=n=>((0,a.dD)("data-v-0ce8bf64"),n=n(),(0,a.Cn)(),n),In={id:"Administracion"},qn={id:"adminHijo"},Mn=Tn((()=>(0,a._)("h2",null,"Resumen de tu Cuenta",-1))),Wn=Tn((()=>(0,a._)("hr",null,null,-1))),Zn={key:0},$n={key:1,class:"container"},Yn={class:"mb-3"},Gn=Tn((()=>(0,a._)("label",{for:"txtNombre",class:"form-label"},"Nombre:",-1))),Kn=Tn((()=>(0,a._)("div",{id:"txtNombreHelp",class:"form-text"},"Ingrese su nombre para la opinión.",-1))),Qn={class:"mb-3"},Xn=Tn((()=>(0,a._)("label",{for:"txtApellido",class:"form-label"},"Apellido:",-1))),ne={key:2,class:"container"},ee={class:"row"},oe={id:"seccionNombre",class:"col-md-2"},ie=Tn((()=>(0,a._)("p",null,"Bienvenid@",-1))),ae={class:"nombres"},te=Tn((()=>(0,a._)("div",{class:"col-md-1"},null,-1))),re={class:"col-md-6"},se={class:"container"},le={class:"row"},ce={class:"col-m-12"},de=Tn((()=>(0,a._)("h4",null,"Le diste me gusta al juego:",-1))),ue={class:"nombres"},pe=Tn((()=>(0,a._)("hr",null,null,-1))),me={class:"row"},fe={class:"col-md-12 borde"},be={id:"divCoins",class:"container text-center"},ve=Tn((()=>(0,a._)("p",null,"¿Deseas comprar Coins para este Juegos?",-1))),ge=Tn((()=>(0,a._)("i",{class:"fa-solid fa-coins",label:"Agregar"},null,-1))),he=Tn((()=>(0,a._)("br",null,null,-1))),_e=Tn((()=>(0,a._)("br",null,null,-1))),we=Tn((()=>(0,a._)("p",null,"Cantidad de Coins Comprados",-1))),ye=["aria-valuenow"],ke={class:"progress-bar bg-success",style:{width:"0%"}},Ce={key:0},Ee=Tn((()=>(0,a._)("p",{class:"text-danger"},"LLegaste al máximo de tu crédito",-1))),Oe=[Ee],xe=Tn((()=>(0,a._)("br",null,null,-1))),Ae=Tn((()=>(0,a._)("hr",null,null,-1))),De=(0,a.uE)('<div class="col-md-3" data-v-0ce8bf64></div><div class="row" data-v-0ce8bf64><div class="col-md-4 bg-warning" data-v-0ce8bf64><p class="letras" data-v-0ce8bf64>% de finalización de juego</p><hr data-v-0ce8bf64><p class="letras" data-v-0ce8bf64>17% <i class="fa-regular fa-star-half" data-v-0ce8bf64></i></p></div><div class="col-md-4 bg-success" data-v-0ce8bf64><p class="letrasLogros" data-v-0ce8bf64>Logros en el juego</p><hr data-v-0ce8bf64><p class="letrasLogros" data-v-0ce8bf64>166 <i class="fa-solid fa-trophy" data-v-0ce8bf64></i></p></div><div class="col-md-4 bg-info" data-v-0ce8bf64><p class="letras" data-v-0ce8bf64>Recompensas</p><hr data-v-0ce8bf64><p class="letras" data-v-0ce8bf64>200 <i class="fa-solid fa-award" data-v-0ce8bf64></i></p></div></div>',2),Ne=Tn((()=>(0,a._)("br",null,null,-1)));function ze(n,e,o,t,r,s){const l=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",In,[(0,a._)("div",qn,[Mn,Wn,n.flagButton?((0,a.wg)(),(0,a.iD)("div",Zn,[(0,a._)("button",{class:"btn btn-success",onClick:e[0]||(e[0]=(...n)=>s.mostrarFormulario&&s.mostrarFormulario(...n))},"Ingresar Datos")])):(0,a.kq)("",!0),n.flagForm?((0,a.wg)(),(0,a.iD)("div",$n,[(0,a._)("form",null,[(0,a._)("div",Yn,[Gn,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"txtNombre","onUpdate:modelValue":e[1]||(e[1]=e=>n.nombreEnviado=e),"aria-describedby":"textNombreHelp"},null,512),[[i.nr,n.nombreEnviado]]),Kn]),(0,a._)("div",Qn,[Xn,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"txtApellido","onUpdate:modelValue":e[2]||(e[2]=e=>n.apellidoEnviado=e)},null,512),[[i.nr,n.apellidoEnviado]])]),(0,a._)("button",{type:"submit",onClick:e[3]||(e[3]=(0,i.iM)((n=>s.enviarDatos()),["prevent"])),class:"btn btn-info"},"Enviar")])])):(0,a.kq)("",!0),n.flagResumen?((0,a.wg)(),(0,a.iD)("div",ne,[(0,a._)("div",ee,[(0,a._)("div",oe,[ie,(0,a._)("p",ae,(0,k.zw)(n.nombreEnviado)+" "+(0,k.zw)(n.apellidoEnviado),1)]),te,(0,a._)("div",re,[(0,a._)("div",se,[(0,a._)("div",le,[(0,a._)("div",ce,[de,(0,a._)("h3",ue,(0,k.zw)(o.nombre),1)])]),pe,(0,a._)("div",me,[(0,a._)("div",fe,[(0,a._)("div",be,[ve,(0,a._)("button",{id:"btnCoins",class:"btn btn-warning",onClick:e[4]||(e[4]=n=>s.agregarCoins())},[ge,(0,a.Uk)(" Agregar coins")]),he,_e,we,(0,a._)("div",{class:"progress",role:"progressbar","aria-label":"Example with label","aria-valuenow":n.cantidadCoins,"aria-valuemin":"0","aria-valuemax":"100"},[(0,a._)("div",ke,"$"+(0,k.zw)(n.cantidadCoins),1)],8,ye),n.flagMaximo?((0,a.wg)(),(0,a.iD)("div",Ce,Oe)):(0,a.kq)("",!0),xe])])]),Ae]),De])])])):(0,a.kq)("",!0)])]),Ne,(0,a.Wm)(l,{to:"/"},{default:(0,a.w5)((()=>[(0,a.Uk)("Volver")])),_:1})],64)}var je={name:"Administracion",props:["nombre"],data:function(){return{flagButton:!0,flagResumen:!1,flagMaximo:!1,flagForm:!1,nombreEnviado:"",apellidoEnviado:"",cantidadCoins:0}},methods:{mostrarFormulario:function(){this.flagButton=!1,this.flagForm=!0},enviarDatos:function(){this.flagForm=!1,this.flagResumen=!0},agregarCoins:function(){this.cantidadCoins++;let n=document.getElementsByClassName("progress-bar"),e="";if(this.cantidadCoins<50)e=`${this.cantidadCoins}%`,n[0].style.width=e,this.cantidadCoins>20&&this.cantidadCoins<=30?(n[0].classList.remove("bg-success"),n[0].classList.add("bg-warning")):this.cantidadCoins>30&&(n[0].classList.remove("bg-warning"),n[0].classList.add("bg-danger"));else{this.flagMaximo=!0;let n=document.getElementById("btnCoins");n.setAttribute("disabled",!0)}}}};const Le=(0,b.Z)(je,[["render",ze],["__scopeId","data-v-0ce8bf64"]]);var Be=Le;const Fe=[{path:"/",name:"home",component:G},{path:"/opiniones/:nombre",name:"opiniones",component:Jn,props:!0},{path:"/administracion/:nombre",name:"administracion",component:Be,props:!0},{path:"/about",name:"about",component:function(){return o.e(443).then(o.bind(o,171))}},{path:"/:catchAll(.*)",name:"notfound",component:dn}],He=(0,_.p7)({history:(0,_.PO)("/practica_modulo6_produccion/"),routes:Fe});var Re=He;(0,i.ri)(h).use(Re).mount("#app")}},e={};function o(i){var a=e[i];if(void 0!==a)return a.exports;var t=e[i]={exports:{}};return n[i](t,t.exports,o),t.exports}o.m=n,function(){var n=[];o.O=function(e,i,a,t){if(!i){var r=1/0;for(d=0;d<n.length;d++){i=n[d][0],a=n[d][1],t=n[d][2];for(var s=!0,l=0;l<i.length;l++)(!1&t||r>=t)&&Object.keys(o.O).every((function(n){return o.O[n](i[l])}))?i.splice(l--,1):(s=!1,t<r&&(r=t));if(s){n.splice(d--,1);var c=a();void 0!==c&&(e=c)}}return e}t=t||0;for(var d=n.length;d>0&&n[d-1][2]>t;d--)n[d]=n[d-1];n[d]=[i,a,t]}}(),function(){o.d=function(n,e){for(var i in e)o.o(e,i)&&!o.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})}}(),function(){o.f={},o.e=function(n){return Promise.all(Object.keys(o.f).reduce((function(e,i){return o.f[i](n,e),e}),[]))}}(),function(){o.u=function(n){return"js/about.cf5a9396.js"}}(),function(){o.miniCssF=function(n){return"css/about.9f84f8bb.css"}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={},e="practica_modulo6:";o.l=function(i,a,t,r){if(n[i])n[i].push(a);else{var s,l;if(void 0!==t)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==i||u.getAttribute("data-webpack")==e+t){s=u;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",e+t),s.src=i),n[i]=[a];var p=function(e,o){s.onerror=s.onload=null,clearTimeout(m);var a=n[i];if(delete n[i],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(n){return n(o)})),e)return e(o)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){o.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){o.p="/practica_modulo6_produccion/"}(),function(){if("undefined"!==typeof document){var n=function(n,e,o,i,a){var t=document.createElement("link");t.rel="stylesheet",t.type="text/css";var r=function(o){if(t.onerror=t.onload=null,"load"===o.type)i();else{var r=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.href||e,l=new Error("Loading CSS chunk "+n+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=r,l.request=s,t.parentNode&&t.parentNode.removeChild(t),a(l)}};return t.onerror=t.onload=r,t.href=e,o?o.parentNode.insertBefore(t,o.nextSibling):document.head.appendChild(t),t},e=function(n,e){for(var o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var a=o[i],t=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(t===n||t===e))return a}var r=document.getElementsByTagName("style");for(i=0;i<r.length;i++){a=r[i],t=a.getAttribute("data-href");if(t===n||t===e)return a}},i=function(i){return new Promise((function(a,t){var r=o.miniCssF(i),s=o.p+r;if(e(r,s))return a();n(i,s,null,a,t)}))},a={143:0};o.f.miniCss=function(n,e){var o={443:1};a[n]?e.push(a[n]):0!==a[n]&&o[n]&&e.push(a[n]=i(n).then((function(){a[n]=0}),(function(e){throw delete a[n],e})))}}}(),function(){var n={143:0};o.f.j=function(e,i){var a=o.o(n,e)?n[e]:void 0;if(0!==a)if(a)i.push(a[2]);else{var t=new Promise((function(o,i){a=n[e]=[o,i]}));i.push(a[2]=t);var r=o.p+o.u(e),s=new Error,l=function(i){if(o.o(n,e)&&(a=n[e],0!==a&&(n[e]=void 0),a)){var t=i&&("load"===i.type?"missing":i.type),r=i&&i.target&&i.target.src;s.message="Loading chunk "+e+" failed.\n("+t+": "+r+")",s.name="ChunkLoadError",s.type=t,s.request=r,a[1](s)}};o.l(r,l,"chunk-"+e,e)}},o.O.j=function(e){return 0===n[e]};var e=function(e,i){var a,t,r=i[0],s=i[1],l=i[2],c=0;if(r.some((function(e){return 0!==n[e]}))){for(a in s)o.o(s,a)&&(o.m[a]=s[a]);if(l)var d=l(o)}for(e&&e(i);c<r.length;c++)t=r[c],o.o(n,t)&&n[t]&&n[t][0](),n[t]=0;return o.O(d)},i=self["webpackChunkpractica_modulo6"]=self["webpackChunkpractica_modulo6"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=o.O(void 0,[998],(function(){return o(395)}));i=o.O(i)})();
//# sourceMappingURL=app.2bc9c9ac.js.map