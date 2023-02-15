import './App.css';
import style from './App.module.css'
import TasksListContainer from "./Components/Tasks/TasksListContainer";
import TodoListsContainer from "./Components/Lists/TodoListsContainer";
import Header from "./Components/Header/Header";
import {compose} from "@reduxjs/toolkit";
import {connect} from "react-redux";
import Login from "./Components/Login/LoginContainer";
import {useEffect} from "react";
import {getAuth} from "./reducers/auth";
import classNames from "classnames";

const App = ({auth,getAuth,initialization})=>{
   useEffect(()=>{
       getAuth()
   },[auth])

    if(!auth){
     return  <div className={classNames(style.App,{[style.none]:!initialization}) }>
                <Header/>
                <div className={style.login}><Login/></div>
            </div>
   } else {
       return (
           <div className={style.App}>
               <Header/>
               <div className={style.container}>
                   <div ><TodoListsContainer/></div>
                   <div className={style.Tasks}><TasksListContainer/></div>
               </div>
           </div>
       );
   }

}
let mapStateToProps = (state) => {
    return {
        auth:state.auth.isAuthorized,
        initialization:state.auth.initialization
    }
}
export default compose(
    connect(mapStateToProps, {
        getAuth
    }),
)(App)
