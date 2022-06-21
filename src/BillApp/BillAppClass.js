import React from "react";

class BillAppClass extends React.Component {

  state = {
    amountValue: 0,
    vat: 20,
    amountValueWithVat: '',
    tipValue: '',
    amount: '',
    clicked: false
  }

  amountValueHandler = (event) => {
    const currentAmountValue = parseFloat(event.target.value);
    this.setState({
      amountValue: currentAmountValue
    })
  }


  tipValueHandler = (event) => {
    const chooseTipValue = parseFloat(event.target.value);

    this.setState({
      tipValue: chooseTipValue
    })
  }


  countAmount = () => {
    const sumWithTip = this.state.amountValue + (this.state.amountValue * this.state.tipValue / 100);
    const sumWithVat = parseFloat(this.state.amountValue) + (parseFloat(this.state.amountValue) * parseFloat(this.state.vat)) / 100;

    this.setState({
      amount: sumWithTip + ' euro to pay',
      amountValueWithVat: sumWithVat,
      clicked: !this.state.clicked
    })
  }

  render() {
    const styles = {
      display: 'block',
      margin: '10px auto'
    }

    if (this.state.clicked) {
      return (
        <div>
          <h1>
            BillAppClass
          </h1>
          <p>Amount to pay with tip: {this.state.amount}</p>
          <p>Amount to pay with VAT: {this.state.amountValueWithVat}</p>
        </div>
      )
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
      </div>
    )
  }
}

export default BillAppClass;