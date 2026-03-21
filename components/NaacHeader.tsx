import React from "react";
import { Home, ChevronRight } from "lucide-react";


type NaacHeaderProps = {
  title: string;
  activeCrumb: string;
};

const NaacHeader: React.FC<NaacHeaderProps> = ({ title, activeCrumb }) => {
  return (
    <header className="naac-header">
      <div className="naac-breadcrumb-bar">
        <div className="naac-breadcrumb-bar__container">
          <nav className="naac-breadcrumb" aria-label="Breadcrumb">
            <span className="naac-breadcrumb__item">
              <Home className="naac-breadcrumb__home" aria-hidden="true" />
              <span>Home</span>
            </span>
            <ChevronRight className="naac-breadcrumb__separator" aria-hidden="true" />
            <span className="naac-breadcrumb__item">NAAC</span>
            <ChevronRight className="naac-breadcrumb__separator" aria-hidden="true" />
            <span className="naac-breadcrumb__item naac-breadcrumb__item--active">
              {activeCrumb}
            </span>
          </nav>
        </div>
      </div>

      <div className="naac-hero">
        <div className="naac-hero__circle naac-hero__circle--top" />
        <div className="naac-hero__circle naac-hero__circle--bottom" />

        <div className="naac-hero__content">
          <div className="naac-hero__label">
            <span className="naac-hero__line" />
            <span className="naac-hero__label-text">NAAC</span>
          </div>

          <h1 className="naac-hero__title">{title}</h1>
        </div>
      </div>
    </header>
  );
};

export default NaacHeader;
