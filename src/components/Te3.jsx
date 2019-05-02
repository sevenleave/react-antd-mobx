import React, {Component} from 'react';
import {Button} from 'antd';
import {observable, action} from 'mobx';
import {observer} from 'mobx-react';

// state，定义状态，被观察
let appState = observable({
    timer: 0,
});

// 改变状态
appState.resetTimer = action(function reset() {
    appState.timer = 0;
})

// 改变状态
setInterval(action(function tick() {
    appState.timer += 1;
}), 1000)

// 监听状态的变化
@observer
class TimerView extends React.Component {

    onReset = () => {
        this.props.appState.resetTimer();
    }

    render() {
        return (
            <div>
                <Button onClick={this.onReset}>
                    passed: {this.props.appState.timer}
                </Button>
            </div>
        );
    }
}

class Te3 extends React.Component {
    render() {
        return (
            <div>
                <TimerView appState={appState}/>
            </div>
        );
    }
}

export default Te3;