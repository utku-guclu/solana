import axios from "axios";

const COINCAP_API_URL = "https://api.coincap.io/v2";
const BLOCKCHAIN_INFO_API_URL = "https://api.blockchain.info";

/*---------------
 COINCAP API DATA
 BLOCKCHAIN API DATA
----------------*/

export const fetchCoinCapData = async () => {
  try {
    const response = await axios.get(`${COINCAP_API_URL}/assets`, {
      params: {
        limit: 10,
      },
    });
    console.log("coincap data", response.data.data);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching API data:", error);
    throw new Error(
      "Failed to fetch cryptocurrency data. Please try again later.",
    );
  }
};

export const fetchBlockchainData = async () => {
  try {
    const response = await axios.get(`${BLOCKCHAIN_INFO_API_URL}/stats`);
    console.log("blockchain data", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching blockchain data:", error);
    throw new Error("Failed to fetch blockchain data. Please try again later.");
  }
};
