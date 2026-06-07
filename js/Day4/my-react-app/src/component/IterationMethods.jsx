import "../App.css";

const IterationMethods = () => {
  return (
    <div className="container">
      <h1 className="title bg-white/10 backdrop-blur-md border border-white/20 shadow-lg p-4 font-bold text-center">Array Iteration Methods</h1>

      <div className="big-card">

        {/* for loop */}
        <div className="small-card">
          <h3>for Loop</h3>

          <p>
            Executes a block of code repeatedly based on a condition.
Provides full control over iteration.
          </p>

          <pre className="code">
{`const arr = [10, 20, 30];

for(let i = 0; i < arr.length; i++){
  console.log(arr[i]);
}`}
          </pre>

          <div className="output">
            Output: 10 20 30
          </div>
        </div>

        {/* for...of */}
        <div className="small-card">
          <h3>for...of</h3>

          <p>
            Iterates through the values of an iterable object.
Commonly used with arrays and strings.
          </p>

          <pre className="code">
{`const arr = [10, 20, 30];

for(const value of arr){
  console.log(value);
}`}
          </pre>

          <div className="output">
            Output: 10 20 30
          </div>
        </div>

        {/* for...in */}
        <div className="small-card">
          <h3>for...in</h3>

          <p>
            Iterates through the keys or indexes of an object or array.
Primarily used for objects.
          </p>

          <pre className="code">
{`const arr = [10, 20, 30];

for(const index in arr){
  console.log(index);
}`}
          </pre>

          <div className="output">
            Output: 0 1 2
          </div>
        </div>

        {/* forEach */}
        <div className="small-card">
          <h3>forEach()</h3>

          <p>
            Executes a callback function for each array element.
Does not return a new array.
          </p>

          <pre className="code">
{`const arr = [10, 20, 30];

arr.forEach(value => {
  console.log(value);
});`}
          </pre>

          <div className="output">
            Output: 10 20 30
          </div>
        </div>

      </div>
    </div>
  );
};

export default IterationMethods;