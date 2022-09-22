import {Component} from 'react'
import './index.css'
import HistoryItems from '../HistoryItems'

class SearchHistory extends Component {
  state = {userInput: ''}

  onUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  render() {
    const {initialHistoryList} = this.props
    const {userInput} = this.state
    const filteredList = initialHistoryList.filter(eachHistory =>
      eachHistory.domainUrl.includes(userInput),
    )
    return (
      <div>
        <nav className="navbaar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png "
            alt="app logo"
            className="app-logo"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            alt="search"
            className="search-image"
          />
          <input
            type="search"
            className="input-class"
            placeholder="Search History"
            onChange={this.onUserInput}
          />
        </nav>
        <ul className="lists-cont" placeholder="There is no history to show">
          {filteredList.map(eachHistoryList => (
            <HistoryItems
              eachHistoryList={eachHistoryList}
              key={eachHistoryList.id}
              onDeleteHistory={this.onDeleteHistory}
            />
          ))}
          {filteredList.length < 1 ? <p>There is no history to show</p> : ''}
        </ul>
      </div>
    )
  }
}
export default SearchHistory
