import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layouts/Main";
import Blog from "../Pages/Home/Blog/Blog";
import MyTask from "../Pages/MyTask/MyTask";
import CompletedTask from "../Pages/CompletedTask/CompletedTask";
import SingleTask from "../Pages/MyTask/SingleTask/SingleTask";
import Register from "../Pages/Register/Register";
import LogIn from "../Pages/Register/LogIn";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Details from "../Pages/Details/Details";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/logIn',
                element: <LogIn />
            },
            {
                path: '/myTask',
                element: <MyTask />,
                loader: async () => fetch('https://easy-task-server.vercel.app/task'),
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><Details /></PrivateRoute>,
                loader: async ({ params }) => fetch(`https://easy-task-server.vercel.app/details/${params.id}`),
            },
            {
                path: '/task/:id',
                element: <PrivateRoute><SingleTask /></PrivateRoute>,
                loader: async ({ params }) => fetch(`https://easy-task-server.vercel.app/task/${params.id}`),
            },
            {
                path: '/completed',
                element: <PrivateRoute><CompletedTask /></PrivateRoute>,
                loader: () => fetch('https://easy-task-server.vercel.app/completed'),
            },
        ]
    }
])

export default router;