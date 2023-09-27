window.onload =() => {

    let button = document.querySelector('#btn');

    // Function for calculating BMI
    button.addEventListener("click", calculateBMI);
};

function calculateBMI() {
    let height = parseInt(document.querySelector("#height").value);

    let weight = parseInt(document.querySelector("#weight").value);

    let result = document.querySelector("#resultat")

    if (height === "" || isNaN(height))
    result.innerHTML = "Provide a valid Height !!";

    else if (weight === "" || isNaN(weight))
    result.innerHTML = "Provide a valid Weight !!";


    // If both input is valid, calculate the bmi
    else {
        let bmi = (weight / ((height *height) / 10000)).toFixed(2);

        if (bmi <= 18.5) result.innerHTML = `<span style='color: red'> Hej !! You are Under Weight !! Your BMI is : ${bmi}</span>`;

        else if (bmi > 18.6 &&  bmi < 24.9)
        result.innerHTML = `<span style='color: green'> GREAT !!! You are on Normal Weight !! Keep it going. Your BMI Weight is:  ${bmi}</span>`;

        else result.innerHTML =
            `<span style='color: red'> Over Weight : HEJ !! You are over weight!! Your bmi is ${bmi}</span>`;
    }

}


