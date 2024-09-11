import { createBrowserRouter } from "react-router-dom";
import UserList from "../views/UserManage/userManage.tsx";
import App from "../views/App/App.tsx";

const router = createBrowserRouter([
    {
        path:'/',
        element: <App />
    },
    {
        path:'/users',
        element: <UserList />
    }
])

export default router
