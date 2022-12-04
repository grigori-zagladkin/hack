import { Outlet, NavLink } from "react-router-dom";
import styles from "./MainLayout.module.scss";
import news from "./../imgs/footer icons/news.svg";
import map from "./../imgs/footer icons/map.svg";
import camera from "./../imgs/footer icons/camera.svg";
import profile from "./../imgs/footer icons/profile.svg";

const MainLayout = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container_main}>
                <Outlet />
            </div>
            <footer>
                <NavLink to="/">
                    <img src={news} alt="" />
                </NavLink>
                <NavLink to="/map">
                    <img src={map} alt="" />
                </NavLink>
                <NavLink to="/camera">
                    <img src={camera} alt="" />
                </NavLink>
                <NavLink to="/profile">
                    <img src={profile} alt="" />
                </NavLink>
            </footer>
        </div>
    );
};

export default MainLayout;
