let studentScores = [50, 65, 75, 85, 100];
let scoreGrades = [];

for (let i = 0; i < studentScores.length; i++){
    if (studentScores[i] < 60)
        scoreGrades.push("You have earned " + studentScores[i] + " points - Grade F");

    else if (studentScores[i] >= 60 && studentScores[i] < 70)
        scoreGrades.push("You have earned " + studentScores[i] + " points - Grade D");

    else if (studentScores[i] >= 70 && studentScores[i] < 80)
        scoreGrades.push("You have earned " + studentScores[i] + " points - Grade C");

    else if (studentScores[i] >= 80 && studentScores[i] < 90)
        scoreGrades.push("You have earned " + studentScores[i] + " points - Grade B");

    else 
        scoreGrades.push("You have earned " + studentScores[i] + " points - Grade A");
}
console.log(scoreGrades);