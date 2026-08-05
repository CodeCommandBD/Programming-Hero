
const updateBlogTags = (blogObj) => {

    // console.log(blogObj);
    

    if(!blogObj.title || !blogObj.tagsString){
        return "Invalid Data"
    }

    let {title, tagsString , newTags = []} = blogObj;

    let currentTags = tagsString.split(',')
   
    if(currentTags.includes('css')){
        let index = currentTags.indexOf('css')
        currentTags.splice(index, 1, 'tailwind')
    }
    
    let finalTag = [...currentTags , ...newTags]

    // console.log(finalTag);
    
    return {
       postTitle : title,
       allTags :  finalTag
    }
    
    

}

console.log(updateBlogTags({ title: "My UI Setup", tagsString: "html,css,js", newTags: ["react"] }));

console.log(updateBlogTags({ title: "Backend Basics", tagsString: "node,express", newTags: ["mongodb"] }));

console.log(updateBlogTags({ title: "Design Patterns", tagsString: "html,css" }));

console.log(updateBlogTags({ title: "Hello World" }));
