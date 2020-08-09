fetch('./example.txt')
  .then((res) => res.text())
  .then((res) => console.log(res))
