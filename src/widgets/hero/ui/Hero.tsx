import {Container} from "../../../shared/ui/container";
import banner from "../../../shared/assets/main-logo.png";

import "./hero.css";

export const Hero = () => {
  return (
    <Container>
      <section className='hero'>
        <h1 className='hero-title'>
          Relax and <br /> Unwind with <br /> Beautiful <br /> Coloring Books
        </h1>
        <div className='hero-banner'>
          <img src={banner} alt='' />
        </div>
      </section>
    </Container>
  );
};
