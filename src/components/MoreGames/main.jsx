import 'styles/MoreGames/main.scss';
import GameCard from './GameCard';
import Next from 'icons/Next';
import Previous from 'icons/Previous';
import {  useEffect, useRef, useState } from 'react';

export default function MoreGames () {
  const thumbnailsRef = useRef();
  const [isScrollStart, setIsScrollStart] = useState(true);
  const [isScrollEnd, setIsScrollEnd] = useState(false);

  const checkScrollPosition = () => {
    const slide = thumbnailsRef.current;

    if (slide) {
      setIsScrollStart(slide.scrollLeft === 0);
      setIsScrollEnd(slide.scrollLeft + slide.clientWidth >= slide.scrollWidth);
    }
  };

  const scrollSlide = (direction) => {
    const slide = thumbnailsRef.current;

    if (slide) {
      if (direction === 'next') {
        slide.scrollBy({ left: slide.offsetWidth, behavior: 'smooth' });
      } else if (direction === 'previous') {
        slide.scrollBy({ left: -slide.offsetWidth, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const slide = thumbnailsRef.current;
    if (slide) {
      slide.addEventListener('scroll', checkScrollPosition);
    }
    return () => {
      if (slide) {
        slide.removeEventListener('scroll', checkScrollPosition);
      }
    };
  }, []);

  const gameCards = [
    {
      cover: '/game_cards/my_time_at_portia.avif',
      title: 'My Time at portia',
      release: '04/16/2019',
      price: 29.99,
      hasDemo: false
    },
    {
      cover: '/game_cards/moonlighter.avif',
      title: 'Moonlighter',
      release: '11/05/2018',
      price: 24.99,
      hasDemo: true
    },
    {
      cover: '/game_cards/animal_crossing.avif',
      title: 'Animal Crossing™: New Horizons',
      release: '03/20/2020',
      price: 59.99,
      hasDemo: false
    },
    {
      cover: '/game_cards/cozy_grove.avif',
      title: 'Cozy Grove',
      release: '04/08/2021',
      price: 14.99,
      hasDemo: false
    },
    {
      cover: '/game_cards/fifa23.avif',
      title: 'EA SPORTS FIFA 23 Nintendo Switch™ Legacy Edition',
      release: '09/30/2022',
      price: 39.99,
      hasDemo: false
    }
  ];

  return (
    <section className="more_games">
      <h1>More like this</h1>

      <div className="more_games__cards">
        <div className="more_games__cardsSlide" ref={thumbnailsRef}>
          {gameCards.map(({ title, release, price, hasDemo, cover }, i) => {
            return (
              <GameCard
                {...{ title, release, price, hasDemo, cover }}
                key={`game_${i}`}
              />
            );
          })}
        </div>

        <Previous
          disabled={isScrollStart}
          onClick={() => scrollSlide('previous')}
          label="View previous thumbnails"
        />
        <Next
          disabled={isScrollEnd}
          onClick={() => scrollSlide('next')}
          label="View next thumbnails"
        />
      </div>
    </section>
  );
}
