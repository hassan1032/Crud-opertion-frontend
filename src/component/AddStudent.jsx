import React from 'react'
import "./student.css";

const AddStudent = () => {
  return (
  <>
  <div className="student-form-container">
    <form className='student-form'>
        <h2 className='a-2'>Add Student</h2>
        <div className="form-group">
            <label htmlFor="roll">Roll No</label>
            <input type="text" id="roll"name="roll"/>
        </div>
        <div className="form-group">
            <label htmlFor="username">User Name</label>
            <input type="text" id="username"name="username"/>
        </div>
        <div className="form-group">
            <label htmlFor="grade">Grade</label>
            <input type="text" id="grade"name="grade"/>
        </div>
        <div className="form-group">
            <label htmlFor="password">password</label>
            <input type="password" id="password"name="password"/>
        </div>
        <button type='submit' className='butt-'>Register</button>
    </form>
  </div>
  </>
  )
}

export default AddStudent