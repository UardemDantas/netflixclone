import Row from "./components/Row";
import categories from "./api";

import "./App.css";

function App() {
  return (
    <div className="App">
      {categories.map((category,index) => {
        return (
          <Row key={index} 
          title={category.title} 
          path={category.path} />
        );
      })}
    </div>
  );
}

export default App;
