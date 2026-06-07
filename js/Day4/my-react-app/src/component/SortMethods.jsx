import "../App.css";

const SortMethods = () => {
  return (
    <div className="container">
      <h1 className="title bg-white/10 backdrop-blur-md border border-white/20 shadow-lg p-4 font-bold text-center">Array Sorting Methods</h1>

      <div className="big-card">

        {/* sort() */}
        <div className="small-card">
          <h3>sort()</h3>

          <p>
            Sorts the elements of an array in place.
By default, elements are sorted as strings.
          </p>

          <pre className="code">
{`const arr = [5, 2, 8, 1];

arr.sort((a, b) => a - b);

console.log(arr);`}
          </pre>

          <div className="output">
            Output: [1, 2, 5, 8]
          </div>
        </div>

        {/* reverse() */}
        <div className="small-card">
          <h3>reverse()</h3>

          <p>
            Reverses the order of elements in an array.
Modifies the original array directly.
          </p>

          <pre className="code">
{`const arr = [1, 2, 3, 4];

arr.reverse();

console.log(arr);`}
          </pre>

          <div className="output">
            Output: [4, 3, 2, 1]
          </div>
        </div>

      </div>
    </div>
  );
};

export default SortMethods;