import { useGetTodosQuery } from './todosApiSlice';

import Todo from './Todo';
import CompletedTodoList from './CompletedTodoList';
import { Collapse, List } from '@mui/material';
import { TransitionGroup } from 'react-transition-group';

export default function TodoList({ todos }) {
    // console.log('🚀 ~ file: TodoList.jsx:9 ~ TodoList ~ todos', todos);

    let openedTodos = [];
    let completedTodos = [];

    todos?.forEach((todo) => {
        if (!todo.completed) {
            openedTodos.push(
                <Collapse
                    key={todo._id}
                    timeout={{ enter: 250, exit: 100 }}
                    unmountOnExit
                    easing={{ enter: 'cubic-bezier(0,-1.55,.61,1.58)', exit: 'linear' }}
                >
                    {<Todo key={todo._id} todoId={todo._id} />}
                </Collapse>
            );
        } else if (todo.completed) {
            completedTodos.push(
                <Collapse timeout={{ enter: 250, exit: 100 }} key={todo._id} unmountOnExit>
                    {<Todo key={todo._id} todoId={todo._id} />}
                </Collapse>
            );
        }
    });

    return (
        <>
            <List>
                <TransitionGroup>{openedTodos}</TransitionGroup>
            </List>
            <CompletedTodoList content={completedTodos} />
        </>
    );
}
