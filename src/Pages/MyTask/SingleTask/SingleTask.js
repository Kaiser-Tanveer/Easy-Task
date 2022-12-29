import React from 'react';
import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import Spinner from '../../../Shared/Header/Spinner/Spinner';
import { toast } from 'react-hot-toast';

const SingleTask = () => {
    const navigate = useNavigate();
    const navigation = useNavigation();
    const task = useLoaderData();
    const { message, _id } = task;

    const submitHandler = (e, id) => {
        e.preventDefault();
        const msg = e.target.message.value;

        const updatedMsg = { msg }


        fetch(`https://easy-task-server.vercel.app/updatedTask/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedMsg)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.modifiedCount > 0) {
                    toast.success('Updated Successfully!');
                    navigate('/myTask');
                }
            })
    }


    if (navigation.state === 'loading') {
        return <Spinner />
    }
    return (
        <form onSubmit={(e) => submitHandler(e, _id)} className='card shadow my-5 mx-auto'>
            <textarea type="text" name='message' defaultValue={message} className='mx-5 mt-5 p-3' />
            <input type="submit" value="Update" className='form-control mt-2 mx-5 ms-auto mb-5 btn btn-info btn-sm w-25' />
        </form>
    );
};

export default SingleTask;