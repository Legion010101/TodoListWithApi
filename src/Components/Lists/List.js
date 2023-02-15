import style from './List.module.css'
import basket from '../../common/basket.png'
import {useState} from "react";
import Rename from "./Rename";
import classNames from "classnames";
import {useDispatch} from "react-redux";

 const List = ({todo,remove,rename,getTasks,openListId,deleteOpenListId})=> {


    const [editMode,setEditMode] = useState(false)
     const dispatch = useDispatch()
     const toggle = ()=>{
         setEditMode(!editMode)
     }
     const removeList = (data)=>{
         remove(data)
         if (todo.id=== openListId) {
             dispatch(deleteOpenListId())
         }
     }
     const getTasksMode = ()=>{
         return getTasks &&  getTasks(todo.id)
     }
    return (
        <div className={classNames(style.List,{[style.OpenList]: openListId ===todo.id }) }>
            <div  onClick={()=>getTasksMode()} className={classNames(style.box,style.box1) }>  {todo.title}</div>
            {editMode
                ? <Rename todoId={todo.id} title={todo.title} rename={rename} toggle={toggle} openListId={openListId}/>
                :<div className={classNames(style.box,style.box2)}>
                    <div className={style.renameBtn} onClick={toggle} >Rename</div>
                    <img onClick={()=>removeList([todo.id,openListId])} src={basket} alt=""/>
                 </div>
            }
            <div  onClick={()=>getTasksMode()} className={classNames(style.box,style.box3)}>
                { todo.addedDate.slice(0, 10)}
            </div>
            <div  onClick={()=>getTasksMode()} className={classNames(style.box,style.box4)}></div>
        </div>
    );
}
export default List
