(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{339:function(e,n,t){"use strict";t.r(n);var o={name:"CoreAppBar",components:{SocialMedia:function(){return Promise.all([t.e(1),t.e(2),t.e(3),t.e(0),t.e(4),t.e(5)]).then(t.bind(null,337))}},data:function(){return{showLogo:!1,isScrolling:!1}},methods:{onScroll:function(){var e=window.pageYOffset;this.isScrolling=e>50,this.showLogo=e>200}}},l=t(22),r=t(49),c=t.n(r),h=t(301),d=t(88),w=t(292),v=t(285),f=t.n(v),S=t(170),component=Object(l.a)(o,(function(){var e=this.$createElement,n=this._self._c||e;return n("v-app-bar",{directives:[{name:"scroll",rawName:"v-scroll",value:this.onScroll,expression:"onScroll"}],attrs:{color:this.isScrolling?"white":"transparent",fixed:"",flat:""}},[n("v-slide-x-transition",[this.showLogo?n("h3",{staticClass:"shrink",staticStyle:{padding:"15px",height:"50px"}},[this._v("\n      Eulier González\n    ")]):this._e()]),this._v(" "),n("v-spacer"),this._v(" "),n("social-media")],1)}),[],!1,null,null,null);n.default=component.exports;c()(component,{VAppBar:h.a,VSlideXTransition:d.c,VSpacer:w.a}),f()(component,{Scroll:S.b})}}]);