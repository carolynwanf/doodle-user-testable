// fake data
let dates = [
  {
    date: "10/17/22",
    day: "Mon",
    startTime: "12:00 PM",
    endTime: "1:00 PM",
    class: "checkbox no",
    peopleAvailable: 1,
  },
  {
    date: "10/18/22",
    day: "Tues",
    startTime: "12:00 PM",
    endTime: "1:00 PM",
    class: "checkbox no",
    peopleAvailable: 1,
  },
  {
    date: "10/19/22",
    day: "Wed",
    startTime: "12:00 PM",
    endTime: "1:00 PM",
    class: "checkbox no",
    peopleAvailable: 0,
  },
  {
    date: "10/20/22",
    day: "Thurs",
    startTime: "12:00 PM",
    endTime: "1:00 PM",
    class: "checkbox no",
    peopleAvailable: 1,
  },
  {
    date: "10/21/22",
    day: "Fri",
    startTime: "12:00 PM",
    endTime: "1:00 PM",
    class: "checkbox no",
    peopleAvailable: 0,
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

// Adding the day
card
  .append("p")
  .attr("class", "day")
  .text((d) => d.day);

// Adding the time
card
  .append("p")
  .attr("style", "color:black;")
  .text((d) => d.startTime + "-" + d.endTime);

// Adding the number of people available
card
  .append("p")
  .attr("class", "people")
  .text((d) => {
    if (d.peopleAvailable == 1) {
      return d.peopleAvailable + " person available";
    } else {
      return d.peopleAvailable + " people available";
    }
  });

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
