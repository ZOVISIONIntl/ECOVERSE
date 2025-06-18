export async function routeFundsToProjects({ amount, source, purpose }) {
  const log = {
    timestamp: new Date().toISOString(),
    from: source,
    to: "NuWurldEra",
    purpose,
    amount,
  };
  console.log("Fund Routed:", log);
  return log;
}