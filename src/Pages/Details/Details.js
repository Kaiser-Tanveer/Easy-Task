import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Spinner from '../../Shared/Header/Spinner/Spinner';
import { Badge } from 'react-bootstrap';

const Details = () => {
    const navigation = useNavigation();
    const tasks = useLoaderData();
    console.log(tasks);
    const { photo, message, date, completed } = tasks;

    if (navigation.state === 'loading') {
        return <Spinner />
    }
    return (
        <Card style={{ width: '18rem' }} className='shadow-lg mx-auto my-5'>
            <div className='position-absolute shadow' style={{ marginTop: "-10px" }}>
                {
                    completed ?
                        <Badge bg="warning" text="dark">
                            COMPLETED
                        </Badge>
                        :
                        <Badge bg="secondary" text="light">
                            NOT COMPLETED
                        </Badge>
                }
            </div>
            <Card.Img variant="top" src={photo} />
            <Card.Body>
                <Card.Title>Task Detail</Card.Title>
                <Card.Text>
                    {message} {completed}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Added Date: {date}</ListGroup.Item>
            </ListGroup>
        </Card>
    );
}

export default Details;