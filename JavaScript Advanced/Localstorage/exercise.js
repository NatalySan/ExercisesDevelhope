const user = {
  id: 1,
  name: "John",
  age: 25,
};

localStorage.setItem ("name",JSON.stringify (user))

localStorage.getItem ("name")

let usuario= localStorage.getItem ("name")
console.log(JSON.parse(usuario))



