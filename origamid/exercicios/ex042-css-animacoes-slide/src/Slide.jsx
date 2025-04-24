import React from "react";
import styles from "./Slide.module.css";

const Slide = ({ slides }) => {
  // - states
  const [active, setActive] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const contentRef = React.useRef(); //acessa a div via contentRef.current para pegar o tamanho da tela e ter referencia para centralizar o px do translate
  console.log(active);

  React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(active * width)); //multiplica pq o primeiro position é 0, e então não ativa quando abre a pagina e o menos pq pra ir pra direita tem que ser valor negativo
  }, [active]);

  //functions
  function slidePrev() {
    if (active > 0) {
      setActive(active - 1);
    }
  }
  function slideNext() {
    if (active < slides.length - 1) {
      setActive(active + 1);
    }
  }

  return (
    <section className={styles.container}>
      <div
        ref={contentRef}
        className={styles.content}
        style={{ transform: `translateX(${position}px)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className={styles.item}>
            {slide.text}
          </div>
        ))}
      </div>
      <nav className={styles.nav}>
        <button onClick={slidePrev} className={styles.btn}>
          Anterior
        </button>
        <button onClick={slideNext} className={styles.btn}>
          Próximo
        </button>
      </nav>
    </section>
  );
};

export default Slide;

// genial!!! essa é a base do código acima
// function slidePrev(e) {
//     // console.log(contentRef.current.getBoundingClientRect());
//     const { width } = contentRef.current.getBoundingClientRect();
//     setPosition(position + width);
//   }
//   function slideNext(e) {
//     const { width } = contentRef.current.getBoundingClientRect();
//     setPosition(position - width);
//   }
