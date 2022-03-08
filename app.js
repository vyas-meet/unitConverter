document.querySelector(".theme-btn").addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(".results").classList.toggle("dark");
    document.querySelector(".inputs").classList.toggle("dark");
    document.querySelector(".theme-btn").classList.toggle("dark")
    document.body.classList.toggle("dark");
})


const baseInput = document.getElementById("input");

baseInput.addEventListener("keyup", e => {
    e.preventDefault();
    if (e.currentTarget.value) {
        let inputValue = e.currentTarget.value;

        // Updating all base values with the input.

        document.getElementById("meterInput").innerText = inputValue;
        document.getElementById("feetInput").innerText = inputValue;
        document.getElementById("litersInput").innerText = inputValue;
        document.getElementById("gallonsInput").innerText = inputValue;
        document.getElementById("kilosInput").innerText = inputValue;
        document.getElementById("poundsInput").innerText = inputValue;

        // Converting & updating the output values. 

        document.getElementById("feetOutput").innerText = (inputValue * 3.281).toFixed(3);
        document.getElementById("meterOutput").innerText = (inputValue / 3.281).toFixed(3);

        document.getElementById("gallonsOutput").innerText = (inputValue / 3.785).toFixed(3);
        document.getElementById("litersOutput").innerText = (inputValue * 3.785).toFixed(3);

        document.getElementById("poundsOutput").innerText = (inputValue * 2.205).toFixed(3);
        document.getElementById("kilosOutput").innerText = (inputValue / 2.205).toFixed(3)
    }

})
