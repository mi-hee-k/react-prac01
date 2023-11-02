import { useState } from 'react';
import './App.css';

function App() {
  const initialState = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
  const [array, setArray] = useState(initialState);
  const [result, setResult] = useState('');
  const [query, setQuery] = useState('');

  // forEach
  const handleForEach = () => {
    let temp = '';
    array.forEach((item, idx) => {
      temp += `${idx}: ${item} `;
    });
    setResult(temp);
  };

  // filter
  const handleFilter = () => {
    const filtered = array.filter((item) => item.includes(query));
    setResult(filtered.join(', '));
  };

  //map
  const handleMap = () => {
    const mapped = array.map((item) => item.toUpperCase());
    setResult(mapped.join(', '));
  };

  // reduce
  const handleReduce = () => {
    const reduced = array.reduce((acc, cur) => {
      return `${acc} + ${cur}`;
    });
    setResult(reduced);
  };

  // push
  const handlePush = () => {
    array.push(query);
    setResult(array.join(', '));
    // const newArr = [...array, query];
    // setArray(newArr);
    // setResult(newArr.join(', '));
  };

  // pop
  const handlePop = () => {
    const newArr = [...array];
    newArr.pop();
    setArray(newArr);
    setResult(newArr.join(', '));
  };

  // slice
  const handleSlice = () => {
    setResult(array.slice(1, array.length).join(', '));
  };

  // splice
  const handleSplice = () => {
    const newArr = [...array];
    newArr.splice(2, 2, 'kiwi', 'lime');
    setResult(newArr.join(', '));
  };

  // indexOf
  const handleIndexOf = () => {
    setResult(array.indexOf(query));
  };

  // find
  const handleFind = () => {
    setResult(array.find((item) => item.includes(query)));
  };

  // some
  const handleSome = () => {
    // const newArr = [...array];
    // const someArr = newArr.some((item) => item.includes(query));
    setResult(`${array.some((item) => item.includes(query))}`);
  };

  // every
  const handleEvery = () => {
    const newArr = [...array];
    const someArr = newArr.every((item) => item.length >= 2);
    setResult(`${someArr}`);
  };

  // sort
  const handleSort = () => {
    // const newArr = [...array];
    setResult(array.sort().join(', '));
  };

  // join
  const handleJoin = () => {
    setResult(array.join(', '));
  };

  return (
    <div>
      <h1>배열 test</h1>
      <input
        type='text'
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <div>
        <button onClick={handleForEach}>forEach</button>
        <button onClick={handleFilter}>filter</button>
        <button onClick={handleMap}>map</button>
        <button onClick={handleReduce}>reduce</button>
        <button onClick={handlePush}>push</button>
        <button onClick={handlePop}>pop</button>
        <button onClick={handleSlice}>slice</button>
        <button onClick={handleSplice}>splice</button>
        <button onClick={handleIndexOf}>indexOf</button>
        <button onClick={handleFind}>find</button>
        <button onClick={handleSome}>some</button>
        <button onClick={handleEvery}>every</button>
        <button onClick={handleSort}>sort</button>
        <button onClick={handleJoin}>join</button>
      </div>
      <div>
        <h3>원본배열</h3>
        <p>{array.join(', ')}</p>
      </div>
      <div>
        <h3>결과물</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
