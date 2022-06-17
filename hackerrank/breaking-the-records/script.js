// Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.

scores = [10, 5, 20, 20, 4, 5, 2, 25, 1]

function breakingRecords(scores) {
    // Write your code here
    let games = scores;
    let min = games[0];
    let max = games[0];

    let minRecord = 0;
    let maxRecord = 0;

    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > max) {
            max = scores[i]
            maxRecord++
        }
        if (scores[i] < min) {
            min = scores[i]
            minRecord++
        }
    }
    return [maxRecord, minRecord]
}