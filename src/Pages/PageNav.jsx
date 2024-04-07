import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../Components/comp.css'

function PageNav() {
  return (
    <Navbar className="nav">
      <Container>
        <Navbar.Brand href="#home">Resume Generator</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <Link to="/">
          <button>Home</button>
        </Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PageNav;