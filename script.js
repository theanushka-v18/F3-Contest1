let sportsDayColours = ["red", "blue", "green", "yellow"];


function OpeningCeremony(Race100M) {
    let score = {
        red:100,
        blue:50,
        green:150,
        yellow:100
    }
    setTimeout(() => {
        console.log("Let the games begin");
        Race100M(score, LongJump);
        console.log(score);
    }, 1000);
}

function Race100M(score, LongJump) {
    setTimeout(() => {
        let storeRandomNum = [];
        for (let key of Object.keys(score)) {
            let randomNum = Math.floor(Math.random() * (15 - 10 + 1) + 10);
            storeRandomNum.push(randomNum);
        }
        let minNumIdx = storeRandomNum.indexOf(Math.min(...storeRandomNum));
        let secondMinNumIdx = storeRandomNum.indexOf(Math.min.apply(null, storeRandomNum.filter(n => n != Math.min(...storeRandomNum))));
        let minKey = sportsDayColours[minNumIdx];
        let SecondMinKey = sportsDayColours[secondMinNumIdx];

        for (let key of Object.keys(score)) {
            if(key == minKey) {
                score[key] += 50;
            }
            if (key == SecondMinKey) {
                score[key] += 25;
            }
        }

        let maxScore = 0;
        for (let key of Object.keys(score)) {
            if(score[key] > maxScore) {
                maxScore = score[key];
            }
        }
        console.log(score, maxScore);
        LongJump(score, HighJump);
    }, 3000);
}

function LongJump(score, HighJump) {
    let randomColour = sportsDayColours[Math.floor(Math.random() * (3 - 0 + 1) + 0)];
    for (let key of Object.keys(score)) {
        if(key == randomColour) {
            score[key] += 150;
        }
    }
    let maxScore = 0;
    for (let key of Object.keys(score)) {
        if(score[key] > maxScore) {
            maxScore = score[key];
        }
    }
    console.log(score, maxScore);
    HighJump(score, HighJump);
}

function HighJump(score, AwardCeremony) {
    let winner = prompt("What colour secured the highest jump?");
    if (winner == null || winner == "") {
        console.log("Event was cancelled");
    } else {
        for (let key of Object.keys(score)) {
            if(key == winner) {
                score[key] += 100;
            }
        }
    }
    let maxScore = 0;
    for (let key of Object.keys(score)) {
        if(score[key] > maxScore) {
            maxScore = score[key];
        }
    }
    console.log(score, maxScore);
    AwardCeremony(score);
}

function AwardCeremony(score) {
    for (let key of Object.keys(score)) {
        console.log(key + score[key]);
    }
}

OpeningCeremony(Race100M);