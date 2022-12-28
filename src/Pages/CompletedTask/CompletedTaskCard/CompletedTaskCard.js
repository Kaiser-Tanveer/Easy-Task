import React from 'react';
import { toast } from 'react-hot-toast';
import { FaRegClock } from 'react-icons/fa';

const CompletedTaskCard = ({ task }) => {
    const { photo, message, date, _id } = task;

    const notCompletedHandler = id => {
        fetch(`http://localhost:5000/notCompleted/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Added as Not Completed!!');
                }
            })
    }
    return (
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
                            {message}
                        </td>
                        <td><FaRegClock /> {date}</td>
                        <td><button className='text-info border-info rounded btn btn-sm me-2'>COMPLETED</button>
                            <button onClick={(() => notCompletedHandler(_id))} className='btn btn-danger btn-sm'>NOT COMPLETED</button></td>
                    </tr>
                </tbody>
            </table>
        </article>
    );
};

export default CompletedTaskCard;