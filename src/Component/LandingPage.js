import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const shoes = [
    { id: 1, title: "운동화", price: "10000" },

    { id: 2, title: "구두", price: "15000" },

    { id: 3, title: "군화", price: "5000" },
  ];

  return (
    <div className="App">
      <header className="App-header">ReactBlog</header>

      <div className="App-container">
        <div className="container-row">
          {shoes.map((list, i) => (
            <Card list={list} key={list.id}></Card>
          ))}
        </div>
      </div>
    </div>
  );
}

function Card(props) {
  const navigate = useNavigate();
  return (
    <div className="col-md-4">
      <img
        src={
          "http://codingapple1.github.io/shop/shoes" + props.list.id + ".jpg"
        }
        width="80%"
        className="styleImage"
      ></img>
      <hr></hr>
      <h3>{props.list.title}</h3>
      <p>{props.list.price}</p>
      <Button variant="info" onClick={() => navigate("detail")}>
        Info
      </Button>{" "}
    </div>
  );
}

export default LandingPage();
