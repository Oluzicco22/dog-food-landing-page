FILE OVERVIEW

This page was created using React.js, Vite + Tailwind CSS. I decided against using HTML5 and CSS3 as it is not the most professional way of writing codes.
Although it is a static page which did not require any functionality, but Vite + Tailwind CSS works just as perfectly as the regular HTML and CSS.
Below is a detailed breakdown of the tools used and the code file itself.

Tools Used:
Visual Studio Code: IDE used.
React.js – For building the dynamic and component-based structure of the webpage.
Tailwind CSS – For writing utility-first, responsive, and customizable styles directly in the JSX.
Vite – A fast development build tool used to scaffold and run the React project efficiently.
JavaScript (JSX) – For interactivity and logic within React components.
Image Assets – Imported and used for visual content to enhance the UI/UX.

App.jsx - This is the main App.js file. It:
Imports images and styles, Creates a Feature component (reusable for icons + text) and Builds a multi-section layout: Hero, Nutrition, and Benefits.

IMPORTS
This is importing:
React to build the component, CSS file for global styles (optional since I used Tailwind) and All image assets needed for sections.

**Feature** COMPONENT:
const Feature = ({ icon, title, text, backgroundValue }) => {
  return (
    <div className="flex items-start gap-2 text-left">
      <div className={`${backgroundValue} text-2xl w-15 h-15 flex rounded-full justify-center items-center`}>
          <img src={icon} alt={title} />
      </div>
      <div className="ml-6 w-9/12">
        <h4 className="text-[#161723] text-xl font-semibold mb-2">{title}</h4>
        <p className="text-[#424153] text-base font-normal">{text}</p>
      </div>
    </div>
  );
}

The above is a reusable UI card for the features (e.g., Real Food, Made Fresh):
icon – image icon shown inside a colored circle.
title – bold heading.
text – supporting text.
backgroundValue – Tailwind color class like bg-[#DCF9CA].

**App** Component (Main Layout):
I wrapped everything in a div with:
Font set to sans.
Default text color set to dark gray - [#161723]

1. Hero Section
<section className="bg-white py-20 text-center w-[69%] mx-auto">
Centers content (mx-auto), sets width to 69%.

Inside: headline, features, and CTA (call-to-action) button.

Features with Icon Cards
<Feature icon={RealFood} ... />
I used my Feature component twice left and twice right of a centered image.

2. CTA Button + Payment Icons
<button className="bg-[#EE6F4B] ...">
Call-to-action button with orange background.

Below it, I showed:
Guarantee icon (Shield)
Payment options (PayPal, Visa, etc.)

3. Nutrition Section
<section className="bg-[#F8F8F8] py-8">
Left: heading, paragraph, key points
Right: dog image

Key Points

<ul>
  <li className="flex items-start gap-10 py-2.5">
    <strong className="text-[#EE6F4B] text-3xl">97%</strong>
    <p>Dogs choose our dog food...</p>
  </li>
</ul>
Bullet-point style stats with text and emphasis in orange.

4. Benefits Section
This section highlights gut health and nutrient absorption.
   
<section className="w-[70%] mx-auto ...">
Left: Image of dogs eating
Right: heading + description

<section className="py-12 w-[70%] mx-auto ...">
Left: benefits of prebiotics
Right: another product/dog food image
