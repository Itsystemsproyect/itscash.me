const { Transaction } = require("@solana/web3.js");
const { Keypair, Connection, PublicKey } = require("@solana/web3.js");


const SPLToken = require("@solana/spl-token");

const secret = process.env.REACT_APP_SECRET_KEY.split(',').map(Number);


  
  const ALICE_KEY = Keypair.fromSecretKey(
    Uint8Array.from(secret)
  );
  
  

  const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
  const CONNECTION = new Connection(API_ENDPOINT);
  const ALICE = new PublicKey('AwxKYJGFQZKiwZK8oUpiBmK8fnmv91bRqk24sUbx46bq')
  const ALICE_TOKEN_ADDRESS_1 = new PublicKey("45A2eWHDaYyGRdnoPSL1p88eM9wmwqB6DxxeYvXg2BJv")  
  const ALICE_TOKEN_ADDRESS_2 = new PublicKey("8tiVQpG29Rcb2Xt8355k4iDAfoLq1LJPJi7gwVxGb19p")
  

const factor = 1000000000;

// token transfer

async function sendSplToken(amount) {
  let tx = new Transaction();
  tx.add(
    SPLToken.Token.createTransferInstruction(
      SPLToken.TOKEN_PROGRAM_ID, // always token program address
      ALICE_TOKEN_ADDRESS_1, // from (token account public key)
      ALICE_TOKEN_ADDRESS_2, // to (token account public key)
      ALICE_KEY.publicKey, // from's authority
      [], // pass signer if from's mint is a multisig pubkey
      amount * factor// amount
    )
  );
  tx.feePayer = ALICE;

  console.log(`txhash: ${await CONNECTION.sendTransaction(tx, [ALICE_KEY, ALICE_KEY])}`);
}




module.exports = sendSplToken;