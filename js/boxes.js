// fake data
let dates = [
  {
    date: "10/1/22",
    startTime: "12:00 PM",
    endTime: "1:00 PM",
    class: "checkbox no",
  },
  {
    date: "10/2/22",
    startTime: "12:00 PM",
    endTime: "1:00 PM",
    class: "checkbox no",
  },
  {
    date: "10/3/22",
    startTime: "12:00 PM",
    endTime: "1:00 PM",
    class: "checkbox no",
  },
  {
    date: "10/4/22",
    startTime: "12:00 PM",
    endTime: "1:00 PM",
    class: "checkbox no",
  },
  {
    date: "10/5/22",
    startTime: "12:00 PM",
    endTime: "1:00 PM",
    class: "checkbox no",
  },
  {
    date: "10/6/22",
    startTime: "12:00 PM",
    endTime: "1:00 PM",
    class: "checkbox no",
  },
  {
    date: "10/7/22",
    startTime: "12:00 PM",
    endTime: "1:00 PM",
    class: "checkbox no",
  },
  {
    date: "10/8/22",
    startTime: "12:00 PM",
    endTime: "1:00 PM",
    class: "checkbox no",
  },
  {
    date: "10/9/22",
    startTime: "12:00 PM",
    endTime: "1:00 PM",
    class: "checkbox no",
  },
  {
    date: "10/10/22",
    startTime: "12:00 PM",
    endTime: "1:00 PM",
    class: "checkbox no",
  },
  {
    date: "10/11/22",
    startTime: "12:00 PM",
    endTime: "1:00 PM",
    class: "checkbox no",
  },
  {
    date: "10/12/22",
    startTime: "12:00 PM",
    endTime: "1:00 PM",
    class: "checkbox no",
  },
];

// Making cards for each time slot
let card = d3
  .select("#selectionArea")
  .selectAll("div")
  .data(dates)
  .enter()
  .append("div")
  .attr("class", "col-2 card")
  .attr("style", "padding:0.5em; margin: 1em;");

// Adding the date
card
  .append("p")
  .attr("style", "color:black; font-weight:bold;")
  .text((d) => d.date);

// Adding the time
card
  .append("p")
  .attr("style", "color:black;")
  .text((d) => d.startTime + "-" + d.endTime);

// Adding the 3-state checkbox
card
  .append("div")
  .append("span")
  .attr("class", "checkbox")
  .on("click", function (d, i) {
    console.log(i.class);
    // if current class state is "yes", change to "maybe"
    if (i.class == "checkbox yes") {
      i.class = "checkbox maybe";
      d3.select(this).attr("class", "checkbox maybe");
    }
    // if current class state is "no", change to "yes"
    else if (i.class == "checkbox no") {
      i.class = "checkbox yes";
      d3.select(this).attr("class", "checkbox yes");
    }
    // if current class state is "maybe", change to "no"
    else {
      i.class = "checkbox no";
      d3.select(this).attr("class", "checkbox no");
    }
  });

// function to clear all boxes
function clearAll() {
  let checkboxes = document.getElementsByClassName("checkbox");

  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].className = "checkbox no";
    dates[i].class = "checkbox no";
  }

  alert("submitted!");
}
