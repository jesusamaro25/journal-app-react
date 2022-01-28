import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { useSelector } from 'react-redux';
import { startRegistered } from '../../actions/auth';

export const RegisterScreen = () => {

    const { error } = useSelector(state => state.ui)

    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        name: 'jesus',
        email: 'jesus',
        password: '123',
        password2: '123'
    })

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            dispatch(startRegistered(email, password, name))
        }

    }

    const isFormValid = () => {
        if (name.trim().length === 0 || !validator.isEmail(email) || password !== password2) {
            dispatch(setError('llena tus datos de manera correcta, por favor.'));
            return false
        }
        dispatch(removeError())
        return true
    }
    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={handleRegister}>

                {
                    error && (
                        <div className='auth__alert-error'>
                            {error}
                        </div>
                    )
                }


                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />

                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    value={password2}
                    onChange={handleInputChange}
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>



                <Link
                    to="/auth/login"
                    className="link"
                >
                    Already registered?
                </Link>

            </form>
        </>
    )
}
