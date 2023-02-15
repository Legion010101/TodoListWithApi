import {Formik, Field, Form} from 'formik'
import React from 'react'
import cn from 'classnames'
import {validateRequired} from "../../utility/validateLength";
import ButtonSend from "../../common/Button";
import style from './Login.module.css'

export const Login = (props) => {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm {...props} />
        </div>
    )
}
export const LoginForm = (props) => {
    const validateEmail = validateRequired(4)
    const validatePassword = validateRequired(4)
    const onSubmit = (values, {setSubmitting, setStatus}) => {
        const Promise = props.login([values, setStatus])
        Promise.then(props.getAuth)
        setSubmitting(false)
    }
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                rememberMe: false,
            }}
            validateOnBlur
            onSubmit={onSubmit}>
            {({values, errors, touched, status}) => (
                <Form>
                    <div>
                        <Field
                            className={cn({['errorsInput']: errors.email && touched.email})}
                            type="email"
                            name="email"
                            placeholder="email"
                            value={values.email}
                            validate={validateEmail}
                        />

                        {errors.email && touched.email && (
                            <div className="errors">{errors.email}</div>
                        )}
                    </div>
                    <div>
                        <Field
                            className={cn({
                                ['errorsInput']: errors.password && touched.password,
                            })}
                            type="text"
                            name="password"
                            placeholder="password"
                            value={values.password}
                            validate={validatePassword}
                        />
                        {errors.password && touched.password && (
                            <div className="errors">{errors.password}</div>
                        )}
                    </div>
                    <div>
                        <Field type="checkbox" name="rememberMe" />
                        remember me
                    </div>
                    <div className={'errors'}>{status}</div>

                    <div>
                        <div className={style.btn}>
                            <ButtonSend type="submit" nameButton={'Login'} newTitle={true} callback={()=>{
                                console.log('Вы авторизовались')}}/>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}
