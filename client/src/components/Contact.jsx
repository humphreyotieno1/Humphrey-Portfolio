import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phoneNumber: '',
    message: '',
    agreed: false,
    attachment: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      attachment: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, message, attachment } = formData;

    if (!firstName || !lastName || !email || !message) {
      setMessage({ type: 'error', text: 'All required fields must be filled out.' });
      return;
    }

    setIsSubmitting(true);
    setMessage({ type: '', text: '' });

    const data = new FormData();
    for (const key in formData) {
      if (key === 'attachment' && !attachment) continue;
      data.append(key, formData[key]);
    }

    try {
      const response = await fetch('https://humphrey-portfolio-1.onrender.com/contact', {
        method: 'POST',
        body: data,
      });

      const result = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: result.message });
        setFormData({
          firstName: '',
          lastName: '',
          company: '',
          email: '',
          phoneNumber: '',
          message: '',
          agreed: false,
          attachment: null,
        });
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'An error occurred. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="py-14 font-sans" id='contact'>
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
          <div className="max-w-lg space-y-3 lg:py-72">
            <h3 className="text-indigo-600 font-semibold text-5xl">Contact Me</h3>
            <p className="dark:bg-gray-900 dark:text-gray-200 text-3xl font-semibold sm:text-4xl">
              Get in Touch with Me
            </p>
            <p className="dark:bg-gray-900 dark:text-gray-200">
              I am always open to new opportunities and collaborations. Feel free to reach out to me with any questions, comments, or project ideas you may have. I look forward to hearing from you!
            </p>
          </div>
          <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md dark:bg-gray-900 dark:text-gray-200">
            <form onSubmit={handleSubmit} className="space-y-5">
              {message.text && (
                <div className={`p-4 rounded-lg ${message.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                  {message.text}
                </div>
              )}
              <div className="flex flex-col">
                <label className="font-medium">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  disabled={isSubmitting}
                />
              </div>
              <div className="flex flex-col">
                <label className="font-medium">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  disabled={isSubmitting}
                />
              </div>
              <div className="flex flex-col">
                <label className="font-medium">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  disabled={isSubmitting}
                />
              </div>
              <div className="flex flex-col">
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  disabled={isSubmitting}
                />
              </div>
              <div className="flex flex-col">
                <label className="font-medium">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  disabled={isSubmitting}
                />
              </div>
              <div className="flex flex-col">
                <label className="font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  disabled={isSubmitting}
                ></textarea>
              </div>
              <div className="flex flex-col">
                <label className="font-medium">Attachment</label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  disabled={isSubmitting}
                />
                {formData.attachment && <p className="mt-2">{formData.attachment.name}</p>}
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white font-medium dark:bg-gray-600 dark:hover:bg-gray-700 bg-black hover:bg-blue-500 active:bg-indigo-600 rounded-lg duration-150"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
