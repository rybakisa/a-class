import AnchorLink from "react-anchor-link-smooth-scroll";
import {GoalItemProps} from "../../types";

const GoalItem = ({isActive, item}: GoalItemProps) => {
  const renderContent = () => (
    <div className={`goal-item ${isActive ? "goal-item--active" : ""}`}>
      <item.icon />
      <div className="goal-item__text">
        <h5 className="goal-item__title">{item.title}</h5>
        <span className="goal-item__desc">{item.text}</span>
      </div>
    </div>
  );

  return item.link ? (
    <AnchorLink
      href={item.link}
      className="goal-item-link"
      offset={window.devicePixelRatio === 1 ? "-500" : "0"}>
      {renderContent()}
    </AnchorLink>
  ) : (
    renderContent()
  );
};

export default GoalItem;
