function apiCalling(method, url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    const prom = new Promise((resolve, reject) => {
        xhr.addEventListener('load', () => {
            resolve(xhr.response);
        });

        xhr.addEventListener('load', () => {
            reject(xhr.response);
        });
    });

    xhr.open(method, url);
    xhr.send();
    return prom;
}

apiCalling('GET', 'https://dummyjson.com/users')
    .then((userData) => {
        return apiCalling(
            'GET',
            `https://dummyjson.com/posts/user/${userData.users[2].id}`
        );
    })
    .catch((err) => {
        console.log('you heated wrong url');
    })
    .then((userPost) => {
        return apiCalling(
            'GET',
            `https://dummyjson.com/comments/post/${userPost.posts[1].id}`
        );
    })
    .then((userPostComments) => {
        return apiCalling(
            'GET',
            `https://dummyjson.com/users/${userPostComments.comments[1].user.id}`
        );
    })
    .then((singleUserByComment) => {
        console.log(singleUserByComment.firstName);
    });
