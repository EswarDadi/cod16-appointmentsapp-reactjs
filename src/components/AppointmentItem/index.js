import './index.css'

const AppointmentItem = props => {
  const {appointmentsList, isStarredTrue} = props
  const {title, date, id, isStarred} = appointmentsList

  const clickedIsStarred = () => {
    isStarredTrue(id)
  }
  const isStarredOrNot = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  return (
    <li className="list-items">
      <p>{title}</p>
      <button type="button" onClick={clickedIsStarred} className="button">
        <img src={isStarredOrNot} alt="star" data-testid="star" />
      </button>

      <p>{date}</p>
    </li>
  )
}
export default AppointmentItem
