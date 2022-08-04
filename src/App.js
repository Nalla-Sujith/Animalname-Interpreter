import { useState } from "react";
import "./styles.css";

export default function App() {
  const [name, setAnimalname] = useState("Sujith");
  const [alphabet, setAlphabet] = useState("S");
  const dummydata = {
    A: "Anaconda",
    B: "Bear",
    C: "Cat",
    D: "Dog",
    E: "Elephant",
    F: "Fox",
    G: "Giraffe",
    H: "Horse",
    I: "Indian Elephant",
    J: "Jaguar",
    K: "Kangaroo",
    L: "Lion",
    M: "Monkey",
    N: "Nightangle",
    O: "Ostrich",
    P: "Pig",
    Q: "Quokka",
    R: "Rabbit",
    T: "Tiger",
    U: "Uakari",
    V: "Vulture",
    W: "Walrus",
    X: "Xenarthra",
    Z: "Zebra"
  };
  var itemclickhandler = (item) => {
    setAlphabet(item);
    setAnimalname(dummydata[item]);
  };
  var changehandler = (event) => {
    var text = event.target.value;
    if (text in dummydata) {
      setAlphabet(text);
      setAnimalname(dummydata[text]);
    } else {
      setAlphabet("NA");
      setAnimalname("Undefined");
    }
  };
  var datakeys = Object.keys(dummydata);
  return (
    <div className="App">
      <h1>Hello Welcome to Animal Interpreter</h1>
      <textarea
        className="text-box"
        placeholder="Enter text here"
        onChange={changehandler}
      />
      <h2>
        {alphabet} for {name}
      </h2>
      <div className="item-container">
        {datakeys.map((item, index) => {
          return (
            <span className="span-item" onClick={() => itemclickhandler(item)}>
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
