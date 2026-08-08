const  countMentions = (caption) => {
    let words = caption.split(' ')

    let mentions =  words.filter((word)=>{
        // console.log(word);
        
        return word.startsWith("@")
    })


    let mentionWord = mentions.map((mention)=>{
        return mention.slice(1)
    }) 

    // console.log(mentionWord.length);
    

   
    let longest = ''

    for(let mention of mentionWord){
        if(mention.length > longest.length){
            longest = mention
        }
    }

    return {mentionCount: mentionWord.length, longestMention: longest}
    
}


console.log(countMentions("Great session today @rafi @sadia @karim"));
