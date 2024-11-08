"use strict";(self.webpackChunkiobroker_admin_component_klf200=self.webpackChunkiobroker_admin_component_klf200||[]).push([["node_modules_react_jsx-runtime_js","src_Components_jsx"],{62218:(T,C,o)=>{o.r(C),o.d(C,{default:()=>a});var e=o(64922),x=o(28437),S=o.n(x),O=o(95973),n=o(67085);const _=({testResults:s})=>{const i=(0,n.useTheme)();return(0,n.useMediaQuery)(i.breakpoints.up("sm"))?(0,e.jsx)(n.TableContainer,{children:(0,e.jsxs)(n.Table,{children:[(0,e.jsx)(n.TableHead,{children:(0,e.jsxs)(n.TableRow,{children:[(0,e.jsx)(n.TableCell,{align:"left",size:"small",children:"Status"}),(0,e.jsx)(n.TableCell,{align:"left",children:"Step name"}),(0,e.jsx)(n.TableCell,{align:"left",children:"Result"}),(0,e.jsx)(n.TableCell,{align:"left",children:"Message"})]})}),(0,e.jsx)(n.TableBody,{children:s.map(t=>{var f,u;return(0,e.jsxs)(n.TableRow,{sx:{"&:last-child td, &:last-child th":{border:0}},hover:!0,children:[(0,e.jsx)(n.TableCell,{align:"center",size:"small",children:t.run?t.success?"\u2705":"\u274C":""}),(0,e.jsx)(n.TableCell,{align:"left",children:t.stepName}),(0,e.jsx)(n.TableCell,{align:typeof t.result=="number"?"right":"left",children:String((f=t.result)!=null?f:"")}),(0,e.jsx)(n.TableCell,{align:"left",children:(u=t.message)!=null?u:""})]},t.stepOrder)})})]})}):(0,e.jsx)(n.Stack,{divider:(0,e.jsx)(n.Divider,{orientation:"horizontal",flexItem:!0}),spacing:1,sx:{marginTop:1,overflow:"auto",height:"100%"},children:s.map(t=>{var f,u;return(0,e.jsxs)(n.Grid,{container:!0,children:[(0,e.jsx)(n.Grid,{item:!0,xs:6,display:"flex",justifyContent:"left",alignItems:"left",fontWeight:"bold",children:"Step name"}),(0,e.jsx)(n.Grid,{item:!0,xs:6,children:t.stepName}),(0,e.jsx)(n.Grid,{item:!0,xs:6,display:"flex",justifyContent:"left",alignItems:"left",fontWeight:"bold",children:"Status"}),(0,e.jsx)(n.Grid,{item:!0,xs:6,children:t.run?t.success?"\u2705":"\u274C":""}),(0,e.jsx)(n.Grid,{item:!0,xs:6,display:"flex",justifyContent:"left",alignItems:"left",fontWeight:"bold",children:"Result"}),(0,e.jsx)(n.Grid,{item:!0,xs:6,children:String((f=t.result)!=null?f:"")}),(0,e.jsx)(n.Grid,{item:!0,xs:6,display:"flex",justifyContent:"left",alignItems:"left",fontWeight:"bold",children:"Message"}),(0,e.jsx)(n.Grid,{item:!0,xs:6,children:(u=t.message)!=null?u:""})]},t.stepOrder)})})};var g=(s,i,l)=>new Promise((t,f)=>{var u=h=>{try{v(l.next(h))}catch(p){f(p)}},j=h=>{try{v(l.throw(h))}catch(p){f(p)}},v=h=>h.done?t(h.value):Promise.resolve(h.value).then(u,j);v((l=l.apply(s,i)).next())});const b={button:{minWidth:150},table:{minWidth:650}},a={ConnectionTestComponent:({adapterName:s,instance:i,socket:l,data:t})=>{const[f,u]=(0,x.useState)(!1),[j,v]=(0,x.useState)(!1),[h,p]=(0,x.useState)([]);(0,x.useEffect)(()=>{const m=(d,c)=>{const y=c?c.val:!1;u(y)};return g(void 0,null,function*(){const d=yield l.getState(`system.adapter.${s}.${i}.alive`);d&&d.val!==void 0?u(d.val):u(!1),yield l.subscribeState(`system.adapter.${s}.${i}.alive`,m)}),()=>{l.unsubscribeState(`system.adapter.${s}.${i}.alive`,m)}},[]),(0,x.useEffect)(()=>{const m=(d,c)=>{if(d.endsWith(".running")){const y=c?c.val:!1;v(y)}else if(d.endsWith(".testResults")){const y=c?JSON.parse(c.val||"[]"):[];p(y)}};return g(void 0,null,function*(){const d=yield l.getState(`${s}.${i}.TestConnection.running`);if(d&&d.val===!0){v(d.val);const c=yield l.getState(`${s}.${i}.TestConnection.testResults`);c&&c.val!==void 0&&p(JSON.parse(c.val||"[]"))}else v(!1),l.setState(`${s}.${i}.TestConnection.testResults`,"[]",!0);yield l.subscribeState(`${s}.${i}.TestConnection.*`,m)}),()=>{l.unsubscribeState(`${s}.${i}.TestConnection.*`,m)}},[]);const G=()=>g(void 0,null,function*(){try{const m={command:"ConnectionTest",hostname:t.host,password:yield l.encrypt(t.password)};t.advancedSSLConfiguration&&(m.advancedSSLConfiguration={sslFingerprint:t.SSLFingerprint,sslPublicKey:t.SSLPublicKey});const R=yield l.sendTo(`${s}.${i}`,m.command,m);p(R)}finally{}});return(0,e.jsxs)(S().Fragment,{children:[(0,e.jsx)(n.Button,{style:b.button,color:"secondary",variant:"contained",disabled:!f||j,onClick:G,children:"Test connection"}),(j||h.length>0)&&(0,e.jsx)(_,{testResults:h})]})}}},13394:(T,C,o)=>{var e;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=o(28437),S=Symbol.for("react.element"),O=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,w=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_={key:!0,ref:!0,__self:!0,__source:!0};function g(b,r,$){var a,s={},i=null,l=null;$!==void 0&&(i=""+$),r.key!==void 0&&(i=""+r.key),r.ref!==void 0&&(l=r.ref);for(a in r)n.call(r,a)&&!_.hasOwnProperty(a)&&(s[a]=r[a]);if(b&&b.defaultProps)for(a in r=b.defaultProps,r)s[a]===void 0&&(s[a]=r[a]);return{$$typeof:S,type:b,key:i,ref:l,props:s,_owner:w.current}}e=O,C.jsx=g,C.jsxs=g},64922:(T,C,o)=>{T.exports=o(13394)}}]);

//# sourceMappingURL=src_Components_jsx.f4fdd58a.chunk.js.map