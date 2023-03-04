// question 1

// instagramPost constructor function
function instagramPost (authorHandle, content, imageLink, views, likes) {
    this.authorHandle = authorHandle;
    this.content = content;
    this.imageLink = imageLink;
    this.views = views;
    this.likes = likes;
    }

// question 2

// create instagramPost objects
const igPost1 = new instagramPost ('Somto', "It's a beautiful day", 'https://post1.com/image.jpg', 3000, 2500);

const igPost2 = new instagramPost ('Ini', 'Delicious meal at a new restaurant', 'https://post2.com/image.jpg', 4000, 3800);


console.log(igPost1);
console.log(igPost2); 

// question 3

// createPerson() factory function
function createPerson(name, age, location) {
    return {
        name:name,
        age:age,
        location:location
    };
}

// Create an object representing Musa

const musa = createPerson('Musa Dawodu', 19, 'Lekki, Lagos State')
console.log(musa); 

// Factory function to create a JAMB scores object

function createJambScores(eng, govt, lit, crk) {
    return {
        eng:eng,
        govt:govt,
        lit:lit,
        crk:crk
    };
}

// create an object representing Musa’s JAMB scores

const musaJambScores = createJambScores(70, 85, 82, 94)
console.log(musaJambScores);

// Add the jambscore object as a property to Musa object

musa.jambScores = musaJambScores
console.log(musa)
