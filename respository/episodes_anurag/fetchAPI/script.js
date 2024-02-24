fetch('https://dummyjson.com/users')
    .then((response) => {
        return response.json();
    })
    .then((userData) => {
        return fetch(
            `https://dummyjson.com/posts/user/${userData.users[2].id}`
        );
    })
    .then((response) => {
        return response.json();
    })
    .then((userPost) => {
        return fetch(
            `https://dummyjson.com/comments/post/${userPost.posts[1].id}`
        );
    })
    .then((response) => {
        return response.json();
    })
    .then((userPostComments) => {
        return fetch(
            `https://dummyjson.com/users/${userPostComments.comments[1].user.id}`
        );
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data.firstName);
    })
    .catch((err) => {
        console.log("Failed to load data from the server.");
    })