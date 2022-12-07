import './index.css'
import HistoryItem from '../HistoryItem'

const Answer = props => {
  const {newList, deleteButtonClicked} = props
  const a = newList.length
  if (a === 0) {
    return (
      <div className="para_container">
        <p className="bottom_para">There is no history to show</p>
      </div>
    )
  }
  return (
    <ul className="bottom_main_container">
      {newList.map(eachItem => (
        <HistoryItem
          key={eachItem.id}
          eachItem={eachItem}
          deleteButtonClicked={deleteButtonClicked}
        />
      ))}
    </ul>
  )
}

export default Answer
