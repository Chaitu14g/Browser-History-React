import './index.css'

const HistoryItem = props => {
  const {eachItem, deleteButtonClicked} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachItem
  const deleteButton = () => {
    deleteButtonClicked(id)
  }
  return (
    <li className="list_container">
      <p className="time">{timeAccessed}</p>
      <div className="update_small wrapNot big_container update_small_one">
        <img className="icon" alt="domain logo" src={logoUrl} />
        <div className="update_small big_container update_small_extra">
          <p className="list_heading">{title}</p>
          <p className="list_para">{domainUrl}</p>
        </div>
        <button
          type="button"
          className="button"
          onClick={deleteButton}
          id="delete"
        >
          <img
            className="list_delete"
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            onClick={deleteButton}
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
