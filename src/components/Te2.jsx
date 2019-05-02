import React, {Component} from 'react';
import {observable, action, computed} from 'mobx';
import {observer} from 'mobx-react';

class Todo {
    id = Math.random();
    // state，被观察的属性
    @observable title = "";
    @observable finished = false;

    constructor(title) {
        this.title = title;
    }
}

class TodoList {
    // state，被观察的属性
    @observable todos = [];

    // computed values，观察属性变化，自动更新
    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }
}

// 将无状态组件变成响应式组件
const TodoView = observer(
    ({todo}) => (
        <li>
            <input type="checkbox"
                   checked={todo.finished}
                   onClick={() => todo.finished = !todo.finished}
            />{todo.title}
        </li>
    )
)

@observer
class TodoListView extends Component {

    render() {
        let todoList = this.props.todoList;
        return (
            <div>
                <ul>
                    {todoList.todos.map(todo => (
                            <TodoView todo={todo} key={todo.id}/>
                        )
                    )}
                </ul>
                Tasks left: {todoList.unfinishedTodoCount}
            </div>
        )
    }
}

class Te2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const store = new TodoList();
        store.todos.push(
            new Todo('get coffee'),
            new Todo('write simpler code')
        );
        store.todos[0].finished = true;
        return (
            <div>
                <TodoListView todoList={store}/>
            </div>
        );
    }
}

export default Te2;