import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import cv from "../assets/Sakar_Shrestha_CV_2024.pdf";

const PdfViewer = () => {
  return (
    <Worker
      workerUrl={`https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js`}
    >
      <div className="ss-resume">
        <Viewer fileUrl={cv} />
      </div>
    </Worker>
  );
};

export default PdfViewer;
