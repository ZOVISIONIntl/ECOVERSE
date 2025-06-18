export function createUserWallet(userId) {
  const wallet = {
    id: userId,
    balance: 0,
    transactions: [],
    createdAt: new Date().toISOString(),
  };

  console.log("Wallet Created:", wallet);
  return wallet;
}