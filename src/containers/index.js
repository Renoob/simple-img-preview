import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.less';
import Icon from './iconfont';
import PrevNext from './prevNext';

class ImgPreview extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: props.data, // 图片源数据(Array[string])
            curImg: '', // 当前显示的文件
        }
    }

    render(){
        const { curImg } = this.state;

        const module = (
            <div className = { styles['img-preview-container'] }>
                <img src = { curImg } />
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