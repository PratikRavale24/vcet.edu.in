import React from "react";

type CycleTabsProps = {
  activeCycle: "cycle1" | "cycle2";
  onChange: (cycle: "cycle1" | "cycle2") => void;
};

const CycleTabs: React.FC<CycleTabsProps> = ({ activeCycle, onChange }) => {
  return (
    <div className="naac-tabs">
      <button
        type="button"
        className={
          activeCycle === "cycle1"
            ? "naac-tab naac-tab--active"
            : "naac-tab"
        }
        onClick={() => onChange("cycle1")}
      >
        Cycle 1
      </button>
      <button
        type="button"
        className={
          activeCycle === "cycle2"
            ? "naac-tab naac-tab--active"
            : "naac-tab"
        }
        onClick={() => onChange("cycle2")}
      >
        Cycle 2
      </button>
    </div>
  );
};

export default CycleTabs;
