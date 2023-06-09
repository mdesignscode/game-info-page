export default function Tail () {
  const tailLinks = [
    'Contact us',
    'Website feedback',
    'Terms of use',
    'Documents & Policies',
  ];

  return (
    <div className="footer_tail">
      <div className="footer_tail__trademark">
        <span>© Nintendo. Games are property of their respective owners.</span> <span>Nintendo of America Inc. Headquarters are in Redmond, Washington, USA</span>
      </div>
      <div className="footer_tail__links">
        {tailLinks.map((link, i) => {
          return (
            <span key={`tailLink_${i}`} aria-label="external link">{link}</span>
          );
        })}
      </div>

      <span className="footer_tail__region">
        <img src="/FlagUsaIcon.png" alt="" />
        <span aria-label="external link">Change region</span>
      </span>
    </div>
  );
}
