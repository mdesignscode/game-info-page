import HeroInfo from "./HeroInfo";
import ImageGallery from "./ImageGallery";
import HeroPurchase from './HeroPurchase';
import "styles/HeroInfo/main.scss";
import { useEffect, useState } from "react";

export default function HeroSection () {
  const [ctaIsVisible, setCtaIsVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const target = entries[0];
      target.isIntersecting ? setCtaIsVisible(true) : setCtaIsVisible(false);
    });
    const targetElement = document.getElementById('cta-button');
    observer.observe(targetElement);
  }, []);

  return (
    <section className="hero_container">
      <div className="hero_container__section">
        <nav
          className="breadcrumb has-succeeds-separator"
          aria-label="breadcrumbs"
        >
          <ul>
            <li>
              <a href="#">Store</a>
            </li>
            <li>
              <a href="#">Games</a>
            </li>
            <li className="is-active">
              <a href="#" aria-current="page">
                Stardew Valley
              </a>
            </li>
          </ul>
        </nav>
        <div className="hero_container__sectionContainer">
          <ImageGallery />
          <HeroInfo />
        </div>
      </div>

      {!ctaIsVisible && <HeroPurchase />}
    </section>
  );
}
