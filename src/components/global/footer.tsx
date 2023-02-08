import React from "react";

import { FacebookFilled, InstagramFilled } from "@ant-design/icons";
import { TwitterSquareFilled, YoutubeFilled } from "@ant-design/icons";

const classes = {
  footer: "footer",
  container: "footer__logo-wrap",
  logo: "footer__logo",
  wrap: "footer__wrap-items",
  item: "footer__item",
  social: "footer__social",
  title: "footer__list-title",
  inner: "footer__inner",
  innerWrap: "footer__inner-wrap",
};

const Footer: React.FC = () => (
  // TODO: Pending add url
  <footer className={classes.footer}>
    <div className={classes.container}>
      <a itemProp="url" href="#">
        <img src="/Logo.png" className={classes.logo} />
      </a>
    </div>
    <div className={classes.wrap}>
      <ul>
        <li className={classes.item}>
          <a itemProp="url" href="#">
            Categorias
          </a>
        </li>
        <li className={classes.item}>
          <a itemProp="url" href="#">
            Autores
          </a>
        </li>
        <li className={classes.item}>
          <a itemProp="url" href="#">
            Libre
          </a>
        </li>
      </ul>
    </div>
    <h5 className={classes.title}>Siguenos</h5>
    <div className={classes.wrap}>
      <ul>
        <li className={classes.item}>
          <a itemProp="url" href="#">
            <FacebookFilled />
          </a>
        </li>
        <li className={classes.item}>
          <a itemProp="url" href="#">
            <InstagramFilled />
          </a>
        </li>
        <li className={classes.item}>
          <a itemProp="url" href="#">
            <TwitterSquareFilled />
          </a>
        </li>
        <li className={classes.item}>
          <a itemProp="url" href="#">
            <YoutubeFilled />
          </a>
        </li>
      </ul>
    </div>
    <div className={classes.inner}>
      <div className={classes.innerWrap}>
        <p>
          <span>© 2023 Huancayo City.</span>
          <span>A todo el ED. RPA Company.</span>
          <span>All Rights Reserved.</span>
        </p>
        <p>
          <span>Diario RPA ™ &amp; © 2023 Huancayo City. </span>
        </p>
        <span>
          <a href="#">Condiciones de uso</a>
        </span>
        <span>
          <a href="#">Anúnciate</a>
        </span>
        <span>
          <a href="#">Privacidad</a>
        </span>
        <span>
          <a href="#">Contáctanos</a>
        </span>
        <span>
          <a href="#">Elecciones de anuncios</a>
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
