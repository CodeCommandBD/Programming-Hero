// A-09  —  Email Domain Analyzer (done)         🟡 Medium

// Concepts Used:  String · Split · Loop · Object 
// Scenario:  MailBox Pro, an email management system, wants to analyze a sentence containing email addresses. Write a function analyzeEmailDomains(text) that returns an object containing the total number of email addresses and the longest email domain (the part after @).
// "Invalid" if the input is not a string.
// Expected Output:
//    analyzeEmailDomains("Contact support@gmail.com admin@yahoo.com info@programminghero.com") 
// → { emailCount: 3, longestDomain: "programminghero.com" } 

// analyzeEmailDomains("Hello everyone!") 
//       → { emailCount: 0, longestDomain: "" }

// Hints:
//   1.  Use split(" ") to separate the sentence into words. 
//   2.  Check whether a word contains "@" using includes("@"), then split("@") to extract the domain and compare its length. 


 function analyzeEmailDomains(text){

    if(typeof text !== 'string'){
        return "Invalid"
    }


   let parts = text.split(" ")
//    console.log(parts);

   let gmailCount = 0;
   let longestDomain = ''

   for(let key of parts){
    if(key.includes('@')){
        let separateGmail = key.split('@')

        // console.log(separateGmail[1].length);
        

        if(separateGmail[1].length > longestDomain.length){
            // console.log("shanto");
            
            longestDomain = separateGmail[1]
        }
        gmailCount ++
    }
   }
//    console.log(longestDomain);
   
//    console.log(gmailCount);
   
   

   return {
    emailCount: gmailCount,
    longestDomain: longestDomain,
   }

 }
 console.log(analyzeEmailDomains("Contact support@gmail.com admin@yahoo.com info@programminghero.com") 
);
 