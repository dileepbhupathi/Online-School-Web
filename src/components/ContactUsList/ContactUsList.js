import React from 'react'
import { ContactUsData } from '../../constants/ContactUsData'
import "./ContactUsList.scss"

export const ContactUsList = () => {
  return (
    <div className='contact-us-list-container'>
        {
            ContactUsData.map(each => (
                <div className='contact-us-list-item-container'>
                    <h1 className='contact-us-list-item-city'>
                        {each.city}
                    </h1>
                    <p className='contact-us-list-item-address'>
                        {each.address}
                    </p>
                </div>
            ))
        }
         <p className="contact-us-anchor">
          Images from{" "}
          <a
            href="https://www.freepik.com/photos/woman"
            className="contact-us-freepik-anchor"
          >
            Freepik
          </a>
        </p>
    </div>
  )
}
