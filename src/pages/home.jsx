import Nav from "../components/nav.jsx";
import bcg from "../assets/bcg.png";
import event1 from "../assets/event1.jpg";
import event2 from "../assets/event2.jpg";
import event3 from "../assets/event3.jpg";
import event4 from "../assets/event4.jpg";
import event5 from "../assets/event5.jpg";
import event6 from "../assets/event6.jpg";
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";
import gallery6 from "../assets/gallery6.jpg";
import { Card } from "flowbite-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
export default function Home() {
  const navigate = useNavigate();
  const [event, setEvent] = useState([
    {
      image: event1,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 128 128"
        >
          <path
            fill="#ab47bc"
            d="M93.96 8.97C72.05 8.97 64 31.35 64 31.35S56.06 8.97 33.99 8.97c-16.58 0-35.48 13.14-28.5 43.01s58.56 67.08 58.56 67.08s51.39-37.21 58.38-67.08c6.98-29.87-10.56-43.01-28.47-43.01"
          />
          <path
            fill="#8e24aa"
            d="M30.61 11.2c17.2 0 25.74 18.49 28.5 25.98c.39 1.07 1.88 1.1 2.33.06l2.52-5.88C60.41 20.01 50.65 8.97 33.99 8.97c-6.9 0-14.19 2.28-19.86 7.09c5.01-3.29 10.88-4.86 16.48-4.86m63.35-2.23c-5.29 0-9.77 1.54-13.53 3.85c2.64-1.02 5.56-1.62 8.8-1.62c16.21 0 30.72 12.29 24.17 40.7c-5.62 24.39-38.46 53.98-48.49 65.27c-.64.72-.86 1.88-.86 1.88s51.39-37.21 58.38-67.08c6.98-29.86-11.9-43-28.47-43"
          />
          <path
            fill="#ce93d8"
            d="M17 24.82c3.75-4.68 10.45-8.55 16.13-4.09c3.07 2.41 1.73 7.35-1.02 9.43c-4 3.04-7.48 4.87-9.92 9.63c-1.46 2.86-2.34 5.99-2.79 9.18c-.18 1.26-1.83 1.57-2.45.46c-4.22-7.48-5.42-17.78.05-24.61m60.13 9.84c-1.76 0-3-1.7-2.36-3.34c1.19-3.02 2.73-5.94 4.58-8.54c2.74-3.84 7.95-6.08 11.25-3.75c3.38 2.38 2.94 7.14.57 9.44c-5.1 4.93-11.51 6.19-14.04 6.19"
          />
        </svg>
      ),
      name: "Weddings",
      details:
        "Elegant and romantic weddings tailored to your love story, from intimate ceremonies to grand receptions.",
    },
    {
      image: event2,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 256 256"
        >
          <path
            fill="currentColor"
            d="M216 58h-42V48a22 22 0 0 0-22-22h-48a22 22 0 0 0-22 22v10H40a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V72a14 14 0 0 0-14-14M94 48a10 10 0 0 1 10-10h48a10 10 0 0 1 10 10v10H94Zm68 22v132H94V70ZM38 200V72a2 2 0 0 1 2-2h42v132H40a2 2 0 0 1-2-2m180 0a2 2 0 0 1-2 2h-42V70h42a2 2 0 0 1 2 2Z"
          />
        </svg>
      ),
      name: "Corporate Events",
      details:
        "Professional corporate events that impress clients and inspire teams, from conferences to galas.",
    },
    {
      image: event3,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 64 64"
        >
          <path
            fill="#d1d2d2"
            d="M63.53 55.777c0 4.312-13.716 7.806-30.645 7.806c-16.921 0-30.641-3.493-30.641-7.806c0-4.31 13.72-7.807 30.641-7.807c16.929 0 30.645 3.498 30.645 7.807"
          />
          <path
            fill="#888787"
            d="M57.41 54.866c0 3.449-10.976 6.245-24.518 6.245c-13.535 0-24.515-2.796-24.515-6.245c0-3.445 10.98-6.245 24.515-6.245c13.543 0 24.518 2.8 24.518 6.245"
          />
          <path
            fill="#bfc0bf"
            d="M54.55 20.361H11.32c-1.538 0-2.78 1.175-2.78 2.63l2.137 26.931c0 .762.347 1.443.891 1.925c1.325 3.701 9.864 6.571 21.13 6.571c11.02 0 19.393-2.743 21.04-6.319c.733-.478 1.214-1.27 1.214-2.177l2.373-26.931c0-1.455-1.242-2.63-2.776-2.63"
          />
          <path
            fill="#d7d7d7"
            d="M27.07 51.847a2.55 2.55 0 0 1-.891-1.925l-1.388-26.931c0-1.455 1.242-2.63 2.776-2.63h-16.37c-1.537 0-2.775 1.175-2.775 2.63l2.137 26.931c0 .762.343 1.443.891 1.925c1.321 3.701 9.86 6.571 21.13 6.571c2.894 0 5.658-.192 8.189-.536c-7.33-.993-12.715-3.284-13.697-6.03"
          />
          <g fill="#e7128b" transform="translate(2)">
            <path d="M30.984 49.646c10.881 0 20.17-2.812 23.833-6.773l.279-5.665c-3.461 4.128-12.947 7.093-24.11 7.093c-11.248 0-20.797-3.01-24.19-7.188l.237 5.626c3.58 4.03 12.951 6.907 23.951 6.907" />
            <ellipse cx="30.932" cy="23.24" rx="25.25" ry="8.565" />
            <path d="M57.65 24.2c0 .575-.161 1.137-.469 1.687c-.079.134-.17.31-.261.442c-.556.784-.556 1.742-.974 2.586c-.635.706-1.277 1.455-1.943 2.196c-.749.962-1.486 1.825-2.22 2.476c-3.265 5.969-8.898 2.771-14.11 1.092c-.898-.236-1.825-.517-2.838-.797a14 14 0 0 0-3.02-.268c-1.691.106-3.209.927-4.695.812c-.832-.056-1.604-1.014-2.555-1.266c-.213-.052-.485-.143-.706-.206c-.189-.004-.386 0-.575.004c-.473.059-.95.146-1.455.229c-.197.039-.43.095-.737.201c-.745.362-1.482 1.131-2.058 1.151c-3.958-1.739-8.843.039-12.226-2.808c-1.876-1.419-1.127-4.266-1.664-6.315a3.2 3.2 0 0 1-.24-1.218c0-4.94 11.808-8.946 26.371-8.946c14.572.002 26.375 4.01 26.375 8.948" />
          </g>
          <path
            fill="#d167a7"
            d="M27.977 28.832c0-4.256 10.72-7.708 23.947-7.708q1.91 0 3.737.095c-2.812-3.253-12.07-5.636-23.06-5.636c-13.223 0-23.942 3.446-23.942 7.704c0 3.848 8.756 7.04 20.2 7.613c-.568-.659-.879-1.349-.879-2.068"
          />
          <path
            fill="#fff"
            d="M55.649 28.17c-.087.152-.186.296-.28.446c-.126.027-.236.063-.28.106a16.8 16.8 0 0 1-4.727 3.051c-.142.043-.276.091-.41.13c-.426.138-1.124.335-1.676.619c-1.119.323-2.464.765-2.858 1.778c-.02.048.024.083.079.095c4.991 1 9.119-2.976 11.02-6.343c.084-.15-.76-.08-.871.118m-5.732 4.582a8 8 0 0 1-1.159.477c.217-.103.426-.197.544-.248q.307-.118.615-.229m-3.501 1.147a.45.45 0 0 0 .205.103c-.044.099.217.114.347.099c.071-.009.138-.017.209-.028c.378.028.78.02 1.194-.023h.016a5 5 0 0 0 1.12-.217c.047-.016.099-.023.146-.039q-.235.094-.477.177c-.434.153-2.752.385-2.76-.072M8.836 26.823c.146.846.544 1.534 1.423 1.837c.095.035.757-.087.658-.229c-.56-.8-1.064-1.634-1.624-2.435c-.126-.183-.796.081-.726.184c.56.802 1.068 1.634 1.625 2.433q.332-.113.658-.233c-.82-.284-1.155-.974-1.285-1.742c-.027-.164-.761-.008-.729.185"
          />
          <path
            fill="#8a603e"
            d="M29.995 15.902c-.713 2.586-.772 5.8-.126 8.457c.26 1.084.709 2.677 1.825 3.182c1.159.516 2.275.118 2.823-1.01c.489-.99.359-2.385.158-3.462c-.575-3.091-.552-5.681 1.392-8.271c.079-.099.402-1.479.257-1.66c-2.292-2.867-5.568.035-6.329 2.763"
          />
          <path
            fill="#755137"
            d="M34.28 11.968c-1.861-.103-3.737 1.956-4.29 3.935c-.713 2.59-.772 5.804-.13 8.457c.264 1.084.713 2.677 1.829 3.182q.226.096.446.153c-.97-5.575-.686-10.835 2.145-15.727"
          />
          <path
            fill="#d7b62a"
            d="M38.566 14.31c-.418-1.474-1.388-2.87-2.401-4.127c-.753-.927-1.537-1.703-1.943-2.784c-.493-1.316.225-3.083.209-4.447c0-.063-.012-.119-.02-.178a4.4 4.4 0 0 0-.217-1.873c-.422-1.289-2.917-.743-2.492.552c1.254 3.816-5.63 6.103-6.154 9.856c-.564 4.049 2.921 8.492 7.518 10.132c.769.276 1.486-.055 1.806-.513c3.395-1.284 4.53-3.642 3.694-6.618"
          />
          <path
            fill="#fbcd0f"
            d="M31.17 11.317c.221-1.581 1.573-2.904 2.972-4.191c-.311-1.277.296-2.894.284-4.159c0-.067-.012-.122-.02-.181c.063-.576.004-1.195-.217-1.873c-.422-1.289-2.917-.737-2.492.552c1.254 3.82-5.63 6.103-6.154 9.852c-.564 4.057 2.921 8.496 7.518 10.136c.769.276 1.486-.051 1.806-.513a9 9 0 0 0 1.399-.666c-3.33-2.093-5.557-5.651-5.096-8.957"
          />
          <path
            fill="#faa92f"
            d="M43.546 24.84c-.363.609-.911.952-1.227.769c-.312-.189-.271-.834.087-1.443l8.181-13.795c.362-.611.911-.956 1.227-.769c.311.185.271.832-.087 1.443z"
          />
          <g fill="#28a6de">
            <path d="m54.999 7.785l3.181 2.574l-3.98.962l-1.465 3.829l-2.148-3.489l-4.093-.209l2.656-3.123l-1.06-3.958l3.786 1.561l3.434-2.237z" />
            <path d="M54.27 5.325q.45-.824 1.036-1.545l.004-.084l-3.434 2.237l-3.789-1.562l1.064 3.958l-2.657 3.123l4.093.209l2.148 3.493l.623-1.628a10.92 10.92 0 0 1 .912-8.201" />
          </g>
          <path
            fill="#faa92f"
            d="M23.719 23.91c.233.485.217.974-.031 1.092c-.252.118-.639-.178-.868-.663l-5.196-10.944c-.229-.485-.217-.97.036-1.092c.249-.114.635.181.867.662z"
          />
          <g fill="#28a6de">
            <path d="m17.86 9.54l2.961-.911l-1.076 2.905l1.782 2.526l-3.095-.121l-1.857 2.476l-.836-2.98l-2.933-1l2.578-1.719l.048-3.095z" />
            <path d="M16.01 8.96a7.5 7.5 0 0 1-.528-1.301l-.051-.04l-.047 3.095l-2.578 1.719l2.933 1l.836 2.98l1.857-2.476l3.095.126l-.757-1.076a8.23 8.23 0 0 1-4.76-4.03" />
          </g>
        </svg>
      ),
      name: "Birthday Parties",
      details:
        "Memorable birthday celebrations for all ages, with creative themes and personalized touches.",
    },
    {
      image: event4,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 32 32"
        >
          <g fill="none">
            <path
              fill="url(#SVGrtYvduDI)"
              d="M27.593 18A2.406 2.406 0 0 1 30 20.406S30 25 23 25h.002c-7 0-7-4.594-7-4.594A2.406 2.406 0 0 1 18.408 18z"
            />
            <path
              fill="url(#SVGgb9ZVbGY)"
              fill-opacity="0.5"
              d="M27.593 18A2.406 2.406 0 0 1 30 20.406S30 25 23 25h.002c-7 0-7-4.594-7-4.594A2.406 2.406 0 0 1 18.408 18z"
            />
            <path
              fill="url(#SVGGBDiRbhF)"
              d="M5 18a3 3 0 0 0-3 3v.15S2 27 10.5 27s8.5-5.85 8.5-5.85V21a3 3 0 0 0-3-3z"
            />
            <path
              fill="url(#SVGrlYIUdFE)"
              d="M5 18a3 3 0 0 0-3 3v.15S2 27 10.5 27s8.5-5.85 8.5-5.85V21a3 3 0 0 0-3-3z"
            />
            <path
              fill="url(#SVGK7N8idiS)"
              d="M23 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"
            />
            <path
              fill="url(#SVGryXMGcxf)"
              d="M10.5 16a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11"
            />
            <defs>
              <linearGradient
                id="SVGrtYvduDI"
                x1="19.331"
                x2="21.593"
                y1="18.93"
                y2="26.153"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".125" stop-color="#9c6cfe" />
                <stop offset="1" stop-color="#7a41dc" />
              </linearGradient>
              <linearGradient
                id="SVGGBDiRbhF"
                x1="6.043"
                x2="9.088"
                y1="19.196"
                y2="28.383"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".125" stop-color="#bd96ff" />
                <stop offset="1" stop-color="#9c6cfe" />
              </linearGradient>
              <linearGradient
                id="SVGrlYIUdFE"
                x1="10.5"
                x2="14.776"
                y1="16.929"
                y2="32.021"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#885edb" stop-opacity="0" />
                <stop offset="1" stop-color="#e362f8" />
              </linearGradient>
              <linearGradient
                id="SVGK7N8idiS"
                x1="20.902"
                x2="24.98"
                y1="9.063"
                y2="15.574"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".125" stop-color="#9c6cfe" />
                <stop offset="1" stop-color="#7a41dc" />
              </linearGradient>
              <linearGradient
                id="SVGryXMGcxf"
                x1="7.616"
                x2="13.222"
                y1="6.462"
                y2="15.414"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".125" stop-color="#bd96ff" />
                <stop offset="1" stop-color="#9c6cfe" />
              </linearGradient>
              <radialGradient
                id="SVGgb9ZVbGY"
                cx="0"
                cy="0"
                r="1"
                gradientTransform="matrix(9.21155 -1.02083 .91051 8.21605 14.227 21.5)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".392" stop-color="#3b148a" />
                <stop offset="1" stop-color="#3b148a" stop-opacity="0" />
              </radialGradient>
            </defs>
          </g>
        </svg>
      ),
      name: "Social Gatherings",
      details:
        "Perfect for anniversaries, reunions, and celebrations that bring people together.",
    },
    {
      image: event5,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M8 6.1L19 5v11a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3c.77 0 1.47.29 2 .76V9.04l-9 1V17a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3c.77 0 1.47.29 2 .76zM9 7v2.03l9-.99V6.09zM8 17a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2m10-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2"
          />
        </svg>
      ),
      name: "Entertainment",
      details:
        "Top-tier entertainment services including DJs, live bands, and performers for any occasion.",
    },
    {
      image: event6,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 32 32"
        >
          <g fill="none">
            <path
              fill="#cdc4d6"
              d="M16.5 28C22.851 28 28 22.851 28 16.5S22.851 5 16.5 5S5 10.149 5 16.5S10.149 28 16.5 28"
            />
            <path fill="#e1d8ec" d="M16.5 24.5a8 8 0 1 0 0-16a8 8 0 0 0 0 16" />
            <path
              fill="#998ea4"
              d="M6.82 6.31a.68.68 0 0 0-.68.68v2.69c0 .2-.16.35-.35.35c-.2 0-.35-.16-.35-.35V7.02c0-.37-.29-.7-.66-.71c-.39-.01-.71.3-.71.68v2.69c0 .2-.16.35-.35.35c-.2 0-.35-.16-.35-.35V7.02c0-.37-.29-.7-.66-.71c-.39-.01-.71.3-.71.68v4.58c0 .902.437 1.707 1.109 2.209c.601.339.601 1.891.601 1.891v10.02c0 .52.42.94.94.94h.23c.52 0 .94-.42.94-.94V15.67s0-1.491.601-1.891A2.76 2.76 0 0 0 7.53 11.57V6.99a.72.72 0 0 0-.71-.68m21.54 0c.9 0 1.63.73 1.63 1.63V25.7c0 .52-.42.94-.94.94h-.23c-.52 0-.94-.42-.94-.94v-8.617a3.15 3.15 0 0 1-1.85-2.883V8.65a2.32 2.32 0 0 1 2.33-2.34"
            />
          </g>
        </svg>
      ),
      name: "Catering",
      details:
        "Exquisite catering with customizable menus featuring cuisines from around the world.",
    },
  ]);
  const [gallery, setGallery] = useState([
      {
      image: gallery1,
    },
     {
      image: gallery2,
    }, {
      image: gallery3,
    }, {
      image: gallery4,
    }, {
      image: gallery5,
    }, {
      image: gallery6,
    },
  ]);
  return (
    <>
      <Nav />
      <div
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bcg})` }}
      >
        {" "}
        <div className="container mx-auto flex flex-col px-4 justify-center min-h-full gap-4">
          <div className="flex gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 512 512"
            >
              <path
                fill="none"
                stroke="#fcd34d"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="15"
                d="m105.7 263.5l107.5 29.9a7.9 7.9 0 0 1 5.4 5.4l29.9 107.5a7.8 7.8 0 0 0 15 0l29.9-107.5a7.9 7.9 0 0 1 5.4-5.4l107.5-29.9a7.8 7.8 0 0 0 0-15l-107.5-29.9a7.9 7.9 0 0 1-5.4-5.4l-29.9-107.5a7.8 7.8 0 0 0-15 0l-29.9 107.5a7.9 7.9 0 0 1-5.4 5.4l-107.5 29.9a7.8 7.8 0 0 0 0 15Z"
              >
                <animateTransform
                  additive="sum"
                  attributeName="transform"
                  calcMode="spline"
                  dur="6s"
                  keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
                  repeatCount="indefinite"
                  type="rotate"
                  values="-15 256 256; 15 256 256; -15 256 256"
                />
                <animate
                  attributeName="opacity"
                  dur="6s"
                  values="1; .75; 1; .75; 1; .75; 1"
                />
              </path>
            </svg>
            <h6 className="text-yellow-400 text-lg">Premium Event Planning</h6>
          </div>
          <h6 className="text-lg text-white">
            Creating Unforgettable Moments for Every Celebration
          </h6>
          <h2 className="text-2xl whitespace-pre-line text-white">
            From intimate gatherings to grand celebrations, we bring your vision
            to life
            <br />
            with impeccable planning, stunning design, and flawless execution.
          </h2>
          <div className="flex gap-5 text-white mt-6 items-center pb-10">
            <button
              onClick={() => navigate("/events")}
              className="bg-white text-purple-500 px-7 py-3 font-bold cursor-pointer rounded-lg flex items-center justify-center gap-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 8h16M4 8v8.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h9.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.986.218-2.104V8M4 8v-.8c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C5.52 4 6.08 4 7.2 4H8m12 4v-.803c0-1.118 0-1.678-.218-2.105a2 2 0 0 0-.875-.874C18.48 4 17.92 4 16.8 4H16m0-2v2m0 0H8m0-2v2"
                />
              </svg>
              Book Your Event
            </button>
            <button
              onClick={() => navigate("/")}
              className="opacity-90 shadow-2xl bg-transparent text-purple-400 border-2 border-purple-400 px-7 py-2.5 font-bold cursor-pointer rounded-lg"
            >
              Explore Services
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-3 mt-17">
          <h6 className="dark:text-purple-400 text-purple-500 text-lg">
            Our Services
          </h6>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-7">
            Comprehensive event planning services designed to make your special
            day perfect
          </p>
        </div>

        <div className=" grid md:grid-cols-3 grid-cols-1 gap-8 shadow-md pb-7">
          {event.map((event, index) => (
            <Card
              key={index}
              className="max-w-md rounded-xl"
              renderImage={() => (
                <img
                  className="w-auto h-66 object-cover rounded-t-xl transition-transform duration-300 ease-in-out hover:scale-105"
                  src={event.image}
                />
              )}
            >
              <div className="flex flex-col gap-0.5 h-auto p-4">
                <div className="flex items-center gap-3">
                  <div className="text-3xl bg-purple-100 text-purple-500 py-2 px-2 rounded-md">
                    {event.icon}
                  </div>
                  <h5 className="text-xl font-bold tracking-tight mt-3 mb-2">
                    {event.name}
                  </h5>
                </div>
                <p className="text-md text-gray-500 dark:text-gray-300">{event.details}</p>
              </div>
            </Card>
          ))}
        </div>
        <div className="flex flex-col items-center gap-3 mt-17">
          <h6 className="dark:text-purple-400 text-purple-500 text-lg">
            Event Gallery
          </h6>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-7">
            Browse through our portfolio of beautifully executed events
          </p>
        </div>
        <div className=" grid md:grid-cols-3 grid-cols-1 gap-8 pb-7">
          {gallery.map((gallery, index) => (
            <Card
              key={index}
              className="max-w-md rounded-xl max-h-96"
              renderImage={() => (
                <img
                  className=" w-auto max-h-96 object-cover rounded-xl transition-transform duration-300 ease-in-out hover:scale-105"
                  src={gallery.image}
                />
              )}
            ></Card>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
