import React from "react";

class BillAppClass extends React.Component {

  state = {
    amountValue: 0,
    vat: 20,
    tipValue: '',
    amount: '',
    clicked: false
  }

  amountValueHandler = (event) => {
    const currentAmountValue = parseFloat(event.target.value) + (parseFloat(event.target.value) * parseFloat(this.state.vat) / 100);
    this.setState({
      amountValue: currentAmountValue + ' euro to pay',
    })
    console.log('currentAmountValue', currentAmountValue);
  }


  tipValueHandler = (event) => {
    const chooseTipValue = parseFloat(event.target.value);
    console.log('chooseTipValue', chooseTipValue);
    this.setState({
      tipValue: chooseTipValue + '%',
    })
    console.log('chooseTipValue', chooseTipValue);
    console.log('chooseTipValue', typeof chooseTipValue);
  }

  countAmount = () => {
    const sumWithTip = parseFloat(this.state.amountValue) + (parseFloat(this.state.amountValue) * parseFloat(this.state.tipValue) / 100);

    this.setState({
      amount: sumWithTip + ' euro to pay',
      clicked: !this.state.clicked
    })
    console.log('sumWithTip', sumWithTip);
  }

  render() {
    const styles = {
      display: 'block',
      margin: '10px auto'
    }


    if (this.state.clicked) {
      console.log(typeof this.state.tipValue);
      console.log(this.state.tipValue);
      return (
        <div>
          <h1>
            BillAppClass
          </h1>
          <p>Amount to pay without tip: {this.state.amountValue}</p>
          <p>Amount to pay with tip {this.state.tipValue}: {this.state.amount}</p>
        </div>
      )
    }
    // Jak uruchomic ponizszy warunek? 
    if (!this.state.tipValue && this.state.clicked) {
      console.log('this.state.tipValue', this.state.tipValue);
      return (
        <div>
          <h1>BillAppClass</h1>
          <p>You are @$$hole! Didn't give any tip!: {this.state.amountValue}</p>
          <p>Amount to pay without tip: {this.state.amountValue}</p>
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
            <option>Choose tip value</option>
            <option value="0">0%</option>
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