let apiUrl = "https://api.github.com/users/";
// Noaman - Saleem - Portfolio;

const userForm = document.getElementById("user-form");
const responseMessage = document.getElementById("response-message");
const input = document.getElementById("username");

const theme = document.getElementById("theme");

// console.log(userForm);

userForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  //   console.log(input.value);
  apiUrl = apiUrl + input.value;
  console.log(apiUrl);

  const response = await fetch(apiUrl);
  console.log(response);
  const data = await response.json(response);
  console.log(data);

  const name = data.name;
  const login = data.login;
  responseMessage.innerHTML = `<h2>Name: ${name}</h2>
                                   <p>Username : ${login}</p>`;
  const imageNode = document.createElement("img");
  imageNode.src = data.avatar_url;
  responseMessage.appendChild(imageNode);

  //   fetch(apiUrl)
  //     .then((response) => {
  //       console.log(response);
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       const name = data.name;
  //       const login = data.login;
  //       responseMessage.innerHTML = `<h2>Name: ${name}</h2>
  //                                    <p>Username : ${login}</p>`;
  //       const imageNode = document.createElement("img");
  //       imageNode.src = data.avatar_url;
  //       console.log(imageNode);
  //       responseMessage.appendChild(imageNode);
  //     });
  input.value = "";
  apiUrl = "https://api.github.com/users/";
});

// changing style using JS
// theme.addEventListener("click", () => {
//   const body = document.body;
//   console.log(body);

//   body.style.backgroundColor = "black";
//   body.style.color = "white";
// });

// changing style using JS toggle class
theme.addEventListener("click", () => {
  const body = document.body;
  console.log(body);

  //   classList.add()
  //   body.classList.add("bg-black");

  // toggle
  body.classList.toggle("bg-black");
});
