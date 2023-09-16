const userDataContainer = document.getElementById('userHolder');

function displayUserData(data) {
    userDataContainer.innerHTML = ''; // Clear previous data

    data.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('userHolderLight');

        // Create HTML structure for user data
        userDiv.innerHTML = `
        <div id = "userData" class = "userDataLight">
            <h2>${user.first_name} ${user.last_name}</h2>
            <img src="${user.avatar}" alt="${user.first_name} ${user.last_name}" id = "avatar" class="avatar">
            <p><strong>Username:</strong> @${user.username}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Gender:</strong> ${user.gender}</p>
            <p><strong>Date of Birth:</strong> ${user.date_of_birth}</p>
            <p><strong>Phone number: </strong> ${user.phone_number}</p>
            <!-- Add more data fields as needed -->

            <hr>
            </div>
        `;

        userDataContainer.appendChild(userDiv);
    });
}

function lightMode() {
    var tempBody = document.body;
    tempBody.className = (tempBody.className == "bodyDark") ? "bodyLight" : "bodyDark";
    var tempContainer = document.getElementById("container");
    tempContainer.className = (tempContainer.className == "containerDark") ? "containerLight" : "containerDark";
    var userHolder = document.getElementById("userHolder");
    userHolder.className = (userHolder.className == "userHolderDark") ? "userHolderLight" : "userHolderDark";
    var userDivs = document.querySelectorAll("div#userData");

    userDivs.forEach(function (userDiv) {
        userDiv.className = (userDiv.className === "userDataDark") ? "userDataLight" : "userDataDark";
    });

    var tempButton = document.getElementById("lightModeButton");
    tempButton.className = (tempButton.className == "lightModeButtonDark") ? "lightModeButtonLight" : "lightModeButtonDark";

}

// Fetch data from the API
fetch('https://random-data-api.com/api/v2/users?size=10')
    .then(response => response.json())
    .then(data => {
        // Call the function to display user data
        displayUserData(data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
