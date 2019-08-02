import React from 'react';
import ImgView from '../src';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1496232587,926948844&fm=26&gp=0.jpg',
                'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1638695478,3359394321&fm=26&gp=0.jpg',
                'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3197648140,1059193869&fm=26&gp=0.jpg',
                'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1823332651,80941870&fm=26&gp=0.jpg'
            ]
        }
    }

    render(){
        const { data } = this.state;

        const module = (
            <ImgView 
                data = { data }
            />
        )

        return module
    }
}

export default App