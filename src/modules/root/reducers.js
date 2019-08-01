import * as Actions from "./actions";

// 公用基础reducer
const INITIAL_STATE = {
	time: new Date().getTime()
};
const root = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case Actions.time:
			return {
				...state,
				time: action.time,
			};
		default:
			return state;
	}
};

export default root;