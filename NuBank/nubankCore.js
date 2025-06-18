export async function processTransaction(data) {
  const { user, amount, type } = data;

  if (!user || !amount || !type) {
    throw new Error("Missing transaction fields.");
  }

  // Log transaction
  const transaction = {
    user,
    amount,
    type,
    timestamp: new Date().toISOString(),
  };

  console.log("Transaction Processed:", transaction);

  // TODO: Add logic to store to database or sync with smart contract
  return transaction;
}