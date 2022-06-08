import { useState, CSSProperties, MouseEventHandler } from 'react';
import {
  Gear,
  Growth,
  Dashboard,
  ArrowLeft,
  ArrowRight,
  AdvancedAnalytics,
} from '@rsuite/icons';
import {
  CustomProvider,
  Container,
  Content,
  Sidenav,
  Sidebar,
  Header,
  Navbar,
  Nav,
} from 'rsuite';

const headerStyles: CSSProperties = {
  padding: 18,
  fontSize: 16,
  height: 56,
  background: '#34c3ff',
  color: ' #fff',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
};

export interface NavToggleProps {
  onChange: MouseEventHandler;
  expand: boolean;
}

const NavToggle = ({ expand, onChange }: NavToggleProps) => {
  return (
    <Navbar appearance="subtle" className="nav-toggle">
      <Navbar>
        <Nav>
          <Nav.Menu placement="topStart" trigger="click">
            <Nav.Item>Ajuda</Nav.Item>
            <Nav.Item>Configurações</Nav.Item>
            <Nav.Item>Encerrar sessão</Nav.Item>
          </Nav.Menu>
        </Nav>

        <Nav pullRight>
          <Nav.Item
            onClick={onChange}
            style={{ width: 56, textAlign: 'center' }}
          >
            {expand ? <ArrowLeft /> : <ArrowRight />}
          </Nav.Item>
        </Nav>
      </Navbar>
    </Navbar>
  );
};

export interface SidebarPageProps {
  title: string;
  theme: 'dark' | 'light';
}

export function SidebarPage(props: SidebarPageProps) {
  const { title, theme = 'dark' } = props;

  const [expand, setExpand] = useState(true);

  return (
    <CustomProvider theme={theme}>
      <Container>
        <Sidebar
          style={{ display: 'flex', flexDirection: 'column' }}
          width={expand ? 260 : 56}
          collapsible
        >
          <Sidenav.Header>
            <div style={headerStyles}>
              <AdvancedAnalytics style={{ fontSize: 20 }} />
              <span style={{ marginLeft: 12 }}> {title}</span>
            </div>
          </Sidenav.Header>
          <Sidenav
            expanded={expand}
            defaultOpenKeys={['3']}
            appearance="subtle"
          >
            <Sidenav.Body>
              <Nav>
                <Nav.Item eventKey="1" active icon={<Dashboard />}>
                  Dashboard
                </Nav.Item>
                <Nav.Item eventKey="2" icon={<Growth />}>
                  Repositórios
                </Nav.Item>
                <Nav.Menu
                  eventKey="3"
                  trigger="hover"
                  title="Conteúdo"
                  icon={<Growth />}
                  placement="rightStart"
                >
                  <Nav.Item eventKey="3-1">HTML</Nav.Item>
                  <Nav.Item eventKey="3-3">CSS</Nav.Item>
                  <Nav.Item eventKey="3-4">JavaScript</Nav.Item>
                  <Nav.Item eventKey="3-2">TypeScript</Nav.Item>
                  <Nav.Item eventKey="3-5">Design Patterns</Nav.Item>
                </Nav.Menu>
                <Nav.Menu
                  eventKey="4"
                  trigger="hover"
                  title="Projetos"
                  icon={<Growth />}
                  placement="rightStart"
                >
                  <Nav.Item eventKey="4-5">Versões</Nav.Item>
                  <Nav.Item eventKey="4-1">Apps</Nav.Item>
                  <Nav.Item eventKey="4-2">Sites</Nav.Item>
                  <Nav.Item eventKey="4-3">POCs</Nav.Item>
                  <Nav.Item eventKey="4-4">Tags</Nav.Item>
                </Nav.Menu>
              </Nav>
            </Sidenav.Body>
          </Sidenav>
          <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
        </Sidebar>

        <Container>
          <Header>
            <h2>Título da página</h2>
          </Header>
          <Content>Conteúdo</Content>
        </Container>
      </Container>
    </CustomProvider>
  );
}

export default SidebarPage;
