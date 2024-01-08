import HomeHero from "../components/home/hero";
import css from "../styles/pages/home.module.css"

export default function Home() {
  return <main id={css.home}>
    <HomeHero />
  </main>;
}