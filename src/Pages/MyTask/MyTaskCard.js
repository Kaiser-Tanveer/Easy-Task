import React from 'react';
import { Container } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import Spinner from '../../Shared/Header/Spinner/Spinner';

const MyTaskCard = ({ task }) => {
    const navigate = useNavigate();
    const navigation = useNavigation();
    const { photo, message, date, completed, _id } = task;
    const removeHandler = id => {
        const proceed = window.confirm('Sure to Delete the Task ??');
        if (proceed) {
            fetch(`https://easy-task-server.vercel.app/remove/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (navigation.state === 'loading') {
                        return <Spinner />
                    }
                    toast.success('Task Deleted!!');
                    navigate('/myTask');
                })
        }
    }

    const completeHandler = id => {
        fetch(`https://easy-task-server.vercel.app/completed/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Task Completed!!');
                    navigate('/completed');
                }
            })
    }
    return (
        <Container className='my-5 mx-lg-5 px-lg-5 '>
            {
                !completed &&
                <article className='mx-lg-5 px-lg-5 '>
                    {
                        !message ?
                            <h2 className='text-danger text-center fs-1 fw-bold'>Please add a task!!!</h2>
                            :
                            <div className="card text-center mx-lg-5 shadow">
                                <div className="card-header d-flex justify-content-between align-items-center">
                                    <Link to={`/task/${_id}`}>
                                        <button variant="primary" className='btn btn-light btn-sm border-secondary'>
                                            <FaPencilAlt className='fs-6' />
                                        </button>
                                    </Link>
                                    <p className='text-secondary'>Review Task</p>
                                    <button onClick={() => removeHandler(_id)} className='btn btn-light btn-sm border-danger'>
                                        <FaTrashAlt className='fs-6 text-danger' />
                                    </button>
                                </div>
                                <div className="card-body">
                                    <img src={photo} alt="" className='w-25 rounded shadow' />
                                    <p className="text-secondary">{message}</p>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <p className='text-info fw-bold'>
                                            TASK ADDED
                                        </p>
                                        <Link to={`/details/${_id}`}>
                                            <p className='btn btn-warning border-secondary btn-sm'>
                                                Details
                                            </p>
                                        </Link>
                                        <p onClick={() => completeHandler(_id)} className='btn btn-sm btn-info border-secondary'>COMPLETED</p>
                                    </div>
                                </div>
                                <div className="card-footer text-muted">
                                    {date}
                                </div>
                            </div>
                    }
                </article>
            }
        </Container>
    );
};

export default MyTaskCard;