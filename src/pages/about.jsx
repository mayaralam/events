import Nav from "../components/nav";
import bg from "../assets/bg.png";
import story from "../assets/story.png";
import foot from "../assets/foot.png";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
export default function about() {
  const navigate = useNavigate();
  const testimonials = [
    {
      name: "Sarah Johnson",
      event: "Wedding",
      text: "Eventify made our wedding day absolutely perfect! Every detail was meticulously planned and executed. We couldn't have asked for a better team.",
    },
    {
      name: "Mostafa Mohamed",
      event: "Corporate Event",
      text: "Our annual company gala was a huge success thanks to Eventify. Professional, creative, and incredibly organized. Highly recommend!",
    },
    {
      name: "Amany Anwar",
      event: "Birthday Party",
      text: "They turned my daughter's sweet sixteen into a magical evening. The attention to detail and creativity exceeded all our expectations!",
    },
  ];
  const values = [
    {
      title: "Passion for Perfection",
      description:
        "We care deeply about every event, treating each celebration as if it were our own.",
      icon: (
        <svg
          className="bg-purple-100 text-purple-600 rounded-sm"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 72 72"
        >
          <path
            fill="#8c27de"
            d="M59.5 25c0-6.904-5.596-12.5-12.5-12.5a12.5 12.5 0 0 0-11 6.56a12.5 12.5 0 0 0-11-6.56c-6.904 0-12.5 5.596-12.5 12.5c0 2.97 1.04 5.694 2.77 7.839l-.004.003L36 58.54l20.734-25.698l-.004-.003A12.44 12.44 0 0 0 59.5 25"
          />
          <path
            fill="none"
            stroke="#000"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="2"
            d="M59.5 25c0-6.904-5.596-12.5-12.5-12.5a12.5 12.5 0 0 0-11 6.56a12.5 12.5 0 0 0-11-6.56c-6.904 0-12.5 5.596-12.5 12.5c0 2.97 1.04 5.694 2.77 7.839l-.004.003L36 58.54l20.734-25.698l-.004-.003A12.44 12.44 0 0 0 59.5 25z"
          />
        </svg>
      ),
    },
    {
      title: "Trust & Transparency",
      description:
        "Honest pricing, verified venues, and genuine reviews you can count on.",
      icon: (
        <svg
          className="bg-purple-100 text-purple-600 rounded-sm"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
        >
          <g fill="none">
            <path
              fill="#9100ff"
              d="M3.9 5.6L12 3v18c-5.786-2.4-8.1-7-8.1-9.6z"
            />
            <path
              fill="url(#SVGcWCQxbLx)"
              d="M20.1 5.6L12 3v18c5.786-2.4 8.1-7 8.1-9.6z"
            />
            <defs>
              <linearGradient
                id="SVGcWCQxbLx"
                x1="17.948"
                x2="11.967"
                y1="1.74"
                y2="20.797"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".02" stop-color="#8e5da0" />
                <stop offset=".08" stop-color="#c300ff" />
                <stop offset=".16" stop-color="#d448ff" />
                <stop offset=".42" stop-color="#c300ff" />
                <stop offset=".68" stop-color="#9765bc" />
                <stop offset=".9" stop-color="#9100ff" />
              </linearGradient>
            </defs>
          </g>
        </svg>
      ),
    },
    {
      title: "Attention to Detail",
      description:
        "From amenities to ambiance, we ensure every venue detail is accurately represented.",
      icon: (
        <svg
          className="bg-purple-100 text-purple-600 rounded-sm"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 20 20"
        >
          <path
            fill="#c014dd"
            d="M7.398 12.809a1.04 1.04 0 0 0 1.204-.003c.178-.13.313-.31.387-.518l.447-1.373a2.34 2.34 0 0 1 1.477-1.479l1.391-.45a1.045 1.045 0 0 0-.044-1.98l-1.375-.448a2.34 2.34 0 0 1-1.48-1.477l-.452-1.388a1.044 1.044 0 0 0-1.973.017l-.457 1.4a2.34 2.34 0 0 1-1.44 1.45l-1.39.447a1.045 1.045 0 0 0 .016 1.974l1.374.445a2.33 2.33 0 0 1 1.481 1.488l.452 1.391c.072.204.206.38.382.504m.085-7.415l.527-1.377l.44 1.377a3.33 3.33 0 0 0 2.117 2.114l1.406.53l-1.382.447a3.34 3.34 0 0 0-2.115 2.117l-.523 1.378l-.449-1.379a3.34 3.34 0 0 0-.8-1.31a3.4 3.4 0 0 0-1.312-.812l-1.378-.522l1.386-.45a3.36 3.36 0 0 0 1.29-.813a3.4 3.4 0 0 0 .793-1.3m6.052 11.457a.806.806 0 0 0 1.226-.398l.248-.762a1.1 1.1 0 0 1 .26-.42c.118-.12.262-.208.42-.26l.772-.252a.8.8 0 0 0-.023-1.52l-.764-.25a1.08 1.08 0 0 1-.68-.678l-.252-.773a.8.8 0 0 0-1.518.01l-.247.762a1.07 1.07 0 0 1-.665.679l-.773.252a.8.8 0 0 0 .008 1.518l.763.247c.16.054.304.143.422.261c.119.119.207.263.258.422l.253.774a.8.8 0 0 0 .292.388m-.913-2.793L12.443 14l.184-.064a2.11 2.11 0 0 0 1.3-1.317l.058-.178l.06.181a2.08 2.08 0 0 0 1.316 1.316l.195.063l-.18.06a2.08 2.08 0 0 0-1.317 1.32l-.059.181l-.058-.18a2.08 2.08 0 0 0-1.32-1.323"
          />
        </svg>
      ),
    },
    {
      title: "Customer First",
      description:
        "Your satisfaction drives everything we do, with support available every step of the way.",
      icon: (
        <svg
          className="bg-purple-100 text-purple-600 rounded-sm"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 48 48"
        >
          <g
            fill="#a92fff"
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
          >
            <path d="M24 20C27.866 20 31 16.866 31 13C31 9.13401 27.866 6 24 6C20.134 6 17 9.13401 17 13C17 16.866 20.134 20 24 20Z" />
            <path d="M6 40.8V42H42V40.8C42 36.3196 42 34.0794 41.1281 32.3681C40.3611 30.8628 39.1372 29.6389 37.6319 28.8719C35.9206 28 33.6804 28 29.2 28H18.8C14.3196 28 12.0794 28 10.3681 28.8719C8.86278 29.6389 7.63893 30.8628 6.87195 32.3681C6 34.0794 6 36.3196 6 40.8Z" />
          </g>
        </svg>
      ),
    },
  ];
  return (
    <>
      <Nav />
      <div
        className="h-135 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="container mx-auto flex flex-col items-center gap-3 px-4">
          <h3 className="mt-58 font-bold text-2xl text-white text-shadow-lg/70">
            About Eventify
          </h3>
          <h2 className="font-medium text-lg text-white text-shadow-lg/70">
            We're passionate about transforming your celebrations into
            unforgettable experiences by
          </h2>
          <h2 className="font-medium text-lg text-white text-shadow-lg/70">
            connecting you with the perfect venues for every occasion.
          </h2>
        </div>
      </div>
      <div className="container mx-auto px-4 ">
        <div className="flex flex-col items-center gap-3 mt-10">
          <h6 className="dark:text-purple-400 text-purple-500 text-lg">
            What Our Clients Say
          </h6>
          <p className=" text-xl mb-7">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <section className=" py-12 px-4 md:px-8 lg:px-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <span className="text-yellow-400 text-xl">★★★★★</span>
                </div>
                <p className="text-gray-700 mb-4">{t.text}</p>
                <div className="text-sm text-gray-500 font-semibold">
                  {t.name}
                </div>
                <div className="text-xs text-gray-400">{t.event}</div>
              </div>
            ))}
          </div>
        </section>
        <div className="flex justify-center items-center mt-12 gap-10 flex-wrap mb-12">
          <div className="flex flex-col max-w-xl">
            <h1 className="mb-5 text-2xl font-bold ">Our Story</h1>
            <p className="text-lg text-gray-500 dark:text-gray-300">
              Founded in 2018, VenueBook was born from a simple frustration:
              finding the perfect venue for special events was unnecessarily
              complicated. Our founder, after spending weeks searching for a
              wedding venue, realized there had to be a better way.
              <p className="text-lg text-gray-500 dark:text-gray-300 mb-5 mt-5">
                What started as a small database of local venues has grown into
                the leading platform connecting event planners, individuals, and
                businesses with thousands of exceptional spaces across the
                country.
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-300">
                Today, we've helped over 50,000 clients find their perfect
                venue, from intimate birthday parties to grand corporate events
                and dream weddings. Every booking brings us joy, knowing we've
                played a small part in creating lasting memories.
              </p>
            </p>
          </div>
          <img src={story} className="w-[550px] h-[62vh] rounded-2xl" />
        </div>
        <div className="flex flex-col items-center gap-3 mt-17">
          <h6 className="dark:text-purple-400 text-purple-500 text-lg">
            Our Core Values
          </h6>
          <p className="text-lg mb-5">
            These principles guide every decision we make and every interaction
            we have with our clients and venue partners.
          </p>
        </div>

        <section className="text-gray-800 py-12 px-4 md:px-8 lg:px-16 mb-7">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm text-center"
              >
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-medium mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600 ">{value.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div
        className="h-100 bg-cover bg-center"
        style={{ backgroundImage: `url(${foot})` }}
      >
        <div className="container mx-auto flex flex-col items-center gap-3 px-4">
          <h3 className="mt-35  text-xl text-white ">
            Ready to Find Your Perfect Venue?
          </h3>
          <h2 className=" text-lg text-white ">
            Join thousands of satisfied clients who've discovered their ideal
            event space through VenueBook. Let's make your next
          </h2>
          <h2 className=" text-lg text-white ">celebration extraordinary.</h2>
          <div className="flex gap-5 text-white mt-6 items-center pb-10">
            <button
              onClick={() => navigate("/events")}
              className="bg-white text-blue-600 px-7 py-3 font-bold cursor-pointer rounded-lg flex items-center justify-center gap-4"
            >
              Browse Venues
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="oklch(54.6% 0.245 262.881)"
                  d="M13.47 8.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H6.5a.75.75 0 0 1 0-1.5h9.69z"
                />
              </svg>
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="opacity-90 shadow-2xl bg-transparent text-purple-200 border-2 border-purple-300 px-7 py-2.5 font-bold cursor-pointer rounded-lg"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <Footer />

      {/* <aside className="w-full md:w-80 bg-white text-black border-l border-gray-200 p-6 shadow-lg fixed right-0 top-0 h-screen overflow-y-auto z-50">
      <h2 className="text-xl font-bold text-gray-800 mb-2">Book Your Event</h2>
      <p className="text-sm text-gray-600 mb-4">Fill out the form and we'll reply within 24 hours</p>

      
      <form className="space-y-3 mb-6">
        <input type="text" placeholder="Your name" className="w-full border rounded px-3 py-2 text-sm" />
        <input type="email" placeholder="your@email.com" className="w-full border rounded px-3 py-2 text-sm" />
        <input type="tel" placeholder="(123) 456-7890" className="w-full border rounded px-3 py-2 text-sm" />
        <input type="text" placeholder="e.g., Wedding, Birthday" className="w-full border rounded px-3 py-2 text-sm" />
        <input type="date" className="w-full border rounded px-3 py-2 text-sm" />
        <textarea placeholder="Tell us about your event..." rows="3" className="w-full border rounded px-3 py-2 text-sm" />
        <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition text-sm">Submit Request</button>
      </form>

      <div className="text-sm text-gray-700 space-y-2">
        <div><strong>Phone:</strong> (555) 123-4567</div>
        <div><strong>Email:</strong> hello@eventify.com</div>
        <div><strong>Location:</strong> 123 Event Street, New York, NY 10001</div>
        <div>
          <strong>Hours:</strong><br />
          Mon - Fri: 9AM - 6PM<br />
          Sat: 10AM - 4PM
        </div>
      </div>
    </aside> */}
    </>
  );
}
