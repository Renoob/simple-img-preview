import React from "react";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import Main from "./Main";
import configureStore from "STORE/configStore";

const store = configureStore();
const App = () => (
	<Provider store={store}>
		<HashRouter>
			<Main />
		</HashRouter>
	</Provider>
);

export default App;