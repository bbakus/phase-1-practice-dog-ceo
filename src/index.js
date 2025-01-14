console.log('%c HI', 'color: firebrick')


function imageFetch() {
    fetch('https://dog.ceo/api/breeds/image/random/4')
      .then(response => response.json())
      .then(data => {
        data.message.forEach(dogImg => {
          console.log(dogImg)
        })
      })
}
  
  

function addFuckingBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => {
        Object.keys(data.message).forEach(breed => {
            let divOrWhatever = document.querySelector("#dog-breeds")
          let dogList = document.createElement('li')
          divOrWhatever.appendChild(dogList)
          dogList.textContent = breed
          dogList.addEventListener('click', () => {
            dogList.style.color = 'blue'
          })
        })
      })
}



function dropDown() {  
    const breedDropdown = document.querySelector('#breed-dropdown')
    breedDropdown.addEventListener('change', (event) => {

  const breeds = document.querySelectorAll('#dog-breeds li')
  const selectedLetter = event.target.value
  breeds.forEach(breed => {
    if (selectedLetter === 'all' || breed.textContent.startsWith(selectedLetter)) {
      breed.style.display = 'block'
    } else {
      breed.style.display = 'none'
    }
  })
})
}



document.addEventListener('DOMContentLoaded', () => {
        dropDown()
        imageFetch()
        addFuckingBreeds()
})