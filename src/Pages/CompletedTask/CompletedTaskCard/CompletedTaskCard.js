import React from 'react';
import { toast } from 'react-hot-toast';
import { FaRegClock } from 'react-icons/fa';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const CompletedTaskCard = ({ task }) => {
    const { photo, message, date, _id } = task;

    const notCompletedHandler = id => {
        fetch(`https://easy-task-server.vercel.app/notCompleted/${id}`, {
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
        <article className='mx-lg-5 px-lg-5 my-5 rounded bg-white shadow'>
            <Table className="table-hover rounded">
                <Thead>
                    <Tr>
                        <Th>TASK NOTE</Th>
                        <Th>IMAGE</Th>
                        <Th>DATE</Th>
                        <Th>ACTIVITIES</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>{message}</Td>
                        <Td><img src={photo} alt="" width="60px" className='rounded shadow' /></Td>
                        <Td><FaRegClock /> {date}</Td>
                        <Td className="align-item-center"><button className='text-info fs-12 border-info rounded m-2'>completed</button>
                            <button onClick={(() => notCompletedHandler(_id))} className='btn btn-danger btn-sm shadow m-2'>NOT COMPLETED</button></Td>
                    </Tr>
                </Tbody>
            </Table>
        </article>
    );
};

export default CompletedTaskCard;