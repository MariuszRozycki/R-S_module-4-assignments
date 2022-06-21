import React from "react";

class BillAppClass extends React.Component {

  state = {
    amountValue: '',
    tipValue: '',
    amount: ''
  }

  constructor(props) {
    super(props);
    this.amountValueHandler = this.amountValueHandler.bind(this);
    this.tipValueHandler = this.tipValueHandler.bind(this);
  }

  amountValueHandler = (event) => {
    const currentAmountValue = parseFloat(event.target.value);
    this.setState({
      amountValue: currentAmountValue
    })
    console.log('Netto amount', currentAmountValue);
  }


  tipValueHandler = (event) => {
    const chooseTipValue = parseFloat(event.target.value);

    this.setState({
      tipValue: chooseTipValue
    })
    console.log('Tip amount', chooseTipValue);
  }


  countAmount = () => {
    let sum = this.state.amountValue + (this.state.amountValue * this.state.tipValue / 100);

    this.setState({
      amount: sum + ' euro to pay'
    })
    console.log(sum);
  }

  render() {
    const styles = {
      display: 'block',
      margin: '10px auto'
    }

    return (
      <div>
        <h1>
          BillAppClass
        </h1>
        <form>
          <input style={styles} placeholder='Enter amount' type="number" onChange={this.amountValueHandler} />
          <select style={styles} name="tip" id="tip" onChange={this.tipValueHandler}>
            <option value=' '>Choose tip value</option>
            <option value="5">5%</option>
            <option value="10">10%</option>
            <option value="15">15%</option>
            <option value="20">20%</option>
          </select>
          <button type='button' onClick={this.countAmount}>Count amount</button>
        </form>
        <p>Amount to pay with tip: {this.state.amount}</p>
      </div>
    )
  }
}

export default BillAppClass;