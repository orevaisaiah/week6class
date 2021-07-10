const container = document.querySelector('#container')

fetch('https://randomuser.me/api/?results=30')
    .then((response) =>{
        //console.log(response)
        return response.json()
    })
    .then((data) => {
        let users = data.results;
        console.log(data)
        return users.map((user) =>{

        })
    })
    .catch(function (error) {
        console.log(error)
    });