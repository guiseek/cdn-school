import { Container, Header, Content, Footer, Navbar, Nav } from 'rsuite';
import Global from '@rsuite/icons/Global';
import Gear from '@rsuite/icons/Gear';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export interface NavbarPageProps {
  title: string;
  icon: string;
}

const StyledNavbarPage = styled(Container)``;

export function NavbarPage({ title, icon }: NavbarPageProps) {
  return (
    <StyledNavbarPage>
      <Header>
        <Navbar appearance="inverse">
          <Navbar.Brand>
            <Link to="/">
              <img src={icon} alt={title} />
            </Link>
          </Navbar.Brand>
          <Navbar>
            <Nav>
              <Nav.Item icon={<Global />}>Home</Nav.Item>
              <Nav.Item>News</Nav.Item>
              <Nav.Item>Products</Nav.Item>
              <Nav.Menu title="About">
                <Nav.Item>Company</Nav.Item>
                <Nav.Item>Team</Nav.Item>
                <Nav.Item>Contact</Nav.Item>
              </Nav.Menu>
            </Nav>
            <Nav pullRight>
              <Nav.Item icon={<Gear />}>Settings</Nav.Item>
            </Nav>
          </Navbar>
        </Navbar>
      </Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </StyledNavbarPage>
  );
}

export default NavbarPage;
