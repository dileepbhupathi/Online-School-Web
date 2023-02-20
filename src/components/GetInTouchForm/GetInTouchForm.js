import { Button, Form, Input } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React from 'react'
import './GetInTouchForm.scss'

export const GetInTouchForm = () => {
  return (
    <Form className='get-in-touch-form'>
         <Form.Item
        label="Name"
        name="name"
      >
        <Input  placeholder='Enter your Name '/>
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label="Email"
      >
        <Input placeholder='Enter a valid email address'/>
      </Form.Item>
      <Form.Item label="How Can we help?">
          <TextArea rows={5} />
        </Form.Item>
        <Button className='get-in-touch-form-button'>SUBMIT</Button>
    </Form>
  )
}
