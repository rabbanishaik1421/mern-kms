import React from "react";
import AdminSidebar from "../../components/AdminSidebar";
import AdminTopNavbar from "../../components/AdminNavbar";
import AdminHeader from "../../components/AdminHeader";
import { Link } from "react-router-dom";

const Lobcategories=()=>{
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
                                <AdminHeader title="Lobcategories" />

                                <div className="container">
                                    <div className="card mt-3">
                                        <div className="card-header">
                                            <h6 className="card-title">Lob Categories <Link className="btn btn-sm btn-info text-white" to="/admin/lobcategories/add">Add New</Link></h6>
                                        </div>
                                        <div className="card-body">
                                            <table className="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Name</th>
                                                        <th>Edit</th>
                                                        <th>Delete</th>                                        
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Lobcategories;