import React from 'react';
import './App.css'

import HomePageImage from './assets/homepg-img.png'
import RealFood from './assets/real-food.png'
import PremiumIngredient from './assets/prem-ingredient.png'
import MadeFresh from './assets/made-fresh.png'
import  VetDeveloped from './assets/vet-developed.png'
import PayPal from './assets/paypal.png'
import Visa from './assets/visa.png'
import MasterCard from './assets/mastercard.png'
import ApplePay from './assets/apple-pay.png'
import GooglePay from './assets/google-pay.png'
import Shield from './assets/shield-check.png'
import DogBiteOne from './assets/dogbite-img-1.png'
import DogBiteTwo from './assets/dogbite-img-2.png'
import DogFood from './assets/dogbite-food.png'


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


const App = () => {
  return (
      <div className=" font-sans text-[#161723]">
          {/* Hero Section */}
          <section className="bg-white py-20 text-center w-[69%] mx-auto">
              <h2 className="text-[40px] md:text-[40px] leading-[120%] text-[#161723] font-semibold mb-4">What makes us different<br/>makes them stronger</h2>

              <div className="flex flex-row items-center justify-between gap-8 my-10">
                  <div className="space-y-10">
                      <Feature icon={RealFood} title="Real Food" text="Wholesome recipes for dogs with real meat and veggies."
                               backgroundValue="bg-[#DCF9CA]"/>
                      <Feature icon={PremiumIngredient} title="Premium Ingredient"
                               text="Elevating pet care with unmatched safety and quality."
                               backgroundValue="bg-[#F8F0D6]"/>
                  </div>

                  <img src={HomePageImage} alt="Dog Food Bowl" className="w-90 h-90 rounded-full object-cover"/>

                  <div className="space-y-10">
                      <Feature icon={MadeFresh} title="Made Fresh"
                               text="We prioritize maintaining the integrity of whole foods and nutrition."
                               backgroundValue="bg-[#C8F2E7]"/>

                      <Feature icon={VetDeveloped} title="Vet Developed"
                               text="We raise the bar for dog nutrition, surpassing industry expectations."
                               backgroundValue="bg-[#F7CABD]"/>
                  </div>
              </div>

              <div className="flex flex-col gap-3 items-center w-2/6 mx-auto">
                  <button
                      className="bg-[#EE6F4B] text-base text-white mt-2 px-6 py-3 rounded-md font-semibold hover:bg-orange-600 w-full cursor-pointer">Get
                      your dog’s healthy meal today!
                  </button>
                  <div className="flex items-center justify-between w-full">
                      <span className="text-xs text-[#424153] flex gap-2 items-center"> <img src={Shield} alt="shield"/> 30-day money back guarantee</span>
                      <img src={PayPal} alt='PayPal'/>
                      <img src={Visa} alt='Visa'/>
                      <img src={MasterCard} alt='mastercard'/>
                      <img src={ApplePay} alt='ApplePay'/>
                      <img src={GooglePay} alt='GooglePay'/>
                  </div>
              </div>
          </section>

          {/* Nutrition Section */}
          <section className="bg-[#F8F8F8] py-8">
              <div className="w-[70%] mx-auto py-12 grid md:grid-cols-2 gap-8 items-center">
                  <div className="h-full flex justify-between flex-col gap-4">
                      <h3 className="text-[40px] font-semibold leading-12">Nutrition is the foundation for longer,
                          healthier lives in dogs.
                      </h3>
                      <p className="w-[85%] text-base font-[400] text-[#424153] mb-8">
                          Invest in your dog's future with our scientifically formulated superfood-powered supplements.
                          Give them the nutrition they deserve and watch them thrive with vitality, energy, and the joy
                          of a longer, healthier life.
                      </p>

                      <div>
                          <span className="text-xl text-[#161723] font-semibold">Key Points:</span>
                          <ul className="space-y-2 text-sm mt-3">
                              <li className="flex items-start gap-10 py-2.5">
                                  <strong className="text-[#EE6F4B] text-3xl">97%</strong>
                                  <p className="w-[68%] text-base font-normal text-[#424153]">Dogs choose our dog food over leading brands because of its
                                      real functional ingredients and delicious flavor.
                                  </p>
                              </li>
                              <li className="flex items-center gap-10 py-2.5 border-b border-t border-[#E3E3E8]">
                                  <strong className="text-[#EE6F4B] text-3xl">84%</strong>
                                  <p className="w-[68%] text-base font-normal text-[#424153]">Our dog food provides superior nutrition and a
                                      patented probiotic for optimal nutrient absorption.</p>
                              </li>
                              <li className="flex items-center gap-10 py-2.5">
                                  <strong className="text-[#EE6F4B] text-3xl">92%</strong>
                                  <p className="w-[68%] text-base font-normal text-[#424153]">Our dog food’s high protein and fast
                                      digestibility contribute to ideal stool quality.</p>
                              </li>
                          </ul>
                      </div>

                      <button
                          className="mt-6 bg-[#EE6F4B] text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600">Give
                          your furry friend the gift of wholesome nutrition
                      </button>
                  </div>

                  <img src={DogBiteOne} alt="Happy Dog" className="w-full h-full rounded-md shadow-md ml-3"/>
              </div>

          </section>
          {/* Benefits Section */}
          <section className="w-[70%] mx-auto mt-8 py-12 grid md:grid-cols-2 gap-8 items-center">
              <img src={DogBiteTwo} alt="Dogs Eating" className="w-full h-[480px] rounded-md shadow-md"/>

              <div className="ml-10">
                  <h3 className="text-[40px] font-semibold text-[#161723] leading-12 mb-4">Improve overall <br/> gastrointestinal health for <br/> better nutrient
                      absorption</h3>
                  <p className="w-[95%] text-base font-[400] text-[#424153]"> Through rigorous scientific studies and consultations with veterinarians, we have
                      created a breakthrough formula exclusively tailored to combat the health challenges prevalent in dogs. A staggering 91% of our customers
                      have reported significant improvements in their dogs' health after incorporating our product into their diet.
                  </p>
              </div>
          </section>

          <section className="py-12 w-[70%] mx-auto grid md:grid-cols-2 gap-8 items-center">
              <div>
                  <h3 className="text-[40px] font-semibold text-[#161723] leading-12 mb-4">Prebiotics nourish the <br/> beneficial gut bacteria, supporting
                      digestive health</h3>
                  <p className="w-[90%] text-base font-[400] text-[#424153]">Our dog food formula contains carefully selected prebiotics that work in harmony with the gut
                      microbiota, providing the necessary nutrients for the growth and maintenance of beneficial bacteria, ultimately supporting digestive health.
                  </p>
              </div>
              <img src={DogFood} alt="Dogs Food" className="w-full h-[480px] rounded-md shadow-md"/>
          </section>

      </div>
  );
}

export default App;