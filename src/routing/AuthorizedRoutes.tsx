import { FC } from "react";
import { Route, Routes } from "react-router-dom";

const AuthorizedRoutes: FC = () => {

  return (
      <Routes>
        <Route path="*" element={<div>not found</div>} />
      </Routes>
  );
};

export default AuthorizedRoutes;
