import React from 'react';
import styles from './index.less';

class ImgPreview extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const module = (
            <div className = { styles['img-preview'] }>
                
            </div>
        );

        return module;
    }
}

export default ImgPreview