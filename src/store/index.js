import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)

const state = {
	// num: 0,
	SelectedType: 1,
	// VideoContent: [],
	// VideoOption: [
	// 	{
	// 		type: 1,
	// 		option_name: "电影",
	// 	},
	// 	{
	// 		type: 2,
	// 		option_name: "电视剧",
	// 	},
	// 	{
	// 		type: 3,
	// 		option_name: "综艺",
	// 	},
	// 	{
	// 		type: 4,
	// 		option_name: "动漫",
	// 	},
	// 	{
	// 		type: 5,
	// 		option_name: "娱乐",
	// 	},
	// 	{
	// 		type: 6,
	// 		option_name: "少儿",
	// 	},
	// 	{
	// 		type: 7,
	// 		option_name: "VIP",
	// 	},
	// 	{
	// 		type: 8,
	// 		option_name: "潮音",
	// 	},
	// 	{
	// 		type: 9,
	// 		option_name: "游戏",
	// 	},
	// ],
}

export default new Vuex.Store({
	state,
	actions,
	mutations
})