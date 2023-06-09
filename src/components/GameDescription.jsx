import { useEffect, useState } from "react";
import "styles/GameDescription.scss";
import Plus from "./Icons/Plus";
import Minus from "./Icons/Minus";
import TextTruncate from "react-text-truncate";
import useWindowWidth from "components/hooks/useWindowWidth";
import CTA_Button from 'components/CTA_Button';

export default function GameDescription () {
  const [readMore, setReadMore] = useState(true);
  const [truncateLength, setTruncateLength] = useState(10);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    setTruncateLength(readMore ? 1 : 0);
  }, [readMore]);

  return (
    <section className="game_description">
      <div className="game_description__text">
        <h2>You&#39;re moving to the valley...</h2>
        <p>
          You&#39;ve inherited your grandfather&#39;s old farm plot in Stardew
          Valley. Armed with hand-me-down tools and a few coins, you set out
          to begin your new life. Can you learn to live off the land and turn
          these overgrown fields into a thriving home? It won&#39;t be easy.
          Ever since Joja Corporation came to town, the old ways of life have
          all but disappeared. The community center, once the town&#39;s most
          vibrant hub of activity, now lies in shambles. But the valley seems
          full of opportunity. With a little dedication, you might just be the
          one to restore Stardew Valley to greatness!
        </p>
        <TextTruncate
          containerClassName="game_description__textMore"
          line={truncateLength}
          element="p"
          truncateText="…"
          text='Now with Multiplayer! Invite 1-3 players to join you in the valley! Players can work together to build a thriving farm, share resources, and build relationships with townspeople or each other. As more hands are better than one, players have the option to scale profit margin on produce sold for a more challenging experience.'
        />

        <button
          className="game_description__textShowMore"
          onPointerDown={() => setReadMore(!readMore)}
        >
          {readMore ? (
            <span>
              <Plus />
              Read more
            </span>
          ) : (
            <span>
              <Minus />
              Read less
            </span>
          )}
        </button>

        <p className="game_description__textProvider">
          Software description provided by the publisher.
        </p>

        <CTA_Button
          {...{
            child: "Explore this game's official website",
            label: 'Visit product official site'
          }}
        />
      </div>

      <div className="game_description__image">
        <img
          src={windowWidth < 769 ? '/hero/mobile/display/hero.avif' : '/hero/mobile/display/hero.avif'}
          alt=""
        />
      </div>
    </section>
  );
}
