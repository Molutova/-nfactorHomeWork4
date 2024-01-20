// Перепишите функцию, используя оператор '?' или '||'
let age = prompt("Age?");

function checkAge(age) {
  return age > 18 ? "true" : confirm("Родители разрешили?");
}
var result = checkAge(age);
alert(result);

// Функция pow(x,n)
function pow(x, n) {
  return x ** n;
}
console.log(pow(2, 3));
console.log(pow(3, 3));
console.log(pow(1, 100));

// Перепишите с использованием функции-стрелки
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Вы согласны?",
  () => {
    alert("Вы согласились.");
  },
  () => {
    alert("Вы отменили выполнение.");
  }
);

//Сортировать в порядке по убыванию
let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);

alert(arr); // 8, 5, 2, 1, -10

//Трансформировать в массив имён
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [vasya, petya, masha];

// let names = users.map((user) => user.name);
// alert(names); // Вася, Петя, Маша

//Трансформировать в объекты
// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [vasya, petya, masha];

// let usersMapped = users.map((user) => {
//   return {
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id,
//   };
// });

// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 },
// ];
// console.log(usersMapped);

// alert(usersMapped[0].id); // 1
// alert(usersMapped[0].fullName); // Вася Пупкин

// Получить средний возраст
let users = [
  { name: "Вася", age: 25 },
  { name: "Петя", age: 30 },
  { name: "Маша", age: 29 },
];
let sumOf = 0;
function getAverageAge(users) {
  for (let i = 0; i < users.length; i++) {
    sumOf += users[i].age;
  }
  return sumOf / users.length;
}

alert(getAverageAge(users));
