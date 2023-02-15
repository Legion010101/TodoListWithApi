import style from './List.module.css'
import {useState} from "react";
import classNames from "classnames";
import ButtonSend from "../../common/Button";

 const Rename = ({todoId,title,rename,toggle,openListId})=> {

     const [newTitle,setTitle]=useState(title)
     const update = (e)=>{
         if (e.target.value.length<=30){
             setTitle(e.target.value)

         }
     }
     const save=(todoId,newTitle)=>{

        const renameData =[todoId, {title: newTitle},openListId]
         rename(renameData)
         toggle()
     }

    return (
        <div  className={style.box2}>
            <input type="text"  autoFocus={true} className={classNames(style.rename)} onChange={update} value={newTitle}/>
            <ButtonSend callback={save} newTitle={newTitle} todoId={todoId} nameButton={'Save'}/>

        </div>
    );
}
export default Rename
