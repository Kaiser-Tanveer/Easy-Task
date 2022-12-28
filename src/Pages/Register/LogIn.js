import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FaFacebook, FaFacebookF, FaGoogle, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';
import { toast } from 'react-hot-toast';

const LogIn = () => {
    const { logIn } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const submitHandler = data => {
        logIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Logged In Successfully!')
            })
            .then(err => {
                toast.error(err.message);
            })
    }
    return (
        <form onSubmit={handleSubmit(submitHandler)} className="mx-auto bg-info card my-5 p-4 shadow-lg" style={{ width: "360px" }}>
            <FaUserCircle className='fs-1 mx-auto rounded-circle shadow' />
            <h2 className='text-warning fw-bold fs-bold text-center'>Login</h2>
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
            <button type="submit" className="mx-auto w-100 btn btn-warning fs-semibold rounded shadow mt-4">Login</button>
            <div className="mt-2">
                <p className="text-gray-600">New in EduShop? Please <Link to='/register'>Register</Link></p>
            </div>
            <h4 className='fs-semibold mt-6 text-center'>Sign in with</h4>
            <FaGoogle className='fs-1 rounded-circle mx-auto shadow' />
        </form>
    );
};

export default LogIn;