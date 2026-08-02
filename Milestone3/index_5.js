// আপনাকে buildTeam নামের একটি ফাংশন তৈরি করতে হবে।

// শর্তসমূহ:
// ১. ফাংশনটি প্রথম প্যারামিটার হিসেবে নেবে teamName, দ্বিতীয়টি captain এবং এরপর যেকোনো সংখ্যক খেলোয়াড়ের নাম নেবে। (এখানে খেলোয়াড়দের নামগুলো ধরতে Rest অপারেটর ব্যবহার করুন)।
// ২. ফাংশনের ভেতরে প্রথমে একটি সাধারণ অবজেক্ট তৈরি করুন: const info = { teamName, captain };
// ৩. এরপর Spread অপারেটর ব্যবহার করে info অবজেক্টের সাথে খেলোয়াড়দের অ্যারেটি (ধরি নাম players) মার্জ করে একটি নতুন অবজেক্ট রিটার্ন করুন।

const buildTeam = (teamName, captain, ...playersName) => {
    const info = {
        teamName: teamName,
        captain: captain,
    }

    const merge = {...info, playersName: playersName}

    return merge

}

console.log(buildTeam("Tigers", "Shakib", "Mushfiq", "Mahmudullah", "Taskin"));