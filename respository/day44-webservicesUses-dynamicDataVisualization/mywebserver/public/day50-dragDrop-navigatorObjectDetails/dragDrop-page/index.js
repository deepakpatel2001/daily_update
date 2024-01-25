var kidImgId;
var kidStart = (event) => {
  kidImgId = event.target.getAttribute("id");
};

var kidsDraggable = (event) => {
  event.preventDefault();
  event.currentTarget.append(document.getElementById(kidImgId));
};

var kidsDragEnded = (event) => {
  event.preventDefault();
  console.log(event.currentTarget);
};

var menImgId;
var menStart = (event) => {
  menImgId = event.target.getAttribute("id");
};

var menDraggable = (event) => {
  event.preventDefault();
  event.currentTarget.append(document.getElementById(menImgId));
  console.log(event.currentTarget);
};

var menDragEnded = (event) => {
  event.preventDefault();
  console.log(event.currentTarget);
};

var womenImgId;
var womenStart = (event) => {
  womenImgId = event.target.getAttribute("id");
};

var womenDraggable = (event) => {
  event.preventDefault();
  event.currentTarget.append(document.getElementById(womenImgId));
};

var womenDragEnded = (event) => {
  event.preventDefault();
  console.log(event.currentTarget);
};