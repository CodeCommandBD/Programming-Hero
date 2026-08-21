type Tier  = "free" | 'pro' | 'premium'

const canAccessOfflineMode = (tier: Tier):boolean => {
    if(tier === 'free'){
        return false
    }else if(tier === "pro"){
        return true
    }
return true
}

console.log(canAccessOfflineMode("free"));
console.log(canAccessOfflineMode("premium"));
console.log(canAccessOfflineMode("pro"));


