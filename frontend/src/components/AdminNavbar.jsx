import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaBell, FaUsb, FaUser } from "react-icons/fa";
import "./AdminNavbar.css";
import ProfileImage from "../assets/profile.jpg";

function AdminTopNavbar() {
  return (
    <Navbar bg="white" variant="white" expand="lg" className="px-1">
        <Container fluid>
            <Navbar.Brand href="#"></Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarScroll" />

            <Navbar.Collapse id="navbarScroll">
                {/* <Nav className="ms-auto">
                    <Nav.Link href="#">Dashboard</Nav.Link>
                    <Nav.Link href="#">Users</Nav.Link>
                </Nav> */}

                {/* Right Side */}
                <Nav className="ms-auto">
                    <NavDropdown className="notification" title={<FaBell/>} align="end">
                        <NavDropdown.Item href="#">
                            My Profile
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#">
                            Settings
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#">
                            Logout
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>

                <Nav>
                    <NavDropdown className="UserInfo" title={
                        <span className="">
                            <span><img src={ProfileImage} width={30} className="profileimage" /> Hi, Rabbani</span>
                        </span>
                    } align="end">
                        <NavDropdown.Item href="#">
                            My Profile
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#">
                            Settings
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#">
                            Logout
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default AdminTopNavbar;