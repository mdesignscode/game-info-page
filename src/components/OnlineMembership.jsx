import "styles/OnlineMembership.scss";
import Online from 'icons/Online';
import CTA_Button from 'components/CTA_Button';

export default function OnlineMembership () {
  return (
    <section className="online_membership">
      <div className="online_membership__hero">
        <Online />
        <p className="online_membership__heroText">
          Play online, access classic NES™ and Super NES™ games, and more with a Nintendo Switch Online membership.
        </p>
        <p className="online_membership__heroFeatures">
          This game supports:
          <span>Online PlaySave</span>
          <span>Data Cloud</span>
        </p>
        <CTA_Button
          {...{
            child: 'Learn more',
            label: 'Learn more about membership'
          }}
        />
      </div>

      <div className="online_membership__heroImage">
        <img src="/Pro-Controller-Hands.avif" alt="" />
      </div>
    </section>
  );
}
