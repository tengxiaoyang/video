webpackJsonp([5,3],{0:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}var i=n(10),o=s(i),a=n(241),c=s(a),r=n(61),l=s(r),_=n(63),u=s(_);n(90),n(60);var d=n(211),v=s(d);n(91);var p=n(26),f=s(p);f.default.use([p.Autoplay,p.Navigation,p.Pagination]),o.default.use(v.default),o.default.use(c.default);var m=new c.default({routes:l.default});new o.default({router:m,store:u.default}).$mount("#app")},19:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(28),o=s(i),a="https://www.shuipingguo.com/getvideo/",c={getList:a+""},r={getList:function(t){console.log("执行axios"),o.default.get(c.getList,{params:t.params}).then(function(e){t.callback&&t.callback(e)}).catch(function(e){t.failcallback&&t.failcallback(e)}).then(function(){})}};e.default=r},27:function(t,e,n){n(96);var s=n(4)(n(56),n(230),"data-v-3e2a2e45",null);t.exports=s.exports},46:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"FeedsBlock",props:{video_content:{type:Object}},data:function(){return{}},methods:{route_to:function(t){this.$router.push({path:t})}},created:function(){console.log(this.video_content.list)}}},47:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ListView",props:{video_content:{type:Object}},data:function(){return{}},methods:{route_to:function(t){this.$router.push({path:t})}}}},49:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Nav",props:{video_option:{type:Array}},data:function(){return{}},computed:{selected_type:function(){return this.$store.state.SelectedType}},methods:{change_type:function(t){this.$store.commit("set_selected_type",t),this.$emit("change_type")}}}},54:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"VideoSwiper",props:{video_content:{type:Array}},data:function(){return{swiperOptions:{pagination:{el:".swiper-pagination",type:"fraction"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoplay:{delay:4e3,disableOnInteraction:!1},loop:!0}}},computed:{swiper:function(){return this.$refs.mySwiper.$swiper}},methods:{route_to:function(t){this.$router.push({path:t})}}}},56:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(19),o=s(i),a=n(216),c=s(a),r=n(221),l=s(r),_=n(213),u=s(_),d=n(214),v=s(d);e.default={name:"home",components:{Nav:c.default,VideoSwiper:l.default,FeedsBlock:u.default,ListView:v.default},data:function(){return{search_text:"使徒行者3",video_option:[{type:1,option_name:"电影"},{type:2,option_name:"电视剧"},{type:3,option_name:"综艺"},{type:4,option_name:"动漫"},{type:5,option_name:"娱乐"},{type:6,option_name:"少儿"},{type:7,option_name:"VIP"},{type:8,option_name:"潮音"},{type:9,option_name:"游戏"}],video_content:[],swiper_content:[]}},computed:{selected_type:function(){return this.$store.state.SelectedType}},created:function(){this.get_video(this.$store.state.SelectedType)},mounted:function(){},methods:{get_video:function(t){var e=this;console.log("执行get_video"),o.default.getList({params:{type:t},callback:function(n){console.log("执行callback"),console.log(t),console.log(n),console.log(n.data),console.log(n.data.data),console.log(e.video_content),e.video_content=n.data.data,e.swiper_content=n.data.data[0].list,1===t&&(console.log(e.video_content[1].title),e.video_content[1].title="重磅热播",console.log(e.video_content[1].title)),console.log(e.video_content.length),console.log(e.video_content),console.log(n.data.data[0].list),console.log(e.video_content),e.swiper.slideTo(1,0,!1),console.log("执行完callback")}}),console.log("执行完get_video"),console.log(this.video_content)},show_change_list:function(t,e){this.current=t,console.log(this.current);var n=event.currentTarget;console.log(n.innerHTML),console.log(this.video_content[this.current]),console.log(this.video_content[this.current].change_block_list),this.video_content[this.current].change_block_list?this.$set(this.video_content[this.current],"change_block_list",!1):this.$set(this.video_content[this.current],"change_block_list",!0),console.log(this.video_content[this.current].change_block_list),console.log(this.video_content)},change_data:function(t){this.get_video(this.$store.state.SelectedType),console.log(this.$store.state.SelectedType)},return_home:function(){this.selected_type=1,this.$store.commit("ADD_NUM",3),this.$store.commit("set_selected_type",1),this.get_video(this.$store.state.SelectedType)},route_to:function(t){this.$router.push({path:t})}}}},60:function(t,e){"use strict";!function(t,e){var n=t.documentElement,s="orientationchange"in window?"orientationchange":"resize",i=function(){var t=n.clientWidth;t&&(n.style.fontSize=20*(t/320)+"px")};t.addEventListener&&(e.addEventListener(s,i,!1),t.addEventListener("DOMContentLoaded",i,!1))}(document,window)},61:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(27),o=s(i);e.default=[{path:"/",component:o.default,children:[{path:"",component:function(t){return!function(){return t(n(27))}(n)}}]},{path:"/item",component:function(t){return n.e(2,function(){return t(n(223))})}},{path:"/video_details",component:function(t){return n.e(0,function(){return t(n(225))})}},{path:"/search",component:function(t){return n.e(1,function(){return t(n(224))})}}]},62:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={addNum:function(t,e){var n=t.commit;t.state;n("ADD_ITEMNUM",e)}}},63:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(10),o=s(i),a=n(243),c=s(a),r=n(64),l=s(r),_=n(62),u=s(_);o.default.use(c.default);var d={SelectedType:1};e.default=new c.default.Store({state:d,actions:u.default,mutations:l.default})},64:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(66),o=s(i),a="set_selected_type";e.default=(0,o.default)({},a,function(t,e){t.SelectedType=e})},90:function(t,e){},91:function(t,e){},94:function(t,e){},96:function(t,e){},97:function(t,e){},98:function(t,e){},101:function(t,e){},109:function(t,e,n){t.exports=n.p+"static/img/change.png"},116:function(t,e,n){t.exports=n.p+"static/img/letter.png"},117:function(t,e,n){t.exports=n.p+"static/img/more.png"},119:function(t,e,n){t.exports=n.p+"static/img/play.png"},213:function(t,e,n){n(94);var s=n(4)(n(46),n(228),"data-v-1d2338cc",null);t.exports=s.exports},214:function(t,e,n){n(101);var s=n(4)(n(47),n(235),"data-v-63341505",null);t.exports=s.exports},216:function(t,e,n){n(98);var s=n(4)(n(49),n(232),"data-v-5b0022d7",null);t.exports=s.exports},221:function(t,e,n){n(97);var s=n(4)(n(54),n(231),"data-v-4a695587",null);t.exports=s.exports},228:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"feeds_block_container"},[n("span",{staticClass:"title"},[t._v(t._s(t.video_content.title))]),t._v(" "),t.video_content.list.length%2===0?n("div",[n("div",{staticClass:"video_list_container"},t._l(t.video_content.list,function(e,s){return n("div",{key:s,staticClass:"video_list",on:{click:function(e){return t.route_to("video_details")}}},[n("div",{staticClass:"img_container"},[n("img",{attrs:{src:e.img,alt:""}}),t._v(" "),n("div",{staticClass:"top_left_corner"},[n("div",{staticClass:"triangle"}),t._v(" "),0===e.vip?n("span",{staticClass:"free"},[t._v("独播")]):t._e(),t._v(" "),10===e.vip?n("span",{staticClass:"vip"},[t._v("VIP")]):t._e()]),t._v(" "),n("div",{staticClass:"bottom_right_corner"},[t._v(t._s(e.score))])]),t._v(" "),n("span",{staticClass:"name"},[t._v("\n          "+t._s(e.name)+"\n        ")]),t._v(" "),n("span",{staticClass:"summary"},[t._v("\n          "+t._s(e.summary)+"\n        ")])])}),0)]):t._e(),t._v(" "),t.video_content.list.length%2!==0?n("div",[n("div",{staticClass:"video_list_top_container"},t._l(t.video_content.list.slice(0,1),function(e,s){return n("div",{key:s,staticClass:"video_list_top",on:{click:function(e){return t.route_to("video_details")}}},[n("div",{staticClass:"img_container"},[n("img",{attrs:{src:e.img,alt:""}}),t._v(" "),n("div",{staticClass:"top_left_corner"},[n("div",{staticClass:"triangle"}),t._v(" "),0===e.vip?n("span",{staticClass:"free"},[t._v("独播")]):t._e(),t._v(" "),10===e.vip?n("span",{staticClass:"vip"},[t._v("VIP")]):t._e()]),t._v(" "),n("div",{staticClass:"bottom_right_corner"},[t._v(t._s(e.score))])]),t._v(" "),n("span",{staticClass:"name"},[t._v("\n          "+t._s(e.name)+"\n        ")]),t._v(" "),n("span",{staticClass:"summary"},[t._v("\n          "+t._s(e.summary)+"\n        ")])])}),0),t._v(" "),n("div",{staticClass:"video_list_container"},t._l(t.video_content.list.slice(1,t.video_content.length),function(e,s){return n("div",{key:s,staticClass:"video_list",on:{click:function(e){return t.route_to("video_details")}}},[n("div",{staticClass:"img_container"},[n("img",{attrs:{src:e.img,alt:""}}),t._v(" "),n("div",{staticClass:"top_left_corner"},[n("div",{staticClass:"triangle"}),t._v(" "),0===e.vip?n("span",{staticClass:"free"},[t._v("独播")]):t._e(),t._v(" "),10===e.vip?n("span",{staticClass:"vip"},[t._v("VIP")]):t._e()]),t._v(" "),n("div",{staticClass:"bottom_right_corner"},[t._v(t._s(e.score))])]),t._v(" "),n("span",{staticClass:"name"},[t._v("\n          "+t._s(e.name)+"\n        ")]),t._v(" "),n("span",{staticClass:"summary"},[t._v("\n          "+t._s(e.summary)+"\n        ")])])}),0)]):t._e(),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"change"},[s("div",{staticClass:"change_button"},[s("img",{attrs:{src:n(109),alt:""}}),t._v(" "),s("span",[t._v("换一换")])])])}]}},230:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"top"},[n("div",{staticClass:"top_inner"},[n("div",{staticClass:"logo",on:{click:t.return_home}}),t._v(" "),n("div",{staticClass:"blank"}),t._v(" "),n("div",{staticClass:"search",on:{click:function(e){return t.route_to("search")}}},[n("span",{staticClass:"text"},[t._v(t._s(t.search_text))]),t._v(" "),n("div",{staticClass:"icon"})])])]),t._v(" "),n("Nav",{attrs:{video_option:t.video_option},on:{change_type:function(e){return t.change_data(e)}}}),t._v(" "),t._l(t.video_content,function(e,s){return n("div",{key:s,staticClass:"item"},[5!==e.type?n("div",{staticClass:"type_channel"},[0===t.video_content.indexOf(e)?n("VideoSwiper",{attrs:{video_content:e.list}}):t._e(),t._v(" "),0!==t.video_content.indexOf(e)?n("FeedsBlock",{attrs:{video_content:e}}):t._e()],1):t._e(),t._v(" "),5===e.type?n("div",{staticClass:"type_list"},[n("ListView",{attrs:{video_content:e.list[0]}})],1):t._e()])})],2)},staticRenderFns:[]}},231:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"video_swiper"},[n("swiper",{ref:"mySwiper",staticClass:"swiper",attrs:{options:t.swiperOptions}},[t._l(t.video_content,function(e,s){return n("swiper-slide",{key:s,on:{click:function(e){return t.route_to("video_details")}}},[n("div",{staticClass:"img_container"},[n("img",{attrs:{lazyload:"",src:e.img,alt:""},on:{click:function(e){return t.route_to("video_details")}}}),t._v(" "),n("div",{staticClass:"top_left_corner"},[n("div",{staticClass:"triangle"}),t._v(" "),0===e.vip?n("span",{staticClass:"free"},[t._v("独播")]):t._e(),t._v(" "),10===e.vip?n("span",{staticClass:"vip"},[t._v("VIP")]):t._e()]),t._v(" "),n("div",{staticClass:"bottom_right_corner"},[t._v(t._s(e.score))])]),t._v(" "),n("span",{staticClass:"title"},[t._v("【"+t._s(e.name)+"】"+t._s(e.summary))])])}),t._v(" "),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},staticRenderFns:[]}},232:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav_container"},[n("div",{staticClass:"nav"},[n("div",{staticClass:"nav_inner"},[n("div",{staticClass:"option_outside"},t._l(t.video_option,function(e,s){return n("a",{key:s,staticClass:"option",class:{active_option:e.type===t.selected_type},on:{click:function(n){return t.change_type(e.type)}}},[t._v("\n          "+t._s(e.option_name)+"\n          "),t._m(0,!0)])}),0)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("i")])}]}},235:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"video_list",on:{click:function(e){return t.route_to("video_details")}}},[n("div",{staticClass:"img_container"},[n("img",{attrs:{lazyload:"",src:t.video_content.img,alt:""}}),t._v(" "),n("div",{staticClass:"top_left_corner"},[n("span",{staticClass:"free"},[t._v(t._s(t.video_content.name))])]),t._v(" "),n("div",{staticClass:"bottom_right_corner"}),t._v(" "),t._m(0)]),t._v(" "),n("div",{staticClass:"video_list_bottom"},[n("div",{staticClass:"left"},[n("div",{staticClass:"user_info"},[t._m(1),t._v(" "),n("span",{staticClass:"user_name"},[t._v(t._s(t.video_content.author))])])]),t._v(" "),n("div",{staticClass:"right"},[t._m(2),t._v(" "),n("span",{staticClass:"num_of_comments"},[t._v(t._s(t.video_content.score))]),t._v(" "),t._m(3)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"play_button_container"},[s("img",{staticClass:"play_button",attrs:{src:n(119),alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user_icon_container"},[n("img",{staticClass:"user_icon",attrs:{src:"http://inews.gtimg.com/newsapp_ls/0/5483100714_200200/0",alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"comment"},[s("img",{staticClass:"comment_icon",attrs:{src:n(116),alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"more"},[s("img",{staticClass:"more_icon",attrs:{src:n(117),alt:""}})])}]}}});