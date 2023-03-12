import Main from "../Layout/Main";
import Homepage from "../Page/HomePage/Homepage";

const { createBrowserRouter } = require("react-router-dom");


export const router = createBrowserRouter([{
    path: "/", element: <Main/>, children: [
        {
            path: "/", element: <Homepage/>
        }
    ]
}])