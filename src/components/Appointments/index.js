import {Component} from 'react'

import {v4 as uuid4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

const initialappointmentsList = [
  {
    id: uuid4(),
    title: '',
    date: '',
    isStarred: false,
  },
]

class Appointments extends Component {
  state = {
    appointmentsList: initialappointmentsList,
    title: '',
    date: '',
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newAppointment = {
      id: uuid4(),
      title,
      date,
      isStarred: false,
    }

    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      title: '',
      date: '',
    }))
  }

  isStarredTrue = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(each => {
        if (id === each.id) {
          return {...each, isStarred: !each.isStarred}
        }
        return each
      }),
    }))
  }

  onClickIsStarred = () => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.filter(
        each => each.isStarred === true,
      ),
    }))
  }

  render() {
    const {appointmentsList, title, date} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="card-items-container">
            <form onSubmit={this.onAddAppointment}>
              <h1>Add Appointment</h1>
              <label htmlFor="Title" className="label-description">
                Title
              </label>
              <br />
              <input
                type="text"
                id="Title"
                placeholder="Title"
                value={title}
                onChange={this.onChangeTitle}
              />
              <br />
              <label htmlFor="date" className="label-description">
                DATE
              </label>
              <br />
              <input
                type="date"
                id="date"
                value={date}
                onChange={this.onChangeDate}
              />
              <br />
              <button type="submit" className="button">
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png "
              alt="appointments"
              className="image"
            />
          </div>

          <hr className="hr" />
          <div className="appointments-container">
            <h1>Appointments</h1>

            <button type="button" onClick={this.onClickIsStarred}>
              starred
            </button>
          </div>
          <ul className="list-container">
            {appointmentsList.map(each => (
              <AppointmentItem
                appointmentsList={each}
                key={each.id}
                isStarredTrue={this.isStarredTrue}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Appointments
