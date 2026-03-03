import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Collapse } from "react-bootstrap";
import { MdDashboard } from "react-icons/md";
import { FaCheckCircle, FaChevronDown, FaUser } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaStackExchange } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function AdminSidebar() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className="bg-blue text-white vh-100 pt-3" >
      <h4 className="text-center mb-4">KMS ADMIN</h4>

      <ul className="nav nav-pills flex-column">

        {/* Dashboard */}
        <li className="nav-item">
          <NavLink to="/" className="nav-link text-white">
            <MdDashboard/>&nbsp;&nbsp;Dashboard
          </NavLink>
        </li>

        {/* LOB CATEGORIES DROPDOWN */}
        <li className="nav-item">
          <button
            className="nav-link text-white border-0 w-100 d-flex align-items-center"
            onClick={() => toggleMenu("users")}
          >
            <div className="d-flex align-items-center gap-2">
                <FaUser /> Users 
            </div>
            
            <FaChevronDown className="ms-auto arrow-down" style={{
                                                transition: "0.3s",
                                                transform:
                                                openMenu === "users" ? "rotate(180deg)" : "rotate(0deg)",
                                            }} />
          </button>

          <Collapse in={openMenu === "users"}>
            <div>
              <ul className="list-unstyled ms-3">
                <li>
                  <NavLink to="/" className="nav-link text-white">
                    View All
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="nav-link text-white">
                    Add New
                  </NavLink>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>

        {/* LOB CATEGORIES DROPDOWN */}
        <li className="nav-item">
          <button
            className="nav-link text-white border-0 w-100 d-flex align-items-center"
            onClick={() => toggleMenu("lobcategories")}
          >
            <div className="d-flex align-items-center gap-2">
                <FaList/> Lob Categories
            </div>
            <FaChevronDown className="ms-auto arrow-down" style={{
                                                transition: "0.3s",
                                                transform:
                                                openMenu === "lobcategories" ? "rotate(180deg)" : "rotate(0deg)",
                                            }}/>
          </button>

          <Collapse in={openMenu === "lobcategories"}>
            <div>
              <ul className="list-unstyled ms-3">
                <li>
                  <NavLink to="/admin/lobcategories" className="nav-link text-white">
                    View All
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/admin/lobcategories/add" className="nav-link text-white">
                    Add New
                  </NavLink>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>

        {/* PRODUCTS DROPDOWN */}
        <li className="nav-item">
          <button
            className="nav-link text-white border-0 w-100 d-flex align-items-center"
            onClick={() => toggleMenu("categories")}
          >
            <div className="d-flex align-items-center gap-2"><FaList/> Categories </div>
            <FaChevronDown className="ms-auto arrow-down" style={{
                                                transition: "0.3s",
                                                transform:
                                                openMenu === "categories" ? "rotate(180deg)" : "rotate(0deg)",
                                            }}/>
          </button>

          <Collapse in={openMenu === "categories"}>
            <div>
              <ul className="list-unstyled ms-3">
                <li>
                  <NavLink to="/admin/categories" className="nav-link text-white">
                    View All
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/admin/categories/add" className="nav-link text-white">
                    Add New
                  </NavLink>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>

        {/* REPORTS DROPDOWN */}
        <li className="nav-item">
          <button
            className="nav-link text-white border-0 w-100 d-flex align-items-center"
            onClick={() => toggleMenu("articles")}
          >
            <div className="d-flex align-items-center gap-2">
                <FaList />
                <span>Articles</span>
            </div>
            
            <FaChevronDown className="ms-auto arrow-down" style={{
                                                transition: "0.3s",
                                                transform:
                                                openMenu === "articles" ? "rotate(180deg)" : "rotate(0deg)",
                                            }} />
          </button>

          <Collapse in={openMenu === "articles"}>
            <div>
              <ul className="list-unstyled ms-3">
                <li>
                  <NavLink to="/" className="nav-link text-white">
                    View All
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="nav-link text-white">
                    Add New
                  </NavLink>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>

        {/* Change Password */}
        <li className="nav-item mt-2">
          <NavLink to="/" className="nav-link text-white">
            <FaCheckCircle/> User Acknowledgement
          </NavLink>
        </li>

        {/* Settings */}
        <li className="nav-item mt-2">
          <NavLink to="/" className="nav-link text-white">
            <FaCog/> Settings
          </NavLink>
        </li>

        {/* Change Password */}
        <li className="nav-item mt-2">
          <NavLink to="/" className="nav-link text-white">
            <FaEye/> Change Password
          </NavLink>
        </li>

        {/* Change Password */}
        <li className="nav-item mt-2">
          <NavLink to="/settings" className="nav-link text-white">
            <FaSignOutAlt/> Logout
          </NavLink>
        </li>

      </ul>
    </div>
  );
}

export default AdminSidebar;