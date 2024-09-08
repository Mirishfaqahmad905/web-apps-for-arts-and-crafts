
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SideBar_user from './SideBar_user';

const SideBarRoute = () => {
  return (
    <>
      <BrowserRouter>
        <SideBar_user />
        <Routes>
          <Route path="/product_user" element={<userProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default SideBarRoute;
