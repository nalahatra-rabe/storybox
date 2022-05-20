import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { HelmetProvider } from "react-helmet-async";
import 'antd/dist/antd.css';

// custom font and style //
import "./assets/fonts/fontawsome/css/all.css";

// Routing config //
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Loader = React.lazy(() => import("./components/Loader/Loader"));

// Pages //
const Home = React.lazy(() => import("./pages/home/Home"));
const Dash = React.lazy(() => import("./pages/dashboard/Dash"));
const File = React.lazy(() => import("./pages/file/File"));
const NotFound = React.lazy(() => import("./pages/NotFound/NotFound"));
const Login = React.lazy(() => import("./components/Connexion/Connexion"));
const Explore = React.lazy(() => import("./pages/explore/Explore"));


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="/" element={<Home/>} />
            <Route path="*" element={<NotFound />} />
            <Route path="file" element={<File />} />
            <Route path="login" element={<Login />} />
            <Route path="dash" element={<Dash />} />
            <Route path="explore" element={<Explore />} />
            <Route path="loader" element={<Loader/>} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </Suspense>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 