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
  icon: "footer__wrap-items-icon",
};

const socialList = [
  {
    url: "",
    icon: <FacebookFilled />,
  },
  {
    url: "",
    icon: <InstagramFilled />,
  },
  {
    url: "",
    icon: <TwitterSquareFilled />,
  },
  {
    url: "",
    icon: <YoutubeFilled />,
  },
];

const Footer: React.FC = () => (
  // TODO: Pending add url
  <footer className={classes.footer}>
    <div className={classes.container}>
      <a itemProp="url" href="#">
        <img src="/Logo.png" className={classes.logo} />
      </a>
    </div>
    <div>
      <p className={classes.title}>Siguenos</p>
      <div className={classes.wrap}>
        <ul>
          {socialList.map((social, index) => (
            <li className={classes.item} key={index}>
              <a itemProp={social.url} href="#">
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
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
      </div>
    </div>
  </footer>
);

export default Footer;
