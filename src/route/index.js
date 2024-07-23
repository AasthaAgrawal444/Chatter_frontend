import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/Register";
import CheckEmailPage from "../pages/CheckEmailPage";
import Login from "../pages/Login";
import Home from "../pages/Home";
import MessagePage from "../components/MessagePage";
import AuthLayouts from "../layout";
import Forgotpassword from "../pages/ForgotPassword";


const router = createBrowserRouter([
    {
    path : "/",
    element : <App/>,
    children : [
        {
            path : "register",
            element : <AuthLayouts><Register/></AuthLayouts>
        },
        {
            path : 'email',
            element : <AuthLayouts><CheckEmailPage/></AuthLayouts>
        },
        {
            path : 'login',
            element : <AuthLayouts><Login/></AuthLayouts>
        },
        {
            path : 'forgot-password',
            element : <AuthLayouts><Forgotpassword/></AuthLayouts>
        },
        {
            path : "",
            element : <Home/>,
            children : [
                {
                    path : ':userId',
                    element : <MessagePage/>
                }
            ]
        }
    ]
}
])

export default router