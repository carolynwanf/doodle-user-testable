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

let card = d3
  .select("#selectionArea")
  .selectAll("div")
  .data(dates)
  .enter()
  .append("div")
  .attr("class", "col-2 card")
  .attr("style", "padding:0.5em; margin: 1em;");

card
  .append("p")
  .attr("style", "color:black; font-weight:bold;")
  .text((d) => d.date);

card
  .append("p")
  .attr("style", "color:black;")
  .text((d) => d.startTime + "-" + d.endTime);

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

    console.log(i.class);
  });

// function to clear all boxes
function clearAll() {
  let checkboxes = document.getElementsByClassName("checkbox");

  checkboxes.foreach((el) => {
    el.className = "checkbox no";
  });
}

function toggleCheckbox(event) {
  // if current class state is "yes", change to "maybe"
  if (event.target.className == "checkbox yes") {
    event.target.className = "checkbox maybe";
    // event.target.classList.add('.checkbox.maybe');
    checkbox.innerHTML = `<svg id="i-close" viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="10.9375%"><path d="M2 30 L30 2 M30 30 L2 2" /></svg>`;
  }
  // if current class state is "no", change to "yes"
  else if (event.target.className == "checkbox no") {
    event.target.className = "checkbox yes";
    checkbox.innerHTML = `<svg id="i-checkmark" viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="10.9375%"><path d="M2 20 L12 28 30 4" /></svg>`;
  }
  // if current class state is "maybe", change to "no"
  else {
    event.target.className = "checkbox no";
    // event.target.classList.remove('.checkbox.maybe');
    // event.target.classList.add('.checkbox.no');
    checkbox.innerHTML = "";
  }
}
