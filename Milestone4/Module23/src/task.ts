class ChaShop {
  owner: string;
  sold: string[] = [];

  constructor(owner: string) {
    this.owner = owner;
  }

  sell(item: string): void {
    this.sold.push(item);
  }

  count(): number {
    return this.sold.length;
  }

  // Try adding: busiestItem(): string
  // It should return whichever item was sold most.

  busiestItem(): string {
    const counts: { [key: string]: number } = {};
    let maxCount = 0;
    let busiest = "";
    for (let item of this.sold) {
      counts[item] = (counts[item] || 0) + 1;
      if (counts[item] > maxCount) {
        maxCount++;
        busiest = item;
      }
    }

    return busiest;
  }
}

const shop = new ChaShop("Mama");

// The constructor already ran, once.
// Now the methods, as many times as you like:
shop.sell("cha");
shop.sell("cha");
shop.sell("biscuit");

console.log(shop.owner, "sold:", shop.count());
console.log("Busiest item: ", shop.busiestItem());
