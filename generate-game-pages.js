// This script would be run once to generate all the individual game HTML files
// You can run this with Node.js

const fs = require("fs")
const path = require("path")

// Game categories
const gameCategories = {
  puzzle: ["Truck Loader Unblocked", "Bloxorz Unblocked", "Odd Bot Out Unblocked", "Bubble Shooter Unblocked"],
  match: [],
  action: [
    "Earn To Die Unblocked",
    "Battle Wheels Unblocked",
    "Masked Forces Unblocked",
    "Raft Wars Unblocked",
    "Mad Day Unblocked",
    "Skibidi Shooter Unblocked",
    "1v1 Lol Unblocked",
    "Funny Shooter 2 Unblocked",
    "Stick Merge Unblocked",
  ],
  adventure: ["Super Mario Bros Unblocked"],
  strategy: ["Master Chess Unblocked"],
  simulation: ["BitLife Unblocked", "Monkey Mart Unblocked"],
  racing: [
    "Traffic Rider Unblocked",
    "Traffic Rush Unblocked",
    "Jelly Truck Unblocked",
    "Highway Traffic Unblocked",
    "Moto X3M Unblocked",
    "Drift Hunters Unblocked",
    "Hills Of Stell",
  ],
  sports: ["Basket Bros Unblocked", "Retro Bowl Unblocked"],
  arcade: [
    "Flip Bros Unblocked",
    "Temple Run 2 Unblocked",
    "Tunnel Rush Unblocked",
    "Dreadhead Parkour Unblocked",
    "Geometry Dash Unblocked",
    "Flappy Bird Unblocked",
    "Stickman Hook Unblocked",
    "Poor Bunny Unblocked",
    "Jumping Shell Unblocked",
    "OvO Unblocked",
    "Subway Surfers Unblocked",
    "Diep.io Unblocked",
    "Slither.io Unblocked",
    "Basketball Stars Unblocked", // Added Basketball Stars
  ],
  casual: [
    "Tag Unblocked",
    "Among Us Unblocked",
    "8 Ball Pool Unblocked",
    "Red Ball 4 Unblocked",
    "Level Devil Unblocked",
  ],
}

// Get all games
const allGames = []
for (const category in gameCategories) {
  allGames.push(...gameCategories[category])
}

// Create games directory if it doesn't exist
const gamesDir = path.join(__dirname, "games")
if (!fs.existsSync(gamesDir)) {
  fs.mkdirSync(gamesDir)
}

// Read the template file
const templatePath = path.join(__dirname, "games", "game-template.html")
const template = fs.readFileSync(templatePath, "utf8")

// Generate a file for each game
allGames.forEach((game) => {
  const slug = game.toLowerCase().replace(/[^a-z0-9]+/g, "-")
  const filePath = path.join(gamesDir, `${slug}.html`)

  // Replace placeholders in the template
  const content = template.replace(/Game Title/g, game).replace(/Play Game - Basketball Stars/g, `Play ${game} - Basketball Stars`)

  // Write the file
  fs.writeFileSync(filePath, content)
  console.log(`Generated: ${filePath}`)
})

console.log("All game pages generated successfully!")
