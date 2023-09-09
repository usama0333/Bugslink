import React from 'react';
import './App.css';
import pic from './asset/pic.jpg';

function App() {
  const companyName = 'Bugslink Technology';
  const contactInfo = {
    firstName: 'Hafiz',
    lastName: 'Abdullah',
    email: 'hafizabdullah7022@gmail.com',
    phoneNumber: '+923064607395',
  };
  const companyAddress = 'House 12, Street 17 Area Landhi Karachi, 75790, Pakistan ';

  return (
    <div className="App">
      <div className="header p-5 bg-slate-900 text-slate-50 text-2xl ">
        <h1>{companyName}</h1>
      </div>
      <div className=' flex flex-row justify-between mx-48 my-20 items-center ' >

      
      <div>
      <div className="contact-info">
        <div className="profile">
          <div className="name">
            <h2 className=' font-bold text-4xl pb-1 ' >{contactInfo.firstName} {contactInfo.lastName}</h2>
          </div>
        </div>
        <div className="details">
          <h3 className=' text-sm ' >Email: {contactInfo.email}</h3>
          <h3 className=' text-sm ' >Phone: {contactInfo.phoneNumber}</h3>
        </div>
      </div>
      <div className=' pt-2 ' >
        <h1 className='text-2xl font-bold py-1 ' >About Me</h1>
        <p className=' text-sm py-1 ' >Passionate Marketing Manager at Uber Eats,<br></br> dedicated to connecting people with delicious <br></br> food experiences. Expert in crafting <br></br> innovative marketing strategies that delight <br></br> customers and drive growth. Foodie <br></br> at heart, fueling the love for good eats worldwide.</p>
      </div>
      <div className="address">
        <h2 className=' font-bold text-2xl py-2 pt-3 ' >Address:</h2>
        <p className=' text-sm ' >{companyAddress}</p>
      </div>

      </div>
      <div>
      <img src={pic} className='w-96' alt="Profile" />
      </div>
      </div>
    </div>
  );
}

export default App;
