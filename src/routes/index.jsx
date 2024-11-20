import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/main/Main";
import Home from "../pages/main/Home";
import OnlineTuition from "../pages/main/OnlineTuition";
import PersonalDevelopment from "../pages/main/PersonalDevelopment";
import Resources from "../pages/main/Resources";
import PrivacyPolicy from "../pages/main/PrivacyPolicy";
import TermsOfService from "../pages/main/TermsOfService";
import ContactUs from "../pages/main/ContactUs";
import Auth from "../layouts/auth/Auth";
import ApplyTutor from "../pages/auth/ApplyTutor";
import LogIn from "../pages/auth/LogIn";
import NotFound from "../pages/NotFound";


const router = createBrowserRouter([
      {
        path:"/",
        element: <Main/>,
        children:[
          {
            path:"/",
            element: <Home/>
          },
          {
            path:"/home",
            element: <Home/>
          },
          {
            path:"/online-tuition",
            element: <OnlineTuition/>
          },
          {
            path:"/personal-development",
            element: <PersonalDevelopment/>
          },
          {
            path:"/resources",
            element: <Resources/>
          },
          {
            path:"/privacy-policy",
            element: <PrivacyPolicy/>
          },
          {
            path:"/terms-of-service",
            element: <TermsOfService/>
          },
          {
            path:"/contact-us",
            element: <ContactUs/>
          },
        
        ]
      },
      {
        path:"/auth",
        element:<Auth/>,
        children:[
          {
            path:"/auth/apply-as-a-tutor",
            element: <ApplyTutor />
          },
          {
            path:"/auth/login",
            element: <LogIn />
          },
        ]
      },
      {
        path:"*",
        element:<NotFound/>
      }
]);

export default router;