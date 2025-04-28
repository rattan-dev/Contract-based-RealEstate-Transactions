// Import Web3.js
const Web3 = require('web3');

// Connect to Ethereum network (replace with your provider, such as Infura or local node)
const web3 = new Web3("https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID");

// Replace with your contract's ABI and deployed contract address
const contractABI = [
    // Paste your contract's ABI here (generated after compilation)
];
const contractAddress = "0x1ea3F55C63E73aE75E7C8bf5F6B2e9517B1aa4e9";

// Create a contract instance
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Function to add a new property
async function addProperty(propertyId, name, price, account) {
    try {
        const result = await contract.methods.addProperty(propertyId, name, price)
            .send({ from: account });
        console.log("Property added successfully:", result);
    } catch (error) {
        console.error("Error adding property:", error);
    }
}

// Function to get property details
async function getPropertyDetails(propertyId) {
    try {
        const details = await contract.methods.getPropertyDetails(propertyId).call();
        console.log(`Property Details: 
            Name: ${details.name}
            Owner: ${details.owner}
            Price: ${details.price}`);
    } catch (error) {
        console.error("Error fetching property details:", error);
    }
}

// Function to transfer ownership of a property
async function transferOwnership](#)

