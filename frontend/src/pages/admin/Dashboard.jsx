import React from "react";
import "./Dashboard.css";
import AdminSidebar from "../../components/AdminSidebar";
import AdminTopNavbar from "../../components/AdminNavbar";
import AdminHeader from "../../components/AdminHeader";
import AdminGridboxes from "../../components/AdminGridBoxes";

const AdminDashboard=()=>{
    return (
        <>
            <div className="wrapper" bg="light" variant="light">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-2">
                            <AdminSidebar />
                        </div>
                        <div className="col-sm-10">
                            <div className="main" bg="light">
                                <AdminTopNavbar />
                                <AdminHeader title="Dashboard" />
                                <AdminGridboxes />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminDashboard;