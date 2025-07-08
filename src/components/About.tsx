import aboutImage from "../assets/about.webp";

const About = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2 mt-20" id="about">
      <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-12 mx-4">
        About
      </h2>
      <div className="flex flex-col items-center lg:space-x-8 mx-4 mb-20">
        <div className="mb-8 lg:mb-0">
          <img src={aboutImage} alt="aboutImage" className="w-full h-auto" />
        </div>
        <p className="text-lg lg:text-3xl font-light text-center lg:text-left max-w-full mx-auto mt-8">
          At VastuSpaze, we believe in transforming houses into dream homes.
          With a passion for design and a commitment to quality, our team of
          skilled professionals has been dedicated to delivering exceptional
          renovation services for over a decade. We specialize in creating
          beautiful, functional spaces that reflect our clients unique tastes
          and lifestyles. From modern kitchens and luxurious bathrooms to serene
          outdoor living areas and cozy home offices, we bring our expertise to
          every project, ensuring each renovation is tailored to meet your
          specific needs and desires. Our mission is to enhance the beauty and
          functionality of your home, making it a place where you can truly
          thrive.
        </p>
      </div>
    </section>
  );
};

export default About;
