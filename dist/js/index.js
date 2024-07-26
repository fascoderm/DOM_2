document.addEventListener('DOMContentLoaded', () => {
  let colourBox = document.querySelector('#colour-box');
  let changeColourBtn = document.querySelector('#change-colour-btn');
  let arrayOfColours = [];
  let colours;
  let size;

  let getRandomColour = () => {
    changeColourBtn.addEventListener('click', () => {
      let x = Math.floor(Math.random()*256);
      let y = Math.floor(Math.random()*256);
      let z = Math.floor(Math.random()*256);
      colourBox.style.backgroundColor = `rgb(${x},${y},${z})`;
      


      // colours = `rgb(${x},${y},${z})`;
      // arrayOfColours.push(colours);
      // size = arrayOfColours.length;
      // console.log(arrayOfColours);
      // console.log(arrayOfColours[size-1]);
      // colourBox.classList.remove('bg-slate-600');
      // colourBox.style.backgroundColor = colours;



      // let i = 1;
      // while(i <= size){
      //   (i > 1) ? colourBox.classList.remove(`bg-[${arrayOfColours[size-i]}]`) : colourBox.classList.add(`bg-[${arrayOfColours[size-i]}]`);
      //   i++;
      // }
    })
  }
  getRandomColour();
})