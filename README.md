# Solana Dashboard Explorer

## Overview

Solana Dashboard Explorer is a React-based web application that provides real-time insights into the Solana blockchain and cryptocurrency market. It features a user-friendly interface for viewing wallet information, requesting airdrops, and displaying various blockchain statistics and cryptocurrency data.

[Demo](https://youtu.be/EEBiAJKVjHU)

## Features

- Real-time Solana wallet balance display
- Airdrop request functionality for testnet
- Visualization of wallet balance history
- Display of top cryptocurrencies and their current prices
- Bitcoin network statistics
- Responsive design for desktop and mobile devices

## Technologies Used

- React
- TypeScript
- Material-UI
- Recharts for data visualization
- Solana Web3.js
- Solana Wallet Adapter

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

## Installation

1. Clone the repository:

git clone https://github.com/your-username/solana-dashboard-explorer.git

2. Navigate to the project directory:

cd solana-dashboard-explorer

3. Install the dependencies:

npm install

## Configuration

1. Create a `.env` file in the root directory of the project.
2. Add the following environment variables:

REACT_APP_SOLANA_RPC_HOST=https://api.testnet.solana.com

## Running the Application

To start the development server:

npm start

The application will be available at `http://localhost:3000`.

## Building for Production

To create a production build:

npm run build

The built files will be available in the `build` directory.

## Usage

1. Connect your Solana wallet using the "Connect Wallet" button in the header.
2. View your wallet balance and address on the dashboard.
3. Request an airdrop of SOL tokens (on testnet) using the "Request Airdrop" button.
4. Explore the charts showing your wallet balance history and top cryptocurrency prices.
5. View Bitcoin network statistics in the dedicated section.

## Contributing

Contributions to the Solana Dashboard Explorer are welcome. Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or feedback, please open an issue on the GitHub repository.
