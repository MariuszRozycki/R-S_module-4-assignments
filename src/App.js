import './App.css';
import BillAppClass from './BillApp/BillAppClass';
import BillAppFunctional from './BillApp/BillAppFunctional';
import FormValidation from './FormValidation/FormValidation';
import ReactFormValidation from './FormValidation/FormValReactForm';
import ReactForm from './FormValidation/ReactForm';
import ExpensesCalculator from './ExpensesCalculator/ExpensesCalculator';


function App() {
  return (
    <div className="App">
      <BillAppClass />
      <BillAppFunctional clicked vat={20} />
      <FormValidation />
      <ReactFormValidation />
      <ReactForm />
      <ExpensesCalculator />
    </div>
  );
}

export default App;
