function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    };
}

function numPointsScored(playerName) {
    let gameData = gameObject();
    for (let team in gameData) {
        if (gameData[team]["players"][playerName]) {
            return gameData[team]["players"][playerName]["points"];
        }
    }
    // Return null if player not found
    return null;
}

function shoeSize(playerName) {
    let gameData = gameObject();
    for (let team in gameData) {
        if (gameData[team]["players"][playerName]) {
            return gameData[team]["players"][playerName]["shoe"];
        }
    }
    // Return null if player not found
    return null;
}

function teamColors(teamName) {
    let gameData = gameObject();
    for (let team in gameData) {
        if (gameData[team]["teamName"] === teamName) {
            return gameData[team]["colors"];
        }
    }
    // Return null if team not found
    return null;
}

function teamNames() {
    let gameData = gameObject();
    return [gameData["home"]["teamName"], gameData["away"]["teamName"]];
}

function playerNumbers(teamName) {
    let gameData = gameObject();
    for (let team in gameData) {
        if (gameData[team]["teamName"] === teamName) {
            let players = gameData[team]["players"];
            return Object.values(players).map(player => player.number);
        }
    }
    // Return null if team not found
    return null;
}

function playerStats(playerName) {
    let gameData = gameObject();
    for (let team in gameData) {
        if (gameData[team]["players"][playerName]) {
            return gameData[team]["players"][playerName];
        }
    }
    // Return null if player not found
    return null;
}

function bigShoeRebounds() {
    let largestShoeSize = -Infinity;
    let playerWithLargestShoe = null;

    let gameData = gameObject();

    // Finding player with the largest shoe size
    for (let team in gameData) {
        for (let player in gameData[team]["players"]) {
            let currentShoeSize = gameData[team]["players"][player]["shoe"];
            if (currentShoeSize > largestShoeSize) {
                largestShoeSize = currentShoeSize;
                playerWithLargestShoe = gameData[team]["players"][player];
            }
        }
    }

    // Return number of rebounds of the player with the largest shoe size
    return playerWithLargestShoe["rebounds"];
}

function mostPointsScored() {
    let mostPoints = -Infinity;
    let playerWithMostPoints = null;

    let gameData = gameObject();

    // Finding player with the most points
    for (let team in gameData) {
        for (let player in gameData[team]["players"]) {
            let currentPoints = gameData[team]["players"][player]["points"];
            if (currentPoints > mostPoints) {
                mostPoints = currentPoints;
                playerWithMostPoints = player;
            }
        }
    }

    // Return the player with the most points
    return playerWithMostPoints;
}

function winningTeam() {
    let homePoints = 0;
    let awayPoints = 0;

    let gameData = gameObject();

    // Calculate points for home team
    for (let player in gameData["home"]["players"]) {
        homePoints += gameData["home"]["players"][player]["points"];
    }

    // Calculate points for away team
    for (let player in gameData["away"]["players"]) {
        awayPoints += gameData["away"]["players"][player]["points"];
    }

    // Compare points and return the name of the team with the most points
    if (homePoints > awayPoints) {
        return gameData["home"]["teamName"];
    } else if (awayPoints > homePoints) {
        return gameData["away"]["teamName"];
    } else {
        return "It's a tie!";
    }
}

function playerWithLongestName() {
    let longestNameLength = -Infinity;
    let playerWithLongestName = null;

    let gameData = gameObject();

    // Finding player with the longest name
    for (let team in gameData) {
        for (let player in gameData[team]["players"]) {
            let currentNameLength = player.length;
            if (currentNameLength > longestNameLength) {
                longestNameLength = currentNameLength;
                playerWithLongestName = player;
            }
        }
    }

    // Return the player with the longest name
    return playerWithLongestName;
}

function doesLongNameStealATon() {
    let playerWithLongestName = playerWithLongestName();
    let mostSteals = -Infinity;
    let stealsByLongNamePlayer = null;

    let gameData = gameObject();

    // Find the number of steals by the player with the longest name
    for (let team in gameData) {
        for (let player in gameData[team]["players"]) {
            if (player === playerWithLongestName) {
                stealsByLongNamePlayer = gameData[team]["players"][player]["steals"];
            }
        }
    }

    // Find the player with the most steals
    for (let team in gameData) {
        for (let player in gameData[team]["players"]) {
            let currentSteals = gameData[team]["players"][player]["steals"];
            if (currentSteals > mostSteals) {
                mostSteals = currentSteals;
            }
        }
    }

    // Return true if the player with the longest name had the most steals
    return stealsByLongNamePlayer === mostSteals;
}

