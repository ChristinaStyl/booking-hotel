document.addEventListener("DOMContentLoaded", () => {
  const rate = document.querySelector("#star1");
  // const $emailError = document.querySelector(".email-error");
  let rateIsValid = false;

  const getRateValidation = (rate) => {
    if ( rate !== "checked" ) {
      rateIsValid = true;
    } else {
      rateIsValid = false;
    }
  };

  const checkReviewBtn = () => {
    if (rateIsValid) {
      $submit.disabled = false;
    } else {
      $submit.disabled = true;
    }
  };



  $email.addEventListener("input", (e) => {
    getRateValidation(e.target.value);
    if (!rateIsValid) {
      $rate.classList.add("is-invalid");
    } else {
      $rate.classList.remove("is-invalid");
    }
    checkReviewBtn();
  });
});
