import React, {Component} from 'react';
import {observable, computed, action} from 'mobx';
import {observer} from 'mobx-react';

class Todo {
    id = Math.random();
    @observable title = '';
    @observable finished = false;

    constructor(title) {
        this.title = title;
    }
}

class TodoList {
    @observable todoList = [];

    @computed get unFinishedTodoCount() {
        return this.todoList.filter(todo => !todo.finished).length;
    }
}

const TodoView = observer(({todo}) => {
    const handleClick = action(() => (todo.finished = !todo.finished));
    return (
        <li>
            <input readOnly={true} type="checkbox" checked={todo.finished} onClick={handleClick}/>
            {todo.title}
        </li>
    );
});

@observer
class TodoListView extends React.Component {

    render() {
        return (
            <div>
                <ul>
                    {this.props.todoList.todoList.map(todo => (
                        <TodoView todo={todo} key={todo.id}/>
                    ))}
                </ul>
                剩余任务:{this.props.todoList.unFinishedTodoCount}
            </div>
        );
    }
}


class Te0 extends React.Component {

    render() {
        const store = new TodoList();
        store.todoList.push(new Todo("第一个待办事项"));
        store.todoList.push(new Todo("第二个待变事项"));

        return (
            <div>
                <TodoListView todoList={store}/>
            </div>
        );
    }
}

export default Te0;
