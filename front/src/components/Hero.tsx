import React from 'react';
import { NavLink } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Bienvenido a TechStore</h1>
        <p>Tu destino número uno para los últimos avances en tecnología.</p>
        <p>En TechStore, nos enorgullecemos de ofrecerte los dispositivos más innovadores y de alta calidad del mercado. Desde los smartphones más recientes hasta los gadgets más inteligentes, tenemos todo lo que necesitas para mantenerte a la vanguardia.</p>
        <NavLink to="/productos">
          <button>Explorar Productos</button>
        </NavLink>
      </div>
    </section>
  );
};

export default Hero;