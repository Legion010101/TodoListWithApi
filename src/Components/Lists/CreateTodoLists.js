import {Field, Form, Formik} from "formik";
import classNames from "classnames";
import style from './List.module.css'
import {MaxLength} from "../../utility/validateLength";
import ButtonSend from "../../common/Button";

const CreateTodoLists = ({createTodoList, openListId, todoLists}) => {
    const validateTitle = MaxLength(30, todoLists)

    const onSubmit = (values, {setSubmitting}) => {
        createTodoList([values, openListId])
        values.title = ''
        setSubmitting(false)
    }
    return (
        <Formik
            initialValues={{
                title: '',
            }}
            onSubmit={onSubmit}>
            {({values, errors}) => (

                <Form>
                    <div className={style.formAddList}>
                        <Field
                            className={style.addList}
                            type="title"
                            name="title"
                            value={values.title}
                            placeholder='Name'
                            validate={validateTitle}
                        />
                        {errors.title && (

                            <div className="errors">{errors.title}</div>
                        )}
                        <button
                                className={classNames(style.add, "btn btn-dark")} type="submit">
                            ADD
                        </button>

                    </div>


                </Form>
            )}
        </Formik>
    );
}
export default CreateTodoLists
