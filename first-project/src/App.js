import "./App.css";
import Counter from "./Components/Counter";

function App() {
  // const name = "Pratham Saxena";
  // const name2 = "Internselite";
  // const name3 = "Sahadev Saahoo";

  const name4 = ["Pratham Saxena", "Internselite", "Sahadev Sahooo"];
  return (
    //  <h1 className='head-content'> APP JS Function </h1>
    <>
      <div>
        {name4.map((item,index) => {
          return <Counter name={item} key={index} />;
        })}
        {/* <Counter name={name} />
        <Counter name={name2} /> */}
      </div>
      {/* <Counter name={name3} /> */}
    </>
  );
}

export default App;

// JSX - Means the way to write HTML in the JavaScript is called JSx.
// Basically we have Babel Compiler which compiler JSX

// What are states concept?
