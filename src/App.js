import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Component/Home";
/* import { About } from './Component/About' */
import { Navbar } from "./Component/Navbar";
import { OrderSummery } from "./Component/OrderSummery";
import { NoMatch } from "./Component/NoMatch";
import { Product } from "./Component/Product.jsx";
import { FeatureProduct } from "./Component/FeatureProduct";
import { NewProduct } from "./Component/NewProduct";
import { User } from "./Component/User";
import { UserDeatil } from "./Component/UserDeatil";
import { Admin } from "./Component/Admin";
import { Login } from "./Component/Login";
import { Profile } from "./Component/Profile";
import { AuthProvider } from "./Component/auth";
import { RequireAuth } from "./Component/RequireAuth";
const LazyAbout = React.lazy(() => import("./Component/About"));

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback="Loading...">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="order-summery" element={<OrderSummery />} />
        <Route path="product" element={<Product />}>
          <Route index element={<FeatureProduct />} />
          <Route path="features" element={<FeatureProduct />} />
          <Route path="newProduct" element={<NewProduct />} />
        </Route>
        <Route path="user" element={<User />}>
          <Route path=":userId" element={<UserDeatil />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="profile" element= {
        <RequireAuth>
        <Profile />
        </RequireAuth>
        }
        />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
