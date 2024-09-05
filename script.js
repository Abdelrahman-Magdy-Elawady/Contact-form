window.onload = () => {
  /*---------------------------------*/
  const firstName = document.querySelector("#first-name");
  const lastName = document.querySelector("#last-name");
  const email = document.querySelector("#email");
  const queryType = document.querySelectorAll("input[name='radio-btns']");
  const msg = document.querySelector("#msg");
  const contactForm = document.querySelector("#contact-form");
  /*----------------------------------*/
  const data = {};
  /*----------------------------------*/
  contactForm.onsubmit = (e) => {
    e.preventDefault();
    console.log(queryType);
    data.firstName = firstName.value;
    data.lastName = lastName.value;
    data.email = email.value;
    data.queryType = [...queryType]
      .filter((query) => query.checked)
      .map((query) => query.value);

    data.msg = msg.value;
    console.log(data);
  };
};
