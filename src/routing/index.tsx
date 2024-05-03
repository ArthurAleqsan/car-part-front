import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

// import { useSelector } from 'react-redux';
// import { RootState } from 'src/types/store-types';
import AnonimusRoutes from './AnonimusRoutes';
import AuthorizedRoutes from './AuthorizedRoutes';

const Router: FC = () => {
  // const { user } = useSelector((state: RootState) => state.user);
  // TO DO check user 
  const user = {};
  return <BrowserRouter>{user ? <AuthorizedRoutes /> : <AnonimusRoutes />}</BrowserRouter>;
};

export default Router;
