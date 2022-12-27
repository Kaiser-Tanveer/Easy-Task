import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layouts/Main";
import Blog from "../Pages/Home/Blog/Blog";
import MyTask from "../Pages/MyTask/MyTask";

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
                path: '/myTask',
                element: <MyTask />
            },
        ]
    }
])

export default router;