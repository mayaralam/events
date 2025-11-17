import Nav from "../components/nav";
import Footer from "../components/footer";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import venue1 from "../assets/venue1.jpg";
import venue2 from "../assets/venue2.jpg";
import venue3 from "../assets/venue3.jpg";
import venue4 from "../assets/venue4.jpg";
import venue5 from "../assets/venue5.jpg";
import venue6 from "../assets/venue6.jpg";
import venue7 from "../assets/venue7.jpg";
import venue8 from "../assets/venue8.jpg";
import venue9 from "../assets/venue9.jpg";
import venue10 from "../assets/venue10.jpg";
import venue11 from "../assets/venue11.jpg";
export default function Events() {
  const [activeTab, setActiveTab] = useState("All Venues");

  const venues = [
    {
      name: "Marriott Mena House",
      location: "Giza, Cairo",
      capacity: 500,
      price: "4,000/day",
      image: venue1,
      type: "Conference",
      tags: ["Conference", "Corporate"],
    },
    {
      name: "Four Seasons Nile Plaza",
      location: "Garden City, Cairo",
      capacity: 400,
      price: "5,000/day",
      image: venue2,
      type: "Wedding",
      tags: ["Wedding", "Luxury"],
    },
    {
      name: "Royal Maxim Palace Kempinski",
      location: "New Cairo",
      capacity: 450,
      price: "4,500/day",
      image: venue3,
      type: "Wedding",
      tags: ["Wedding", "Luxury"],
    },
    {
      name: "The Nile Ritz-Carlton",
      location: "Downtown Cairo",
      capacity: 350,
      price: "5,500/day",
      image: venue4,
      type: "Conference",
      tags: ["Conference", "Corporate"]
    },
    {
      name: "JW Marriott Mirage Ballroom",
      location: "New Cairo",
      capacity: 300,
      price: "3,500/day",
      image: venue5,
      type: "Wedding",
      tags: ["Wedding", "Elegant"]
    },
    {
      name: "Dusit Thani LakeView",
      location: "New Cairo",
      capacity: 320,
      price: "3,000/day",
      image: venue6,
      type: "Conference",
      tags: ["Conference", "Business"]
    },
    {
      name: "Hilton King's Ranch",
      location: "Alexandria",
      capacity: 280,
      price: "2,500/day",
      image: venue7,
      type: "Social",
      tags: ["Social", "Outdoor"],
    },
    {
      name: "Al Masa Convention Center",
      location: "Nasr City, Cairo",
      capacity: 600,
      price: "4,000/day",
      image: venue8,
      type: "Conference",
      tags: ["Conference", "Large-scale"],
    },
    {
      name: "The Gabriel Hotel",
      location: "Heliopolis, Cairo",
      capacity: 200,
      price: "2,000/day",
      image: venue9,
      type: "Party",
      tags: ["Party", "Boutique"],
    },
    {
      name: "Steigenberger Alcazar",
      location: "Sharm El-Sheikh",
      capacity: 350,
      price: "3,500/day",
      image: venue10,
      type: "Wedding",
      tags: ["Wedding", "Beach"],
    },
    {
      name: "Old Cataract Hotel",
      location: "Aswan",
      capacity: 250,
      price: "3,000/day",
      image: venue11,
      type: "Social",
      tags: ["Social", "Historic"],
    },
  ];

  const categories = ["All Venues", "Wedding", "Conference", "Party", "Social"];

  const filteredVenues =
    activeTab === "All Venues"
      ? venues
      : venues.filter((venue) => venue.type === activeTab);

  const handleBooking = () => {
    toast.success("Booking confirmed");
  };

  const VenueCard = ({ venue }) => (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden container mx-auto px-4">
      <img src={venue.image} alt={venue.name} className="w-full h-66 transition-transform duration-300 ease-in-out hover:scale-105 object-cover" />
      <div className="p-4 space-y-2">
      <div className="flex gap-2">
        {venue.tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 rounded-full bg-gray-100 text-black text-sm font-medium hover:bg-gray-200 transition"
          >
            {tag}
          </span>
        ))}
      </div>

        <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400 mt-8">{venue.name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{venue.location}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">Capacity: {venue.capacity} guests</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">Price Per Day: EGP {venue.price} </p>
        <button
          onClick={handleBooking}
          className="cursor-pointer mt-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm"
        >
          Book Now
        </button>
      </div>
    </div>
  );

  return (
    <>
    <Nav />
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen p-6 ">
      <Toaster position="top-center" />
      <div className="flex justify-center mt-7 gap-4 overflow-x-auto border-b border-gray-300 dark:border-gray-700 pb-2 mb-10 container mx-auto px-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`text-sm md:text-base font-medium px-4 py-2 rounded-full transition-colors duration-200 cursor-pointer
              ${
                activeTab === category
                  ? "bg-purple-600 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Venue Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto px-4">
        {filteredVenues.map((venue, index) => (
          <VenueCard key={index} venue={venue} />
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
}

