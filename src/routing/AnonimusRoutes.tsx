import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { EnumRoutePaths } from 'src/configs/routes';

const AnonimusRoutes: FC = () => {
  return (
      <Routes>
        <Route path={EnumRoutePaths.BASE} element={<div/>} />
        <Route path="*" element={<div>404 not found</div>} />
      </Routes>
  );
};

export default AnonimusRoutes;
