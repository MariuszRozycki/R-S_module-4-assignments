import './App.css';
import BillAppClass from './BillApp/BillAppClass';
import BillAppFunctional from './BillApp/BillAppFunctional';
import FormValidation from './FormValidation/FormValidation';

function App() {
  return (
    <div className="App">
      <BillAppClass />
      <BillAppFunctional clicked vat={20} />
      <FormValidation />
    </div>
  );
}

export default App;
