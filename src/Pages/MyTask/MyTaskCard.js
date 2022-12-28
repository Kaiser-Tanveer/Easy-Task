import React from 'react';
import { Container } from 'react-bootstrap';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyTaskCard = ({ task }) => {
    const { photo, message, date, _id } = task;

    const removeHandler = id => {
        const proceed = window.confirm('Sure to Delete the Task ??');
        if (proceed) {
            fetch(`http://localhost:5000/remove/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }
    }
    return (
        <Container className='my-5 mx-lg-5 px-lg-5 '>
            <article className='mx-lg-5 px-lg-5 '>
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
                            <button className='btn btn-xs btn-info border-secondary disabled'>COMPLETED</button>
                        </div>
                    </div>
                    <div className="card-footer text-muted">
                        {date}
                    </div>
                </div>
            </article>
        </Container>
    );
};

export default MyTaskCard;