const countMentions = (mention) => {
    let individualWord = mention.split(' ')
    // console.log(individualWord);

    
    let filterWord = individualWord.filter((word)=>{
        return word.includes("@")
    })

    let longestMention = ''

    for(let word of filterWord){       
        let removeMention =  word.slice(1)

       if(longestMention.length < removeMention.length){
        longestMention = removeMention
       }
    }
    
    return {
        mentionCount : filterWord.length,
        longestMention: longestMention
    }
        
}

console.log(countMentions("Great session today @rafi @sadia @karim"));

