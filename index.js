// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(nameArr, eventName){
    let msgArr= [];
    for (let i=0; i< nameArr.length; i++) {
        msgArr.push(`Thank you, ${nameArr[i]}, for the wonderful ${eventName} gift!`);
    }
    return msgArr;
}

function countDown(num){
    while (num>=0) {
        let result= num--;
        console.log(result);
    }
}
