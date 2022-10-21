import Row from "./components/Row";
import categories from "./api";
import Banner from "./components/Banner";

import "./App.css";


function App() {
  return (
    <div className="App">

      <Banner/>
      {categories.map((category,index) => {
        return (
          <Row key={index} 
          title={category.title} 
          path={category.path}
          isLarge={category.isLarge} />
        );
      })}
    </div>
  );
}

export default App;
