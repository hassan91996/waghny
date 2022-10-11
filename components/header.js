import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';


function Header() {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" className='navbar' >
      <Container>
        <Navbar.Brand href="#home">
          <img src="/images/logo.png" className="img-fluid"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link href="/" passHref ><Nav.Link>الرئيسية</Nav.Link></Link>
            <Link href="/sign-up" passHref><Nav.Link>اشتراك</Nav.Link></Link>
            <Link href="/login" passHref><Nav.Link>دخول</Nav.Link></Link>
            <Link href="/help" passHref><Nav.Link>المساعدة</Nav.Link></Link>
            <Link href="/contact-us" passHref><Nav.Link>اتصل بنا</Nav.Link></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;