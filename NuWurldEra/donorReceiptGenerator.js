export function generateReceipt(donor, amount) {
  const receipt = {
    donor,
    amount,
    issued: new Date().toISOString(),
    reference: `NUWUR-REC-${Math.floor(Math.random() * 1000000)}`,
    taxDeductible: true,
  };

  console.log("Receipt Generated:", receipt);
  return receipt;
}