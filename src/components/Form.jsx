// import React from 'react'
// import { useState } from 'react'
// import './Form.css'

// const Form = () => {

//     const initial= [{
//         name: "",
//         email: "",
//         password: ""
    
//     }]
//       const [credentials, setCredentials] = useState(initial)

  
//     const onChange = (e) => {
//         setCredentials({...credentials, [e.target.name]:e.target.value})
    
//       }

//       const letcheck = () => {
//         console.log("this form id wksbsv")
//       }

//     return (

//         <>
// <div className="forme">

// <form  onSubmit={letcheck}>
//   {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}

//   <div className="row mb-4">
//     <div className="col">
//       <div className="form-outline">
//         <input type="text" id="form3Example1" className="form-control" onChange={onChange} />
//         <label className="form-label" htmlFor="form3Example1">First name</label>
//       </div>
//     </div>
//     <div className="col">
//       <div className="form-outline">
//         <input type="text" id="form3Example2" className="form-control" onChange={onChange} />
//         <label className="form-label" htmlFor="form3Example2">Last name</label>
//       </div>
//     </div>
//   </div>

//   {/* <!-- Email input --> */}
//   <div className="form-outline mb-4">
//     <input type="email" id="form3Example3" className="form-control" onChange={onChange} />
//     <label className="form-label" htmlFor="form3Example3">Email address</label>
//   </div>

//   {/* <!-- Password input --> */}
//   <div className="form-outline mb-4">
//     <input type="password" id="form3Example4" className="form-control" onChange={onChange} />
//     <label className="form-label" htmlFor="form3Example4">Password</label>
//   </div>

//   {/* <!-- Checkbox --> */}
//   <div className="form-check d-flex justify-content-center mb-4">
//     <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" default={'checked'}/>
//     <label className="form-check-label" htmlFor="form2Example33">
//       Subscribe to our newsletter
//     </label>
//   </div>

//   {/* <!-- Submit button --> */}
//   <button type="submit" className="btn btn-primary btn-block mb-4">SUBMIT</button>

// </form>
// </div>

//         </>
//     )
// }

// export default Form
