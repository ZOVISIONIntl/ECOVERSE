export function handleIntakeSubmission(data) {
  const { name, role, contact, motivation } = data;
  if (!name || !role || !contact) throw new Error("Missing required intake fields.");

  const profile = {
    id: `${role}_${Date.now()}`,
    name,
    role,
    contact,
    motivation,
    intakeDate: new Date().toISOString(),
  };

  console.log("Intake Submitted:", profile);
  return profile;
}