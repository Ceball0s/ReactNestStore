import React from "react";

const About: React.FC = () => {
  return (
    <section className="about">
      <h1>Acerca de nosotros</h1>
      <div className="about-content">
        <p>Bienvenido a TechStore, tu destino número uno para los últimos avances en tecnología. Nos enorgullecemos de ofrecerte los dispositivos más innovadores y de alta calidad del mercado.</p>
        <h2>Nuestro Equipo</h2>
        <div className="team-member">
          <h3>Miguel Angel Ceballos</h3>
          <p>Miguel Angel es un desarrollador apasionado por la tecnología y la innovación. Con años de experiencia en el desarrollo de aplicaciones web, se dedica a crear soluciones eficientes y efectivas para nuestros clientes.</p>
        </div>
        <div className="team-member">
          <h3>Jhon David Ceballos</h3>
          <p>Jhon David es un experto en desarrollo de software con un enfoque en la experiencia del usuario. Su habilidad para diseñar interfaces intuitivas y atractivas garantiza que nuestros productos sean fáciles de usar y visualmente atractivos.</p>
        </div>
      </div>
    </section>
  );
};

export default About;