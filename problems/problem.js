// let charmap=mapStringToObject('abcd');
// for(let i in charmap){
//     console.log(i +':'+charmap[i]);

// }

// function getCharacterFrequency(str) {
//     let frequency = {};
//     for (let char of str) {
//         if (frequency[char]) {
//             frequency[char]++;
//         } else {
//             frequency[char] = 1;
//         }
//     }
//     return frequency;
// }

// let frequency = getCharacterFrequency('aabb');
// for (let key in frequency) {
//     console.log(frequency[key]);
// }
function getCharacterFrequency(str){
    let frequency={}
    for(let i=0;i<str.length;i++){
        let char=str[i]
        if(frequency[char]){
            frequency[char]+=1
        }
        else{
            frequency[char]=1
        }
    }
    return frequency
} 



let frequency_1 = getCharacterFrequency("aabb");
for (let key in frequency_1) {
    console.log(frequency_1[key]);
}
