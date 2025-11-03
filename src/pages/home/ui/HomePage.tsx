import {Categories} from "../../../widgets/categories/ui";
import {Header} from "../../../widgets/header/ui";
import {Hero} from "../../../widgets/hero/ui";
import {Collection} from "../../../widgets/collection/ui";

export const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <section id='Categories'>
        <Categories />
      </section>
      <section id='Collections'>
        <Collection />
      </section>
    </>
  );
};
