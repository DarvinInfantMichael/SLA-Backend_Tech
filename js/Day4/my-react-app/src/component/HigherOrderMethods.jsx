import "../App.css";

const HigherOrderMethods = () => {
  return (
    <div className="container">
      <h1 className="title bg-white/10 backdrop-blur-md border border-white/20 shadow-lg p-4 font-bold text-center">Higher Order Array Methods</h1>

      <div className="big-card">

        {/* map() */}
        <div className="small-card">
          <h3>map()</h3>

          <p>
            Creates a new array by applying a function to each element.
          </p>

          <pre className="code">
{`const arr = [1, 2, 3];

const result = arr.map(num => num * 2);

console.log(result);`}
          </pre>

          <div className="output">
            Output: [2, 4, 6]
          </div>
        </div>

        {/* filter() */}
        <div className="small-card">
          <h3>filter()</h3>

          <p>
            Creates a new array with elements that satisfy a condition.
          </p>

          <pre className="code">
{`const arr = [10, 20, 30, 40];

const result = arr.filter(num => num > 20);

console.log(result);`}
          </pre>

          <div className="output">
            Output: [30, 40]
          </div>
        </div>

        {/* find() */}
        <div className="small-card">
          <h3>find()</h3>

          <p>
            Returns the first element that satisfies a condition.
          </p>

          <pre className="code">
{`const arr = [10, 20, 30, 40];

const result = arr.find(num => num > 20);

console.log(result);`}
          </pre>

          <div className="output">
            Output: 30
          </div>
        </div>

        {/* reduce() */}
        <div className="small-card">
          <h3>reduce()</h3>

          <p>
            Reduces the array to a single value.
          </p>

          <pre className="code">
{`const arr = [1, 2, 3, 4];

const result = arr.reduce(
  (sum, num) => sum + num,
  0
);

console.log(result);`}
          </pre>

          <div className="output">
            Output: 10
          </div>
        </div>

        {/* some() */}
        <div className="small-card">
          <h3>some()</h3>

          <p>
            Checks if at least one element satisfies a condition.
          </p>

          <pre className="code">
{`const arr = [10, 20, 30];

const result = arr.some(num => num > 25);

console.log(result);`}
          </pre>

          <div className="output">
            Output: true
          </div>
        </div>

        {/* every() */}
        <div className="small-card">
          <h3>every()</h3>

          <p>
            Checks if all elements satisfy a condition.
          </p>

          <pre className="code">
{`const arr = [10, 20, 30];

const result = arr.every(num => num > 5);

console.log(result);`}
          </pre>

          <div className="output">
            Output: true
          </div>
        </div>

        {/* flatMap() */}
        <div className="small-card">
          <h3>flatMap()</h3>

          <p>
            Maps each element and flattens the result into a new array.
          </p>

          <pre className="code">
{`const arr = [1, 2, 3];

const result = arr.flatMap(
  num => [num, num * 2]
);

console.log(result);`}
          </pre>

          <div className="output">
            Output: [1, 2, 2, 4, 3, 6]
          </div>
        </div>

      </div>
    </div>
  );
};

export default HigherOrderMethods;