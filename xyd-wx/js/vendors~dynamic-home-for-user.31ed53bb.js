(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["vendors~dynamic-home-for-user","vendors~my-articles"],{"0789":function(t,e,i){"use strict";i.d(e,"f",function(){return r}),i.d(e,"e",function(){return a}),i.d(e,"b",function(){return o}),i.d(e,"c",function(){return l}),i.d(e,"d",function(){return c}),i.d(e,"a",function(){return d});var s=i("80d2"),n=i("163e"),r=(Object(s["g"])("bottom-sheet-transition"),Object(s["g"])("carousel-transition"),Object(s["g"])("carousel-reverse-transition"),Object(s["g"])("tab-transition")),a=Object(s["g"])("tab-reverse-transition"),o=(Object(s["g"])("menu-transition"),Object(s["g"])("fab-transition","center center","out-in")),l=(Object(s["g"])("dialog-transition"),Object(s["g"])("dialog-bottom-transition"),Object(s["g"])("fade-transition")),c=(Object(s["g"])("scale-transition"),Object(s["g"])("scroll-x-transition"),Object(s["g"])("scroll-x-reverse-transition"),Object(s["g"])("scroll-y-transition"),Object(s["g"])("scroll-y-reverse-transition"),Object(s["g"])("slide-x-transition")),d=(Object(s["g"])("slide-x-reverse-transition"),Object(s["g"])("slide-y-transition"),Object(s["g"])("slide-y-reverse-transition"),Object(s["d"])("expand-transition",Object(n["a"])()));Object(s["d"])("expand-x-transition",Object(n["a"])("",!0)),Object(s["d"])("row-expand-transition",Object(n["a"])("datatable__expand-col--expanded"))},"163e":function(t,e,i){"use strict";var s=i("80d2");function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}e["a"]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=e?"width":"height";return{beforeEnter:function(t){t._parent=t.parentNode,t._initialStyle=n({transition:t.style.transition,visibility:t.style.visibility,overflow:t.style.overflow},i,t.style[i])},enter:function(e){var n=e._initialStyle;e.style.setProperty("transition","none","important"),e.style.visibility="hidden";var r=e["offset"+Object(s["t"])(i)]+"px";e.style.visibility=n.visibility,e.style.overflow="hidden",e.style[i]=0,e.offsetHeight,e.style.transition=n.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame(function(){e.style[i]=r})},afterEnter:a,enterCancelled:a,leave:function(t){t._initialStyle=n({overflow:t.style.overflow},i,t.style[i]),t.style.overflow="hidden",t.style[i]=t["offset"+Object(s["t"])(i)]+"px",t.offsetHeight,requestAnimationFrame(function(){return t.style[i]=0})},afterLeave:r,leaveCancelled:r};function r(e){t&&e._parent&&e._parent.classList.remove(t),a(e)}function a(t){t.style.overflow=t._initialStyle.overflow,t.style[i]=t._initialStyle[i],delete t._initialStyle}}},"23bf":function(t,e,i){"use strict";var s=i("80d2"),n=i("2b0e");e["a"]=n["a"].extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(s["c"])(this.height),i=Object(s["c"])(this.minHeight),n=Object(s["c"])(this.minWidth),r=Object(s["c"])(this.maxHeight),a=Object(s["c"])(this.maxWidth),o=Object(s["c"])(this.width);return e&&(t.height=e),i&&(t.minHeight=i),n&&(t.minWidth=n),r&&(t.maxHeight=r),a&&(t.maxWidth=a),o&&(t.width=o),t}}})},"2e03":function(t,e,i){e=t.exports=i("24fb")(!1),e.push([t.i,".theme--light.v-sheet{background-color:#fff;border-color:#fff;color:rgba(0,0,0,.87)}.theme--dark.v-sheet{background-color:#424242;border-color:#424242;color:#fff}.v-sheet{display:block;border-radius:2px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-sheet--tile{border-radius:0}",""])},"3e79":function(t,e,i){"use strict";var s=i("2b0e");e["a"]=s["a"].extend().extend({name:"bootable",props:{lazy:Boolean},data:function(){return{isBooted:!1}},computed:{hasContent:function(){return this.isBooted||!this.lazy||this.isActive}},watch:{isActive:function(){this.isBooted=!0}},methods:{showLazyContent:function(t){return this.hasContent?t:void 0}}})},"40fe":function(t,e,i){"use strict";var s=i("2b0e");e["a"]=s["a"].extend({name:"v-list-tile-action",functional:!0,render:function(t,e){var i=e.data,s=e.children,n=void 0===s?[]:s;i.staticClass=i.staticClass?"v-list__tile__action "+i.staticClass:"v-list__tile__action";var r=n.filter(function(t){return!1===t.isComment&&" "!==t.text});return r.length>1&&(i.staticClass+=" v-list__tile__action--stack"),t("div",i,n)}})},"4c2f":function(t,e,i){e=t.exports=i("24fb")(!1),e.push([t.i,".v-avatar{align-items:center;border-radius:50%;display:inline-flex;justify-content:center;position:relative;text-align:center;vertical-align:middle}.v-avatar .v-icon,.v-avatar .v-image,.v-avatar img{border-radius:50%;display:inline-flex;height:inherit;width:inherit}.v-avatar--tile,.v-avatar--tile .v-icon,.v-avatar--tile .v-image,.v-avatar--tile img{border-radius:0}",""])},"4c94":function(t,e,i){var s=i("8083");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var n=i("499e").default;n("f1e41138",s,!0,{sourceMap:!1,shadowMode:!1})},"4fa4":function(t,e,i){var s=i("4c2f");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var n=i("499e").default;n("04444c84",s,!0,{sourceMap:!1,shadowMode:!1})},"5d23":function(t,e,i){"use strict";var s=i("80d2"),n=i("8860"),r=i("9d26"),a=i("3e79"),o=i("98a1"),l=i("94ab"),c=i("0789"),d=i("58df"),v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t};function _(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var u=Object(d["a"])(a["a"],Object(l["a"])("list","v-list-group","v-list"),o["a"]).extend({name:"v-list-group",inject:["listClick"],props:{activeClass:{type:String,default:"primary--text"},appendIcon:{type:String,default:"$vuetify.icons.expand"},disabled:Boolean,group:String,noAction:Boolean,prependIcon:String,subGroup:Boolean},data:function(){return{groups:[]}},computed:{groupClasses:function(){return{"v-list__group--active":this.isActive,"v-list__group--disabled":this.disabled}},headerClasses:function(){return{"v-list__group__header--active":this.isActive,"v-list__group__header--sub-group":this.subGroup}},itemsClasses:function(){return{"v-list__group__items--no-action":this.noAction}}},watch:{isActive:function(t){!this.subGroup&&t&&this.listClick(this._uid)},$route:function(t){var e=this.matchRoute(t.path);this.group&&(e&&this.isActive!==e&&this.listClick(this._uid),this.isActive=e)}},mounted:function(){this.list.register(this),this.group&&this.$route&&null==this.value&&(this.isActive=this.matchRoute(this.$route.path))},beforeDestroy:function(){this.list.unregister(this._uid)},methods:{click:function(t){this.disabled||(this.$emit("click",t),this.isActive=!this.isActive)},genIcon:function(t){return this.$createElement(r["a"],t)},genAppendIcon:function(){var t=!this.subGroup&&this.appendIcon;return t||this.$slots.appendIcon?this.$createElement("div",{staticClass:"v-list__group__header__append-icon"},[this.$slots.appendIcon||this.genIcon(t)]):null},genGroup:function(){return this.$createElement("div",{staticClass:"v-list__group__header",class:this.headerClasses,on:v({},this.$listeners,{click:this.click}),ref:"item"},[this.genPrependIcon(),this.$slots.activator,this.genAppendIcon()])},genItems:function(){return this.$createElement("div",{staticClass:"v-list__group__items",class:this.itemsClasses,directives:[{name:"show",value:this.isActive}],ref:"group"},this.showLazyContent(this.$slots.default))},genPrependIcon:function(){var t=this.prependIcon?this.prependIcon:!!this.subGroup&&"$vuetify.icons.subgroup";return t||this.$slots.prependIcon?this.$createElement("div",{staticClass:"v-list__group__header__prepend-icon",class:_({},this.activeClass,this.isActive)},[this.$slots.prependIcon||this.genIcon(t)]):null},toggle:function(t){this.isActive=this._uid===t},matchRoute:function(t){return!!this.group&&null!==t.match(this.group)}},render:function(t){return t("div",{staticClass:"v-list__group",class:this.groupClasses},[this.genGroup(),t(c["a"],[this.genItems()])])}}),h=i("ba95"),p=i("40fe"),g=i("c954");i.d(e,"a",function(){return b}),i.d(e,"c",function(){return m}),i.d(e,"b",function(){return x});var f=Object(s["f"])("v-list__tile__action-text","span"),b=Object(s["f"])("v-list__tile__content","div"),m=Object(s["f"])("v-list__tile__title","div"),x=Object(s["f"])("v-list__tile__sub-title","div");n["a"],h["a"],p["a"],g["a"]},8083:function(t,e,i){e=t.exports=i("24fb")(!1),e.push([t.i,".theme--light.v-card{background-color:#fff;border-color:#fff;color:rgba(0,0,0,.87)}.theme--dark.v-card{background-color:#424242;border-color:#424242;color:#fff}.v-card{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);text-decoration:none}.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-card--hover{cursor:pointer;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-property:box-shadow}.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;padding:16px}.v-card__title--primary{padding-top:24px}.v-card__text{padding:16px;width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions .v-btn,.v-card__actions>*{margin:0}.v-card__actions .v-btn+.v-btn{margin-left:8px}",""])},8212:function(t,e,i){"use strict";i("4fa4");var s=i("b64a"),n=i("80d2"),r=i("58df"),a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t};e["a"]=Object(r["a"])(s["a"]).extend({name:"v-avatar",functional:!0,props:{color:String,size:{type:[Number,String],default:48},tile:Boolean},render:function(t,e){var i=e.data,r=e.props,o=e.children;i.staticClass=("v-avatar "+(i.staticClass||"")).trim(),r.tile&&(i.staticClass+=" v-avatar--tile");var l=Object(n["c"])(r.size);return i.style=a({height:l,width:l},i.style),t("div",s["a"].options.methods.setBackgroundColor(r.color,i),o)}})},8860:function(t,e,i){"use strict";i("d0cb");var s=i("6a18"),n=i("94ab"),r=i("58df"),a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t};e["a"]=Object(r["a"])(Object(n["b"])("list"),s["a"]).extend({name:"v-list",provide:function(){return{listClick:this.listClick}},props:{dense:Boolean,expand:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:function(){return{groups:[]}},computed:{classes:function(){return a({"v-list--dense":this.dense,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine},this.themeClasses)}},methods:{register:function(t){this.groups.push(t)},unregister:function(t){var e=this.groups.findIndex(function(e){return e._uid===t._uid});e>-1&&this.groups.splice(e,1)},listClick:function(t){if(!this.expand){var e=!0,i=!1,s=void 0;try{for(var n,r=this.groups[Symbol.iterator]();!(e=(n=r.next()).done);e=!0){var a=n.value;a.toggle(t)}}catch(o){i=!0,s=o}finally{try{!e&&r.return&&r.return()}finally{if(i)throw s}}}}},render:function(t){var e={staticClass:"v-list",class:this.classes,attrs:{role:"list"}};return t("div",e,[this.$slots.default])}})},a600:function(t,e,i){e=t.exports=i("24fb")(!1),e.push([t.i,'.theme--light.v-list{background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-list .v-list--disabled{color:rgba(0,0,0,.38)}.theme--light.v-list .v-list__tile__sub-title{color:rgba(0,0,0,.54)}.theme--light.v-list .v-list__tile__mask{color:rgba(0,0,0,.38);background:#eee}.theme--light.v-list .v-list__group__header:hover,.theme--light.v-list .v-list__tile--highlighted,.theme--light.v-list .v-list__tile--link:hover{background:rgba(0,0,0,.04)}.theme--light.v-list .v-list__group--active:after,.theme--light.v-list .v-list__group--active:before{background:rgba(0,0,0,.12)}.theme--light.v-list .v-list__group--disabled .v-list__group__header__prepend-icon .v-icon,.theme--light.v-list .v-list__group--disabled .v-list__tile{color:rgba(0,0,0,.38)!important}.theme--dark.v-list{background:#424242;color:#fff}.theme--dark.v-list .v-list--disabled{color:hsla(0,0%,100%,.5)}.theme--dark.v-list .v-list__tile__sub-title{color:hsla(0,0%,100%,.7)}.theme--dark.v-list .v-list__tile__mask{color:hsla(0,0%,100%,.5);background:#494949}.theme--dark.v-list .v-list__group__header:hover,.theme--dark.v-list .v-list__tile--highlighted,.theme--dark.v-list .v-list__tile--link:hover{background:hsla(0,0%,100%,.08)}.theme--dark.v-list .v-list__group--active:after,.theme--dark.v-list .v-list__group--active:before{background:hsla(0,0%,100%,.12)}.theme--dark.v-list .v-list__group--disabled .v-list__group__header__prepend-icon .v-icon,.theme--dark.v-list .v-list__group--disabled .v-list__tile{color:hsla(0,0%,100%,.5)!important}.application--is-rtl .v-list__tile__content,.application--is-rtl .v-list__tile__title{text-align:right}.v-list{list-style-type:none;padding:8px 0 8px;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-list>div{transition:inherit}.v-list__tile{align-items:center;color:inherit;display:flex;font-size:16px;font-weight:400;height:48px;margin:0;padding:0 16px;position:relative;text-decoration:none;transition:background .3s cubic-bezier(.25,.8,.5,1)}.v-list__tile--link{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-list__tile__action,.v-list__tile__content{height:100%}.v-list__tile__sub-title,.v-list__tile__title{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-list__tile__title{height:24px;line-height:24px;position:relative;text-align:left}.v-list__tile__sub-title{font-size:14px}.v-list__tile__action,.v-list__tile__avatar{display:flex;justify-content:flex-start;min-width:56px}.v-list__tile__action{align-items:center}.v-list__tile__action .v-btn{padding:0;margin:0}.v-list__tile__action .v-btn--icon{margin:-6px}.v-list__tile__action .v-radio.v-radio{margin:0}.v-list__tile__action .v-input--selection-controls{padding:0;margin:0}.v-list__tile__action .v-input--selection-controls .v-messages{display:none}.v-list__tile__action .v-input--selection-controls .v-input__slot{margin:0}.v-list__tile__action-text{color:#9e9e9e;font-size:12px}.v-list__tile__action--stack{align-items:flex-end;justify-content:space-between;padding-top:8px;padding-bottom:8px;white-space:nowrap;flex-direction:column}.v-list__tile__content{text-align:left;flex:1 1 auto;overflow:hidden;display:flex;align-items:flex-start;justify-content:center;flex-direction:column}.v-list__tile__content~.v-list__tile__action:not(.v-list__tile__action--stack),.v-list__tile__content~.v-list__tile__avatar{justify-content:flex-end}.v-list__tile--active .v-list__tile__action:first-of-type .v-icon{color:inherit}.v-list__tile--avatar{height:56px}.v-list--dense{padding-top:4px;padding-bottom:4px}.v-list--dense .v-subheader{font-size:13px;height:40px}.v-list--dense .v-list__group .v-subheader{height:40px}.v-list--dense .v-list__tile{font-size:13px}.v-list--dense .v-list__tile--avatar{height:48px}.v-list--dense .v-list__tile:not(.v-list__tile--avatar){height:40px}.v-list--dense .v-list__tile .v-icon{font-size:22px}.v-list--dense .v-list__tile__sub-title{font-size:13px}.v-list--disabled{pointer-events:none}.v-list--two-line .v-list__tile{height:72px}.v-list--two-line.v-list--dense .v-list__tile{height:60px}.v-list--three-line .v-list__tile{height:88px}.v-list--three-line .v-list__tile__avatar{margin-top:-18px}.v-list--three-line .v-list__tile__sub-title{white-space:normal;-webkit-line-clamp:2;display:-webkit-box}.v-list--three-line.v-list--dense .v-list__tile{height:76px}.v-list>.v-list__group:before{top:0}.v-list>.v-list__group:before .v-list__tile__avatar{margin-top:-14px}.v-list__group{padding:0;position:relative;transition:inherit}.v-list__group:after,.v-list__group:before{content:"";height:1px;left:0;position:absolute;transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-list__group--active~.v-list__group:before{display:none}.v-list__group__header{align-items:center;cursor:pointer;display:flex;list-style-type:none}.v-list__group__header>div:not(.v-list__group__header__prepend-icon):not(.v-list__group__header__append-icon){flex:1 1 auto;overflow:hidden}.v-list__group__header .v-list__group__header__append-icon,.v-list__group__header .v-list__group__header__prepend-icon{padding:0 16px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-list__group__header--sub-group{align-items:center;display:flex}.v-list__group__header--sub-group div .v-list__tile{padding-left:0}.v-list__group__header--sub-group .v-list__group__header__prepend-icon{padding:0 0 0 40px;margin-right:8px}.v-list__group__header .v-list__group__header__prepend-icon{display:flex;justify-content:flex-start;min-width:56px}.v-list__group__header--active .v-list__group__header__append-icon .v-icon{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.v-list__group__header--active .v-list__group__header__prepend-icon .v-icon{color:inherit}.v-list__group__header--active.v-list__group__header--sub-group .v-list__group__header__prepend-icon .v-icon{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.v-list__group__items{position:relative;padding:0;transition:inherit}.v-list__group__items>div{display:block}.v-list__group__items--no-action .v-list__tile{padding-left:72px}.v-list__group--disabled{pointer-events:none}.v-list--subheader{padding-top:0}',""])},b0af:function(t,e,i){"use strict";i("4c94"),i("d0e7");var s=i("b64a"),n=i("2b0e");function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var a=n["a"].extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){return this.computedElevation?r({},"elevation-"+this.computedElevation,!0):{}}}}),o=i("23bf"),l=i("6a18"),c=i("58df"),d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t},v=Object(c["a"])(s["a"],a,o["a"],l["a"]).extend({name:"v-sheet",props:{tag:{type:String,default:"div"},tile:Boolean},computed:{classes:function(){return d({"v-sheet":!0,"v-sheet--tile":this.tile},this.themeClasses,this.elevationClasses)},styles:function(){return this.measurableStyles}},render:function(t){var e={class:this.classes,style:this.styles,on:this.$listeners};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}}),_=v,u=i("0d01"),h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t};e["a"]=Object(c["a"])(u["a"],_).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,raised:Boolean},computed:{classes:function(){return h({"v-card":!0,"v-card--flat":this.flat,"v-card--hover":this.hover},_.options.computed.classes.call(this))},styles:function(){var t=h({},_.options.computed.styles.call(this));return this.img&&(t.background='url("'+this.img+'") center center / cover no-repeat'),t}},render:function(t){var e=this.generateRouteLink(this.classes),i=e.tag,s=e.data;return s.style=this.styles,t(i,this.setBackgroundColor(this.color,s),this.$slots.default)}})},ba95:function(t,e,i){"use strict";var s=i("b64a"),n=i("0d01"),r=i("98a1"),a=i("6a18"),o=i("3ccf"),l=i("58df"),c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t};function d(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}e["a"]=Object(l["a"])(s["a"],n["a"],r["a"],a["a"]).extend({name:"v-list-tile",directives:{Ripple:o["a"]},inheritAttrs:!1,props:{activeClass:{type:String,default:"primary--text"},avatar:Boolean,inactive:Boolean,tag:String},data:function(){return{proxyClass:"v-list__tile--active"}},computed:{listClasses:function(){return this.disabled?{"v-list--disabled":!0}:void 0},classes:function(){return c({"v-list__tile":!0,"v-list__tile--link":this.isLink&&!this.inactive,"v-list__tile--avatar":this.avatar,"v-list__tile--disabled":this.disabled,"v-list__tile--active":!this.to&&this.isActive},this.themeClasses,d({},this.activeClass,this.isActive))},isLink:function(){var t=this.$listeners&&(this.$listeners.click||this.$listeners["!click"]);return Boolean(this.href||this.to||t)}},render:function(t){var e=!this.inactive&&this.isLink,i=e?this.generateRouteLink(this.classes):{tag:this.tag||"div",data:{class:this.classes}},s=i.tag,n=i.data;return n.attrs=Object.assign({},n.attrs,this.$attrs),t("div",this.setTextColor(!this.disabled&&this.isActive&&this.color,{class:this.listClasses,attrs:{disabled:this.disabled,role:"listitem"}}),[t(s,n,this.$slots.default)])}})},c954:function(t,e,i){"use strict";var s=i("8212"),n=s["a"],r=i("2b0e");e["a"]=r["a"].extend({name:"v-list-tile-avatar",functional:!0,props:{color:String,size:{type:[Number,String],default:40},tile:Boolean},render:function(t,e){var i=e.data,s=e.children,r=e.props;i.staticClass=("v-list__tile__avatar "+(i.staticClass||"")).trim();var a=t(n,{props:{color:r.color,size:r.size,tile:r.tile}},[s]);return t("div",i,[a])}})},d0cb:function(t,e,i){var s=i("a600");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var n=i("499e").default;n("25a29624",s,!0,{sourceMap:!1,shadowMode:!1})},d0e7:function(t,e,i){var s=i("2e03");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var n=i("499e").default;n("5b1e5de4",s,!0,{sourceMap:!1,shadowMode:!1})}}]);