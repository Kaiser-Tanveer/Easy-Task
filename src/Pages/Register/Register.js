import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Container } from 'react-bootstrap';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';
import { toast } from 'react-hot-toast';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser } = useContext(AuthContext);
    const [disable, setDisable] = useState(false);

    const submitHandler = data => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Registered Successfully!')
            })
            .then(err => {
                console.error(err)
            })
    }

    const termsHandler = (e) => {
        const check = e.target.checked;
        setDisable(check);
    }
    return (
        <Container>
            <form onSubmit={handleSubmit(submitHandler)} className="mx-auto bg-info card my-5 p-4 shadow" style={{ width: "360px" }}>
                <h2 className='text-warning fs-bold text-center'>REGISTER</h2>
                <label>Your Name</label>
                <input
                    {...register("name", { required: "Name is required." })}
                    type="text" className="rounded p-2 fw-semibold border-info" required />
                {errors.name && <p className='text-error'>{errors.name.message}</p>}
                <label>Your Email</label>
                <input
                    {...register("email", { required: "Email is required." })}
                    type="text" className="rounded p-2 fw-semibold border-info" required />
                {errors.email && <p className='text-error'>{errors.email.message}</p>}
                <label>Password</label>
                <input
                    {...register("password", { required: "Password is required.", pattern: { value: '/(?=.*[a-z])(?=.*[A-Z])/', message: 'Password must contain uppercase and lowercase' } })}
                    type="password" className="rounded p-2 fw-semibold border-info" required />
                {errors.password && <p className='text-error'>{errors.password.message}</p>}
                <div className='mt-6'>
                    <div className='d-flex align-items-center py-2'>
                        <input onClick={termsHandler} type="checkbox" className='me-2' />
                        <span>Accept <Link to='/blog' className='link-hover'>terms and conditions</Link></span>
                    </div>
                    {
                        !disable ?
                            <button type="submit" className="mx-auto w-100 btn btn-secondary fs-semibold rounded" disabled>Register</button>
                            :
                            <button type="submit" className="mx-auto w-100 btn btn-warning fs-semibold rounded">Register</button>
                    }
                </div>
                <div>
                    <p>Already have an account? Please <Link className='link-hover' to='/logIn'>Login</Link></p>
                </div>
            </form>
        </Container>
    );
};

export default Register;