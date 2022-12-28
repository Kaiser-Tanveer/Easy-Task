import React from 'react';
import { Container } from 'react-bootstrap';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';

const MyTaskCard = ({ task }) => {
    const { photo, message, date, _id } = task;

    // Edit handler 
    const editHandler = (id) => {
        console.log(id);
    }
    return (
        <Container className='my-5 mx-lg-5 px-lg-5 '>
            <article className='mx-lg-5 px-lg-5 '>
                <div class="card text-center mx-lg-5 shadow">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <button onClick={() => editHandler(_id)} className='btn btn-light btn-sm border-secondary'>
                            <FaPencilAlt className='fs-6' />
                        </button>
                        <p>Review Task</p>
                        <button className='btn btn-light btn-sm border-danger'>
                            <FaTrashAlt className='fs-6 text-danger' />
                        </button>
                    </div>
                    <div class="card-body">
                        <img src={photo} alt="" className='w-25 rounded shadow' />
                        <p class="card-text">{message}</p>
                        <div className='d-flex justify-content-between align-items-center'>

                            <p className='text-info fw-bold'>
                                TASK ADDED
                            </p>
                            <button className='btn btn-xs btn-info border-secondary disabled'>COMPLETED</button>

                        </div>
                    </div>
                    <div class="card-footer text-muted">
                        {date}
                    </div>
                </div>
            </article>
        </Container>
    );
};

export default MyTaskCard;