import React from "react";
import yawarImg from "../assets/killarneyYawar.png";
// TODO: Replace the placeholder file name below with your friend's actual image file.
import friendImg from "../assets/musPicture.jpeg";
import RegisterButton from "./RegisterButton";
import { BOOTCAMP_DURATION_TEXT } from "./Constants";

const Me: React.FC = () => {
  return (
    <section className="flex flex-col items-center bg-gray-50 p-10 mx-auto py-16">
      {/* Two mentor photos */}
      <h2 className="text-4xl font-extrabold text-black mb-8 text-center">Meet Your Mentors</h2>
      <div className="flex flex-col sm:flex-row items-center gap-10 mb-6">
        <figure className="flex flex-col items-center">
          <img
            src={yawarImg}
            alt="Yawar"
            className="w-56 h-56 rounded-full object-cover border-4 border-blue-50"
          />
          <figcaption className="mt-3 text-sm text-gray-600 font-medium">
            Yawar – Engineering Science (UofT)
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center">
          <img
            src={friendImg}
            alt="Co-Mentor"
            className="w-56 h-56 rounded-full object-cover border-4 border-blue-50"
          />
            <figcaption className="mt-3 text-sm text-gray-600 font-medium">
              Mustafa – Computer Engineering (UofT)
            </figcaption>
        </figure>
      </div>
      <div className="text-center max-w-3xl">
        {/* <p className="text-gray-500 text-xl mb-3">
          We’re UofT engineering grads. We teach coding, math, and ML.
        </p> */}
        <p className="text-gray-500 text-xl">
          We build your <span className="font-bold text-gray-900">core coding</span>. We sharpen <span className="font-bold text-gray-900">math intuition</span>. We grow <span className="font-bold text-gray-900">project confidence</span>. {BOOTCAMP_DURATION_TEXT}.
        </p>
      </div>
      <div className="mt-12 flex justify-center">
        <RegisterButton />
      </div>
    </section>
  );
};

export default Me;