export function calculateMonthlyNeeded(
  targetAmount: number,
  currentAmount: number,
  targetDate?: Date | null
) {
  if (!targetDate || currentAmount >= targetAmount) {
    return 0;
  }

  const today = new Date();
  const monthsRemaining =
    (targetDate.getFullYear() - today.getFullYear()) * 12 +
    (targetDate.getMonth() - today.getMonth()) +
    (targetDate.getDate() >= today.getDate() ? 0 : -1);

  if (monthsRemaining <= 0) {
    return 0;
  }

  return Math.max(
    0,
    Math.ceil((targetAmount - currentAmount) / monthsRemaining)
  );
}
