import "./topnav.scss";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import {
  FiFacebook,
  FiTwitter,
  FiSearch,
  FiClock,
  FiInstagram,
} from "react-icons/fi";

export default function Topnav() {
  return (
    <div className="topnav-container border-bottom w-100">
      <div className="container-lg">
        <div className="row">
          <div className="col-sm-6 d-flex align-items-center gap-3 flex-wrap topnav">
            <div className="d-flex gap-2 align-items-center contact">
              <AiOutlineMail />
              <span className="email">tegaracs.ti@gmail.com</span>
            </div>
            <div className="d-flex gap-2 align-items-center contact">
              <AiOutlineWhatsApp />
              <span className="whatsapp">+62816827249</span>
            </div>
            <div className="d-flex gap-2 align-items-center open">
              <FiClock />
              <span className="time">Mon. - Fri.10AM - 05PM</span>
            </div>
          </div>
          <div className="col-sm-6 d-flex align-items-center justify-content-end gap-3 topnav">
            <FiFacebook className="icon" />
            <FiTwitter className="icon" />
            <FiInstagram className="icon" />
            <FiSearch className="icon ms-3" />
          </div>
        </div>
      </div>
    </div>
  );
}
