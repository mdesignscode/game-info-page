import Calender from "icons/Calender";
import Group from "icons/Group";
import Joystick from "icons/Joystick";
import Building from "icons/Building";
import Gear from "icons/Gear";
import Console from "icons/Console";
import Storage from "icons/Storage";
import Globe from "icons/Globe";

export default function Specs () {
  return (
    <div className="product_info__specs">
      <div className="product_info__specsSpec">
        <Calender />
        <h3>Release date</h3>
        <p>October 5, 2017</p>
      </div>

      <div className="product_info__specsSpec">
        <Group />
        <h3>No. of players</h3>
        <div>
          <span>Single System (1)</span>
          <span>Local Wireless (1)</span>
          <span>Online (1-4)</span>
        </div>
      </div>

      <div className="product_info__specsSpec">
        <Joystick />
        <h3>Genre</h3>
        <div>
          <span>Role-Playing</span>
          <span>Simulation</span>
        </div>
      </div>

      <div className="product_info__specsSpec">
        <Building />
        <h3>Publisher</h3>
        <div>
          <span>ConcernedApe</span>
        </div>
      </div>

      <div className="product_info__specsSpec">
        <Gear />
        <h3>ESRB Rating</h3>
        <div>
          <span>Everyone 10+</span>
        </div>
      </div>

      <div className="product_info__specsSpec">
        <Console />
        <h3>Supported play modes</h3>
        <p>TV mode, Tabletop mode, Handheld mode</p>
      </div>

      <div className="product_info__specsSpec">
        <Storage />
        <h3>Game file size</h3>
        <p>1.5 GB</p>
      </div>

      <div className="product_info__specsSpec">
        <Globe />
        <h3>Supported languages</h3>
        <p>English, French, German, Italian, Japanese, Korean, Portuguese, Russian, Simplified Chinese, Spanish, Traditional Chinese</p>
      </div>
    </div>
  );
}
