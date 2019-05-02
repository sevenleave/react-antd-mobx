import React from 'react';
import {Button} from 'antd';
import Te0 from './components/Te0';
import Te1 from './components/Te1';
import Te2 from './components/Te2';
import Te3 from './components/Te3';

function App() {
    return (
        <div className="App">
            <Button type="primary">基础按钮</Button>
            <hr/>
            <Te0/>
            <hr/>
            <Te1/>
            <hr/>
            <Te2/>
            <hr/>
            <Te3/>
        </div>
    );
}

export default App;
