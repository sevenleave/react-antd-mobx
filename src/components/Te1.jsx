import React, {Component} from 'react';
import {observable, action} from 'mobx';
import {observer} from 'mobx-react';

// 定义组件
class AppState {
    // state，被观察的属性
    @observable timer = 0;

    constructor() {
        // 设置定时器
        setInterval(() => {
            this.timer += 1;
        }, 1000);
    }

    // action，修改state
    @action.bound
    reset() {
        this.timer = 0;
    }
}

// 无状态组件
const TimerView = observer(({appState}) => (
    <button onClick={appState.reset}>passed: {appState.timer}</button>
));


class Te1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <TimerView appState={new AppState()}/>
            </div>
        );
    }
}

export default Te1;