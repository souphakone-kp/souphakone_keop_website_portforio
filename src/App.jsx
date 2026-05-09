import React from "react";
import "./App.css";
import RoutesApp from "./routes/AllRoute";
import {
  LanguageProvider,
  useLanguage,
} from "./context/LanguageContext.jsx";

function AppContent() {
  const { language } = useLanguage();

  return <RoutesApp key={language} />;
}

export default function App() {
  return (
    <React.StrictMode>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </React.StrictMode>
  );
}