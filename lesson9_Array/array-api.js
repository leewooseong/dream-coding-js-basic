// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join();
  console.log(result);
  const result2 = fruits.join(",");
  console.log(result2);
}

// Q2. make an array out of a string
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  const result = fruits.split(",", 2);
  console.log(result);
  const result2 = fruits.split(",");
  console.log(result2);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const reverse = array.reverse();
  console.log(reverse);
  // 원본 배열 자체도 reverse 되게된다.
  console.log(array);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  // splice는 array 자체를 변형하는 것이기 때문에 사용불가!
  // const result = array.splice(0, 2);
  const result = array.slice(2, 5);
  console.log(result);
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  // 전달된 콜백함수가 트루일 때 값을 리턴, 찾지 못하면 undefined를 리턴
  // 콜백함수는 배열에 있는 모든 요소마다 호출이 된다.
  // 즉 모든 요소를 돌면서 요소에 대한 콜백함수의 리턴 값이 트루일 때 그 값을 반환
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
{
  // filter: callback 함수 조건에 맞는 것들을 리스트로 만들어 전달하는 것
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  // 기존 요소들을 함수를 거쳐서 새로운 값으로 변환
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  // 배열에서 하나라도 callback 함수의 조건에 만족을 시킨다면 true를 반환
  console.clear();
  const result = students.some((student) => student.score < 50);
  console.log(result);

  // 배열의 모든 요소가 callback 함수의 조건을 만족 시킨다면 true를 반환
  const result2 = students.every((student) => student.score < 50);
  console.log(result2);
}

// Q9. compute students' average score
{
  // reduce: 배열의 모든 값을 축적하여 사용할 때
  // callback 함수의 return 값을 다음 요소의 callback 함수 호출 시 previous value로 들어가서 사용된다.
  // initial vlaue를 지정해주면 그 값이 처음 callback 함수 호출 시 previous value로 들어가서 사용된다, 안쓰면 첫 번째 요소가 들어가게 된다.
  const result = students.reduce((prev, curr) => {
    console.log("---------");
    console.log(prev);
    console.log(curr);
    return prev + curr.score;
  }, 0);
  console.log(result / 5);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students.map((student) => student.score).join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  // sort: 정렬을 위해 사용, 인자로 함수가 들어가고 이 함수는 첫 번째 인자가 두 번째 인자에 대한 반환 값이 , 같으면 0, 크면 양수를 반환하여
  const result = students
    .map((student) => student.score)
    .sort((a, b) => b - a)
    .join();
  console.log(result);
}
