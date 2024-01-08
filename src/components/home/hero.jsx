import css from "../styles/components/home/hero.module.css";

export default function HomeHero() {
  return (
    <section id={css.hero}>
      <div className={css.container}>
        <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba" alt="" className={css.background} />
        <h1>
          <span>The future</span>
          <span>of design</span>
        </h1>
      </div>
    </section>
  );
}
