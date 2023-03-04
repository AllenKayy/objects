// question 1

function instagramPost (authorHandle, content, imageLink, views, likes) {
    this.authorHandle = authorHandle;
    this.content = content;
    this.imageLink = imageLink;
    this.views = views;
    this.likes = likes;
    }

// question 2

const igPost1 = new instagramPost ('George', "It's a beautiful day", 'https://post1.com/image.jpg', 3000, 2500);

const igPost2 = new instagramPost ('Ini', 'Delicious meal at a new restaurant', 'https://post2.com/image.jpg', 4000, 3800);


console.log(igPost1);
console.log(igPost2); 



