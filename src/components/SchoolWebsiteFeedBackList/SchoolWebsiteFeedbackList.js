import { Card } from 'antd'
import React from 'react'
import { FeedbackData } from '../../constants/FeedbackData'
import {ImQuotesLeft} from 'react-icons/im'
import './SchoolWebsiteFeedbackList.scss'

export const SchoolWebsiteFeedbackList = () => {
  return (
    <div className='feedback-list-container'>
        {FeedbackData.map(each => (
            <Card className='feedback-list-item-container'>
                <p className='feedback-list-item-description'>
                    {each.description}
                </p>
                <h1 className='feedback-list-item-name'>
                    {each.name}
                </h1>
                <ImQuotesLeft className='feedback-list-item-icon'/>
            </Card>
        ))}
    </div>
  )
}
