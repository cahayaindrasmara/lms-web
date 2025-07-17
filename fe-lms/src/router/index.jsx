import { createBrowserRouter } from "react-router-dom"
import ManagerHomePage from "../pages/Manager/Home"
import SignInPage from "../pages/SignIn"
import SignUpPage from "../pages/SignUp/"
import SuccessCheckoutPage from "../pages/SuccessCheckoutPage"
import LayoutDashboard from "../component/layout"
import ManagerCoursePage from "../pages/Manager/Courses"
import ManagerCreateCoursePage from "../pages/Manager/Create-Course"
import ManagerCourseDetailPage from "../pages/Manager/Course-Detail"
import ManagerContentCreatePage from "../pages/Manager/Course-Content-Create"
import ManagerCoursePreviewPage from "../pages/Manager/Course-Preview"
import ManagerStudentsPage from "../pages/Manager/Students"

const router = createBrowserRouter([
    {
        path: "/",
        element: <ManagerHomePage />
    },  {
        path: "/manager/sign-in",
        element: <SignInPage />
    }, {
        path: "manager/sign-up",
        element: <SignUpPage />
    }, {
        path: "success-checkout",
        element: <SuccessCheckoutPage />
    }, {
        path: "/manager",
        element: <LayoutDashboard />,
        children: [
            {
                index: true,
                element: <ManagerHomePage />
            },
            {
                path: "/manager/courses",
                element: <ManagerCoursePage />
            }, {
                path: "/manager/courses/create",
                element: <ManagerCreateCoursePage />
            }, {
                path: "/manager/courses/:id",
                element: <ManagerCourseDetailPage />
            }, {
                path: "/manager/courses/:id/create",
                element: <ManagerContentCreatePage />
            } , {
                path: "/manager/courses/:id/preview",
                element: <ManagerCoursePreviewPage />
            } , {
                path: "/manager/students",
                element: <ManagerStudentsPage />
            }
        ]
    }
])

export default router;