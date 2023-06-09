import GameDescription from "./GameDescription";
import HeroSection from "./HeroSection/main";
import ProductInfo from "./ProductInfo/main";
import StoreNotifications from "./StoreNotifications";
import OnlineMembership from "./OnlineMembership";
import MoreGames from './MoreGames/main';
import Legal from './Legal';

export default function Home () {
  return (
    <main>
      <StoreNotifications />
      <HeroSection />
      <GameDescription />
      <ProductInfo />
      <OnlineMembership />
      <MoreGames />
      <Legal />
    </main>
  );
}
