import React from 'react'
import "./student.css";

const AddStudent = () => {
  return (
  <>
  <div className="student-form-container">
    <form className='student-form'>
        <h2 className='a-2'>Add Student</h2>
        <div className="form-group">
            <label htmlFor="roll" className='label'>Roll No</label>
            <input type="text" id="roll"name="roll" placeholder='Enter Your Roll Num'/>
        </div>
        <div className="form-group">
            <label htmlFor="username" className='label'>User Name</label>
            <input type="text" id="username"name="username" placeholder='Enter Your User Name '
            />
        </div>
        <div className="form-group">
            <label htmlFor="grade" className='label'>Grade</label>
            <input type="text" id="grade"name="grade" placeholder='Enter Your Grade'/>
        </div>
        <div className="form-group">
            <label htmlFor="password" className='label'>password</label>
            <input type="password" id="password"name="password" placeholder='Enter your Password'/>
        </div>
        <button type='submit' className='butt-'>Register</button>
    </form>
  </div>
  </>
  )
}

export default AddStudent