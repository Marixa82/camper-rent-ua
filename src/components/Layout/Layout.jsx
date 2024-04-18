import {  Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import { StyledLink, Container, Header, Ul, Li } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <Header>
        <Ul>
          <Li>
            <StyledLink to="/">HomePage</StyledLink>
          </Li>
      </Ul>
      </Header>
      <main>
         <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
        <ToastContainer/>
      </main>
    </Container>
  );
};
export default Layout;