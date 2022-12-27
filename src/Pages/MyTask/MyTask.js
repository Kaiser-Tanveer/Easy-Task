import React from 'react';
import { Container } from 'react-bootstrap';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';

const MyTask = () => {
    return (
        <Container className='my-5 mx-lg-5 px-lg-5 '>
            <article className='mx-lg-5 px-lg-5 '>
                <div class="card text-center mx-lg-5">
                    <div class="card-header">
                        Review Task
                    </div>
                    <div class="card-body">
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <div className='d-flex justify-content-between'>
                            <button className='btn btn-light border-secondary'>
                                <FaPencilAlt className='fs-3' />
                            </button>
                            <button className='btn btn-light border-secondary'>COMPLETED</button>
                            <button className='btn btn-light border-danger'>
                                <FaTrashAlt className='fs-4 text-danger' />
                            </button>
                        </div>
                    </div>
                    <div class="card-footer text-muted">
                        2 days ago
                    </div>
                </div>
            </article>
        </Container>
    );
};

export default MyTask;