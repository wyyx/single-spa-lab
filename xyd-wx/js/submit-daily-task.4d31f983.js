(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["submit-daily-task"],{"0024":function(t,e,i){var s=i("b331");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=i("499e").default;a("44269bc8",s,!0,{sourceMap:!1,shadowMode:!1})},"00ab":function(t,e,i){"use strict";var s=i("2b0e");e["a"]=s["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}})},"0798":function(t,e,i){"use strict";i("a57f");var s=i("9d26"),a=i("b64a"),o=i("98a1"),r=i("00ab"),n=i("58df");e["a"]=Object(n["a"])(a["a"],o["a"],r["a"]).extend({name:"v-alert",props:{dismissible:Boolean,icon:String,outline:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}}},computed:{computedColor:function(){return this.type&&!this.color?this.type:this.color||"error"},computedIcon:function(){if(this.icon||!this.type)return this.icon;switch(this.type){case"info":return"$vuetify.icons.info";case"error":return"$vuetify.icons.error";case"success":return"$vuetify.icons.success";case"warning":return"$vuetify.icons.warning"}}},methods:{genIcon:function(){return this.computedIcon?this.$createElement(s["a"],{class:"v-alert__icon"},this.computedIcon):null},genDismissible:function(){var t=this;return this.dismissible?this.$createElement("a",{class:"v-alert__dismissible",on:{click:function(){t.isActive=!1}}},[this.$createElement(s["a"],{props:{right:!0}},"$vuetify.icons.cancel")]):null}},render:function(t){var e=[this.genIcon(),t("div",this.$slots.default),this.genDismissible()],i=this.outline?this.setTextColor:this.setBackgroundColor,s=t("div",i(this.computedColor,{staticClass:"v-alert",class:{"v-alert--outline":this.outline},directives:[{name:"show",value:this.isActive}],on:this.$listeners}),e);return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[s]):s}})},"09d1":function(t,e,i){e=t.exports=i("24fb")(!1),e.push([t.i,".wrapper[data-v-172e0bf3]{height:100%;display:flex;flex-direction:column}.content[data-v-172e0bf3]{flex:1;overflow-x:hidden}.btn-wrap[data-v-172e0bf3]{margin:0 16px 8px;height:56px;line-height:34px;color:#aaa}.btn-wrap .select-img[data-v-172e0bf3]{font-size:32px!important;vertical-align:middle}.btn-wrap .select-music[data-v-172e0bf3]{font-size:52px!important;margin:0 40px;vertical-align:middle}.btn-wrap .select-video[data-v-172e0bf3]{font-size:48px!important;vertical-align:middle}.imges-wrap[data-v-172e0bf3]{margin:10px 4vw;background:#eee;padding:2.5vw;padding-right:0;border-radius:6px;overflow:hidden;display:flex;flex-wrap:wrap;justify-content:flex-start}.imges-wrap .selected-img[data-v-172e0bf3]{width:26vw;height:26vw;margin-bottom:10px;margin-right:3.5vw;position:relative}.imges-wrap .selected-img .close-btn[data-v-172e0bf3]{position:absolute;right:0;top:0}.music-wrap[data-v-172e0bf3]{margin:10px 4vw;padding:3vw;background:#eee;border-radius:6px}.music-wrap .info[data-v-172e0bf3],.music-wrap .success[data-v-172e0bf3]{float:right;margin-top:-5px;margin-right:-4px}.music-wrap .record-state[data-v-172e0bf3]{color:#666}.music-wrap .record-state .small-dot[data-v-172e0bf3]{font-size:12px;line-height:18px;margin-right:6px}.record-audio[data-v-172e0bf3]{height:50px;margin:20px 10px 10px 10px;border-radius:25px;background:#fff;display:flex}.record-audio .pause-play[data-v-172e0bf3]{font-size:30px;color:#d31;margin:10px 10px 0 16px}.record-audio .start-play[data-v-172e0bf3]{font-size:30px;color:#2196f3;margin:10px 10px 0 16px}.record-audio .record-time[data-v-172e0bf3]{margin-top:14px}.progress-bar-wrap[data-v-172e0bf3]{position:absolute;top:0;z-index:1000;width:100%;height:100%}.progress-bar[data-v-172e0bf3]{position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;background:#fff;border-radius:50%;z-index:2000}.task-des-text[data-v-172e0bf3]{outline:none;font-size:16px;padding:10px;width:100%;border:1px solid #ccc;border-radius:6px}.task-des-text[data-v-172e0bf3]::-webkit-input-placeholder{color:#aaa}.Alert_body[data-v-172e0bf3]{position:absolute;top:0;z-index:1001;width:100%}.video-wrap[data-v-172e0bf3]{margin-bottom:24px}",""])},"178d8":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"pswp",staticClass:"pswp",attrs:{tabindex:"-1",role:"dialog","aria-hidden":"true"}},[i("div",{staticClass:"pswp__bg"}),t._m(0)])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pswp__scroll-wrap"},[i("div",{staticClass:"pswp__container"},[i("div",{staticClass:"pswp__item"}),i("div",{staticClass:"pswp__item"}),i("div",{staticClass:"pswp__item"})]),i("div",{staticClass:"pswp__ui pswp__ui--hidden"},[i("div",{staticClass:"pswp__top-bar"},[i("div",{staticClass:"pswp__counter"}),i("button",{staticClass:"pswp__button pswp__button--close",attrs:{title:"Close (Esc)"}}),i("button",{staticClass:"pswp__button pswp__button--share",attrs:{title:"Share"}}),i("button",{staticClass:"pswp__button pswp__button--fs",attrs:{title:"Toggle fullscreen"}}),i("button",{staticClass:"pswp__button pswp__button--zoom",attrs:{title:"Zoom in/out"}}),i("div",{staticClass:"pswp__preloader"},[i("div",{staticClass:"pswp__preloader__icn"},[i("div",{staticClass:"pswp__preloader__cut"},[i("div",{staticClass:"pswp__preloader__donut"})])])])]),i("div",{staticClass:"pswp__share-modal pswp__share-modal--hidden pswp__single-tap"},[i("div",{staticClass:"pswp__share-tooltip"})]),i("button",{staticClass:"pswp__button pswp__button--arrow--left",attrs:{title:"Previous (arrow left)"}}),i("button",{staticClass:"pswp__button pswp__button--arrow--right",attrs:{title:"Next (arrow right)"}}),i("div",{staticClass:"pswp__caption"},[i("div",{staticClass:"pswp__caption__center"})])])])}],o=i("2b0e"),r=i("5236"),n=i.n(r),c=i("b278"),l=i.n(c),d=o["a"].extend({name:"PhotoSwipe",props:{imageList:Array},data:function(){return{gallery:{}}},methods:{showGallery:function(t){var e=this,i=this.$refs.pswp,s=[].concat(e.imageList.map(function(t){return{src:t,w:0,h:0}})),a={index:t||0,counterEl:!0,closeEl:!1,captionEl:!1,fullscreenEl:!1,zoomEl:!1,shareEl:!1,arrowEl:!1,tapToClose:!0,history:!1},o=new n.a(i,l.a,s,a);e.gallery=o,o.listen("gettingData",function(t,e){if(e.w<1||e.h<1){var i=new Image;i.onload=function(){e.w=i.width,e.h=i.height,o.invalidateCurrItems(),o.updateSize(!0)},i.src=e.src}}),o.init()}}}),p=d,h=i("0c7c"),u=Object(h["a"])(p,s,a,!1,null,null,null);e["a"]=u.exports},"253d":function(t,e,i){var s=i("f195");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=i("499e").default;a("4323fd44",s,!0,{sourceMap:!1,shadowMode:!1})},"25c1":function(t,e,i){e=t.exports=i("24fb")(!1),e.push([t.i,".v-alert{border-radius:0;border-width:4px 0 0 0;border-style:solid;color:#fff;display:flex;font-size:14px;margin:4px auto;padding:16px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-alert .v-alert__icon.v-icon,.v-alert__dismissible .v-icon{align-self:center;color:rgba(0,0,0,.3);font-size:24px}.v-alert--outline .v-icon{color:inherit!important}.v-alert__icon{margin-right:16px}.v-alert__dismissible{align-self:flex-start;color:inherit;margin-left:16px;margin-right:0;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-alert__dismissible:hover{opacity:.8}.v-alert--no-icon .v-alert__icon{display:none}.v-alert>div{align-self:center;flex:1 1}@media screen and (max-width:600px){.v-alert__icon{display:none}}.v-alert.v-alert{border-color:rgba(0,0,0,.12)!important}.v-alert.v-alert--outline{border:1px solid currentColor!important}",""])},3123:function(t,e,i){"use strict";i.d(e,"c",function(){return s}),i.d(e,"b",function(){return a}),i.d(e,"a",function(){return o});var s="task/",a="taskDetail",o="allTeachers"},"4b83":function(t,e,i){var s=i("09d1");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=i("499e").default;a("4b15d89a",s,!0,{sourceMap:!1,shadowMode:!1})},"4c34":function(t,e,i){var s=i("9376");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=i("499e").default;a("08d7e268",s,!0,{sourceMap:!1,shadowMode:!1})},"69a4":function(t,e,i){"use strict";i.d(e,"a",function(){return o});var s=i("cfdf"),a=function(){function t(){this.baseUrl="",this.httpConfigService=s["a"]}var e=t.prototype;return e.getTaskTemplate=function(){return this.httpConfigService.httpSercvice.post(this.baseUrl+"/wx/task-template/select-release-list")},e.taskPublish=function(t){return this.httpConfigService.httpSercvice.post(this.baseUrl+"/wx/task/insert",t)},e.getClassStudent=function(){return this.httpConfigService.httpSercvice.post(this.baseUrl+"/wx/class/select-class-by-teacher-id")},e.getGradeClass=function(){return this.httpConfigService.httpSercvice.post(this.baseUrl+"/wx/class/select-grade-by-school-id")},e.getClassIdAllStudent=function(t){return this.httpConfigService.httpSercvice.post(this.baseUrl+"/wx/student/list-by-class-id",{classId:t})},e.getPublishTaskDetail=function(t){return this.httpConfigService.httpSercvice.post(this.baseUrl+"/wx/task/select-page-by-deploy-user-id",t)},e.getTaskJoinDetail=function(t){return this.httpConfigService.httpSercvice.post(this.baseUrl+"/wx/task-msg/user-task-page-list",t)},e.getPunchTaskList=function(t){return this.httpConfigService.httpSercvice.post(this.baseUrl+"/wx/task-finish-detail/select-by-task-msg-id",{taskMsgId:t})},e.getPunchTaskDetailList=function(t){return this.httpConfigService.httpSercvice.post(this.baseUrl+"/wx/task-msg/select-page-by-task-id",t)},e.taskSubmit=function(t){return this.httpConfigService.httpSercvice.post(this.baseUrl+"/wx/task-finish-detail/insert",t)},e.punchTaskSubmit=function(t){return this.httpConfigService.httpSercvice.post(this.baseUrl+"/wx/task-finish-detail/update",t)},e.getDailyTaskDetailsList=function(t){return this.httpConfigService.httpSercvice.post(this.baseUrl+"/wx/task-finish-detail/select-page-by-task-id",t)},e.pushClickLike=function(t){return this.httpConfigService.httpSercvice.post(this.baseUrl+"/wx/task-like/update",{id:t})},e.getPersonalTaskDetail=function(t){return this.httpConfigService.httpSercvice.post(this.baseUrl+"/wx/task-finish-detail/select-by-id",{id:t})},e.getTaskCommentList=function(t){return this.httpConfigService.httpSercvice.post(this.baseUrl+"/wx/task-comment/list",t)},e.AddComment=function(t){return this.httpConfigService.httpSercvice.post(this.baseUrl+"/wx/task-comment/add",t)},e.ReplyComment=function(t){return this.httpConfigService.httpSercvice.post(this.baseUrl+"/wx/task-comment-reply/add",t)},e.getVideoToken=function(){return this.httpConfigService.httpSercvice.get(this.baseUrl+"/wx/qiniu/auth")},e.getTaskInfo=function(t){return this.httpConfigService.httpSercvice.post(this.baseUrl+"wx/task-msg/select-by-id",{id:t})},t}(),o=new a},"7c4a":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-toolbar",{staticClass:"header",attrs:{flat:"",app:"",height:"48"}},[i("v-toolbar-title",{staticClass:"text-uppercase"},[i("v-layout",{attrs:{row:"",nowrap:""}},[i("v-flex",{attrs:{shrink:""}},[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",[i("div",{directives:[{name:"ripple",rawName:"v-ripple"},{name:"touch",rawName:"v-touch:tap.prevent.stop",value:t.goBack,expression:"goBack",arg:"tap",modifiers:{prevent:!0,stop:!0}}],staticClass:"back-btn-wrapper pa-2 clickable"},[i("span",{staticClass:"icon iconfont icon-fanhui",staticStyle:{"font-size":"24px"}})])]),i("v-flex",{staticClass:"app-both-center subheading header-title"},[i("span",[t._v(t._s(t.title))])])],1)],1),i("v-flex",{attrs:{grow:""}},[t._t("center")],2),i("v-flex",{attrs:{shrink:""}},[t._t("actions")],2)],1)],1)],1)},a=[],o=i("2b0e"),r=o["a"].extend({props:{title:{type:String},showBack:{type:Boolean,default:!0},showTitle:{type:Boolean,default:!0}},methods:{goBack:function(){this.$emit("back")}}}),n=r,c=(i("8f47"),i("0c7c")),l=i("6544"),d=i.n(l),p=i("0e8f"),h=i("a722"),u=i("71d9"),f=i("2a7f"),v=i("269a"),m=i.n(v),g=i("3ccf"),w=Object(c["a"])(n,s,a,!1,null,"e08f7ade",null);e["a"]=w.exports;d()(w,{VFlex:p["a"],VLayout:h["a"],VToolbar:u["a"],VToolbarTitle:f["b"]}),m()(w,{Ripple:g["a"]})},"8f47":function(t,e,i){"use strict";var s=i("0024"),a=i.n(s);a.a},9376:function(t,e,i){e=t.exports=i("24fb")(!1),e.push([t.i,".v-responsive{position:relative;overflow:hidden;flex:1 0 auto;display:flex}.v-responsive__content{flex:1 0 0px}.v-responsive__sizer{transition:padding-bottom .2s cubic-bezier(.25,.8,.5,1);flex:0 0 0px}",""])},a523:function(t,e,i){"use strict";i("db6d");var s=i("e8f2");e["a"]=Object(s["a"])("container")},a57f:function(t,e,i){var s=i("25c1");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=i("499e").default;a("660aaa06",s,!0,{sourceMap:!1,shadowMode:!1})},adda:function(t,e,i){"use strict";i("253d"),i("4c34");var s=i("23bf"),a=i("58df"),o=Object(a["a"])(s["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),r=o,n=i("d9bd");e["a"]=r.extend({name:"v-img",props:{alt:String,contain:Boolean,src:{type:[String,Object],default:""},gradient:String,lazySrc:String,srcset:String,sizes:String,position:{type:String,default:"center center"},transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0}},computed:{computedAspectRatio:function(){return this.normalisedSrc.aspect},normalisedSrc:function(){return"string"===typeof this.src?{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||this.calculatedAspectRatio)}:{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect||this.calculatedAspectRatio)}},__cachedImage:function(){if(!this.normalisedSrc.src&&!this.normalisedSrc.lazySrc)return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient("+this.gradient+")"),e&&t.push('url("'+e+'")');var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init()},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(){if(this.normalisedSrc.lazySrc){var t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){Object(n["a"])("Image load failed\n\nsrc: "+this.normalisedSrc.src,this),this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch(function(e){Object(n["c"])("Failed to decode image, trying to render anyway\n\nsrc: "+t.normalisedSrc.src+(e.message?"\nOriginal error: "+e.message:""),t)}).then(t.onLoad):t.onLoad()},e.onerror=this.onError,e.src=this.normalisedSrc.src,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,s=function s(){var a=t.naturalHeight,o=t.naturalWidth;a||o?e.calculatedAspectRatio=o/a:null!=i&&setTimeout(s,i)};s()},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{attrs:{name:this.transition}},t):t[0]}}},render:function(t){var e=r.options.render.call(this,t);return e.data.staticClass+=" v-image",e.data.attrs={role:this.alt?"img":void 0,"aria-label":this.alt},e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,e.data,e.children)}})},b331:function(t,e,i){e=t.exports=i("24fb")(!1),e.push([t.i,".v-toolbar .v-toolbar__content[data-v-e08f7ade]{padding-left:0!important;padding-right:0!important}.v-toolbar__title[data-v-e08f7ade]{width:100%}.header[data-v-e08f7ade]{z-index:20;background-color:#ededed}.app-both-center span[data-v-e08f7ade]{display:block;max-width:200px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}",""])},dcee:function(t,e,i){"use strict";var s=i("4b83"),a=i.n(s);a.a},f195:function(t,e,i){e=t.exports=i("24fb")(!1),e.push([t.i,".v-image{z-index:0}.v-image__image,.v-image__placeholder{z-index:-1;position:absolute;top:0;left:0;width:100%;height:100%}.v-image__image{background-repeat:no-repeat}.v-image__image--preload{-webkit-filter:blur(2px);filter:blur(2px)}.v-image__image--contain{background-size:contain}.v-image__image--cover{background-size:cover}",""])},f769:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dynamic-home-page wrapper submit-task-page"},[i("Header",{attrs:{title:t.taskInfo.name},on:{back:t.goBack},scopedSlots:t._u([{key:"actions",fn:function(){return[i("v-layout",{staticClass:"app-fill-height",attrs:{row:"",wrap:""}},[t.description.trim()&&!t.isShowProgress?i("v-flex",{staticClass:"px-3 subheading app-both-center primary--text",on:{click:t.startUpload}},[i("v-btn",{staticClass:"ma-0",staticStyle:{"min-width":"unset"},attrs:{round:"",color:"primary"}},[t._v("提交")])],1):t._e(),t.description.trim()||t.isShowProgress?t._e():i("v-flex",{staticClass:"px-3 subheading app-both-center grey--text"},[i("v-btn",{staticClass:"ma-0 elevation-0",staticStyle:{"min-width":"unset"},attrs:{dark:"",round:"",color:"grey lighten-1"}},[t._v("提交")])],1),t.isShowProgress?i("v-flex",{staticClass:"app-both-center px-3"},[i("v-progress-circular",{attrs:{small:"",color:"primary",size:"16",width:"2",indeterminate:""}})],1):t._e()],1)]},proxy:!0}])}),i("v-alert",{directives:[{name:"show",rawName:"v-show",value:t.isComplete,expression:"isComplete"}],staticClass:"Alert_body",attrs:{value:!0,color:"warning",icon:"warning",transition:"scale-transition"}},[t._v(t._s(t.alertInfo))]),i("div",{staticClass:"content"},[i("v-container",{attrs:{fluid:"","grid-list-md":""}},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"task-des-text",attrs:{placeholder:"描述...",cols:"30",rows:"5"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowImg,expression:"isShowImg"}],staticClass:"imges-wrap"},t._l(t.isIos?t.imageWithBase64:t.localIds,function(e,s){return i("div",{key:e,staticClass:"selected-img"},[i("v-img",{staticClass:"grey lighten-2",attrs:{src:e,"lazy-src":e,"aspect-ratio":"1"},on:{click:function(e){return t.showGallary(s)}},scopedSlots:t._u([{key:"placeholder",fn:function(){return[i("v-layout",{attrs:{"fill-height":"","align-center":"","justify-center":"","ma-0":""}},[i("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)}),i("v-btn",{staticClass:"close-btn ma-0",attrs:{small:"",icon:""},on:{click:function(e){return t.removeImg(s)}}},[i("v-icon",{attrs:{color:"grey"}},[t._v("close")])],1)],1)}),0),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMusic,expression:"isShowMusic"}],staticClass:"music-wrap"},[i("div",{staticClass:"record-modle"},[i("span",{staticClass:"record-state"},[i("v-icon",{staticClass:"small-dot"},[t._v("lens")]),i("span",{staticClass:"record-info"},[t._v(t._s(t.recordInfo))])],1),i("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.isShowBtn,expression:"isShowBtn"}],staticClass:"start-btn",attrs:{color:"info",small:""},on:{click:t.startRecord}},[t._v(t._s(t.isShowRecorded?"重录":"开始"))]),i("v-btn",{directives:[{name:"show",rawName:"v-show",value:!t.isShowBtn,expression:"!isShowBtn"}],staticClass:"over-btn",attrs:{color:"success",small:""},on:{click:t.stopRecord}},[t._v("完成")])],1),t.isShowRecorded?i("div",{staticClass:"record-audio"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowPlayBtn,expression:"isShowPlayBtn"}]},[i("v-icon",{staticClass:"start-play",on:{click:t.startPlay}},[t._v("play_circle_outline")])],1),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.isShowPlayBtn,expression:"!isShowPlayBtn"}]},[i("v-icon",{staticClass:"pause-play",on:{click:t.endPlay}},[t._v("pause_circle_outline")])],1),i("div",{staticClass:"record-time"},[i("span",[t._v("00:"+t._s(t.playTime>9?t.playTime:"0"+t.playTime))]),i("span",[t._v("\n            / 00:"+t._s(t.recordDuration>9?t.recordDuration:"0"+t.recordDuration)+"\n          ")])])]):t._e()]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowVideo,expression:"isShowVideo"}],staticClass:"video-wrap"},[i("input",{ref:"evfile",staticStyle:{display:"none"},attrs:{accept:"video/*",type:"file",id:"videoFile"},on:{change:function(e){return t.chooseFileChange(e)}}}),i("video",{staticClass:"video-controls",attrs:{src:t.url+"#t=1","x5-video-player-type":"h5-page","webkit-playsinline":"",playsinline:"true",controls:"controls"}})]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowProgress,expression:"isShowProgress"}],staticClass:"progress-bar-wrap"},[i("v-progress-circular",{staticClass:"progress-bar",attrs:{rotate:-90,size:80,width:10,value:t.progress,color:"info"}},[t._v(t._s(t.progress))])],1),i("div",{staticClass:"btn-wrap"},[i("span",{staticClass:"icon iconfont icon-tupian select-img",on:{click:t.uploadImages}}),i("span",{staticClass:"icon iconfont icon-icon- select-music",on:{click:t.uploadMusic}}),i("span",{staticClass:"icon iconfont icon-shipin_huabanfuben select-video",on:{click:t.chooseFile}})])],1),i("PhotoSwipe",{ref:"ps",attrs:{imageList:t.isIos?t.imageWithBase64:t.localIds}})],1)},a=[],o=(i("28a5"),i("7f7f"),i("ac6a"),i("2b0e")),r=i("7c4a"),n=i("ffc8"),c=i("69a4"),l=i("178d8"),d=i("7ffd"),p=i("3123"),h=i("048b"),u=i("80b8"),f=i("cea2"),v=i("c64e"),m=i.n(v),g=i("bd51"),w=i("4fb8"),b=i.n(w),S=i("c6c6"),_=i.n(S),y=new _.a(window.navigator.userAgent),x=o["a"].extend({components:{Header:r["a"],PhotoSwipe:l["a"]},computed:Object.assign({},Object(d["b"])(p["c"],{taskDetail:p["b"]}),Object(d["b"])(h["b"],{fromPath:h["a"]})),data:function(){return{taskInfo:null,description:"",wxImageList:[],localIds:[],isShowImg:!1,isShowMusic:!1,isShowVideo:!1,isShowBtn:!0,second:0,recordInfo:"点击开始录音",timer:null,recordLocalId:"",recordServeId:[],recordDuration:0,isShowPlayBtn:!0,playTime:0,isShowRecorded:!1,timer2:null,gallery:{},videoFile:null,url:"",progress:"0%",isShowProgress:!1,videoAdress:"",isComplete:!1,alertInfo:"",isIos:y.is("iOS"),imageWithBase64:[]}},created:function(){document.title="日常任务",n["a"].initForAllPlatform(window.location.href,localStorage.getItem(g["d"].entryUrl));var t=this;this.taskInfo=t.taskDetail},methods:{goBack:function(){var t=this;this.$router.push({path:t.fromPath})},submitTask:function(){var t=this,e={};e.description=this.description,(this.isShowMusic=this.recordServeId.length>0)&&c["a"].taskSubmit({taskFinishDetailContentParams:[{img:JSON.stringify([]),description:JSON.stringify(e),audio:JSON.stringify(this.recordServeId),video:""===this.videoAdress?JSON.stringify([]):JSON.stringify([this.videoAdress])}],taskMsgId:this.taskInfo.taskMsgId}).then(function(e){"0"===e.data.errorCode?(u["a"].store.set(p["c"]+"taskDetail@state",1),"打卡任务"===t.taskInfo.taskTemplateName?t.$router.push({name:"punch-complete-detail",query:{state:"true"}}):t.$router.push({name:"task-complete-detail",query:{state:"true"}})):(t.$data.alertInfo=e.data.errorMsg,t.$data.isComplete=!0,setTimeout(function(){t.$data.isComplete=!1},2e3))}),!0===this.isShowImg&&this.wxImageList.length>0&&c["a"].taskSubmit({taskFinishDetailContentParams:[{description:JSON.stringify(e),img:JSON.stringify(this.wxImageList),audio:JSON.stringify([]),video:""===this.videoAdress?JSON.stringify([]):JSON.stringify([this.videoAdress])}],taskMsgId:this.taskInfo.taskMsgId}).then(function(e){"0"===e.data.errorCode?(u["a"].store.set(p["c"]+"taskDetail@state",1),"打卡任务"===t.taskInfo.taskTemplateName?t.$router.push({name:"punch-complete-detail",query:{state:"true"}}):t.$router.push({name:"task-complete-detail",query:{state:"true"}})):(t.$data.alertInfo=e.data.errorMsg,t.$data.isComplete=!0,setTimeout(function(){t.$data.isComplete=!1},2e3))}),!1===this.isShowImg&&!1===this.isShowMusic&&c["a"].taskSubmit({taskFinishDetailContentParams:[{description:JSON.stringify(e),img:JSON.stringify([]),audio:JSON.stringify([]),video:""===this.videoAdress?JSON.stringify([]):JSON.stringify([this.videoAdress])}],taskMsgId:this.taskInfo.taskMsgId}).then(function(e){"0"===e.data.errorCode?(u["a"].store.set(p["c"]+"taskDetail@state",1),"打卡任务"===t.taskInfo.taskTemplateName?t.$router.push({name:"punch-complete-detail",query:{state:"true"}}):t.$router.push({name:"task-complete-detail",query:{state:"true"}})):(t.$data.alertInfo=e.data.errorMsg,t.$data.isComplete=!0,setTimeout(function(){t.$data.isComplete=!1},2e3))})},uploadImages:function(){var t=this;this.localIds.length<9&&n["a"].chooseImage().then(function(e){t.localIds=t.localIds.concat(e),!0===t.isIos&&t.localIds.forEach(function(e){n["a"].wx.getLocalImgData({localId:e,success:function(e){var i=e.localData;t.imageWithBase64.push(i)}})});var i=t;i.$refs.evfile.value="",t.isShowImg=!0,t.isShowVideo=!1,t.isShowMusic=!1,n["a"].uploadWeChatImage(t.localIds).then(function(e){var i=[];e.forEach(function(t){i.push("/api/wx/we-chat/media/show/"+t.serverId)}),t.wxImageList=i})})},removeImg:function(t){this.localIds.splice(t,1),this.wxImageList.splice(t,1),this.imageWithBase64.splice(t,1)},uploadMusic:function(){var t=this;t.$refs.evfile.value="",this.isShowVideo=!1,this.isShowImg=!1,this.isShowMusic=!0,this.localIds=[]},startRecord:function(){var t=this;this.isShowBtn=!1,n["a"].startRecord(),n["a"].stopVoice(this.recordLocalId),clearInterval(this.timer2),this.recordDuration=0,this.playTime=0;var e=document.querySelector(".record-info");document.querySelector(".small-dot").style="color:#d31",e.style="color:#d31",this.recordInfo="正在录音00:00",this.timer=setInterval(function(){t.second++;var e="";t.second<10&&(e="0"),t.recordInfo="正在录音00:"+e+t.second},1e3)},stopRecord:function(){var t=this;clearInterval(this.timer),this.recordDuration=this.second,this.second=0,clearInterval(this.timer2),this.isShowRecorded=!0,this.isShowPlayBtn=!0,this.isShowBtn=!0;var e=document.querySelector(".record-info");document.querySelector(".small-dot").style="color:#666",e.style="color:#666",this.recordInfo="点击开始录音",n["a"].stopVoice(this.recordLocalId),n["a"].stopRecord().then(function(e){t.recordLocalId=e,n["a"].uploadVoice(e).then(function(e){t.recordServeId=[e]})})},startPlay:function(){var t=this;this.isShowPlayBtn=!1,this.timer2=setInterval(function(){t.playTime++},1e3),n["a"].playVoice(this.recordLocalId)},endPlay:function(){this.isShowPlayBtn=!0,clearInterval(this.timer2),n["a"].pauseVoice(this.recordLocalId)},showGallary:function(t){var e=this;e.$refs.ps.showGallery(t)},chooseFile:function(){this.$refs.evfile.click()},chooseFileChange:function(t){var e=this,i=t.target.files[0];this.videoFile=i;var s=this;this.isShowVideo=!0,this.isShowImg=!1,this.isShowMusic=!1,this.progress="0%",i.size>52428800&&(confirm("请选择50mb以内的视频"),s.$refs.evfile.value="",this.isShowVideo=!1,this.videoFile=""),!0===this.isIos?(this.isShowProgress=!0,c["a"].getVideoToken().then(function(t){console.log("后台token",t);var s=t.data.domain,a=e,o=t.data.token,r=i,n=r.name,c=n.split(".").pop(),l=m()(),d=localStorage.getItem("schoolId"),p=d+"/video/"+a.taskDetail.id+"/"+l+"."+c;console.log("拼接文件名",p);var h={useCdnDomain:!0,region:f["region"].z2},u={fname:"",params:{},mimeType:null},v=f["upload"](r,p,o,u,h);v.subscribe({next:function(t){console.log(t);var i=t.total.percent;console.log(i),e.progress=Math.floor(i)+"%",console.log(e.progress)},error:function(t){console.log(t)},complete:function(t){console.log(t),e.videoAdress=s+"/"+t.key,console.log(e.videoAdress),e.url=s+"/"+t.key}})})):(this.url=URL.createObjectURL(i),console.log("本地视频地址",this.url)),this.initVideoPlayer()},initVideoPlayer:function(){setTimeout(function(){var t=document.querySelectorAll(".video-controls");console.log("所有视频",t),t.forEach(function(t){new b.a(t)})},0)},startUpload:function(){var t=this;!0!==this.isIos&&!1!==this.isShowVideo?(this.isShowProgress=!0,c["a"].getVideoToken().then(function(e){console.log("后台token",e);var i=e.data.domain,s=t,a=e.data.token,o=s.$refs.evfile.files[0],r=m()(),n=localStorage.getItem("schoolId"),c=n+"/video/"+s.taskDetail.id+"/"+r;console.log("拼接文件名",c);var l={useCdnDomain:!0,region:f["region"].z2},d={fname:"",params:{},mimeType:null},p=f["upload"](o,c,a,d,l);p.subscribe({next:function(e){console.log(e);var i=e.total.percent;console.log(i),t.progress=Math.floor(i)+"%",console.log(t.progress)},error:function(t){console.log(t)},complete:function(e){console.log(e),t.videoAdress=i+"/"+e.key,console.log(t.videoAdress),t.submitTask()}})})):this.submitTask()}},watch:{progress:function(){var t=this;"100%"===this.progress&&setTimeout(function(){t.isShowProgress=!1},800)},localIds:function(){this.localIds.length>0?this.isShowImg=!0:this.isShowImg=!1},second:function(){this.second>=59&&this.stopRecord()},playTime:function(){this.playTime>this.recordDuration&&(clearInterval(this.timer2),this.playTime=0,this.isShowPlayBtn=!0,n["a"].stopVoice(this.recordLocalId))}}}),k=x,C=(i("dcee"),i("0c7c")),I=i("6544"),z=i.n(I),$=i("0798"),T=i("8336"),P=i("a523"),B=i("0e8f"),L=i("132d"),N=i("adda"),M=i("a722"),D=i("490a"),V=Object(C["a"])(k,s,a,!1,null,"172e0bf3",null);e["default"]=V.exports;z()(V,{VAlert:$["a"],VBtn:T["a"],VContainer:P["a"],VFlex:B["a"],VIcon:L["a"],VImg:N["a"],VLayout:M["a"],VProgressCircular:D["a"]})}}]);