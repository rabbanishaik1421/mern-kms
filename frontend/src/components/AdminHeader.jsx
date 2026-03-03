import React from "react";
import "./AdminHeader.css";
import { FaHome } from "react-icons/fa";

const AdminHeader=({title})=>{
    return (
        <>
            <div className="card admin-header">
                <div className="card-header">
                    <div className="card-title">
                        <FaHome size={15}/> {title}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminHeader;