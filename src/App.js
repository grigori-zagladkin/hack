import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Feed from "./pages/Feed";
import Camera from "./pages/Camera";
import Map from "./pages/Map";

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Feed />} />
                <Route path="/camera" element={<Camera />} />
                <Route path="/map" element={<Map />} />
            </Route>
        </Routes>
    );
}

export default App;
