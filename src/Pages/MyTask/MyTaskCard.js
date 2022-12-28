import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { Link, Navigate, useNavigation } from 'react-router-dom';
import Spinner from '../../Shared/Header/Spinner/Spinner';

const MyTaskCard = ({ task }) => {
    const navigation = useNavigation();
    const { photo, message, date, _id } = task;
    const removeHandler = id => {
        const proceed = window.confirm('Sure to Delete the Task ??');
        if (proceed) {
            fetch(`http://localhost:5000/remove/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (navigation.state === 'loading') {
                        return <Spinner />
                    }
                    toast.success('Task Deleted!!');
                    Navigate('/myTask');
                })
        }
    }

    const completeHandler = id => {
        fetch(`http://localhost:5000/completed/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Task Completed!!');
                }
            })
    }
    return (
        <Container className='my-5 mx-lg-5 px-lg-5 '>
            <article className='mx-lg-5 px-lg-5 '>
                {
                    !message.length > 0 ?
                        <h2 className='text-danger text-center fs-1 fw-bold'>Please add a task!!!</h2>
                        :
                        <div className="card text-center mx-lg-5 shadow">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <Link to={`/task/${_id}`}>
                                    <button variant="primary" className='btn btn-light btn-sm border-secondary'>
                                        <FaPencilAlt className='fs-6' />
                                    </button>
                                </Link>
                                <p>Review Task</p>
                                <button onClick={() => removeHandler(_id)} className='btn btn-light btn-sm border-danger'>
                                    <FaTrashAlt className='fs-6 text-danger' />
                                </button>
                            </div>
                            <div className="card-body">
                                <img src={photo} alt="" className='w-25 rounded shadow' />
                                <p className="card-text">{message}</p>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p className='text-info fw-bold'>
                                        TASK ADDED
                                    </p>
                                    <button onClick={() => completeHandler(_id)} className='btn btn-xs btn-info border-secondary'>COMPLETED</button>
                                </div>
                            </div>
                            <div className="card-footer text-muted">
                                {date}
                            </div>
                        </div>
                }
            </article>
        </Container>
    );
};

export default MyTaskCard;