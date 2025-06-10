
/* "EventSchedules" API structure for matches feature:
    the api call returns an object containing an array on objects. Each of these objects represents a match, containing info in the form of keys and other nested objects.
*/

API_result = { events : [ { tournament: { uniqueTournament : { tennisPoints: 2000 || 1000 || 500 || 250 }} } ] }

{
    events : [


         {
            tournament: {
                name: "Rome, Italy",
                category: { name: "ATP" },
                uniqueTournament: { tennisPoints: 1000,
                    name: "",
                 },
            },

            season: {
                name: "ATP Rome, Italy Men Singles 2025"
            },

            roundInfo: {
                name: "Round of 32"
            },

            status: {
                description: "Ended",
                type: "finished"
            },

            winnerCode : 1,

            homeTeam: {
                shortName: "C. Moutet",
                id: 175014,
                country: { alpha3: "FRA" },

                type: 1,

                teamColors: {
                    primary: "#374df5",
                    secondary: "#374df5",
                    text: "#ffffff"
                },
            },

            awayTeam: {
                shortName: "H. Rune",
                id: 283070,
                country: { alpha3: "DNK" },

                type: 1,

                teamColors: {
                    primary: "#374df5",
                    secondary: "#374df5",
                    text: "#ffffff"
                },
            },

            homeScore: {
                current: 2,
                period1: 7,
                period2: 5,
                period3: 7,
                period3TieBreak: 7,
                point: "6"
            },

            awayScore: {
                current: 1,
                period1: 5,
                period2: 7,
                period3: 6,
                period3TieBreak: 4,
                point: "4"
            },

            currentPeriodStartTimestamp: 1746969928,


        },


    ]
}