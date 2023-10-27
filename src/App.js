
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"
import Error from "./components/Error"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

const AppLayout =()=> {
    return (
<div>
        <Header/>
        <Outlet/>
        <Footer/>

       
</div>
    )
}

const appRouter = createBrowserRouter([
    {
    path:"/",
    element: <AppLayout/>,

    children : [
        {
            path:"/contact",
            element: <Contact/>,
        },
        {
            path:"/about",
            element: <AboutUs/>,
        },
        {
            path: "/",
            element : <Body/>,
        },
    ],
    errorElement : <Error/>
}





])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>)