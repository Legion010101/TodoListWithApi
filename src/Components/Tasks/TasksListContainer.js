import TasksList from "./TasksList";
import {compose} from "@reduxjs/toolkit";
import {connect} from "react-redux";
import {createTask, deleteTask, refactorTask} from "../../reducers/tasksReducer";

const TasksListAPI =  ({tasks,createTask,openListId,refactorTask,deleteTask})=> {
    return (
      <TasksList tasks={tasks} createTask={createTask} openListId={openListId} refactorTask={refactorTask} deleteTask={deleteTask}/>
    );
}
let mapStateToProps = (state) => {
    return {

        tasks:state.tasks.tasks,
        openListId:state.tasks.openListId

    }
}

const TasksListContainer = compose(
    connect(mapStateToProps, {
        createTask,
        refactorTask,
        deleteTask
    }),
)(TasksListAPI)
export default TasksListContainer