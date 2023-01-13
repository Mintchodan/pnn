import "./App.css";
import { useState } from "react";

function App() {
  let [name, setName] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);
  let copyName = [...name];
  let [plusName, setPlusName] = useState("");

  let [like, setLike] = useState([0, 0, 0]);
  let copyLike = [...like];
  const plusLike = (e) => {
    copyLike[e]++;
    setLike(copyLike);
  };

  const remove = (e) => {
    copyName = [...name];
    copyName.splice(e, 1);
    copyLike = [...like];
    copyLike.splice(e, 1);
    setName(copyName);
    setLike(copyLike);
  };

  let [isOpen, setOpen] = useState(false);

  return (
    <div className="App">
      <header className="App-header">ReactBlog</header>
      <button
        onClick={() => {
          setName(copyName);
        }}
      >
        버튼1
      </button>
      <button
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        모달창
      </button>

      <div className="App-div">
        {name.map((list, i) => {
          return (
            <div>
              <h3>
                {list}
                <span onClick={() => plusLike(i)}>{"👍" + like[i]}</span>
              </h3>
              <button
                onClick={() => {
                  remove(i);
                  //setName(name.filter((name) => name !== list));
                }}
              >
                삭제
              </button>
              <hr></hr>
            </div>
          );
        })}
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => setPlusName(e.target.value)}
        ></input>
        <button
          onClick={() => {
            setName([...name, plusName]);
            setLike([...copyLike, 0]);
          }}
        >
          추가
        </button>
      </div>
      <div>{isOpen === true ? <Modal setName={setName}></Modal> : null}</div>
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h3>모달창</h3>
      <button
        onClick={() =>
          props.setName(["여자코트 추천", "강남 우동맛집", "파이썬독학"])
        }
      >
        글수정
      </button>
    </div>
  );
}

export default App;
