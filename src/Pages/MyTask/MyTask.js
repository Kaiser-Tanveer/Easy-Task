import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Spinner from '../../Shared/Header/Spinner/Spinner';
import MyTaskCard from './MyTaskCard';

const MyTask = () => {
    const navigation = useNavigation();
    const tasks = useLoaderData();
    if (navigation.state === 'loading') {
        return <Spinner />
    }
    return (
        <>
            {
                tasks.map(task => <MyTaskCard
                    key={task._id}
                    task={task}
                />)
            }
        </>
    );
};

export default MyTask;