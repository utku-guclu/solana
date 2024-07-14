import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { fetchCoinCapData, fetchBlockchainData } from "../api/dataFetcher";

interface CoinData {
  id: string;
  rank: string;
  symbol: string;
  coinName: string;
  priceUsd: string;
  marketCapUsd: string;
}

interface BlockchainData {
  market_price_usd: number;
  hash_rate: number;
  total_fees_btc: number;
  n_btc_mined: number;
  n_tx: number;
  n_blocks_mined: number;
  minutes_between_blocks: number;
  totalbc: number;
  n_blocks_total: number;
  estimated_transaction_volume_usd: number;
  blocks_size: number;
  miners_revenue_usd: number;
  nextretarget: number;
  difficulty: number;
  estimated_btc_sent: number;
  miners_revenue_btc: number;
  total_btc_sent: number;
  trade_volume_btc: number;
  trade_volume_usd: number;
}

interface DataContextType {
  coinData: CoinData[] | null;
  blockchainData: BlockchainData | null;
  loading: boolean;
  error: string | null;
}

const DataContext = createContext<DataContextType | null>(null);

export const DataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [coinData, setCoinData] = useState<CoinData[] | null>(null);
  const [blockchainData, setBlockchainData] = useState<BlockchainData | null>(
    null,
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [apiResult, blockchainResult] = await Promise.all([
          fetchCoinCapData().catch((err) => {
            console.error("CoinCap API Data Error:", err);
            setError(err.message);
            return null;
          }),
          fetchBlockchainData().catch((err) => {
            console.error("Blockchain Data Error:", err);
            setError(err.message);
            return null;
          }),
        ]);

        if (apiResult) setCoinData(apiResult);
        if (blockchainResult) setBlockchainData(blockchainResult);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("An unexpected error occurred. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  return (
    <DataContext.Provider value={{ coinData, blockchainData, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
