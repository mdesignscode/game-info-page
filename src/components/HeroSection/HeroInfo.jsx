import Download from "icons/Download";
import HeartsAndSparks from "icons/HeartsAndSparks";
import CTA_Button from 'components/CTA_Button';

export default function HeroInfo () {
  return (
    <div className="hero_container__sectionContainerInfo">
      <span className="hero_container__sectionContainerInfoPlatform">
        Nintendo Switch
      </span>

      <h1 className="hero_container__sectionContainerInfoTitle">
        Stardew Valley
      </h1>

      <div className="hero_container__sectionContainerInfoPrice">
        <span>$14.99</span>
        <HeartsAndSparks />
      </div>

      <div className="hero_container__sectionContainerInfoGoldenPoints">
        <img
          src="/hero/my-nintendo-gold-coin.avif"
          alt=""
          width={24}
          height={24}
        />
        <span>
          Eligible for up to <strong>75</strong> Gold Points
        </span>
      </div>

      <CTA_Button
        {...{
          id: 'cta-button',
          child: <>
            <Download />
            Direct download
          </>,
          label: 'Purchase Product'
        }}
      />

      <p className="hero_container__sectionContainerInfoFinePrint">
        This item will be sent to your system automatically after purchase.
      </p>
    </div>
  );
}
