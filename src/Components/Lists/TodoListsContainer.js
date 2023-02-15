import {compose} from "@reduxjs/toolkit";
import {connect} from "react-redux";
import TodoLists from "./TodoLists";
import {createTodoList, deleteTodoLists, getTodoLists, refactorTodoLists} from "../../reducers/todoListsReducer";
import {useEffect} from "react";
import {getTasks,deleteOpenListId} from "../../reducers/tasksReducer";

const TodoListsAPI =  ({todos,getTodoLists,createTodoList,deleteTodoLists,refactorTodoLists,getTasks,openListId,deleteOpenListId})=> {
    useEffect(()=>{
        getTodoLists()
    },[])

    return (
        <TodoLists todos={todos}  createTodoList={createTodoList} remove={deleteTodoLists}
                   rename={refactorTodoLists} getTasks={getTasks}
                   openListId={openListId} deleteOpenListId={deleteOpenListId}/>
    );
}
let mapStateToProps = (state) => {
    return {
        todos:state.todoLists.todos,
        openListId:state.tasks.openListId

    }
}

const TodoListsContainer = compose(
    connect(mapStateToProps, {
        getTodoLists,
        createTodoList,
        deleteTodoLists,
        refactorTodoLists,
        getTasks,
        deleteOpenListId
    }),
)(TodoListsAPI)
export default TodoListsContainer
