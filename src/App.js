import Row from "./components/row/Row";
import categories from "./api";
import Banner from "./components/banner/Banner";

import "./App.css";
import Navbar from "./components/navbar/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar/>
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
