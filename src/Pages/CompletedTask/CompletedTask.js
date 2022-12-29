import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CompletedTaskCard from './CompletedTaskCard/CompletedTaskCard';
import Spinner from '../../Shared/Header/Spinner/Spinner';

const CompletedTask = () => {
    const navigation = useNavigation();
    const tasks = useLoaderData();
    if (navigation.state === 'loading') {
        return <Spinner />
    }
    return (
        <Container className=''>
            <h2 className='fw-bold mt-5 mb-3 text-center'>All The Completed Tasks</h2>
            {
                tasks.map(task => <CompletedTaskCard
                    key={task._id}
                    task={task}
                />)
            }
        </Container>
    );
};

export default CompletedTask;