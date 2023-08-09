import { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import api from "utils/api.jsx";
import "./App.css";
import Header from "./components/layout/Header/Header.jsx";
import Footer from "./components/layout/Footer/Footer.jsx";
import store from "./state/store";
import { loadUser } from "./state/actions/userActions";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import ProtectedRoute from "./components/Route/ProtectedRoute.jsx";
import PaymentProcess from "./components/Cart/PaymentProcess.jsx";

function App() {
  const [stripeApiKey, setStripeApiKey] = useState("");

  const Home = lazy(() => import("./components/Home/Home.jsx"));
  const ProductDetails = lazy(() => import("./components/Product/ProductDetails.jsx"));
  const Products = lazy(() => import("./components/Product/Products.jsx"));
  const Search = lazy(() => import("./components/Product/Search.jsx"));
  const Contact = lazy(() => import("./components/layout/Contact/Contact"));
  const Cart = lazy(() => import("./components/Cart/Cart.jsx"));
  const Shipping = lazy(() => import("./components/Cart/Shipping.jsx"));
  const ConfirmOrder = lazy(() => import("./components/Cart/ConfirmOrder.jsx"));
  const Profile = lazy(() => import("./components/User/Profile.jsx"));
  const OrderSuccess = lazy(() => import("./components/Cart/OrderSuccess.jsx"));
  const MyOrders = lazy(() => import("./components/Order/MyOrders.jsx"));
  const OrderDetails = lazy(() => import("./components/Order/OrderDetails.jsx"));
  const AdminDashboard = lazy(() => import("./components/Admin/AdminDashboard.jsx"));
  const AllProductsList = lazy(() => import("./components/Admin/AllProductsList.jsx"));
  const NewProduct = lazy(() => import("./components/Admin/NewProduct.jsx"));
  const UpdateProduct = lazy(() => import("./components/Admin/UpdateProduct.jsx"));
  const OrderList = lazy(() => import("./components/Admin/OrderList.jsx"));
  const UpdateOrderProcess = lazy(() => import("./components/Admin/UpdateOrderProcess.jsx"));
  const UsersList = lazy(() => import("./components/Admin/UsersList.jsx"));
  const UpdateUser = lazy(() => import("./components/Admin/UpdateUser.jsx"));
  const AllProductReviews = lazy(() => import("./components/Admin/AllProductReviews.jsx"));
  const UpdateProfile = lazy(() => import("./components/User/UpdateProfile.jsx"));
  const UpdatePassword = lazy(() => import("./components/User/UpdatePassword.jsx"));
  const ForgotPassword = lazy(() => import("./components/User/ForgotPassword.jsx"));
  const ResetPassword = lazy(() => import("./components/User/ResetPassword.jsx"));
  const NotFound = lazy(() => import("./components/layout/NotFound/NotFound"));
  const AccountBox = lazy(() => import("./components/User/AccountBox/AccountBox")); 

  const getStripeKey = async () => {
    const { data } = await api.get("/api/v1/stripeapikey");
    setStripeApiKey(data.stripeApiKey);
  };

  useEffect(() => {
    store.dispatch(loadUser());

    getStripeKey();
  }, []);

  window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <Router>
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/product/:id" element={<ProductDetails />} />

          <Route exact path="/products" element={<Products />} />

          <Route exact path="/contact" element={<Contact />} />

          <Route exact path="/search" element={<Search />} />

          <Route path="/products/:keyword" element={<Products />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/shipping" element={<Shipping />} />

          <Route path="/order/confirm" element={<ConfirmOrder />} />

          {/* <ProtectedRoute exact path="/account" component={Profile} /> */}
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          {stripeApiKey && (
            <Route
              path="/process/payment"
              element={
                <Elements stripe={loadStripe(stripeApiKey)}>
                  <PaymentProcess />
                </Elements>
              }
            />
          )}
          {/* Login and sign up box experimental */}
          <Route exact path="/login" element={<AccountBox />} />

          {/* <Route exact path="/account" element={<Profile />} /> */}

          <Route exact path="/me/update" element={<UpdateProfile />} />

          <Route exact path="/password/update" element={<UpdatePassword />} />

          <Route exact path="/password/forgot" element={<ForgotPassword />} />

          <Route
            exact
            path="/password/reset/:token"
            element={<ResetPassword />}
          />

          <Route
            path="/success"
            element={
              <ProtectedRoute>
                <OrderSuccess />
              </ProtectedRoute>
            }
          />

          <Route
            path="/orders"
            element={
              <ProtectedRoute>
                <MyOrders />
              </ProtectedRoute>
            }
          />

          <Route
            path="/order/details/:id"
            element={
              <ProtectedRoute>
                <OrderDetails />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute isAdmin={true}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/products"
            element={
              <ProtectedRoute isAdmin={true}>
                <AllProductsList />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/product/new"
            element={
              <ProtectedRoute isAdmin={true}>
                <NewProduct />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/product/:id"
            element={
              <ProtectedRoute isAdmin={true}>
                <UpdateProduct />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/orders"
            element={
              <ProtectedRoute isAdmin={true}>
                <OrderList />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/order/:id"
            element={
              <ProtectedRoute isAdmin={true}>
                <UpdateOrderProcess />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/users"
            element={
              <ProtectedRoute isAdmin={true}>
                <UsersList />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/user/:id"
            element={
              <ProtectedRoute isAdmin={true}>
                <UpdateUser />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/reviews"
            element={
              <ProtectedRoute isAdmin={true}>
                <AllProductReviews />
              </ProtectedRoute>
            }
          />

          {/* Not found page will load on any other link the user lands on other than these above mentioned links */}
          <Route path="*" exact={true} element={<NotFound />} />
        </Routes>
      </Suspense>

      <Footer />
    </Router>
  );
}

export default App;
