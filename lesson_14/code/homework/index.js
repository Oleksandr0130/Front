const player1 = (player) =>{
    let randomGoals = Math.round(Math.random() * 21)
    player.goals = randomGoals
    return player
}

const weightandHeightPlayer = (player) => {
    if (player.height >= 180 && player.weight < 80){
        return weightandHeightPlayer
    }
}

// const heightPlayer = (player) => {
//     return player.height >= 180
// }

const playersSort = (goals1, goals2) => {
    return goals1.goals < goals2.goals ? -1 : 1
}


let players = [
    {name: "Alex", height: 190, weight: 85, sport: "rugby"},
    {name: "Boris", height: 180, weight: 75, sport: "football"},
    {name: "Vladimir", height: 175, weight: 70, sport: "hockey"},
    {name: "George", height: 185, weight: 80, sport: "rugby"},
    {name: "Dmitry", height: 170, weight: 65, sport: "hockey"},
    {name: "Eugene", height: 195, weight: 90, sport: "football"},
    {name: "Zachary", height: 188, weight: 82, sport: "rugby"},
    {name: "Ivan", height: 182, weight: 77, sport: "football"},
    {name: "Kirill", height: 178, weight: 73, sport: "hockey"},
    {name: "Leonid", height: 192, weight: 87, sport: "rugby"},
    {name: "Michael", height: 176, weight: 71, sport: "hockey"},
    {name: "Nicholas", height: 198, weight: 93, sport: "football"},
    {name: "Oleg", height: 186, weight: 79, sport: "rugby"},
    {name: "Paul", height: 174, weight: 69, sport: "hockey"},
    {name: "Roman", height: 184, weight: 78, sport: "football"}
    ];

    const playersWithGoal = players.map(player1)
    console.log(playersWithGoal)

    // console.log ('============heightPlayer==========')
    // const heightPlayerFilter = playersWithGoal.filter(heightPlayer)
    // console.log(heightPlayerFilter)

    console.log ('============weightandHeightPlayer==========')
    const weightPlayerFilter = playersWithGoal.filter(weightandHeightPlayer)
    console.log(weightPlayerFilter)
    
    console.log ('============playersGoal==========')
    players.sort(playersSort)
    console.log (players)