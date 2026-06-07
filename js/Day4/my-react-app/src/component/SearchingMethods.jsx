import "../App.css";

const SearchingMethods = () => {
  return (
    <div className="container">
      <h1 className="title bg-white/10 backdrop-blur-md border border-white/20 shadow-lg p-4 font-bold text-center">Array Searching Methods</h1>

      <div className="big-card">

        {/* includes() */}
        <div className="small-card">
          <h3>includes()</h3>

          <p>
            Checks whether an array contains a specific value.
Returns true if found, otherwise false.
          </p>

          <pre className="code">
{`const arr = [10, 20, 30, 40];

console.log(arr.includes(20));`}
          </pre>

          <div className="output">
            Output: true
          </div>
        </div>

        {/* indexOf() */}
        <div className="small-card">
          <h3>indexOf()</h3>

          <p>
            Returns the index of the first occurrence of a value.
Returns -1 if the value is not found.
          </p>

          <pre className="code">
{`const arr = [10, 20, 30, 20];

console.log(arr.indexOf(20));`}
          </pre>

          <div className="output">
            Output: 1
          </div>
        </div>

        {/* lastIndexOf() */}
        <div className="small-card">
          <h3>lastIndexOf()</h3>

          <p>
            Returns the index of the last occurrence of a value.
Searches the array from right to left.
          </p>

          <pre className="code">
{`const arr = [10, 20, 30, 20];

console.log(arr.lastIndexOf(20));`}
          </pre>

          <div className="output">
            Output: 3
          </div>
        </div>

      </div>
    </div>
  );
};

export default SearchingMethods;