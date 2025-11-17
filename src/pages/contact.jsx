import Nav from "../components/nav";
import bg from "../assets/bg.png";
import { Toaster, toast } from "react-hot-toast";
import Footer from "../components/footer";
export default function contact() {
    const handleSubmit = (event) => {
    event.preventDefault(); 
    toast.success("Your request has been submitted!");
     };
  return (
    <>
      <Nav />
      <Toaster position="top-center" />
      <div
        className="h-135 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="container mx-auto flex flex-col items-center gap-3 px-4">
          <h3 className="mt-58 font-bold text-xl text-white text-shadow-lg/70">
            our Perfect Event Starts Now
          </h3>
          <h2 className="font-medium text-lg text-white text-shadow-lg/70 text-center">
            Connect with our team and turn your ideas into a celebration to remember.
          </h2>
        </div>
      </div>
      <div className="container mx-auto flex flex-col items-center gap-3 px-4">
        <div className="flex flex-col items-center gap-3 mt-8">
          <h6 className="dark:text-purple-400 text-purple-500 text-lg">
            Get In Touch
          </h6>
          <p className=" text-xl mb-7">
            Ready to start planning your dream event? Contact us today for a
            consultation
          </p>
        </div>

        <div className="items-center grid md:grid-cols-2 grid-cols-1 md:gap-90 gap-0">
          <div className="mb-5 dark:text-white text-black p-6 mt-12 rounded-lg shadow-lg dark:shadow-2xl md:w-3xl w-auto">
            <h2 className="text-2xl font-bold mb-2">Book Your Event</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
            <form  onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full border border-gray-300 dark:border-gray-700 rounded p-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full border border-gray-300 dark:border-gray-700 rounded p-2 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">Phone</label>
                  <input
                    type="tel"
                    placeholder="(123) 456-7890"
                    className="w-full border border-gray-300 dark:border-gray-700 rounded p-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Event Type</label>
                  <input
                    type="text"
                    placeholder="e.g., Wedding, Birthday"
                    className="w-full border border-gray-300 dark:border-gray-700 rounded p-2 text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm mb-1">Preferred Date</label>
                <input
                  type="date"
                  className="w-full border border-gray-300 dark:border-gray-700 rounded p-2 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Message</label>
                <textarea
                  placeholder="Tell us about your event..."
                  rows="4"
                  className="w-full border border-gray-300 dark:border-gray-700 rounded p-2 text-sm"
                />
              </div>
              <button
                type="submit"
                
                className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md transition cursor-pointer text-sm "
              >
                Submit Request
              </button>
            </form>
          </div>
          <div>
            <section className=" text-gray-800 dark:text-white py-12 px-4 md:px-8 lg:px-16 flex flex-col gap-6 max-w-lg shadow-lg dark:shadow-2xl">
              <div className="flex gap-3 border border-gray-200 dark:border-gray-700 rounded-lg p-4 ">
                <div>
                  <svg
                    className="text-3xl bg-purple-100 text-purple-600 py-2 px-2 rounded-md"
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="text-sm mb-2 dark:text-gray-50 text-gray-800 font-light">
                    Phone
                  </h3>

                  <p className="text-sm">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex gap-3 border border-gray-200 dark:border-gray-700 rounded-lg p-4 ">
                <div>
                  <svg
                    className="text-3xl bg-purple-100 text-purple-600 py-2 px-2 rounded-md"
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path
                        stroke-dasharray="64"
                        stroke-dashoffset="64"
                        d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"
                      >
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          dur="0.6s"
                          values="64;0"
                        />
                      </path>
                      <path
                        stroke-dasharray="24"
                        stroke-dashoffset="24"
                        d="M3 6.5l9 5.5l9 -5.5"
                      >
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          begin="0.6s"
                          dur="0.2s"
                          values="24;0"
                        />
                      </path>
                    </g>
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm  mb-2 dark:text-gray-50 text-gray-800 font-light">
                    Email
                  </h3>
                  <p className="text-sm">hello@eventify.com</p>
                </div>
              </div>
              <div className="flex gap-3 border border-gray-200 dark:border-gray-700 rounded-lg p-4 ">
                <div>
                  <svg
                    className="text-3xl bg-purple-100 text-purple-600 py-2 px-2 rounded-md"
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="currentColor"
                      d="M16 18a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5m0-8a3 3 0 1 0 3 3a3.003 3.003 0 0 0-3-3"
                    />
                    <path
                      fill="currentColor"
                      d="m16 30l-8.436-9.949a35 35 0 0 1-.348-.451A10.9 10.9 0 0 1 5 13a11 11 0 0 1 22 0a10.9 10.9 0 0 1-2.215 6.597l-.001.003s-.3.394-.345.447ZM8.813 18.395s.233.308.286.374L16 26.908l6.91-8.15c.044-.055.278-.365.279-.366A8.9 8.9 0 0 0 25 13a9 9 0 1 0-18 0a8.9 8.9 0 0 0 1.813 5.395"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm  mb-2 dark:text-gray-50 text-gray-800 font-light">
                    Location
                  </h3>
                  <p className="text-sm">
                    123 Event Street, New York, NY 10001
                  </p>
                </div>
              </div>
              <div className="flex gap-3 border border-gray-200 dark:border-gray-700 rounded-lg p-4 ">
                <div>
                  <svg
                    className="text-3xl bg-purple-100 text-purple-600 py-2 px-2 rounded-md"
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 14a1 1 0 1 0-1-1a1 1 0 0 0 1 1m5 0a1 1 0 1 0-1-1a1 1 0 0 0 1 1m-5 4a1 1 0 1 0-1-1a1 1 0 0 0 1 1m5 0a1 1 0 1 0-1-1a1 1 0 0 0 1 1M7 14a1 1 0 1 0-1-1a1 1 0 0 0 1 1M19 4h-1V3a1 1 0 0 0-2 0v1H8V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9h16Zm0-11H4V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1ZM7 18a1 1 0 1 0-1-1a1 1 0 0 0 1 1"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm mb-2 dark:text-gray-50 text-gray-800 font-light">
                    Hours
                  </h3>
                  <p className="text-sm">
                    Mon - Fri: 9AM - 6PM
                    <br />
                    Sat: 10AM - 4PM
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
        
    <div className="bg-violet-600 text-white rounded-lg p-6 md:w-5xl w-md mb-7 mx-auto shadow-md">
      <h3 className="text-xl font-semibold mb-2">Need Help?</h3>
      <p className="text-sm mb-4">
        Our team is here to assist you in planning the perfect event.
      </p>
      <p className="text-xs text-white/80">
        <strong>Average response time:</strong> 2 hours
      </p>
    </div>
  
      </div>
      <Footer />
    </>
  );
}
