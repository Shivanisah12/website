// import React, { useState } from 'react'

// const Contact = () => {
//  const [data, setData]=useState({
//   fullname: "",
//   phone: "",
//   email: "",
//   msg: ""
//  });

//  const InputEvent =(event)=>{
//     const {name, value} = event.target;

//     setData((preVal) => {
//       return{
//         ...preVal,
//         [name] : value, 
//       }; 
//     });
//  }
//   const formSubmit = (e) => {
//    e.preventDefault();
//    alert(
//     `My name is ${data.fullname}. My mobile number is ${data.phone}.My email id is ${data.email} and here's my message ${data.msg}.`
//    )
//   }
//   return (
//     <>
//       <div className='my-8'>
//         <h1 className='text-center'>Contact Us</h1>
//       </div>
//       <div className='container contact_div'>
//         <div className='row'>
//           <div className='col-md-6 col-10 mx-auto'>
//             <form onSubmit={formSubmit}>
//               <div class="mb-3">
//                 <label for="exampleFormControlInput1" class="form-label">Full Name</label>
//                 <input type="text" class="form-control" id="exampleFormControlInput1" 
//                 name="full Name"
//                 value={data.fullname}
//                 onChange={InputEvent}
//                 placeholder="Enter your name"
//                 defaultValue=""/>
//               </div>
//               <div class="mb-3">
//                 <label for="exampleFormControlInput1" class="form-label">Phone</label>
//                 <input type="number" class="form-control" id="exampleFormControlInput1" 
//                 name="Phone"
//                 value={data.phone}
//                 onChange={InputEvent}
//                 placeholder="mobile number" 
//                 defaultValue=""/>
//               </div>
//               <div class="mb-3">
//                 <label for="exampleFormControlInput1" class="form-label">Email address</label>
//                 <input type="email" class="form-control" id="exampleFormControlInput1" 
//                 name="Email address"
//                 value={data.email} 
//                 onChange={InputEvent}
//                 placeholder="name@example.com" 
//                 defaultValue=""/>
//               </div>
//               <div class="mb-3">
//                 <label for="exampleFormControlTextarea1" class="form-label">Message</label>
//                 <textarea 
//                  class="form-control" id="exampleFormControlTextarea1" rows="3"
//                  name="Message"
//                  value={data.msg}
//                  onChange={InputEvent}
//                  defaultValue=""
//                  ></textarea>
//               </div>
//               <div class="col-12">
//                 <button class="btn btn-outline-primary" type="submit">Submit form</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Contact

import React,{useState} from 'react';


const Contact = () => {
const [data, setData]=useState({
  fullname:'',
  phone:'',
  email:'',
  msg:'',

});

const InputEvent =(event)=>{
  const {name, value} = event.target;

  setData((preVal) =>{
    return{
      ...preVal,
      [name] : value,
    };
  });
}

  const formSubmit = (e) =>{
       e.preventDefault();
       alert(`My name is ${data.fullname}. My mobile no is ${data.phone} and My message is ${data.msg}.`)
  };
  return (
    <>
      <div className='my-10'>
        <h1 className='text-center'>Contact Us</h1>
      </div>
      <div className='container contact_div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Fullname
                </label>
                <input
                  type="name"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter your name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="phone number"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                  ></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">
                  Submit form
                  </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default Contact


