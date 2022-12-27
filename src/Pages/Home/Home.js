import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { FaPencilAlt } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { HiOutlinePencilAlt, HiOutlinePhotograph } from 'react-icons/hi';

const Home = () => {
    const [msg, setMsg] = useState('');
    const [img, setImg] = useState('');

    const submitHandler = e => {
        e.preventDefault();
        const form = e.target;
        const message = form.message.value;
        const image = form.image.value;

        //get the current date
        const currentDate = new Date();
        const date = currentDate.toLocaleDateString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
        });

        e.target.value = '';

        const taskData = [
            {
                message,
                image,
                date
            }
        ]
        console.log(taskData);
    }
    return (
        <Container className='mx-lg-5 px-lg-5'>
            <article className='mx-lg-5 px-lg-5'>
                <div className='mx-lg-5 px-lg-5'>
                    <h1 className='text-center mt-5'><FaPencilAlt className='fs-3 me-3' />Add a note</h1>
                    <Form onSubmit={submitHandler} className='mt-4 card p-5 mx-lg-5 shadow'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Leave Your Task</Form.Label>
                            <div className='d-flex align-items-center'>
                                {
                                    !msg &&
                                    <HiOutlinePencilAlt className='fs-1 me-2' />
                                }
                                <Form.Control onChange={(e) => { setMsg(e.target.value); }} name='message' type="text" placeholder="Enter Task" />
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Upload Image</Form.Label>
                            <div className='d-flex align-items-center'>
                                {
                                    !img &&
                                    <HiOutlinePhotograph className='fs-1 me-2' />
                                }
                                <Form.Control onChange={(e) => { setImg(e.target.value); }} name='image' type="file" />
                            </div>
                        </Form.Group>

                        {
                            msg && img ?
                                <Button variant="info" className='mt-2' type="submit">
                                    SUBMIT
                                </Button>
                                :
                                <Button variant="secondary" className='disabled mt-2' type="submit">
                                    Submit
                                </Button>
                        }
                    </Form>
                </div>
            </article>
        </Container>
    );
};

export default Home;