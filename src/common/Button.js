import style from '../Components/Lists/List.module.css'
import classNames from "classnames";


 const ButtonSend = ({todoId,newTitle,callback,nameButton,type})=> {

    return (
            <button disabled={!newTitle} type={type} className={classNames(style.add,"btn btn-dark")} onClick={()=>callback(todoId,newTitle)}>{nameButton}</button>
    );
}
export default ButtonSend
