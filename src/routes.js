import AdminPlat from "./Pages/AdminPlat";
import OrgPlat from "./Pages/OrgPlat";
import StudentPlat from "./Pages/StudentPlat";
import App from "./App";
import { createBrowserRouter } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/AdminPlat", element: <AdminPlat /> },
      { path: "/OrgPlat", element: <OrgPlat /> },
      { path: "/StudentPlat", element: <StudentPlat /> },
    ],
  },
];
export const router = createBrowserRouter(routes);
