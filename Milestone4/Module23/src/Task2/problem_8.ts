interface LikeNotification {
    type: 'like';
    fromUser: string
}
interface SystemNotification {
    type: 'system';
    message: string
    actionUrl?: string
}

const  renderNotification = (notification: LikeNotification | SystemNotification):string => {
    if(notification.type === 'like'){
        return `${notification.fromUser} liked your post.`
    }

    if(notification.actionUrl){
        return `System: ${notification.message} (Tap to view)`;
    }
    
    return `System: ${notification.message}`
    
    
}

console.log(renderNotification({ type: "like", fromUser: "Aisha" }));
console.log(renderNotification({ type: "system", message: "Maintenance complete." }));
console.log(renderNotification({ type: "system", message: "Your subscription is expiring soon.", actionUrl: "/billing" }));
