import ESRB_Certified from "icons/ESRB_Certified";

export default function Body () {
  const footerLinks = [
    {
      title: 'About Nintendo',
      links: [
        'Careers',
        'Corporate Social Responsibility'
      ]
    },
    {
      title: 'Shop',
      links: [
        'Games',
        'Hardware',
        'Merchandise',
        'Sales & deals',
        'Exclusives',
        'Online service',
        'Nintendo NY store'
      ]
    },
    {
      title: 'My Nintendo Store orders',
      links: [
        'Order details',
        'Shipping info',
        'Returns & exchanges',
        'FAQ'
      ]
    },
    {
      title: 'Support',
      links: [
        'Nintendo Switch',
        'Nintendo Account',
        'Other systems',
        'Repairs',
        'Nintendo product recycling'
      ]
    },
    {
      title: 'Parents',
      links: [
        'Info for parents',
        'Parental controls'
      ]
    },
    {
      title: 'Community',
      links: [
        'Community guidelines',
        'Online safety principles'
      ]
    },
    {
      title: 'Privacy',
      links: [
        'Privacy policy',
        'Cookies and interest-based ads'
      ]
    }
  ];

  return (
    <div className="footer_body">
      {footerLinks.map(({ title, links }, i) => {
        return (
          <div className="footer_body__link" key={`footerLink_${i}`}>
            <h2>{title}</h2>
            <div className="footer_body__linkItems">
              {links.map((link, i) => {
                return (
                  <span
                    aria-label="external navigation"
                    key={`linkItem_${i}`}
                  >
                    {link}
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}

      <div className="esrb_certified">
        <ESRB_Certified />
      </div>
    </div>
  );
}
