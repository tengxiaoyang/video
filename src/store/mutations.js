// const ADD_NUM = 'ADD_NUM';
const set_selected_type = 'set_selected_type';
// const set_video_content = "set_video_content"

export default {
	//点击进入下一题
	// [ADD_NUM](state, num) {
	// 	state.num += num;
	// },
	[set_selected_type](state, e) {
		state.SelectedType = e;
	},
	// [set_video_content](state, e) {
	// 	state.VideoContent = e;
	// }
}