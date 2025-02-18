import React from "react";
import ReactQueryProvider from "./context/ReactQueryProvider";
import { AuthProvider } from "./context/auth";
import Router from "./router";

const App = () => {
  return (
    <ReactQueryProvider>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </ReactQueryProvider>
  );
};

export default App;
