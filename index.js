// MagicHat
// Built during the great G-Suite outage of Nov. 2019

const { exec } = require('child_process');
const axios = require('axios');

const eligbleTeam = ['Tomo', 'Enoch', 'Arkady', 'Jack', 'Jake', 'Michael', 'Anh', 'Yan', 'Mark', 'Leyan','Jimmy']

// makeRequest
// Makes request for randomness
// From quantum vacuum random number generator
// More info here http://qrng.anu.edu.au/index.php
const makeRequest = () => {
axios.get('https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint8').then(response => {  
  randOtron(response.data.data[0], eligbleTeam)
})
  .catch(error => console.log(error));
}

// randOtron
// Pick randomly from array, output
const randOtron = (int, arr) => {  
  let sdf = int / 255
  let sdff = sdf * arr.length

  exec(`cowsay -r ${arr[Math.round(sdff)]}' is Scrum Master!'`, (e, stdout, err) => {
    console.log(stdout);
  });
};

makeRequest()
