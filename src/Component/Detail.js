import Button from "react-bootstrap/Button";

function Detail() {
  return (
    <div className="App-container">
      <div className="container-row">
        <div className="col-md-4">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-4">
          <h4 className="pt-5">상품명</h4>
          <p>상품설명</p>
          <p>120000원</p>
          <Button variant="primary">주문하기</Button>{" "}
        </div>
      </div>
    </div>
  );
}

export default Detail();
