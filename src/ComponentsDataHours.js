import React from 'react';

class ComponentsDataHours extends React.Component{
  render() {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;
    let day  = today.getDate();
    day = (day < 10 ? "0" : "") + day;
    let hour = today.getHours();
    hour = (hour < 10 ? "0" : "") + hour;
    let  min  = today.getMinutes();
    min = (min < 10 ? "0" : "") + min;
    return(
      <div>
       { day + '-' + month + '-' + year + hour + ':' + min }

      </div>
    )
  }
}
export default ComponentsDataHours;
