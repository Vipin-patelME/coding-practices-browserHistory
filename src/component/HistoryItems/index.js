import './index.css'

const HistoryItems = props => {
  const {eachHistoryList, onDeleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachHistoryList

  const ondelete = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="items-list">
      <div className="list-content-cont">
        <p className="items-para">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="logo" />
        <p className="title">{title}</p>
        <p>{domainUrl}</p>
      </div>
      <button type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          onClick={ondelete}
        />
      </button>
    </li>
  )
}
export default HistoryItems
