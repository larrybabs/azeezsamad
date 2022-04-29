import React from 'react';

const Contact = () => {
  return (
    <div  name="contact" className="w-full h-screen bg-[#1b1188] flex justify-center items-center p-4">
      <form method="POST" action="https://getform.io/f/00f5d63f-97e3-4e26-82c3-4d3126d229a4" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
            <p className="text-4xl inline border-b-4 border-purple-600 font-bold text-gray-300">Contact Me </p>
            <p className="text-gray-300 py-4">Submit the form or send me an email - azeezsamad88@yahoo.com</p>
        </div>
        <input className="p-2 outline-none" type="text" placeholder="Name" name="name" />
        <input className="my-4 p-2 outline-none" type="email" placeholder="Email" name="email" />
        <textarea className="p-2 outline-none" name="message" rows="10" placeholder="Enter message"></textarea>
        <button className="py-3 px-4 my-8 mx-auto text-white border-2 flex items-center hover:bg-purple-600 hover:border-purple-600">Let's Work</button>
      </form>
    </div>
  );
}

export default Contact;
