import { Container, Header, Avatar, Content, Footer, Sidebar } from 'rsuite';

export interface BasicPageProps {
  title: string;
  icon: string;
}

export const BasicPage = ({ title, icon }: BasicPageProps) => {
  return (
    <Container>
      <Sidebar>Sidebar</Sidebar>
      <Container>
        <Header>
          <h1>{title}</h1>
          <Avatar src={icon} />
        </Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Container>
    </Container>
  );
};

export default BasicPage;
