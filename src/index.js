const getResource = async (url) => {
  const res = await fetch(url);
  // if (!res.ok) {
  //   throw new Error(`Ошибка fetch ${url}, статус ${res.status}`);
  // };
  const body = await res.json();
  return body;
};
getResource('https://swapi.co/api/people/16568341/')
.then((body) => {
  console.log(body);
})
.then((err) => {
  console.log('Ошибка', err)
});


// fetch('https://swapi.co/api/people/1/')
//   .then((res) => {
//     return res.json();
//     console.log('Ответ', res.status);
//   })
//   .then((body) => {
//     console.log(body);
//   })
