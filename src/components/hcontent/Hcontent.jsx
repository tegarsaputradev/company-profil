import "./hcontent.scss";
import { BsCheckCircleFill, BsWhatsapp } from "react-icons/bs";
import { MdDoubleArrow } from "react-icons/md";

export default function Hcontent() {
  return (
    <div className="hcontent container-lg">
      <div className="content">
        <span className="welcome">
          Welcome to <span className="company">Tegar Dev</span>
        </span>
        <h1>Jasa Pembuatan Website</h1>
        <ul className="my-3">
          <li>
            <BsCheckCircleFill className="icon" />
            Harga Terjangkau
          </li>
          <li>
            <BsCheckCircleFill className="icon" />
            Amanah
          </li>
          <li>
            <BsCheckCircleFill className="icon" />
            Request Design
          </li>
          <li>
            <BsCheckCircleFill className="icon" />
            Terpercaya
          </li>
        </ul>
        <div className="tombol-kembar">
          <a href="/api-wa">
            <button className="satu">
              <BsWhatsapp />
              Konsultasi Gratis
            </button>
          </a>
          <a href="/api-wa">
            <button className="dua">
              <MdDoubleArrow className="arrow" />
              Lihat Pricelist
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
