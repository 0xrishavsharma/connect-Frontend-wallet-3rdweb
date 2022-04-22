import { ThirdwebProvider } from "@3rdweb/react";
import { Home } from "./components/Home/Home";
import React from "react";
import './App.scss'

const connectors = { 
  injected: {},
  walletlink: {
      appName: "thirdweb - demo", url: "https://thirdweb.com", darkMode: false, },
  walletconnect: {}
    };
const supportedChainIds = [1, 4, 137];

export default function App(){

  return(
    <ThirdwebProvider connectors={connectors} supportedChainIds={supportedChainIds}>
        <Home />
    </ThirdwebProvider>
    
  );
}