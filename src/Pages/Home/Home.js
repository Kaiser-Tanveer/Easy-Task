import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { FaPencilAlt } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { HiOutlinePencilAlt, HiOutlinePhotograph } from 'react-icons/hi';
import { useForm } from 'react-hook-form';
import { useNavigate, useNavigation } from 'react-router-dom';
import Spinner from '../../Shared/Header/Spinner/Spinner';
import { toast } from 'react-hot-toast';
import TaskModal from '../MyTask/TaskModal/TaskModal';

const Home = () => {
    const navigation = useNavigation();
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit } = useForm();

    const imgSec = process.env.REACT_APP_IMAGE_SEC;

    const [msg, setMsg] = useState('');
    const [img, setImg] = useState('');

    const submitHandler = data => {
        const message = data.message;
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        // Hosting Image in ImageBB
        const imageUrl = `https://api.imgbb.com/1/upload?key=${imgSec}`
        fetch(imageUrl, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {

                //get the current date
                const currentDate = new Date();
                const date = currentDate.toLocaleDateString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                });

                const taskData = {
                    message,
                    photo: imgData.data.url,
                    date
                }

                console.log(data);
                // Sending data to Server 
                fetch(`http://localhost:5000/task`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(taskData)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            navigate('/myTask');
                            toast.success('Task Added');
                            if (navigation.state === "loading") {
                                return <Spinner />
                            }
                        }
                        else {
                            toast.error(data.message);
                        }
                        console.log(data);
                    })
                    .catch(err => console.error(err))
            })
    }
    return (
        <Container className='mb-5 mx-lg-5 px-lg-5'>
            <article className='mx-lg-5 px-lg-5'>
                <div className='mx-lg-5 px-lg-5'>
                    <h1 className='text-center mt-5'><FaPencilAlt className='fs-3 me-3' />Add a note</h1>
                    <Form onSubmit={handleSubmit(submitHandler)} className='mt-4 card p-5 mx-lg-5 shadow'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Leave Your Task</Form.Label>
                            <div className='d-flex align-items-center'>
                                {
                                    !msg &&
                                    <HiOutlinePencilAlt className='fs-1 me-2' />
                                }
                                <input
                                    {...register("message", { required: "Task is required." })}
                                    onChange={(e) => { setMsg(e.target.value); }} name='message' type="text" placeholder="Enter Task" className='w-100 p-2 form-control rounded' required />
                                {errors.message && <p className='text-error'>{errors.message.message}</p>}
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Upload Image</Form.Label>
                            <div className='d-flex align-items-center'>
                                {
                                    !img &&
                                    <HiOutlinePhotograph className='fs-1 me-2' />
                                }
                                <input
                                    {...register("image", { required: "Image is required." })}
                                    onChange={(e) => { setImg(e.target.value); }} name='image' type="file" className='w-100 p-2 form-control rounded' required />
                                {errors.image && <p className='text-error'>{errors.image.message}</p>}
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