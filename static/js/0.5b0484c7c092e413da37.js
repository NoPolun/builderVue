webpackJsonp([0],{ZQsG:function(e,t){},csSs:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={name:"Base",data:function(){return{phoneNumber:""}},methods:{clickNumber:function(){alert("shuju");var e="http://apis.juhe.cn/mobile/get?phone="+this.phoneNumber+"&key=7ae71995d6f573bf27e46a48c4b7a535";this.axios.get(e).then(function(e){alert(e)}).catch(function(e){alert(e)})}}},r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[e._v("手机归属地查询查询")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.phoneNumber,expression:"phoneNumber"}],attrs:{type:"text",placeholder:"请输入查询的手机号"},domProps:{value:e.phoneNumber},on:{input:function(t){t.target.composing||(e.phoneNumber=t.target.value)}}}),e._v(" "),n("button",{on:{click:e.clickNumber}},[e._v("确定")])])},staticRenderFns:[]};var o=n("VU/8")(a,r,!1,function(e){n("ZQsG")},"data-v-4fc2cea5",null);t.default=o.exports}});
//# sourceMappingURL=0.5b0484c7c092e413da37.js.map