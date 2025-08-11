function comments(arr) {

    let obj = {};
    let userSet = new Set();
    let articleSet = new Set();
    let commentMap = new Map();

    for (let user of arr) {

        if (user.includes('user')) {

            let [, userName] = user.split(' ');
            userSet.add(userName);

        } else if (user.includes('article')) {

            let [, articleName] = user.split(' ');
            articleSet.add(articleName);

        } else {

            let userObj = {};
            let [posts, comment] = user.split(': ');
            let [userName, articleName] = posts.split(' posts on ');
            let [commentTitle, commentContent] = comment.split(', ');

            if (userSet.has(userName) && articleSet.has(articleName)) {

                commentMap.set(commentTitle, commentContent);
                userObj[userName] = commentMap;

                if (!obj[articleName]) {

                    obj[articleName] = [];

                }

                obj[articleName].push(userObj);
                commentMap = new Map();

            }
        }
    }

    let sorted = Object.entries(obj)
        .sort((a, b) => {
            if (b[1].length !== a[1].length) {

                return b[1].length - a[1].length;

            }

            return a[0].localeCompare(b[0]);

        });

    for (let [articleName, commentsArr] of sorted) {

        console.log(`Comments on ${articleName}`);

        commentsArr
            .sort((a, b) => Object.keys(a)[0].localeCompare(Object.keys(b)[0]))
            .forEach(commentObj => {
                let userName = Object.keys(commentObj)[0];
                let commentMap = commentObj[userName];

                for (let [title, content] of commentMap) {

                    console.log(`--- From user ${userName}: ${title} - ${content}`);

                }
            });

    }
}
comments(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books', 'article Movies', 'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them', 'uSeR4 posts on Movies: I also like movies, I really do', 'someUser posts on Shopping: title, I go shopping every day', 'someUser posts on Movies: Like, I also like movies very much']);
comments(['user Mark', 'Mark posts on someArticle: NoTitle, stupidComment', 'article Bobby', 'article Steven', 'user Liam', 'user Henry', 'Mark posts on Bobby: Is, I do really like them', 'Mark posts on Steven: title, Run', 'someUser posts on Movies: Like']);