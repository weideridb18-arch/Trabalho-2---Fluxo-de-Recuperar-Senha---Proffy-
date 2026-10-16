import { RouterProvider } from "react-router";
import { Toaster } from "sonner";
import { router } from "./routes"; // Confirme se o caminho está correto

export function App() {
  return (
    <>
      <Toaster richColors />
      <RouterProvider router={router} />
    </>
  )
}