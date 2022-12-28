import React from 'react';
import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import Spinner from '../../../Shared/Header/Spinner/Spinner';
import { toast } from 'react-hot-toast';

const SingleTask = () => {
    const navigate = useNavigate();
    const navigation = useNavigation();
    const task = useLoaderData();
    const { message, _id } = task;

    const submitHandler = e => {
        e.preventDefault();
        const updatedMsg = e.target.message.value;
        console.log(updatedMsg);

        const data = {
            updatedMsg
        }

        fetch(`https://easy-task-server.vercel.app/updatedTask/${_id}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        toast.success('Task Updated Successfully!');
        navigate('/myTask');
    }


    if (navigation.state === 'loading') {
        return <Spinner />
    }
    return (
        <form onSubmit={submitHandler} className='card shadow my-5 mx-auto'>
            <textarea type="text" name='message' defaultValue={message} className='mx-5 mt-5 p-3' />
            <input type="submit" value="Update" className='form-control mt-2 mx-5 ms-auto mb-5 btn btn-info btn-sm w-25' />
        </form>
    );
};

export default SingleTask;