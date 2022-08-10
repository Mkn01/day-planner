// Current Day
$("#currentDay").text(moment().format("dddd, MMMM Do"));

// render working blocks
const workingBlock = $("#timeBlock");
const renderWorkingBlock = (hour) => {
  console.log(hour);
  const timeBlock = `<div class="row p-2 my 2 ${getClassName(container.key)}">
  <div class="col-md-1 col-sm-12 text-center my-1 d-flex flex-column justify-content-center">${
    container.label
  }</div>
  <textarea data-info=${
    container.key
  } class="col-md-9 col-sm-12" rows="3">${getEventForTimeBlock(
    workingHour.key
  )}</textarea>
  <div class="col-md-2 col-sm-12 text-center my-1 d-flex flex-column justify-content-center">
    <button type="button" data-hour=${
      container.key
    } class="btn btn-outline-success">Save</button>
  </div>`;

  //append to parent time block
  workingBlock.append(timeBlock);
};
container.forEach(renderTimeBlock);

workingBlocks.on("click", handleSave);
