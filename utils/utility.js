import { ABI, ADDRESS } from "./globals";
import Web3 from "web3";

// Fetching WEB3 Provider

export const loadWeb3 = async () => {
  try {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  } catch (err) {
    window.alert("Trouble connecting to you web3 browser...");
  }
};

// General loading from the blockchain and instantiating the contract

export const loadBlockchainData = async () => {
  const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
  this.setState({ account: this.context.account });
  const contract = new web3.eth.Contract(ABI, ADDRESS);
  this.setState({ contract });
  const isExists = await contract.methods
    .isUserExists(this.state.account)
    .call();
  this.setState({ isExist: isExists });
};
