function calculateRemainingMoney(
  totalMoney: number,
  cakeCost: number,
  donutCost: number
): number {

  const afterCake = totalMoney - cakeCost;

  
  if (afterCake < donutCost) return afterCake;

  const donutCount = Math.floor(afterCake / donutCost);

  return afterCake - donutCount * donutCost;
}