const slider = document.getElementById("slider");
const sliderNumber = document.getElementById("slider_number");
const quote = document.getElementById("quote");
const button = document.getElementById("button");

slider.addEventListener("input", () => {
    sliderNumber.textContent = slider.value;
});


async function randomFacts(number) {
    const response = await fetch(`https://api.breakingbadquotes.xyz/v1/quotes/${number}`);
    const data = await response.json();

    let fullQuote = "";
    data.forEach(obj => {
        fullQuote += `${obj.quote}<br><strong>- ${obj.author}</strong><br><br>`;
    });

    return fullQuote;
}


button.addEventListener("click", async () => {
    const number = slider.value;
    if(number === "0") {
        quote.innerHTML = "move the slider to a number greater than zero and press the button to get your facts!";
    }
    else {
        const generatedQuote = await randomFacts(number);
        quote.innerHTML = generatedQuote;
    }

});
