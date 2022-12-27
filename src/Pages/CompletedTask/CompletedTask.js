import React from 'react';
import { Container } from 'react-bootstrap';
import { FaCheckCircle, FaRegClock } from 'react-icons/fa';

const CompletedTask = () => {
    return (
        <Container>
            <article className='mx-lg-5 px-lg-5 py-5'>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        <div className='mx-auto fw-semibold'>Task Note</div>
                        <div className='mx-auto fw-semibold'>Time</div>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center"><div><FaCheckCircle className='text-info me-4' /> An item</div>
                        <div><img src="xyz" alt="" /> <FaRegClock /> 12:00 pm </div>
                    </li>
                </ul>
            </article>
        </Container>
    );
};

export default CompletedTask;