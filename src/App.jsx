import { BrowserRouter, Routes, Route } from "react-router";
import AdminLayout from "./components/backend/AdminLayout";

const App = () => { 
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<AdminLayout />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App;