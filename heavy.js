const heavyNestedObject = {
    user: {
        id: 1,
        name: "John Doe", // printed
        details: {
            address: {
                street: "123 Main St",
                city: "Anytown",
                country: "USA"
            },
            contact: {
                email: "john.doe@example.com",
                phone: {
                    home: "555-555-5555",
                    work: "555-555-5556"
                }
            },
            preferences: {
                language: "English",
                timezone: "PST",
                notifications: { //printed 
                    email: true,
                    sms: false,
                    push: true
                }
            }
        }
    },
    posts: [
        {
            id: 1,
            title: "My First Post",
            content: "This is the content of my first post.",
            comments: [
                {
                    id: 1,
                    user: "Jane Doe",       //printed 
                    content: "Great post!"  //printed 
                },
                {
                    id: 2,
                    user: "Bob Smith",
                    content: "Thanks for sharing."
                }
            ]
        },
        {
            id: 2,
            title: "Another Post",
            content: "Here is some more content.",
            comments: [
                {
                    id: 3,
                    user: "Alice Johnson",
                    content: "Very informative."
                }
            ]
        }
    ],
    friends: [
        {
            id: 1,
            name: "Jane Doe",  // printed 
            mutualFriends: [
                {
                    id: 2,
                    name: "Alice Johnson"  //print 
                },
                {
                    id: 3,
                    name: "Bob Smith"
                }
            ]
        },
        {
            id: 2,
            name: "Bob Smith", //printed 
            mutualFriends: [
                {
                    id: 1,
                    name: "Jane Doe" //print
                }
            ]
        }
    ]
};

const finalOutput = []; 

finalOutput.push(heavyNestedObject.user.name);  // added user

const notifications = heavyNestedObject.user.details.preferences.notifications;
for (key in notifications) {
    finalOutput.push(`${key} : ${notifications[key]}`); // added notifications 
}

const postsArray = heavyNestedObject.posts; 
for (let key in postsArray) {
    const posts = postsArray[key]; 
    const postComents = posts.comments;

    for (let i in postComents) {
        const commentObjects = postComents[i];
        finalOutput.push(commentObjects.user);   // added user 
        finalOutput.push(commentObjects.content); // added comments
    }
}

const friends = heavyNestedObject.friends; 
for (let key in friends) {
    const friendName = friends[key].name;
    finalOutput.push(friendName);  // added friend name

    const mutualFriendsObjects = friends[key].mutualFriends;
    for (let i in mutualFriendsObjects) {
        const mutualFriends = mutualFriendsObjects[i].name;
        finalOutput.push(`Mutual friends: ${mutualFriends}`);
    }
}

finalOutput.forEach((element) => {
    console.log(element);
});