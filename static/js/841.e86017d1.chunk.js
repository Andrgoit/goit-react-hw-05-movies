"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[841],{841:function(e,n,t){t.r(n),t.d(n,{default:function(){return y}});var r,c,a,o,i=t(861),s=t(885),u=t(757),p=t.n(u),l=t(791),f=t(739),h=t(128),v=t(390),d=t(834),x=t(168),m=t(444),g=t(731),b=m.ZP.button(r||(r=(0,x.Z)(["\n  margin-top: ","px;\n  margin-left: ","px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n"])),(function(e){return e.theme.space[4]}),(function(e){return e.theme.space[4]})),w=(0,m.ZP)(g.rU)(c||(c=(0,x.Z)(["\n  color: ",";\n\n  &:hover {\n    color: ",";\n  }\n"])),(function(e){return e.theme.colors.black}),(function(e){return e.theme.colors.red})),k=(0,m.ZP)(d.x)(a||(a=(0,x.Z)(["\n  display: flex;\n  padding: ","px;\n  border-bottom: 1px solid black;\n"])),(function(e){return e.theme.space[4]})),j=m.ZP.h2(o||(o=(0,x.Z)(["\n  font-size: ",";\n  font-weight: ",";\n"])),(function(e){return e.theme.fontSizes.xl}),(function(e){return e.theme.fontWeights.bold})),Z=[{text:"Cast",href:"cast"},{text:"Reviews",href:"reviews"}],_=t(184);function y(){var e,n=(0,l.useState)({}),t=(0,s.Z)(n,2),r=t[0],c=t[1],a=(0,f.s0)(),o=(null===(e=(0,f.TH)().state)||void 0===e?void 0:e.from)||"/",u=(0,f.UO)().movieId;(0,l.useEffect)((function(){var e=function(){var e=(0,i.Z)(p().mark((function e(){var n;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,v.Bc)(u);case 3:n=e.sent,c(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[u]);var x=r.original_title,m=r.overview,g=r.genres,y=void 0===g?[]:g,P=r.vote_average,S=r.poster_path,U=y.map((function(e){return e.name})).join(" ");return(0,_.jsxs)("div",{children:[(0,_.jsxs)(b,{onClick:function(){return a(o)},children:[(0,_.jsx)(h.bvh,{size:"16px"})," Go back"]}),(0,_.jsxs)(k,{children:[(0,_.jsx)("img",{src:S?"".concat("https://image.tmdb.org/t/p/w500/").concat(S):"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:x,width:"300"}),(0,_.jsxs)(d.x,{ml:4,children:[(0,_.jsx)(j,{children:x}),(0,_.jsxs)("p",{children:[(0,_.jsx)("b",{children:"User Score:"}),P,"%"]}),(0,_.jsx)("p",{children:(0,_.jsx)("b",{children:"Overview:"})}),m,(0,_.jsx)("p",{children:(0,_.jsx)("b",{children:"Genres:"})}),U]})]}),(0,_.jsx)("div",{children:(0,_.jsx)("ul",{children:Z.map((function(e){var n=e.text,t=e.href;return(0,_.jsx)("li",{children:(0,_.jsx)(w,{state:{from:o},to:t,children:n})},n)}))})}),(0,_.jsx)(f.j3,{})]})}},390:function(e,n,t){t.d(n,{Bc:function(){return p},bG:function(){return h},eQ:function(){return l},p2:function(){return f},yW:function(){return u}});var r=t(861),c=t(757),a=t.n(c),o=t(44),i="83cba2c85d0df477852b094af9fbdddb",s="https://api.themoviedb.org/3/movie/",u=function(){var e=(0,r.Z)(a().mark((function e(){var n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.ZP.get("".concat("https://api.themoviedb.org/3/trending/movie/day","?api_key=").concat(i));case 3:return n=e.sent,t=n.data,e.abrupt("return",t.results);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.ZP.get("".concat("https://api.themoviedb.org/3/movie/").concat(n,"?api_key=").concat(i,"&language=en-US"));case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.ZP.get("".concat("https://api.themoviedb.org/3/search/movie","?api_key=").concat(i,"&query=").concat(n,"&include_adult=false"));case 3:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.ZP.get("".concat(s).concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 3:return t=e.sent,r=t.data,e.abrupt("return",r.cast);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.ZP.get("".concat(s).concat(n,"/reviews?api_key=").concat(i,"&language=en-US"));case 3:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=841.e86017d1.chunk.js.map