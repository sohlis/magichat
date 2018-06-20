const { exec } = require('child_process');

const eligbleTeam = ['Tomo', 'Enoch', 'Arkady', 'Jack', 'Jake', 'Mihai']

exec(`cowsay ${eligbleTeam[Math.round(Math.random() * (eligbleTeam.length))] + ' is Scrum Master!'}`, (e, stdout, err) => {
  console.log(stdout);
});