document.addEventListener('DOMContentLoaded', () => {

    const btnFindFib = document.getElementById("btnFindFib");
    btnFindFib.addEventListener('click', (event) => {

        //stop the form from submitting
        event.preventDefault();

        onSearchFib();

    })

});

function onSearchFib() {

    displaySpinner();

    const request = createRequest();

    const inStartingNum = document.getElementById("inStartingNumber");
    const requestBody = JSON.stringify({
        startingNumber: inStartingNum.value
    })

    request.send(requestBody);

}

function createRequest() {
    const request = new XMLHttpRequest();
    request.open("POST", "http://3.15.229.114/findFib");
    request.setRequestHeader("Content-Type", "application/json");
    request.responseType = "json";
    
    request.onload = () => {

        if(request.readyState === 4 
            && request.status === 200) {

                onSuccess(request.response);
                
        } else if (request.readyState === 4
            && request.status !== 200) {
                hideSpinner();
                displayError("An error has occurred. Please try again.")
            }

    }

    request.onerror = () => {
        hideSpinner();
        displayError("An error has occurred. Please try again.")
    }

    request.ontimeout = () => {
        hideSpinner();
        displayError("Request has timed out. Please try again.")
    }

    return request;
}

function displaySpinner() {
    const spinner = document.getElementById("spinner");
    spinner.classList.remove("hidden");
}

function hideSpinner() {
    const spinner = document.getElementById("spinner");
    spinner.classList.add("hidden");
}


function clearError(){
    const errorMsg = document.getElementById("errorMsg");
    errorMsg.innerText = "";
    errorMsg.classList.add("hidden");
}

function displayError(msg) {
    const errorMsg = document.getElementById("errorMsg");
    errorMsg.innerText = msg;
    errorMsg.classList.remove("hidden");

}

function onSuccess(result){

    const divNextFibNum = document.getElementById("divNextFibNum");
    divNextFibNum.innerText = result.nextFibNum;

    hideSpinner();

    const h2 = document.querySelector("h2");
    h2.classList.remove("hidden");
}