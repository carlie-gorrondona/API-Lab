
const getResidentsButton = document.querySelector("#button1");
const personName = document.querySelector("h2");

const buttonClicked = (event) => {

    axios.get("https://swapi.dev/api/planets/2/").then((response) => {
        console.log(response.data.residents);
        
        for (let i = 0; i < response.data.residents.length; i++) {

            axios.get(response.data.residents[i]).then((response) => {
                // console.log(response.data.name)
                let {name} = response.data;
                let newResident = document.createElement("h2"); //only creating h2 element
                newResident.innerHTML = `<p>${name}</p>`; //adds response.data to h2 element
                personName.appendChild(newResident); //
            })
        }
        
    })
    .catch(error => console.log(error));
    console.log("Button clicked!");
}


getResidentsButton.addEventListener("click", buttonClicked);