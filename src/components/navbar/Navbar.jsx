import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function VerticalNavbar() {
  return (
    <Navbar bg="light" variant="light" expand="lg" className="flex-column" style={{height:"100vh"}}>
      <Navbar.Brand href="#home">Folders</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="flex-column justify-content-start">
          <Link to='/inbox' >Inbox</Link>
          <Link to= '/spam'>Spam</Link>
          <Link to ='/deletedItems'>deleteItems</Link>
        </Nav>
    </Navbar>
  );
}

export default VerticalNavbar;