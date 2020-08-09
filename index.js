fetch('./example.txt')
  .then((res) => res.text())
  .then((res) => {
    const div = document.createElement('div')
    div.innerHTML = res
    document.body.append(div)
  })
