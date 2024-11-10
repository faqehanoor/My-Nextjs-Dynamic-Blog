import React from "react";

export default function Contact() {
  return (
    <div className="container mx-auto p-5">
     
      <div className="text mb-6">
        <h2 className="text-3xl font-semibold mb-4">𝕮𝖔𝖓𝖙𝖆𝖈𝖙 𝖒𝖊</h2>
        <ul className="text-lg text-gray-800 space-y-4">
          <li>
            <strong>𝕰𝖒𝖆𝖎𝖑:</strong> <span>faqehanoor@gmail.com</span>
          </li>
          <li>
            <strong>LinkedIn: </strong>
            <a
              href="https://www.linkedin.com/in/faqeha-noor-440793334"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 transition-all"
            >
              <span>Faqeha Noor</span>
            </a>
          </li>
          <li>
            <strong>𝕻𝖍𝖔𝖓𝖊 𝕹𝖚𝖒𝖇𝖊𝖗:</strong> <span>0330 235 4356</span>
          </li>
        </ul>
      </div>

      <div className="image mb-6 flex justify-center">
        <img
          src="https://media.licdn.com/dms/image/v2/D4D03AQFV4jn1FnrXmw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723023769112?e=1736380800&v=beta&t=4DvimPojwOWrrxsor6qEmHFI9IItqnxk2nQWuLovURY"
          alt="Your Image Description"
          className="w-32 h-32 rounded-full object-cover shadow-lg"
        />
      </div>
    </div>
  );
}
