import Nintendo from "icons/Nintendo";
import Facebook from "icons/Facebook";
import Instagram from "icons/Instagram";
import Twitter from "icons/Twitter";
import Youtube from "icons/Youtube";

export default function Head () {
  return (
    <div className="footer_head">
      <div className="footer_headLeft">
        <Nintendo />
      </div>

      <div className="footer_headRight">
        <Facebook />
        <Instagram />
        <Twitter />
        <Youtube />
      </div>
    </div>
  )
}
