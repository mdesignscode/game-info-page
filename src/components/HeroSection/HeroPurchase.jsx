import 'styles/HeroInfo/HeroPurchase.scss';
import CTA_Button from 'components/CTA_Button';
import Download from 'icons/Download';

export default function HeroPurchase () {
  return (
    <div className="hero_purchaseContainer">
      <div className="hero_purchase">
        <p className="hero_purchase__title">Stardew Valley</p>
        <div className="hero_purchase__cta">
          <div className="hero_purchase__ctaDetails">
            <span>Digital</span>
            <p>$14.99</p>
          </div>
          <CTA_Button
            {...{
              child: (
                <>
                  <Download />
                  Direct download
                </>
              ),
              label: 'Purchase Product'
            }}
          />
        </div>
      </div>
    </div>
  );
}
