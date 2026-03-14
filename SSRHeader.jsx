import React from "react";
import { FaHome } from "react-icons/fa";
import { IoChevronForward } from "react-icons/io5";
import "./SSRHeader.css";

const SSRHeader = () => {
  return (
    <header className="ssr-header">
      <div className="ssr-breadcrumb-bar">
        <div className="ssr-breadcrumb-bar__container">
          <nav className="ssr-breadcrumb" aria-label="Breadcrumb">
            <span className="ssr-breadcrumb__item">
              <FaHome className="ssr-breadcrumb__home" aria-hidden="true" />
              <span>Home</span>
            </span>
            <IoChevronForward className="ssr-breadcrumb__separator" aria-hidden="true" />
            <span className="ssr-breadcrumb__item">NAAC</span>
            <IoChevronForward className="ssr-breadcrumb__separator" aria-hidden="true" />
            <span className="ssr-breadcrumb__item ssr-breadcrumb__item--active">SSS Report</span>
          </nav>
        </div>
      </div>

      <div className="ssr-hero">
        <div className="ssr-hero__circle ssr-hero__circle--top" />
        <div className="ssr-hero__circle ssr-hero__circle--bottom" />

        <div className="ssr-hero__content">
          <div className="ssr-hero__label">
            <span className="ssr-hero__line" />
            <span className="ssr-hero__label-text">NAAC</span>
          </div>

          <h1 className="ssr-hero__title">SSS Report</h1>
        </div>
      </div>
    </header>
  );
};

export default SSRHeader;
