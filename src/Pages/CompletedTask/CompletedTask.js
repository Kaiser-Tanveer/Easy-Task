import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CompletedTaskCard from './CompletedTaskCard/CompletedTaskCard';
import Spinner from '../../Shared/Header/Spinner/Spinner';
import PrivateRoute from '../../Routers/PrivateRoute/PrivateRoute';

const CompletedTask = () => {
    const navigation = useNavigation();
    const tasks = useLoaderData();
    if (navigation.state === 'loading') {
        return <Spinner />
    }
    return (
        <Container>
            {
                tasks.map(task => <CompletedTaskCard
                    key={task._id}
                    task={task}
                />)
            }
            <PrivateRoute />
        </Container>
    );
};

export default CompletedTask;