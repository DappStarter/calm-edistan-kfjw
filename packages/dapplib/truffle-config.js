require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave food film cruise soccer method hotel light army gate'; 
let testAccounts = [
"0xd858917d3ab475f94ee9d79841a8df12edd9f333ad73b7131d0ab7dde3623fe0",
"0x7a6c0e87af258812731da4ae3a93011ed731abbe20a47c6d28c4d68130586bca",
"0x8dc0e385ac7885cc99fe55f7644d9174090eea3165651cfb7d229c4297c79cfa",
"0x30deb0e5fd62c0078a746dcbd16dc42ef0ad94c563fe4c3cd9b7f36deaf7fecf",
"0x6e65ec5363f0e79d916a6e72d2f4f8f4d2f985fe416b3dde10e03d270d5d6fa7",
"0x45784ab974e77bfc17da2f0f68bd8538c09a79ccb69c717fef0f636d8d3fa385",
"0x754e5178572b1055125e1f1cde0f43343e5bee48edce65a5d073e87b11ff88cd",
"0xa0666e1ea631f8e1c1b9531112179f0c1883a987c086e71ca7873765359e9d95",
"0xe7ec01a7ac03095a127917d2567c059143d3570f7eeee95fb0fbb4386e803887",
"0xe4b17dc17167720338eb05fe851f24e2d1722e7715c5d24a3d910e8ebe665d7f"
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

