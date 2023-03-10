import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/Layout";
import Todos from "../components/Todos";
import { About } from "../Pages/About";
import { Dashboard } from "../Pages/Dashboard";
import { NoMatch } from "../Pages/NoMatch";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Todos />} />
                <Route path="about" element={<About />} />
                <Route path="dashboard" element={<Dashboard />} />

                <Route path="*" element={<NoMatch />} />
            </Route>
        </Routes>
    );
}