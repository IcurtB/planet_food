import React from "react";
import s from './Admin.module.css'
import Sidebar from "../Sidebar/Sidebar";
import ControlPage from "../ControlPage/ControlPage";


const Admin = () => {
    return (
        <>
            <div className={s.admin}>
                <Sidebar/>
                <ControlPage/>
            </div>
        </>
    )
};

export default Admin