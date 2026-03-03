import React from "react";
import AdminSidebar from "../../components/AdminSidebar";
import AdminTopNavbar from "../../components/AdminNavbar";
import AdminHeader from "../../components/AdminHeader";
import { Link } from "react-router-dom";

const LobcategoriesAdd=()=>{
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
                                <AdminHeader title="Add Lobcategory" />

                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6 col-lg-4">
                                            <div className="card mt-3">
                                                <div className="card-header">
                                                    <h6 className="card-title">Add Lobcategory  <Link className="btn btn-sm btn-info text-white" to="/admin/lobcategories">View All</Link></h6>
                                                </div>
                                                <div className="card-body">
                                                    <form method="post">
                                                        <div className="form-group">
                                                            <label htmlFor="">Name</label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="card-footer">
                                                    <button type="submit" className="btn btn-sm btn-primary">Submit</button>
                                                </div>
                                            </div>
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

export default LobcategoriesAdd;