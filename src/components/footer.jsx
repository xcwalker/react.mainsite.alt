import { Logo_xcwalker as Logo } from "../assets/xcwalker.logo";
import "../styles/components/footer.css";

export default function Footer() {
  return (
    <section id="footer">
      <div className="container">
        <Logo />
        <span>Copyright © 2022 XCWalker.</span>
        <span>All rights reserved.</span>
      </div>
    </section>
  );
}
