function get_data() {
    var data = {};
    data.name = $('#name').val();
    data.email = $('#email').val();
    data.message = $('#message').val();
    return data;
}

//public api url = http://localhost:1337/api/houses/1
//Make GET request from the server using fetch API and return the response
function get_house(id) {
    let house = 5;
    fetch('http://localhost:1337/api/houses/' + id)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data.data);
            house = data.data;
        });
    return house;
}

//create object with response data 


console.log(get_house(1));