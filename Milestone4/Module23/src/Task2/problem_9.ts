type Action =
  | { type: "upload"; sizeMB: number }
  | { type: "delete"; sizeMB: number };

const updateStorageUsage = (currStorage: number, action: Action): number => {
  if (action.type === "upload") {
    return currStorage + action.sizeMB;
  } else {
    let remainingUsage = currStorage - action.sizeMB;

    return Math.max(0, remainingUsage);
  }
};

console.log(updateStorageUsage(2000, { type: "upload", sizeMB: 500 }));

console.log(updateStorageUsage(300, { type: "delete", sizeMB: 1000 }));
