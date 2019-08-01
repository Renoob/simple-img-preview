import React, { Component, Fragment } from "react";
import {Route, Switch} from "react-router-dom";
import {withRouter} from "react-router";
import {routerConfig} from '../config';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Main extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Fragment>
				<div>{ this.props.time }</div>
				<Switch>
					{
						routerConfig.map((item,index)=>{
							const {path,component,exact}=item;
							return (
								<Route
									key={index}
									path={path}
									component={component}
									exact={exact}
								/>
							)
						})
					}
				</Switch>
			</Fragment>
		);
	}
}

Main.propTypes = {
	time: PropTypes.number
}

function mapStateToProps({ root }){
	return { 
		time: root.time
	}
}

export default withRouter(
	connect(
		mapStateToProps
	)(Main)
)