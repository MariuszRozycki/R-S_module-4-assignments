import './App.css';
import BillAppClass from './BillApp/BillAppClass';
import BillAppFunctional from './BillApp/BillAppFunctional';

function App() {
  return (
    <div className="App">
      <BillAppClass />
      <BillAppFunctional clicked vat={20} />
    </div>
  );
}

export default App;
