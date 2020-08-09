// fetch('./example.txt')
//   .then((res) => res.text())
//   .then((res) => {
//     const div = document.createElement('div')
//     div.innerHTML = res
//     document.body.append(div)
//   })

// EXERCISE
// Fetch the data from the .json file and display each persons name on the web page.

fetch('./people.json')
  .then((res) => res.json())
  .then((json) => {
    json.forEach((person) => {
      const div = document.createElement('div')
      div.innerHTML = person.name
      document.body.appendChild(div)
    })
  })
