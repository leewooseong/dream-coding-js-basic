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
  const fruits = "๐, ๐ฅ, ๐, ๐";
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
  // ์๋ณธ ๋ฐฐ์ด ์์ฒด๋ reverse ๋๊ฒ๋๋ค.
  console.log(array);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  // splice๋ array ์์ฒด๋ฅผ ๋ณํํ๋ ๊ฒ์ด๊ธฐ ๋๋ฌธ์ ์ฌ์ฉ๋ถ๊ฐ!
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
  // ์ ๋ฌ๋ ์ฝ๋ฐฑํจ์๊ฐ ํธ๋ฃจ์ผ ๋ ๊ฐ์ ๋ฆฌํด, ์ฐพ์ง ๋ชปํ๋ฉด undefined๋ฅผ ๋ฆฌํด
  // ์ฝ๋ฐฑํจ์๋ ๋ฐฐ์ด์ ์๋ ๋ชจ๋  ์์๋ง๋ค ํธ์ถ์ด ๋๋ค.
  // ์ฆ ๋ชจ๋  ์์๋ฅผ ๋๋ฉด์ ์์์ ๋ํ ์ฝ๋ฐฑํจ์์ ๋ฆฌํด ๊ฐ์ด ํธ๋ฃจ์ผ ๋ ๊ทธ ๊ฐ์ ๋ฐํ
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
{
  // filter: callback ํจ์ ์กฐ๊ฑด์ ๋ง๋ ๊ฒ๋ค์ ๋ฆฌ์คํธ๋ก ๋ง๋ค์ด ์ ๋ฌํ๋ ๊ฒ
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  // ๊ธฐ์กด ์์๋ค์ ํจ์๋ฅผ ๊ฑฐ์ณ์ ์๋ก์ด ๊ฐ์ผ๋ก ๋ณํ
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  // ๋ฐฐ์ด์์ ํ๋๋ผ๋ callback ํจ์์ ์กฐ๊ฑด์ ๋ง์กฑ์ ์ํจ๋ค๋ฉด true๋ฅผ ๋ฐํ
  console.clear();
  const result = students.some((student) => student.score < 50);
  console.log(result);

  // ๋ฐฐ์ด์ ๋ชจ๋  ์์๊ฐ callback ํจ์์ ์กฐ๊ฑด์ ๋ง์กฑ ์ํจ๋ค๋ฉด true๋ฅผ ๋ฐํ
  const result2 = students.every((student) => student.score < 50);
  console.log(result2);
}

// Q9. compute students' average score
{
  // reduce: ๋ฐฐ์ด์ ๋ชจ๋  ๊ฐ์ ์ถ์ ํ์ฌ ์ฌ์ฉํ  ๋
  // callback ํจ์์ return ๊ฐ์ ๋ค์ ์์์ callback ํจ์ ํธ์ถ ์ previous value๋ก ๋ค์ด๊ฐ์ ์ฌ์ฉ๋๋ค.
  // initial vlaue๋ฅผ ์ง์ ํด์ฃผ๋ฉด ๊ทธ ๊ฐ์ด ์ฒ์ callback ํจ์ ํธ์ถ ์ previous value๋ก ๋ค์ด๊ฐ์ ์ฌ์ฉ๋๋ค, ์์ฐ๋ฉด ์ฒซ ๋ฒ์งธ ์์๊ฐ ๋ค์ด๊ฐ๊ฒ ๋๋ค.
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
  // sort: ์ ๋ ฌ์ ์ํด ์ฌ์ฉ, ์ธ์๋ก ํจ์๊ฐ ๋ค์ด๊ฐ๊ณ  ์ด ํจ์๋ ์ฒซ ๋ฒ์งธ ์ธ์๊ฐ ๋ ๋ฒ์งธ ์ธ์์ ๋ํ ๋ฐํ ๊ฐ์ด , ๊ฐ์ผ๋ฉด 0, ํฌ๋ฉด ์์๋ฅผ ๋ฐํํ์ฌ
  const result = students
    .map((student) => student.score)
    .sort((a, b) => b - a)
    .join();
  console.log(result);
}
