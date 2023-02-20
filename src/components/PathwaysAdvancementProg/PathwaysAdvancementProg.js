import { Card } from 'antd'
import React from 'react'
import { PathwaysAdvancementsData } from '../../constants/PathwaysAdvancementData'
import './PathwaysAdvancementProg.scss'
import {BsArrowRight} from 'react-icons/bs'

export const PathwaysAdvancementProg = () => {
  return (
    <div className='pathways-advancement-prog-list-container'>
      {PathwaysAdvancementsData.map(eachItem => (
        <Card className='pathways-advancement-prog-container'>
          <h1 className='pathways-advancement-prog-titles'>{eachItem.title}</h1>
          <div className='break'></div>
          <p className='pathways-advancement-prog-context'>{eachItem.context}</p>
          <div className='arrow-icon-container'>
          <BsArrowRight className='arrow-icon'/>
          </div>
        </Card>
      ))}
    </div>
  )
}
