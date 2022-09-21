import {Container, Navbar, Nav} from "react-bootstrap"
import CartWidget from "./CartWidget";


const NavBar = () => {
  return (  
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Victor Valmar - Carpinteria</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Muebles de Interior</Nav.Link>
            <Nav.Link href="#pricing">Muebles de Exterior</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
  );
}
 
export default NavBar;