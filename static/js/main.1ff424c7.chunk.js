(this["webpackJsonpharry-web"]=this["webpackJsonpharry-web"]||[]).push([[0],{55:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var i=n(3),c=n(0),a=n(8),r=n.n(a),s=(n(55),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,86)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),i(e),c(e),a(e),r(e)}))}),l=n(23),o=n(81),j=n(84),h=n(82),d={name:"harrison zhu",nickname:"harry",mainPic:"harry.jpg",linkGitHub:"https://github.com/hzhu359",linkLinkedIn:"https://linkedin.com/in/hzhu359",linkInstagram:"https://www.instagram.com/harrisonfengzhu/",linkResume:"https://www.dropbox.com/s/hwtjmsshm27xs81/Harrison_Zhu_resume.pdf?raw=1",linkProko:"https://youtu.be/-rQyZYPvVew",linkQuizBowl:"https://hdwhite.org/qb/stats/player/harrison+zhu/",greetList:["howdy","hi","greetings","hola","yo","what's up","hey","bonjour","guten tag","ni hao","hiya"]},u=n(83),b=n(44);var m=function(e){return Object(i.jsx)(u.a,{href:e.link,children:Object(i.jsx)(b.a,{icon:e.faIcon})})};var x=function(){return Object(i.jsxs)("div",{children:[Object(i.jsxs)("p",{children:["i'm currently a student at georgia tech (go jackets!) studying computer science. here's my ",Object(i.jsx)("a",{href:d.linkResume,children:"resum\xe9"}),"."]}),Object(i.jsxs)("p",{children:["my interests are machine learning,",Object(i.jsx)("small",{children:"trying"})," to run, classical music (my favorite ",Object(i.jsx)("a",{href:d.linkProko,children:"piece"}),"!), playing ",Object(i.jsx)("a",{href:d.linkQuizBowl,children:"quizbowl"})," occasionally, and learning in general."]}),Object(i.jsx)("p",{children:"i'm currently a teaching assistant for cs1332 (data structures & algorithms) and an incoming software engineering intern at microsoft for summer 2021."})]})};var p=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"i am having loads of fun right now."}),Object(i.jsx)("p",{children:"this page is a work in progress"})]})},O=[{path:"/about",label:"about",display:!0},{path:"/fun",label:"fun",display:!0}],g=n(27),f=n(31);function y(e,t,n){var i=e.length;if(i<=0)return"NULL";if(1===i)return e[0];var c=Math.floor(Math.random()*i);return n?e[c]:e[c]===t?y(e,t,n):e[c]}var k=function(e){var t=Object(c.useState)(e.greetList),n=Object(g.a)(t,1)[0],a=Object(c.useState)(y(n,null,!0)),r=Object(g.a)(a,2),s=r[0],l=r[1];return Object(i.jsx)(f.a,{transitionName:"cross-fade",children:Object(i.jsxs)("span",{className:"helloText",onClick:function(){return l(y(n,s,!1))},children:[s,"!"]},s)})},w=(n.p,n.p,n.p,n.p+"static/media/harry.1a4679e7.jpg");var v=function(e){return O.filter((function(e){return e.display})).map((function(e){return Object(i.jsx)(o.a,{container:!0,item:!0,justify:"flex-end",xs:1,children:Object(i.jsx)(l.b,{to:e.path,children:e.label},e.label)})})).length,Object(i.jsx)(o.a,{className:"navBar",container:!0,itemspacing:3,direction:"row",children:Object(i.jsx)(o.a,{container:!0,item:!0,xs:12,md:e.md,justify:"center",children:Object(i.jsxs)("div",{className:"header",children:[Object(i.jsx)(k,{greetList:d.greetList}),Object(i.jsx)("span",{children:" i'm harrison"})]})})})},N=n(5),I=n(32);var L=function(){return Object(i.jsxs)(o.a,{className:"grid",container:!0,spacing:3,direction:"row",justify:"center",children:[Object(i.jsx)(o.a,{item:!0,xs:12,className:"header",children:Object(i.jsx)(v,{md:4})}),Object(i.jsxs)(o.a,{container:!0,item:!0,xs:12,spacing:3,className:"twocol",children:[Object(i.jsxs)(o.a,{container:!0,item:!0,xs:12,md:4,spacing:3,className:"picsocialcol",direction:"column",children:[Object(i.jsx)(o.a,{className:"picContainer",container:!0,item:!0,spacing:3,direction:"row",justify:"center",children:Object(i.jsx)(o.a,{item:!0,children:Object(i.jsx)("img",{src:w,alt:"harrypic",className:"harrypic"})})}),Object(i.jsxs)(o.a,{className:"socialGrid",container:!0,item:!0,spacing:3,justify:"space-evenly",children:[Object(i.jsx)(m,{link:d.linkGitHub,faIcon:I.a}),Object(i.jsx)(m,{link:d.linkLinkedIn,faIcon:I.c}),Object(i.jsx)(m,{link:d.linkInstagram,faIcon:I.b})]})]}),Object(i.jsx)(j.a,{smDown:!0,children:Object(i.jsxs)(o.a,{container:!0,item:!0,xs:1,direction:"row",justify:"center",children:[Object(i.jsx)(h.a,{className:"divider",flexItem:!0,orientation:"vertical"}),Object(i.jsx)(h.a,{className:"divider",flexItem:!0,orientation:"vertical"})]})}),Object(i.jsx)(o.a,{item:!0,xs:12,md:7,className:"desccol",children:Object(i.jsxs)(N.c,{children:[Object(i.jsx)(N.a,{exact:!0,path:"/",component:x}),Object(i.jsx)(N.a,{exact:!0,path:"/about",component:x}),Object(i.jsx)(N.a,{exact:!0,path:"/fun",component:p}),Object(i.jsx)(N.a,{render:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"404 babey!"}),Object(i.jsx)("div",{children:"click a link to get back"})]})}})]})})]})]})};r.a.render(Object(i.jsx)(l.a,{basename:"/harry-web",children:Object(i.jsx)(L,{})}),document.getElementById("root")),s()}},[[64,1,2]]]);
//# sourceMappingURL=main.1ff424c7.chunk.js.map