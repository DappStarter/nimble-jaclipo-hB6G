require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enter flat sugar fan release machine horn harvest lock slot gentle'; 
let testAccounts = [
"0x7a5a3d74df4949270e3f019870a67611f4559cb7ccf064d68ba3524a4078076a",
"0x79f79d86cadd058e66515bd11e33e923e020735852596afd153714c17fa391ae",
"0xb84837b6188b8e2fdfcd574adbc9177928776a66bd254869733b31997e670d7e",
"0x3bac2b3dcb7b5d14eb1fcd7b66698089883e4e83fcf2519138cc0d8c166b3d0d",
"0xcd110a779681eeefd66a123844f5026d9ba7af34cc6ec3c178fb6b0941129a94",
"0xf8a0bb7da0a9a9aecfe947bedbefe8ccd99728f0bb4b671c82e3cbdc47051f56",
"0xf5bea7b025d54900bc52594c2b04645b436cc88da47a61775d54009f016de37f",
"0xd76790b5b93f432f6ea7f5e5962a672a2bb7f37fc97efaec17f24576fe9ef10a",
"0x8894ed448bffa71adc234178a4346bca6e0f2f8fec4ff4f34511e25c50c6fdca",
"0xfd6356266e319633c53d98794a6f28d5fbb7fc1b771ad691ec3c4d3b7f211a9c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

