let cards = [
  ["Diamond", 3],
  ["Heart", "A"],
  ["Clover", "K"],
  ["Spade", 7],
];

function convertToPoint(card) {
  const addtionalPoint = {
    Heart: 0,
    Diamond: 13,
    Clover: 13 * 2,
    Spade: 13 * 3,
  };
  const charToNumber = {
    A: 1,
    J: 11,
    Q: 12,
    K: 13,
  };

  return addtionalPoint[card[0]] + (typeof card[1] === "number"
    ? card[1]
    : charToNumber[card[1]]);
}

function bubbleSort(array) {
  array.map((e1) =>
    array.map((e2, i) => {
      if (i < array.length - 1 && convertToPoint(array[i]) > convertToPoint(array[i + 1])) {
        array[i] = array[i + 1]; // 작은 다음 요소를 현재에 넣고, 큰 현재 요소e2를 다음에 넣어라 
        array[i + 1] = e2;
      }
    })
  );
  return array;
}

console.log(bubbleSort(cards));

