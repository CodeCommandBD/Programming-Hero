// নিচে একটি রেজাল্ট শিটের অ্যারে দেওয়া আছে (যেখানে সবচেয়ে বেশি নম্বর প্রথমে আছে):


// JavaScript
// const marks = [98, 85, 76, 65, 55];


// আপনার কাজ:
// Destructuring এবং Rest অপারেটর ব্যবহার করে প্রথম নম্বরটিকে highest নামের একটি ভেরিয়েবলে রাখুন এবং বাকি নম্বরগুলোকে otherMarks নামের একটি অ্যারেতে রাখুন।

// আশা করা আউটপুট:
// console.log(highest) প্রিন্ট করলে 98 আসবে এবং console.log(otherMarks) প্রিন্ট করলে [ 85, 76, 65, 55 ] আসবে।

const marks = [98, 85, 76, 65, 55];

const [highest, ...otherMarks] = marks

console.log(highest);
console.log(otherMarks);
