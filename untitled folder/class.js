// class user{
//     constructor(username, age, email){
//         this.username = username;
//         this.age = age;
//         this.email = email;
//     }
// }
// const userOne = new user('isaiah', 21, 'orevaisaiah@gmail.com')
// console.log(userOne);
const ul = document.querySelector('#candidates')

fetch('https://randomuser.me/api/?results=10')
    .then((resp) =>{
        console.log(resp)
        return resp.json()
    })
    .then((data) => {
        let users = data.results;
        return users.map((user) =>{
            const li = document.createElement('li');
            const img = document.createElement('img');
            const p = document.createElement('p');
            ul.appendChild(li);
            let paragraph = li.appendChild(p);
            let image = li.appendChild(img);
            let firstName = user.name.first;
            let lastName = user.name.last;
            paragraph.innerHTML = `${firstName} ${lastName}`
            image.src = user.picture.large;
        });
    })
    .catch(function (error) {
        console.log(error)
    });