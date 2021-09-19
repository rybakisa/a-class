import {GoalItemType} from "../../types/goals";

interface Props {
  isActive: boolean;
  item: GoalItemType;
}

const GoalItem = ({isActive, item}: Props) => (
  <div className={`goal-item ${isActive ? "goal-item--active" : ""}`}>
    <item.icon />
    <div className="goal-item__text">
      <h5 className="goal-item__title">{item.title}</h5>
      <span className="goal-item__desc">{item.text}</span>
    </div>
  </div>
);

export default GoalItem;
