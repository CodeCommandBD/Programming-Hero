
interface Pair<K, V> {
    key:K;
    value: V
}

const printPair = (item: Pair<string, number>) => {
    console.log({
        key: item.key,
        value: item.value
    });
    
}
printPair({key: "Score", value: 95});
