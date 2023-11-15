import './App.css';

function App() {
  return (
    <>
    <div className="cards">
      <div className="card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcX1B_Lsnd9yWCWBa89q3sDNtDQ6eYWl-ZOg&usqp=CAU" alt="" className="cardImg" />
        <h2 className="cardTitle">Tshirt</h2>
        <span className="price">$12.00</span>
      </div>
      <div className="card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3n0A-F-5WQNAeXEtJsmQNrOBePUK-aR2r3Q&usqp=CAU" alt="" className="cardImg" />
        <h2 className="cardTitle">Bottle</h2>
        <span className="price">$17.00</span>
      </div>
      <div className="card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgVjug9rMEMnfJKhx6_mcKorktRj8-Agm5sA&usqp=CAU" alt="" className="cardImg" />
        <h2 className="cardTitle">Bag</h2>
        <span className="price">$25.00</span>
      </div>
      <div className="card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_kOrNfkiCTV7MUmQh_jfXEtjTrBPWU8sFoGS4WGhnHrNo4LZasyLfgjGqfKdrilsA5zk&usqp=CAU" alt="" className="cardImg" />
        <h2 className="cardTitle">Can'tFindAName</h2>
        <span className="price">$20.00</span>
      </div>
    </div>
    </>
  );
}

export default App;
