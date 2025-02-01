
import { FaLocationDot } from "react-icons/fa6";
import { TbPhoneFilled } from "react-icons/tb";
import { TbClockHour4Filled } from "react-icons/tb";




export default function Contact () {
  return (
   <div className="max-w-screen-xl container mx-auto pb-8 px-4">
 

 {/* Contact Info Section */}
<section className="mt-16 text-center px-4 md:px-32">
<h2 className="text-3xl font-bold">Get In Touch With Us</h2>
<p className="mt-4 text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum tempora libero aut, reiciendis, harum laboriosam quis minus quas maxime delectus sint dolores repudiandae, voluptate rerum nemo non corporis esse aspernatur?</p>
</section>

<div className="flex flex-col md:flex-row justify-between mt-12 gap-12 md:gap-16">
{/* Contact Details */}
<div className="flex flex-col gap-8">
<div className="flex items-center space-x-4 my-6">
  <div>
      <span className='flex'>
          <FaLocationDot size={25} className="text-4xl text-primary" />
          <h3 className="font-semibold text-xl ml-4">Address</h3>
      </span>
      <p className='ml-10'>
          238 5<sup>th</sup> SE Avenue,
          <br /> New York NY10000,
          <br /> United States
      </p>
  </div>
</div>
<div className="flex items-center space-x-4 my-6">
  <div>
      <span className='flex'>
          < TbPhoneFilled size={25} className="text-4xl text-primary" />
          <h3 className="font-semibold ml-4 text-lg">Phone</h3>
      </span>
      <p className='ml-10'>Mobile : +(84)546-6789</p>
      <p className='ml-10'>Hotline : +(84)546-6789</p>
  </div>
</div>
<div className="flex items-center space-x-4 my-6">
  <div>
      <span className='flex'>
          <TbClockHour4Filled  size={25} className="text-4xl text-primary" />
         
          <h3 className="ml-4 font-semibold text-lg">Working Time</h3>
      </span>
      <p className='ml-10'>Monday-Friday: 9:00 - 
          <br />22:00</p>
      <p className='ml-10'>Saturday-Sunday: 9:00 - 
          <br />21:00</p>
  </div>
</div>
</div>

{/* Contact Form Section */}
<div className="mt-16 bg-white rounded-lg p-8 md:w-1/2">
<form className="space-y-4">
  <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
      <input type="text" id="name" placeholder="Abc" className="w-full px-6 py-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
  </div>
  <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700"> Email Address</label>
      <input type="email" id="email" placeholder="Abc@def.com" className="w-full px-6 py-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
  </div>
  <div>
      <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
      <input type="text" id="subject" placeholder="This is optional" className="w-full px-6 py-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
  </div>
  <div>
      <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
      <textarea id="message" placeholder="Hi, I would like to ask about..." rows={4} className="w-full px-6 py-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
  </div>
</form>
<button type="submit" className="py-3 px-16 border hover:bg-yellow-800 border-black rounded-xl mt-8">Submit</button>
</div>
</div>

</div>

  );
}