import { processTransaction } from './NuBank_Core/nubankCore';
import { publishContent } from './EraScript/publishHandler';
import { createUserWallet } from './NuBank_Core/nubankWalletInit';

export async function zoverseTrigger(command, data) {
  switch (command) {
    case "publish":
      return await publishContent(data);
    case "donate":
      return await processTransaction({ user: data.user, amount: data.amount, type: "donation" });
    case "wallet":
      return createUserWallet(data.userId);
    default:
      throw new Error("Invalid ZoVerse Command");
  }
}
