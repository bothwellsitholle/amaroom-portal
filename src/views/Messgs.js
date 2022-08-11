import React from 'react'
import Message from './ui/Message'

const messages = [
  {
    id: 2000,
    title: 'Viewing Request',
    message:
      'Learmore Bango would like you to view the property listing on 13 street South Gate JHB',
    phone: '0732123114',
  },
  {
    id: 2001,
    title: 'Viewing Request',
    message:
      'James Dube would like you to view the property listing on 11 street Soweto JHB',
    phone: '0732123902',
  },
  {
    id: 2003,
    title: 'Viewing Request',
    message:
      'Learmore Bango would like you to view the property listing on 13 street South Gate JHB',
    phone: '0728923156',
  },
  {
    id: 2004,
    title: 'Viewing Request',
    message:
      'Amanda Cooper would like you to view the property listing on 24 Maryland Str, South Gate JHB',
    phone: '0732722123',
  },
]

const Messages = () => {
  var storedMessages= JSON.parse(localStorage.getItem('messages'))
  const [messagesData, setMessageData] = React.useState(
    storedMessages? storedMessages: messages,
  )


  const onApprove = (id) => {
    const filteredMessages = messagesData.filter(s => s.id !== id)
    setMessageData(filteredMessages)
    localStorage.setItem('messages', JSON.stringify(filteredMessages))

    let storedAppointments = JSON.parse(localStorage.getItem('appointments'))
    let appointment = messagesData.filter(s => s.id === id)


    if (storedAppointments) {
      storedAppointments.push(appointment)
      localStorage.setItem('appointments', JSON.stringify(storedAppointments))
    } else {
      localStorage.setItem('appointments', JSON.stringify([appointment]))
    }
  }
  return (
    <div>
      {messagesData.map((item) =>(
        <Message
        key={item.id}
        title={item.title}
        message={item.message}
        id={item.id}
        phone={item.phone}
        onApprove={onApprove}
      />
      ))}
    </div>
  )
}

export default Messages
