function isGoalsTrue(goals, a, b, times){
    if(1 > goals > 100 || (1 > a > 10 && 1 > a > 10) || goals !== times.length){
        return "NO";
    }
    for (let i = 0; i < times.length; i++){
        if(0 > times[i] > 100){
            return "NO";
        }
    }
    for(let k = 0; k < times.length; k++){
        if(times[k] > 90 + b){
            return "NO";
        }
    }
    for(let j = 0; j < times.length - 1; j++){
        if(times[j] > times[j + 1]){
            if(times[j] > (45 + a)){
                return "NO";
            }
        }
    }
    return "YES";
}

console.log(isGoalsTrue(4,2,4,[4,45,48,90]))
console.log(isGoalsTrue(5,3,2,[4,47,45,80,91]))
console.log(isGoalsTrue(4,2,2,[4,48,45,80]))
console.log(isGoalsTrue(6,3,2,[8,48,45,70,81,94]))