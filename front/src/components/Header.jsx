import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Header = () => (
  <Navbar className="bg-danger mb-4 d-flex">
    <Container>
      <Navbar.Brand href="/" className="text-light">
        React Test App
      </Navbar.Brand>
    </Container>
  </Navbar>
);

export default Header;
