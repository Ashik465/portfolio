import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_lf836k7', 'template_5c37u19', form.current, 'IszzOlD30LT67n5qH')
          .then((result) => {
              console.log(result.text);
              // success message 
              Swal.fire({
                icon: 'success',
                title: 'Your message has been sent successfully',
                showConfirmButton: false,
                timer: 2000
                })
                form.current.reset();
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <div id="contact" className=' container mx-auto my-10'>
            <div className='text-center font-bold'>
                <h1 className='text-[#FFC107] text-3xl'>Contact me </h1>  
            </div>
           
           {/* form */}
           {/* <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> */}
     <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto bg-white p-6 rounded-md shadow-lg">
      <div className="mb-4">
        <label htmlFor="from_name" className="block text-gray-700 font-semibold mb-2">Name</label>
        <input type="text" name="from_name" id="from_name" className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500" />
      </div>
      <div className="mb-4">
        <label htmlFor="user_email" className="block text-gray-700 font-semibold mb-2">Email</label>
        <input type="email" name="user_email" id="user_email" className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500" />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
        <textarea name="message" id="message" rows="5" className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"></textarea>
      </div>
      <button type="submit" className="bg-[#FFC107] hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-500">
        Send
      </button>
    </form>

        </div>
    );
};

export default Contact;