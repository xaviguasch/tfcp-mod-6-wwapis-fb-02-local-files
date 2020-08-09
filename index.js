// fetch('./example.txt')
//   .then((res) => res.text())
//   .then((res) => {
//     const div = document.createElement('div')
//     div.innerHTML = res
//     document.body.append(div)
//   })

// EXERCISE
// Fetch the data from the .json file and display each persons name on the web page.

// fetch('./people.json')
//   .then((res) => res.json())
//   .then((json) => {
//     json.forEach((person) => {
//       const div = document.createElement('div')
//       div.innerHTML = person.name
//       document.body.appendChild(div)
//     })
//   })

// EXERCISE 2
// Fetch the data from the .json file and display each persons name and age like this: "John is 20".

// fetch('./people.json')
//   .then((res) => res.json())
//   .then((json) => {
//     json.forEach((person) => {
//       const div = document.createElement('div')
//       div.innerHTML = `${person.name} is ${person.age}.`
//       document.body.appendChild(div)
//     })
//   })


// Fetch an image from https://jsonplaceholder.typicode.com/photos/1. The response will be in a JSON. You'll need to access the "url" property, then pass that into the img tag.

fetch() // Add the URL
	.then(res => res) // Process the data
	.then(json => { 
		const img = document.createElement('img');
		img.src = ; // Set the image source to the image URL value
		document.body.appendChild(img);
	}); 