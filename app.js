const EXPRESS = require('express');
const HTTP = require('http');
const SOCKET = require('socket.io');
const PORT = process.env.PORT || 3001;

const app = EXPRESS();
const server = HTTP.Server(app);
const io = SOCKET(server);

var blackCards = {
  answer: '___',
}
blackCards.cues = [
  "Where do I find Dr. Bloom? " + blackCards.answer,
  "You don't agree to have a " + blackCards.answer + " built inside you if your lifes going great.",
  "No, Jacob is your mother's lover. I watch them. Almost always dressed as " + blackCards.answer + ".",
  "Gonorrhea can't see us if we don't " + blackCards.answer + ".",
  "Showtime extreme in a world where man evolved from " + blackCards.answer + ".",
  "You think you can control me with a " + blackCards.answer + ".",
  "Bobby Moynihan didn't get along with which SNL cast member? " + blackCards.answer,
  "Welcome to your " + blackCards.answer +", bitch!",
  "What were Snuffles first words? " + blackCards.answer,
  "The guy teaches H.S. math. I didn't take him for a " + blackCards.answer + ".",
  "They're just " + blackCards.answer + ", Morty.",
  "It's a new machine. Detects " + blackCards.answer + " all the way up your butt.",
  "Did you get those " + blackCards.answer + " all the way up your butt?",
  "You want to stuff it under a mattress like " + blackCards.answer + ".",
  "You " + blackCards.answer + " Morty. Not very charismatic.",
  "Look at that thing. It defies all logic. What is that thing? " + blackCards.answer,
  "How did Frank Policky die? " + blackCards.answer,
  "What do you think of this flying vehicle Morty? I made it out of " + blackCards.answer + ".",
  "I had to do it Morty. I made a " + blackCards.answer + ".",
  "I'll buy those boobies for " + blackCards.answer + ".",
  "And that's the waaaaaay the " + blackCards.answer + " goes.",
  "I throw balls far. You want words, date a " + blackCards.answer + ".",
  "Break the cycle Morty. Rise above. Focus on " + blackCards.answer + ".",
  "We're both insecure enough to agree to a " + blackCards.answer + ".",
  "It might eat brains and exhale " + blackCards.answer + " for all you know.",
  "I'm the devil, what should I do if I fail? Go get " + blackCards.answer + "."
  ]

io.on('connection', socket => {
  socket.on('join', () => {
    console.log('client connected');
    socket.emit('set_card', blackCards.cues[0]);
  });
  socket.on('disconnect', socket => {
    console.log('client disconnected');
  });
});


server.listen(PORT, ()=>console.log(`Server running on: ${PORT}`));
