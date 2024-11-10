import React from "react";

function About() {
  return (
    <div className="container mx-auto p-5">
    
      <div className="picture mb-5 flex justify-center">
        <img
          src="https://cdn4.iconfinder.com/data/icons/people-avatar-filled-outline/64/girl_long_hair_female_people_woman_user_avatar-2-512.png"
          alt="Faqeha Noor"
          className="rounded-full w-48 h-48" 
        />
      </div>

   
      <h2 className="text-3xl font-bold text-center mb-4">𝔸𝕓𝕠𝕦𝕥 𝕄𝕖</h2>

   
      <ul className="list-disc pl-5 space-y-2">
        <li>
          Name: <span className="font-semibold">Faqeha Noor</span>
        </li>
        <li>
          Father Name: <span className="font-semibold">Naveed Alam</span>
        </li>
        <li>
          Education: <span className="font-semibold">Currently in 9th class learning Web development in Giaic</span>
        </li>
        <li>
          Jobs: <span className="font-semibold">Working with Abrar Infotech and Sahil Consaltancy.in as Web Developer</span>
        </li>
      </ul>
    </div>
  );
}

export default About;
