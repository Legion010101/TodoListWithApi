import style from './Task.module.css'
import CreateTodoLists from "../Lists/CreateTodoLists";
import List from "../Lists/List";
import classNames from "classnames";



 const TasksList =  ({tasks,createTask,openListId,refactorTask,deleteTask})=> {
    return (
        <div className={style.TasksList}>
            <h1>Tasks List</h1>
            {openListId
                ? < CreateTodoLists createTodoList={createTask} openListId={openListId}/>
                :<div>create or select a task</div>}
            { tasks.length ? tasks.map(task=><div key={task.id}>
            <List todo={task} rename={refactorTask} remove={deleteTask} openListId={openListId}/></div>)
            :<div className={classNames({[style.hide]:!openListId })}>no business</div>}
        </div>
    );
}
export default TasksList