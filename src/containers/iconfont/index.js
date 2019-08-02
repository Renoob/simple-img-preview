import React from 'react';
import PropTypes from 'prop-types';
import 'ASSETS/iconfont/iconfont.css';
import 'ASSETS/iconfont/iconfont.js';
import styles from './index.less';

const Icon = props => {
    if(props.svg){
        return (
            <svg className = { `${styles['icon']} ${ props.className ? props.className : '' }` } aria-hidden="true">
                <use xlinkHref = { `#simple-${props.iconName}` }></use>
            </svg>
        )
    }else{
        return (
            <i className = { `img-preview-icon simple-${props.iconName} ${ props.className ? props.className : '' }` }></i>
        )
    }
} 

Icon.defaultProps = {
    svg: false,
    className: ''
}

Icon.propTypes = {
    svg: PropTypes.bool, // 是否使用svg
    className: PropTypes.string, // 自定义class名
    iconName: PropTypes.string.isRequired // 使用的icon
}

export default Icon