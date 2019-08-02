import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styles from './index.less';
import Icon from './iconfont';
import PrevNext from './prevNext';

class ImgPreview extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: props.data, // 图片源数据(Array[string])
            curImg: props.data[0] ? props.data[0] : '', // 当前显示的图片
            top: '50%',
            left: '50%',
        }
    }

    static getDerivedStateFromProps(props, state){
        if(!_.isEqual(props.data, state.data)){
            return {
                data: props.data,
                curImg: props.data[0] ? props.data[0] : '',
            }
        }
        return null
    }

    // 图片样式
    imgStyle = () => {
        const { top, left } = this.state;
        let transformStyle = `translate(-50%, -50%)`;
        return {
            top, left, 
            transform: transformStyle
        }
    }

    render(){
        const { curImg } = this.state;

        const module = (
            <div className = { styles['img-preview-container'] }>
                <img src = { curImg } style = { this.imgStyle() } />
                <Icon className = { styles['close-icon'] } iconName = 'close-circle' />
                <PrevNext />
            </div>
        );

        return module;
    }
}

ImgPreview.defaultProps = {
    data: []
}

ImgPreview.propTypes = {
    data: PropTypes.array
}

export default ImgPreview