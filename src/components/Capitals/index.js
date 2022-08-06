import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

console.log(countryAndCapitalsList)

// Write your code here

class Capitals extends Component {
  state = {activeCapitalId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  getCountryId = () => {
    const {activeCapitalId} = this.state

    const updatedCountryDisplay = countryAndCapitalsList.find(
      eachValue => eachValue.id === activeCapitalId,
    )
    return updatedCountryDisplay.country
  }

  render() {
    const {activeCapitalId} = this.state
    const country = this.getCountryId()

    return (
      <div className="app-container">
        <div className="card-container">
          <div className="title-container">
            <h1 className="heading">Countries And Capitals</h1>
            <div className="question-container">
              <select
                className="select-option"
                onChange={this.onChangeCapital}
                value={activeCapitalId}
              >
                {countryAndCapitalsList.map(eachValue => (
                  <option
                    className="option"
                    value={eachValue.id}
                    key={eachValue.id}
                  >
                    {eachValue.capitalDisplayText}
                  </option>
                ))}
              </select>
              <p className="description">is capital of which country?</p>
            </div>
            <p className="country">{country}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Capitals
