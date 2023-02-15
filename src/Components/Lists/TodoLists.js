import style from './List.module.css'

import List from "./List";
import CreateTodoLists from "./CreateTodoLists";

 const TodoLists = ({todos,createTodoList,remove,rename,getTasks,openListId,deleteOpenListId })=> {
    return (
        <div className={style.TodoLists}>

            <h1>Todo Lists</h1>
            <CreateTodoLists createTodoList={createTodoList} todoLists={todos}  />
            {todos
                && <div className={style.ListOfLists}>
                    {todos.map(todo =>
                        <div key={todo.id}><List todo={todo} remove={remove} rename={rename} getTasks={getTasks} openListId={openListId} deleteOpenListId={deleteOpenListId}/></div>)}
                    </div>}
        </div>
    );
}
export default TodoLists
