import React from 'react';
import Tab from './Tab';
import PropTypes from "prop-types";

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
          {props.tabs.map((tab, index,selectTabHandler, selectedTab) => {
            return (
              <Tab tab={tab} selectTabHandler={props.selectTabHandler} selectedTab={selectedTab} key={index} />
            )
          })}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
  Tabs.propTypes = {
    tabs: PropTypes.array.isRequired,
    selectTabHandler: PropTypes.func,
    selectedTab: PropTypes.string
  };
export default Tabs;
