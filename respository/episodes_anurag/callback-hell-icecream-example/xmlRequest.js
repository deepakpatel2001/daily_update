function apiCalling(method, url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
        callback(xhr.response);
    });
    xhr.open(method, url);
    xhr.send();
}

apiCalling('GET', 'https://dummyjson.com/users', (userData) => {
    apiCalling(
        'GET',
        `https://dummyjson.com/posts/user/${userData.users[2].id}`,
        (userPost) => {
            apiCalling(
                'GET',
                `https://dummyjson.com/comments/post/${userPost.posts[1].id}`,
                (userPostComments) => {
                    // console.log(userPostComments.comments[1].user.id);
                    apiCalling(
                        'GET',
                        `https://dummyjson.com/users/${userPostComments.comments[1].user.id}`,
                        (singleUserByComment) => {
                            console.log(singleUserByComment.firstName);
                        }
                    );
                }
            );
        }
    );
});-
