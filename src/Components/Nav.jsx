import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './comp.css'

function Nav() {
  return (
    <Navbar className="nav">
      <Container>
        <Navbar.Brand href="#home">Resume Generator</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <Link to="/Form">
          <button>Create New Resume</button>
        </Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;