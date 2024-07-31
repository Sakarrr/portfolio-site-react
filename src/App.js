import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import PdfViewer from "./components/pdfViewer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route
          path="/pdf-viewer"
          element={<PdfViewer file=".assets/Sakar_Shrestha_CV_2024.pdf" />}
        />
      </Routes>
      {/*<ToastContainer />*/}
      {/*<Footer />*/}
    </Router>
  );
};

export default App;
