import React from 'react';
import styles from './index.less';
import PropTypes from 'prop-types';

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
            <div className = { styles['img-preview'] }>
                <img src = { curImg } />
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