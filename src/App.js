import './App.css';
import { cardsData } from './data';

function App() {

  return (
    <div className="App" >
      <div className="container" >
        {
          cardsData.map((items, index) => {
            return (
              <div key={index} className="card" >
                <div className="header" >
                  <div className="header-content" >
                    <span className="version" >{items?.version}</span>
                    <span className="dollar" >{items.dollar}</span>
                  </div>
                </div>
                <div className="body" >
                  <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }} >
                    {
                      items.features.map((f, index) => (
                        <div >
                          <span style={{ color: f.isAvailable ? "#000" : "lightgrey", fontSize: "18px", marginRight: "10px", fontWeight: 600 }} >{f.isAvailable ? "✓" : "✗"}</span>
                          <span style={{ fontSize: "14px", fontWeight: 500, color: f.isAvailable ? "#000" : "lightgrey", }} >{f.name}</span>
                        </div>
                      ))
                    }
                  </div>
                </div>
                <div className="btn-div" ><button className="button" >BUTTON</button></div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
