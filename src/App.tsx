import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";

/** Theme */
// import { CyberpunkTheme } from "./styles/CyberpunkTheme";
import theme from "./theme/theme";

/** Components */
import Header from "./components/Header";

/** Contexts */
import { DataProvider } from "./context/DataContext";

/** Pages */
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

require("@solana/wallet-adapter-react-ui/styles.css");

const App: React.FC = () => {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = clusterApiUrl(network);

  const wallets = [new PhantomWalletAdapter()];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <DataProvider>
              <Router>
                <div className="App">
                  <Header />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                  </Routes>
                </div>
              </Router>
            </DataProvider>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </ThemeProvider>
  );
};

export default App;
