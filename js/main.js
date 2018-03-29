function toHidePost() {
    var post;
    post = document.getElementById('postId');

    if (post.hasAttribute('hidden')) {
        console.log('was hidden');
        post.removeAttribute('hidden');
    }
    else {
        console.log('was not hidden');
        post.setAttribute('hidden','hidden');
    }
    console.log('element: ', post);
}

function toAddPost() {
    let defaultPost = document.getElementById('postId');
    console.log('new post: ', defaultPost);

    let newPost = defaultPost.cloneNode(true);
    newPost.setAttribute('id','post_01');
    console.log('new post: ', newPost);
    let parent = defaultPost.parentNode;
    parent.appendChild(newPost);
    //newPost.insertBefore(defaultPost);
}

