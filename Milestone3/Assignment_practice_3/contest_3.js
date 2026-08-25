function calculateRemainingMoney(
  totalMoney: number,
  cakeCost: number,
  donutCost: number
): number {
  const remainingMoney = totalMoney - cakeCost;

  const donutCount = Math.floor(remainingMoney / donutCost);

  const donutTotalCost = donutCount * donutCost;

  const result = remainingMoney - donutTotalCost;

  return result;
}