(this.webpackJsonpgof=this.webpackJsonpgof||[]).push([[0],{13:function(t,e,o){t.exports={footer:"style_footer__swC6v",year:"style_year__3SP4g",rsSchool:"style_rsSchool__17yDz",github:"style_github__3Yrih"}},156:function(t,e,o){"use strict";o.r(e);var s=o(1),n=o.n(s),c=o(47),i=o.n(c),a=(o(53),o(31)),r=o(3),d=(o(54),o(55),[{id:1,city:"Berlin"},{id:2,city:"Kazan"},{id:3,city:"Beirut"}]),l=o(0);var b=function(t){return Object(l.jsx)("div",{className:"cities-block",children:d.map((function(e){return Object(l.jsx)("a",{href:"#",className:"city ".concat(t.currentCity===e.id?"active":""),onClick:function(){t.onChange(e.id)},children:e.city})}))})},g=o(4),u=o.n(g),x=o(48);var _=function(t){var e=Object(s.useState)(0),o=Object(r.a)(e,2),n=o[0],c=o[1];function i(t){return t.priceStats[t.priceStats.length-1]}return Object(l.jsxs)("div",{className:u.a["goods-input-box"],children:[Object(l.jsx)("div",{className:"".concat(u.a["goods-box"]," ").concat(u.a["goods-box-".concat(t.good.id)])}),Object(l.jsxs)("p",{className:u.a["good-price"],children:["Price: ",i(t.good)]}),Object(l.jsx)("input",{type:"text",className:u.a.input,placeholder:"quantity",value:n||0,maxLength:3,onChange:function(t){c(parseInt(t.target.value))}}),Object(l.jsx)("button",{className:u.a["input-button"],onClick:function(){t.onBuy(t.good.id,n,i(t.good)),c(0)},children:"Buy"})]})};var j=function(t){var e={legend:{display:!1},maintainAspectRatio:!1,responsive:!0,tooltips:{mode:"index",intersect:!1,caretSize:3,backgroundColor:"rgba(134,36,36,.2)",bodyFontColor:"rgb(134, 36, 36)",borderColor:"#877f72",borderWidth:1,displayColors:!1,callbacks:{title:function(){return 0}}},scales:{yAxes:[{ticks:{beginAtZero:!1},gridLines:{display:!1}}],xAxes:[{ticks:{display:!1}}]}},o={position:"relative",height:"95%",width:"80%"};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:"Citiy storage"}),Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:u.a["goods-list"],children:t.storage.map((function(s){return Object(l.jsxs)("div",{className:u.a["goods-box-wrapper"],children:[Object(l.jsx)(_,{good:s,onBuy:t.onBuy}),Object(l.jsx)("div",{className:u.a["goods-box-stats"]+"chart-container",style:o,children:Object(l.jsx)(x.Line,{data:(n=s.priceStats,{labels:["","","","","","","",""],datasets:[{label:"Price",fill:!1,lineTension:.3,backgroundColor:"rgb(255,99,132)",borderColor:"rgba(255, 102, 0, .5)",borderCapStyle:"butt",pointBorderColor:"rgb(204, 0, 51)",pointBorderWidth:2,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(224, 48, 48, 1)",pointHoverBorderColor:"rgb(224, 48, 20)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:n}]}),options:e})})]},"good-"+s.id);var n}))})})]})},y=o(2),p=o.n(y);var h=function(t){var e=Object(s.useState)(0),o=Object(r.a)(e,2),n=o[0],c=o[1],i=Object(s.useState)(1),a=Object(r.a)(i,2),d=a[0],b=a[1];function g(e){return t.goods.find((function(t){return t.id===e})).title}return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{className:p.a.storage,children:"My storage"}),Object(l.jsxs)("ul",{className:p.a["goods-list"],children:[t.storage.map((function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("li",{className:"".concat(p.a["goods-box"]," ").concat(p.a["goods-box-".concat(e.id)],"\n                                ").concat(t.selectedGood===e.id?"".concat(p.a["selected-box"]):""),onClick:function(){t.onSelectGood(e.id)},children:Object(l.jsxs)("div",{className:p.a["goods-title"],children:[g(e.id),", ",e.qty," \u0448\u0442."]})},"storage-good-"+e.id)})})),function(){if(t.storage.length<8)return Array(8-t.storage.length).fill(0).map((function(){return Object(l.jsx)("li",{className:"".concat(p.a["goods-box"]," ").concat(p.a["goods-box-empty"])})}))}()]}),t.selectedGood?Object(l.jsxs)("div",{className:p.a["sell-panel"],children:[Object(l.jsx)("div",{className:p.a["selected-good"],children:g(t.selectedGood)}),Object(l.jsxs)("div",{className:p.a.controls,children:[Object(l.jsx)("input",{maxLength:3,type:"text",className:p.a.input,placeholder:"quantity",value:n||0,onChange:function(t){c(parseInt(t.target.value))}}),Object(l.jsx)("button",{className:p.a["input-button"],onClick:function(){t.onSell(t.selectedGood,n)},children:"Sell"})]})]}):"",Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:p.a["ship-panel"],children:Object(l.jsxs)("div",{className:p.a["select-controls"],children:[Object(l.jsxs)("select",{className:p.a["select-city"],value:d,onChange:function(t){b(parseInt(t.currentTarget.value,10))},children:[Object(l.jsx)("option",{value:1,children:"Berlin"}),Object(l.jsx)("option",{value:2,children:"Kazan"}),Object(l.jsx)("option",{value:3,children:"Beirut"})]}),Object(l.jsx)("button",{className:p.a["select-button"],onClick:function(){t.onTransport(d)},children:"Ship"})]})})})]})},f=o(7),m=o.n(f);var O=function(t){function e(t){return d.find((function(e){return e.id===t})).city}return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:"Shipping"}),t.orders.map((function(t){return Object(l.jsxs)("div",{className:m.a["transported-goods-wrapper"],children:[Object(l.jsx)("div",{className:"".concat(m.a["goods-box"]," ").concat(m.a["goods-box-".concat(t.goodId)])}),Object(l.jsx)("div",{className:m.a["good-and-move-to"],children:Object(l.jsx)("div",{className:m.a["from-to-town"],children:e(t.currentCity)+"->"+e(t.targetCityID)})}),Object(l.jsxs)("div",{className:m.a["to-ship"],children:[Object(l.jsx)("div",{className:m.a.days,children:t.days}),Object(l.jsx)("button",{className:m.a["to-ship-btn"],disabled:!!t.days,children:"Get"})]})]})}))]})},v=o(9),N=o.n(v);var S=function(t){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:"Stats"}),Object(l.jsxs)("div",{className:N.a.stats,children:[Object(l.jsxs)("div",{className:N.a["stats-money"],children:[Object(l.jsx)("div",{className:N.a["money-icon"]}),Object(l.jsx)("div",{className:N.a.money,children:": "+t.money})]}),Object(l.jsxs)("div",{className:N.a.days,children:["Days: ",t.days]})]})]})},I=o(13),C=o.n(I);var q=function(){return Object(l.jsxs)("div",{className:C.a.footer,children:[Object(l.jsx)("div",{className:C.a.year,children:"by Alek_Rind 2021"}),Object(l.jsx)("a",{className:"".concat(C.a.github),href:"https://github.com/AlekRing",children:Object(l.jsx)("div",{})}),Object(l.jsx)("a",{className:C.a.rsSchool,href:"https://rs.school/"})]})};var k=function(){var t=Object(s.useState)(1),e=Object(r.a)(t,2),o=e[0],n=e[1],c=Object(s.useState)(1),i=Object(r.a)(c,2),d=i[0],g=i[1],u=Object(s.useState)([{cityId:1,storage:[{id:1,qty:10},{id:2,qty:20},{id:3,qty:5},{id:4,qty:15},{id:5,qty:55}]},{cityId:2,storage:[{id:1,qty:5},{id:6,qty:15},{id:7,qty:55}]},{cityId:3,storage:[{id:8,qty:5}]}]),x=Object(r.a)(u,2),_=x[0],y=x[1],p=Object(s.useState)([{city:"Berlin",cityId:1,storage:[{id:2,priceStats:[50,75,54,66,73,90,59],maxStep:10,minPrice:30,maxPrice:100},{id:7,priceStats:[85,96,82,101,102,89,93],maxStep:8,minPrice:84,maxPrice:103}]},{city:"Kazan",cityId:2,storage:[{id:1,priceStats:[12,21,10,22,15,19,14],maxStep:5,minPrice:10,maxPrice:54},{id:3,priceStats:[21,16,19,22,21,18,28],maxStep:7,minPrice:11,maxPrice:42}]},{city:"Beirut",cityId:3,storage:[{id:8,priceStats:[111,160,119,122,121,118,128],maxStep:25,minPrice:100,maxPrice:175}]}]),f=Object(r.a)(p,2),m=f[0],v=f[1],N=[{id:1,title:"Mushrooms"},{id:2,title:"Wood"},{id:3,title:"Milk"},{id:4,title:"Seeds"},{id:5,title:"Vegetables"},{id:6,title:"Stone"},{id:7,title:"Tools"},{id:8,title:"gold"}],I=Object(s.useState)(1e3),C=Object(r.a)(I,2),k=C[0],P=C[1],w=Object(s.useState)(1),B=Object(r.a)(w,2),G=B[0],A=B[1],F=Object(s.useState)([]),L=Object(r.a)(F,2),M=L[0],z=L[1];function D(){var t=_.find((function(t){return t.cityId===o}));return t?t.storage:[]}function H(t){return Math.floor(Math.random()*Math.floor(t))}function R(t,e){if(!(e<0)){var s=_,n=k,c=s.findIndex((function(t){return t.cityId===o}));if(c>-1){var i=s[c].storage.findIndex((function(e){return e.id===t}));if(i>-1){var a=function(){var t=m.find((function(t){return t.cityId===o}));return t?t.storage:[]}(),r=a.findIndex((function(e){return e.id===t}));if(r>-1){var d=a[r].priceStats.length,l=a[r].priceStats[d-1];s[c].storage[i].qty>=e&&(s[c].storage[i].qty-=e,n+=e*l,0===s[c].storage[i].qty&&T(s[c].storage[i].id),P(n))}}}y(s)}}function T(t){var e=_,s=e.findIndex((function(t){return t.cityId===o}));s>-1&&(e[s].storage.findIndex((function(e){return e.id===t}))>-1&&e[s].storage.splice(t,1));y(e)}function U(){setInterval((function(){!function(){for(var t=m,e=0;e<t.length;e++)for(var o=t[e].storage,s=0;s<o.length;s++){var n=o[s],c=H(2)?1:-1,i=H(n.maxStep)*c,a=n.priceStats.slice(-1).pop()+i;a>n.maxPrice&&(a=n.maxPrice),a<n.minPrice&&(a=n.minPrice);for(var r=0;r<n.priceStats.length-1;r++)n.priceStats[r]=n.priceStats[r+1];n.priceStats[n.priceStats.length-1]=a,t[e][s]=n}v(t)}(),z((function(t){var e=Object(a.a)(t);return e.forEach((function(t,e){t.days>=1&&(t.days-=1)})),e})),A((function(t){return t+1}))}),5e3)}return Object(s.useEffect)((function(){U()}),[]),Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)("h1",{className:"app-name",children:"Greatest Seller"}),Object(l.jsx)(b,{currentCity:o,onChange:function(t){n(t)}}),Object(l.jsxs)("div",{className:"content",children:[Object(l.jsxs)("div",{className:"column-left",children:[Object(l.jsx)("div",{className:"storage",children:Object(l.jsx)(h,{currentCity:o,storage:D(),selectedGood:d,goods:N,onSelectGood:function(t){g(t)},onSell:function(t,e){R(t,e)},onTransport:function(t){!function(t){var e=Object(a.a)(M),s=D(),n=s.findIndex((function(t){return t.id===d}));n<0||(e.push({currentCity:o,targetCityID:t,goodId:d,qty:s[n].qty,days:16}),T(d),z(e))}(t)}})}),Object(l.jsx)("div",{className:"transportations",children:Object(l.jsx)(O,{orders:M,goods:N})}),Object(l.jsx)("div",{className:"stats",children:Object(l.jsx)(S,{days:G,money:k})})]}),Object(l.jsx)("div",{className:"column-right",children:Object(l.jsx)("div",{className:"city-storage",children:Object(l.jsx)(j,{storage:function(){var t=m.find((function(t){return t.cityId===o}));return t?t.storage:[]}(),onBuy:function(t,e,s){!function(t,e,s){var n=e*s;if(console.log(n),!(k<n)){var c=_,i=c.findIndex((function(t){return t.cityId===o}));if(i>-1){var a=c[i].storage.findIndex((function(e){return e.id===t}));a>-1?c[i].storage[a].qty+=e:c[i].storage.push({id:t,qty:e})}y(c),P(k-n)}}(t,e,s)}})})})]}),Object(l.jsx)(q,{})]})};i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root"))},2:function(t,e,o){t.exports={storage:"style_storage__7l_Xv","goods-list":"style_goods-list__Up8I4","goods-box":"style_goods-box__2tT-A","goods-box-empty":"style_goods-box-empty__gPdsx","goods-box-1":"style_goods-box-1__1QkOZ","goods-box-2":"style_goods-box-2__n0rRC","goods-box-3":"style_goods-box-3__3c7-2","goods-box-4":"style_goods-box-4__3F2G1","goods-box-5":"style_goods-box-5__3lL_N","goods-box-6":"style_goods-box-6__1K4ru","goods-box-7":"style_goods-box-7__3r2IA","goods-box-8":"style_goods-box-8__1pyEd","goods-title":"style_goods-title__3z0wW","selected-box":"style_selected-box__1ZFfU","sell-panel":"style_sell-panel__1ryXh",controls:"style_controls__V5Ly8","ship-panel":"style_ship-panel__2cp7u","select-controls":"style_select-controls__2moqZ","selected-good":"style_selected-good__3JwQi","select-button":"style_select-button__3_Ump","select-city":"style_select-city__2XhdM"}},4:function(t,e,o){t.exports={"goods-list":"style_goods-list__g-dfn","goods-box":"style_goods-box__3vLIs","goods-box-1":"style_goods-box-1__3tDAD","goods-box-2":"style_goods-box-2__3HbEH","goods-box-3":"style_goods-box-3__1kfwA","goods-box-4":"style_goods-box-4__2q4f0","goods-box-5":"style_goods-box-5__1yb39","goods-box-6":"style_goods-box-6__1_dL5","goods-box-7":"style_goods-box-7__Da1Xh","goods-box-8":"style_goods-box-8__oQh4u","goods-box-wrapper":"style_goods-box-wrapper__jUbwy","goods-box-stats":"style_goods-box-stats__frl56",input:"style_input__1fXf-","good-price":"style_good-price__38Cjp","goods-input-box":"style_goods-input-box__JMqDy","input-button":"style_input-button__1mzGk"}},53:function(t,e,o){},54:function(t,e,o){},55:function(t,e,o){},7:function(t,e,o){t.exports={"transported-goods-wrapper":"style_transported-goods-wrapper__2ocKk",days:"style_days__3qT_a","goods-box":"style_goods-box__1HZo0","goods-box-1":"style_goods-box-1__UYk4s","goods-box-2":"style_goods-box-2__1-9ZO","goods-box-3":"style_goods-box-3__1PIYY","goods-box-4":"style_goods-box-4__nUjca","goods-box-5":"style_goods-box-5__1wSBl","goods-box-6":"style_goods-box-6__17So1","goods-box-7":"style_goods-box-7__2L4g4","goods-box-8":"style_goods-box-8__1vvfb","from-to-town":"style_from-to-town__1yYQ9","to-ship":"style_to-ship__2CVmu"}},9:function(t,e,o){t.exports={stats:"style_stats__1NIGI","stats-money":"style_stats-money__tNzQg","money-icon":"style_money-icon__1sdgm"}}},[[156,1,2]]]);
//# sourceMappingURL=main.cbc4acc7.chunk.js.map