import "./SwitchView.css";

const SwitchView = ({viewDelivered, setViewDelivered}) => (
    <div className="switchView">
      <div className={viewDelivered ? "" : "switchedView"} onClick={()=>setViewDelivered(false)}>
        In Transit
      </div>
      <div className={viewDelivered ? "switchedView" : ""} onClick={()=>setViewDelivered(true)}>
        Delivered
      </div>
    </div>
);

export default SwitchView;
