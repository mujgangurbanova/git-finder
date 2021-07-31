import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

export default function Alert() {
  const { alert } = useContext(AlertContext);
  console.log(alert);
  return (
    alert !==null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle" />
        {alert.msg}
      </div>
    )
  );
}
