const vibes = [
    "... and you are awesome!",
    "... have a wonderful day!",
    "... and you've got this!",
    "... and so is this puppy 🐶",
]

const vibe = vibes[Math.floor(Math.random() * vibes.length)]

console.log(vibe)

document.querySelector(".vibe").append(vibe)