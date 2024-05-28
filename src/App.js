import logo from './logo.svg';
import './App.css';
import { Carousel} from '@ui5/webcomponents-react';

function App() {;

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Sample React application with UI5-Webcomponents
        </p>
        <Carousel
        id="Carousel"
        arrowsPlacement="Content"
        onNavigate={function _a(){}}
      >
        <img
          alt="img-sample 1"
          src="https://sap.github.io/ui5-webcomponents/images/sample1.jpg"
        />
        <img
          alt="img-sample 2"
          src="https://sap.github.io/ui5-webcomponents/images/sample2.jpg"
        />
        <img
          alt="img-sample 3"
          src="https://sap.github.io/ui5-webcomponents/images/sample3.jpg"
        />
      </Carousel>
      </header>
    </div>
  );
}

export default App;
