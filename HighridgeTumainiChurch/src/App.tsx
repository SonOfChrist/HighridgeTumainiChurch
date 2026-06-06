import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import RootLayout from "./components/layout/RootLayout";
import PublicHome from "./pages/PublicHome";
import Sermons from "./pages/Sermons";
import Give from "./pages/Give";
import Events from "./pages/Events";
import Groups from "./pages/Groups";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import MemberDashboard from "./pages/portal/Dashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import { AuthProvider } from "./lib/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<PublicHome />} />
            <Route path="sermons" element={<Sermons />} />
            <Route path="give" element={<Give />} />
            <Route path="events" element={<Events />} />
            <Route path="groups" element={<Groups />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="portal" element={<MemberDashboard />} />
            <Route path="admin" element={<AdminDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

