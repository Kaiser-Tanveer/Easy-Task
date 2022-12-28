import React from 'react';
import { Container } from 'react-bootstrap';
import { FaRegClock } from 'react-icons/fa';

const CompletedTask = () => {
    return (
        <Container>
            <article className='mx-lg-5 px-lg-5 py-5'>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">TASK NOTE</th>
                            <th scope="col">TIME</th>
                            <th scope="col">COMPLETED</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                With supporting text below as a natural lead-in to additional content.
                            </td>
                            <td><FaRegClock /> 12:00 pm</td>
                            <td><button className='text-info border-info rounded btn btn-sm me-2'>COMPLETED</button>
                                <button className='btn btn-danger btn-sm'>NOT COMPLETED</button></td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </Container>
    );
};

export default CompletedTask;