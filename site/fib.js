document.addEventListener('DOMContentLoaded', () => {

    const btnFindFib = document.getElementById("btnFindFib");
    btnFindFib.addEventListener('click', (event) => {

        //stop the form from submitting
        event.preventDefault();

        onSearchFib();

    })

});

function onSearchFib() {

    const inStartingNum = document.getElementById("inStartingNumber");
   
    const request = new XMLHttpRequest();
    request.open("POST", "http://localhost:8080/findFib");
    request.setRequestHeader("Content-Type", "application/json");
    request.responseType = "json";
    
    request.onload = () => {

        if(request.readyState === 4 
            && request.status === 200) {

                const result = request.response;
                
                const spnNextFibNum = document.getElementById("spnNextFibNum");
                spnNextFibNum.innerText = result.nextFibNum;

                const h2 = document.querySelector("h2");
                h2.classList.remove("hidden");
                


            }

    }

    const requestBody = JSON.stringify({
        startingNumber: inStartingNum.value
    })

    request.send(requestBody);

}