import { processTransaction } from './nubankCore';

export async function handleCodexPurchase(user, amount, codexEntryId) {
  return await processTransaction({
    user,
    amount,
    type: `codex_purchase:${codexEntryId}`
  });
}