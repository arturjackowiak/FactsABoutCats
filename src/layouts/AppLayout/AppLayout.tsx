import { Outlet } from 'react-router-dom';

import { AppLayoutWrapper } from './AppLayout.style';
import Navigation from 'Components/Navigation/Navigation';

const AppLayout = () => (
  <AppLayoutWrapper>
    <Navigation />
    <Outlet />
  </AppLayoutWrapper>
);

export default AppLayout;
