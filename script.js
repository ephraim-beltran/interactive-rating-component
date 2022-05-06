"use strict"

const submitRating = () => {
    const rating = document.querySelectorAll(".rating input[type='radio']:checked")[0]['value'];
    const cardRating = document.querySelector('#card-rating');
    const cardTnx = document.querySelector('#card-tnx');

    console.log(`You have rated our support with a ${rating}.\n Thank you for your feedback. :)`);

    cardRating.classList.add('scale-out-center');
    document.getElementById('rating-selection').innerText = `You selected ${rating} out of 5`;

    setTimeout(() => {
        cardRating.classList.add('hidden');
        cardTnx.classList.remove('hidden');
        cardTnx.classList.add('fade-in-fwd');
    }, 500);
}

document.querySelector('button').addEventListener("click", submitRating);