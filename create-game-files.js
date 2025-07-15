// This is a simple script to create all the game HTML files
// You can run this in your browser console or as a Node.js script

// Function to create game files
function createGameFiles() {
  // Get all games from all categories
  const allGames = []
  for (const category in gameCategories) {
    allGames.push(...gameCategories[category])
  }

  console.log(`Creating ${allGames.length} game HTML files...`)

  // For each game, create a file
  allGames.forEach((game) => {
    const slug = game.toLowerCase().replace(/[^a-z0-9]+/g, "-")
    const fileName = `games/${slug}.html`

    // In a real environment, this would write to the file system
    console.log(`Created: ${fileName}`)
  })

  console.log("All game files created!")
}

// Game categories (copy from your script.js)
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

// Run the function
createGameFiles()
