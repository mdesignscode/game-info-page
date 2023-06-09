import Truck from 'icons/Truck';
import Coins from 'icons/Coins';
import 'styles/StoreNotifications.scss';
import useWindowWidth from './hooks/useWindowWidth';

export default function StoreNotifications () {
  const windowWidth = useWindowWidth();

  return (
    <div className="store_notifications">
      <span className="store_notificationsNotification">
        <Truck />
        <strong>Free shipping</strong> on orders $50 or more.
      </span>
      {windowWidth >= 1025 && (
        <span className="store_notificationsNotification">
          <Coins />
          Earn <strong>My Nintendo Points</strong> on digital games
        </span>
      )}
    </div>
  );
}
