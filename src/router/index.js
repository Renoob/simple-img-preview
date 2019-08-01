import React from 'react';
import Loadable from 'react-loadable';

const Loading = () => <div></div>;
const timeout = 1000;

export const home = Loadable({
    loader: () => import("CONTAINERS/index"),
	loading: Loading,
	timeout: timeout
})