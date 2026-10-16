import { createBrowserRouter } from "react-router"
import { SignIn } from "./pages/auth/sign-in"
import { SignUp } from "./pages/auth/sign-up"
import { RegisterCompleted } from "./pages/auth/register-completed"
import { Forgot } from "./pages/auth/forgot"
import { ForgotCompleted } from "./pages/auth/forgot-completed"

export const router = createBrowserRouter([
  { path: '/sign-in', element: <SignIn/> },
  { path: '/sign-up', element: <SignUp/> },
  { path: '/sign-up/register-completed', element: <RegisterCompleted/> },
  { path: '/forgot', element: <Forgot/> },
  { path: '/forgot/send-email', element: <ForgotCompleted/> }
])