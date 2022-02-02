(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{13:function(n,e,t){},19:function(n,e,t){"use strict";t.r(e);var a,o,r,c,i,l,b,s=t(1),d=t.n(s),j=t(6),x=t.n(j),p=(t(13),t(14),t(4)),u=t(2),g=t(3),f=g.a.div(a||(a=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 15px;\n    margin-bottom: 15px;\n\n    width: 500px;\n    padding: 10px;\n\n    border: 2px solid orange;\n    border-radius: 20px;\n"]))),h=t(0),O=function(n){var e=n.children;return Object(h.jsx)(f,{children:e})},m=g.a.ul(o||(o=Object(u.a)(["\n    width: 100%;\n    margin-top: 0;\n    margin-bottom: 10px;\n    padding: 15px;\n    font-size: 40px;\n    font-weight: 700;\n    color: black;\n"]))),v=g.a.li(r||(r=Object(u.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 10px;\n    color: black;\n"]))),k=g.a.button(c||(c=Object(u.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 150px;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 15px;\n    font-size: 15px;\n    font-weight: 700;\n    text-transform: capitalize;\n    background-color: orange;\n    border: 2px solid orangered;\n    border-radius: 20px;\n    cursor: pointer;\n\n    &:hover {\n        background-color: azure;\n    }\n"]))),w=function(n){var e=n.options,t=n.onLeaveFeedback;return Object(h.jsx)(m,{children:e.map((function(n){return Object(h.jsx)(v,{children:Object(h.jsx)(k,{type:"button",onClick:t,children:n})},n)}))})},z=g.a.p(i||(i=Object(u.a)(["\n    margin-top: 0;\n    margin-bottom: 0;\n    padding: 10px;\n    font-size: 20px;\n    font-weight: 500;\n    color: orange;\n"]))),y=function(n){var e=n.text;return Object(h.jsx)(z,{children:e})},S=g.a.h2(l||(l=Object(u.a)(["\n    text-align: center;\n    margin-top: 0px;\n    margin-bottom: 10px;\n    font-size: 30px;\n    font-weight: 700;\n    color: black;\n"]))),F=function(n){var e=n.title,t=n.children;return Object(h.jsxs)("section",{children:[Object(h.jsx)(S,{children:e}),Object(h.jsx)(h.Fragment,{children:t})]})};F.defaultProps={children:""};var P,C,L,J=g.a.ul(b||(b=Object(u.a)(["\n    margin-top: 0px;\n    margin-bottom: 10px;\n    padding: 0px;\n    font-size: 20px;\n    font-weight: 500;\n    color: black;\n"]))),B=g.a.li(P||(P=Object(u.a)(["\n    margin-top: 0px;\n    margin-bottom: 10px;\n    font-size: 20px;\n    font-weight: 500;\n    color: black;\n"]))),E=g.a.span(C||(C=Object(u.a)(["\n    text-transform: capitalize;\n"]))),I=function(n){var e=n.label,t=n.value;return Object(h.jsxs)(B,{children:[Object(h.jsx)(E,{children:e})," : ",t]})},M=function(n){var e=n.good,t=n.neutral,a=n.bad,o=n.total,r=n.positivePercentage;return Object(h.jsxs)(J,{children:[Object(h.jsx)(I,{label:"good",value:e},"good"),Object(h.jsx)(I,{label:"neutral",value:t},"neutral"),Object(h.jsx)(I,{label:"bad",value:a},"bad"),Object(h.jsx)(I,{label:"total",value:o},"total"),Object(h.jsx)(I,{label:"positive feedback",value:r},"positivePercentage")]})},N=g.a.h1(L||(L=Object(u.a)(["\n    text-align: center;\n    margin-top: 0px;\n    margin-bottom: 20px;\n    font-size: 40px;\n    font-weight: 700;\n    color: black;\n"]))),q=function(){var n=Object(s.useState)(0),e=Object(p.a)(n,2),t=e[0],a=e[1],o=Object(s.useState)(0),r=Object(p.a)(o,2),c=r[0],i=r[1],l=Object(s.useState)(0),b=Object(p.a)(l,2),d=b[0],j=b[1],x=function(n,e,t){return n+e+t};return Object(h.jsxs)(O,{children:[Object(h.jsx)(N,{children:"Feedback Service"}),Object(h.jsx)(F,{title:"Please leave your feedback",children:Object(h.jsx)(w,{options:["good","neutral","bad"],onLeaveFeedback:function(n){switch(n.target.textContent.toLowerCase()){case"good":a(t+1);break;case"neutral":i(c+1);break;case"bad":j(d+1);break;default:return}}})}),Object(h.jsx)(F,{title:"Statistics",children:x(t,c,d)<1?Object(h.jsx)(y,{text:"No feedback given"}):Object(h.jsx)(M,{good:t,neutral:c,bad:d,total:x(t,c,d),positivePercentage:function(n,e,t){var a=(n/(n+e+t)*100).toFixed(0);return"".concat(a,"%")}(t,c,d)})})]})};x.a.render(Object(h.jsx)(d.a.StrictMode,{children:Object(h.jsx)(q,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.ba9dd19b.chunk.js.map