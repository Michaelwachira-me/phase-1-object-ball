function gameObject(teamName, colors, number, shoe, points, rebounds, assists, steals, blocks, slamDunks) {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: "Black, White",
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
                    slamDunks:5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks:1
                }

            }

        },
        away: {
            teamName: "Charlotte Hornets",
            colors: "Turquiose, Purple",
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks:2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks:10 
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks:5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks:0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks:12
                }
            }

        }
    }

    }
    console.log(gameObject());
    
    
    function numPointsScored(playerName) {
        let game = gameObject();
        for (let team in game) {
            if (game[team].players[playerName]) {
                return game[team].players[playerName].points;
            }
        }
        return null;
    }
    
    for (let team in gameData) {
        if (gameData[team].players[playerName]) {
            return gameData[team].players[playerName].shoeSize;
        }
    }
    return null;

    function teamColors(teamName) {
        const gameData = {
            home: {
                teamName: "Brooklyn Nets",
                colors: ["Black", "White"],
            },
            away: {
                teamName: "Charlotte Hornets",
                colors: ["Turquoise", "Purple"],
            }
        };
    }

    function teamNames() {
        let game = gameObject();
        return [game.home.teamName, game.away.teamName];
    }

    function playerNumbers(teamName) {
        for (let team in gameData) {
            if (gameData[team].teamName === teamName) {
                return Object.values(gameData[team].players).map(player => player.number);
            }
        }
        return null; // Return null if team not found
    }

    function playerStats(playerName) {
        for (let team in gameData) {
            if (gameData[team].players[playerName]) {
                return gameData[team].players[playerName];
            }
        }
        return null;
    }

    function bigShoeRebounds() {
        let largestShoeSize = 0;
        let rebounds = 0;
    
        for (let team in gameData) {
            for (let player in gameData[team].players) {
                let playerData = gameData[team].players[player];
                if (playerData.shoeSize > largestShoeSize) {
                    largestShoeSize = playerData.shoeSize;
                    rebounds = playerData.rebounds;
                }
            }
        }
    
        return rebounds;
    }

    function mostPointsScored() {
        let topScorer = "";
        let maxPoints = 0;
    
        for (let team in gameData) {
            for (let player in gameData[team].players) {
                let playerData = gameData[team].players[player];
                if (playerData.points > maxPoints) {
                    maxPoints = playerData.points;
                    topScorer = player;
                }
            }
        }
    }


    function winningTeam() {
        let teamPoints = {};

    for (let team in gameData) {
        let totalPoints = 0;
        for (let player in gameData[team].players) {
            totalPoints += gameData[team].players[player].points;
        }
        teamPoints[gameData[team].teamName] = totalPoints;
    }

    return teamPoints["Brooklyn Nets"] > teamPoints["Charlotte Hornets"]
        ? "Brooklyn Nets"
        : "Charlotte Hornets";
}

    function playerWithLongestName() {
        let longestName = "";

        for (let team in gameData) {
            for (let player in gameData[team].players) {
                if (player.length > longestName.length) {
                    longestName = player;
                }
            }
        }
    
        return longestName;
    }

    function doesLongNameStealATon() {
        let longestName = "";
    let mostSteals = 0;
    let longestNameSteals = 0;

    for (let team in gameData) {
        for (let player in gameData[team].players) {
            let steals = gameData[team].players[player].steals;

            // Find player with longest name
            if (player.length > longestName.length) {
                longestName = player;
                longestNameSteals = steals;
            }

            // Track the highest number of steals
            if (steals > mostSteals) {
                mostSteals = steals;
            }
        }
    }

    return longestNameSteals === mostSteals;
}
