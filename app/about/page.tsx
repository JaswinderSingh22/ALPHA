/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image';
export default function About() {
  return (
    <div className="w-full h-full overflow-auto bg-black">
      <div className="w-full p-10 h-3/6 flex items-center">
        <div className="w-full h-full bg-purple-200 relative">
          <Image src="/assets/contact.jpg" fill alt="Myself"></Image>
        </div>
        <div className="w-full h-full text-white p-10 text-lg">
          Hello there! I'm Jaswinder Singh, a passionate software engineer with
          a knack for crafting intuitive user experiences. Hailing from the
          vibrant city of Patiala, I embarked on my journey in technology with a
          solid foundation from Kendriya Vidyalaya No.2. Fuelled by curiosity
          and a drive for innovation, I pursued my undergraduate studies at the
          prestigious Indian Institute of Technology Delhi, graduating in 2021
          with a degree in Textile Technology.
        </div>
      </div>
      <div className="w-full p-10 h-3/6 flex">
        <div className="w-full h-full bg-purple-200 relative">
          <Image src="/assets/contact.jpg" fill alt="Myself"></Image>
        </div>
        <div className="w-full h-full text-white p-10 text-lg">
          With over 2 years of hands-on experience in the software industry,
          I've honed my skills primarily in frontend technologies. My expertise
          lies in harnessing the power of frameworks like React, Next.js, and
          Vue.js to build dynamic and responsive web applications. I'm fluent in
          languages such as JavaScript and TypeScript, and I thrive on the
          challenges of crafting clean and efficient code.
        </div>
      </div>
      <div className="w-full p-10 h-3/6 flex">
        <div className="w-full h-full bg-purple-200 relative">
          <Image src="/assets/contact.jpg" fill alt="Myself"></Image>
        </div>
        <div className="w-full h-full text-white p-10 text-lg">
          In my quest for pixel perfection, I've mastered the art of styling
          with tools like Tailwind CSS, ensuring not only visually stunning
          interfaces but also optimal performance. Whether it's architecting
          complex UI components or optimizing code for speed, I approach every
          project with a meticulous attention to detail.
        </div>
      </div>
      <div className="w-full p-10 h-3/6 flex">
        <div className="w-full h-full bg-purple-200 relative">
          <Image src="/assets/contact.jpg" fill alt="Myself"></Image>
        </div>
        <div className="w-full h-full text-white p-10 text-lg">
          Beyond the realm of code, I'm a firm believer in continuous learning
          and staying updated with the latest industry trends. My journey as a
          software engineer is not just about writing lines of code but also
          about creating meaningful solutions that make a difference. When I'm
          not coding, you'll likely find me exploring new hiking trails,
          experimenting with culinary delights, or diving into a captivating
          book. I'm also an avid traveler, always seeking new adventures and
          experiences to broaden my horizons.
        </div>
      </div>
      <div className="w-full p-10 h-3/6 flex">
        <div className="w-full h-full bg-purple-200 relative">
          <Image src="/assets/contact.jpg" fill alt="Myself"></Image>
        </div>
        <div className="w-full h-full text-white p-10 text-lg">
          Join me on this exhilarating journey as we push the boundaries of
          technology and creativity together. Let's build something
          extraordinary!
        </div>
      </div>
    </div>
  );
}
