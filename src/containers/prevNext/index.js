import React from 'react';
import Icon from '../iconfont';
import styles from './index.less';

class PrevNext extends React.Component {

    render(){
        const module = (
            <ul className = { styles['prev-next'] }>
                <li className = { styles['prev'] }>
                    <Icon iconName = 'left-circle' />
                </li>
                <li className = { styles['next'] }>
                    <Icon iconName = 'right-circle' />
                </li>
            </ul>
        )
        
        return module;
    }

}

export default PrevNext