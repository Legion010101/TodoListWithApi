import style from "../../App.module.css";
import {compose} from "@reduxjs/toolkit";
import {connect} from "react-redux";
import {logout} from "../../reducers/auth";
import ButtonSend from "../../common/Button";


 const Header = ({user,logout,login})=>{

    return (
            <div className={style.header}>
                <div className={style.white}> <h1>Todo </h1> </div>
                <div className={style.dark}> <h1>Lists</h1>
                    {user && <div className={style.logout}>
                        {user && user.login}
                        <ButtonSend nameButton={'logout'} callback={logout} newTitle={true}/>
                    </div>}
                    </div>
            </div>

    );
}
let mapStateToProps = (state) => {
    return {

        user:state.auth.dataUser,


    }
}
export default compose(
    connect(mapStateToProps, {
        logout
    }),
)(Header)

