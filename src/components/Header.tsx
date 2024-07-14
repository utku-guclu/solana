import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-cyber-gray p-4 shadow-neon-blue">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <h1 className="text-2xl font-bold text-cyber-pink mb-2 md:mb-0">
          Crypto Explorer
        </h1>
        <nav className="flex items-center space-x-4">
          <Link
            to="/"
            className="text-cyber-blue hover:text-cyber-yellow transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            className="text-cyber-blue hover:text-cyber-yellow transition-colors duration-300"
          >
            Dashboard
          </Link>
          <WalletMultiButton className="bg-cyber-pink hover:bg-cyber-yellow text-cyber-black transition-colors duration-300" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
