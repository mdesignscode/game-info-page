import Tv from "icons/Tv";
import Tabletop from "icons/Tabletop";
import PSP from "icons/PSP";
import ESRB from "components/ESRB";

export default function About () {
  return (
    <div className="product_info__about">
      <div className="product_info__aboutSection">
        <h2>ESRB rating</h2>
        <div className="product_info__aboutSectionESRB">
          <ESRB />
        </div>
      </div>

      <div className="product_info__aboutSection">
        <h2>Supported play modes</h2>

        <div className="product_info__aboutSectionPlatforms">
          <div className="product_info__aboutSectionPlatformsPlatform">
            <span><Tv /></span>
            <h2>TV</h2>
          </div>

          <div className="product_info__aboutSectionPlatformsPlatform">
            <span>
              <Tabletop />
            </span>
            <h2>Tabletop</h2>
          </div>

          <div className="product_info__aboutSectionPlatformsPlatform">
            <span>
              <PSP />
            </span>
            <h2>Handheld</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
