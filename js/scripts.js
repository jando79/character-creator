//Business Logic

function hideResults() {
  document.getElementById("psycho-human").setAttribute("class", "hidden");
  document.getElementById("nice-person").setAttribute("class", "hidden");
  document.getElementById("psycho-monster").setAttribute("class", "hidden");
  document.getElementById("nice-monster").setAttribute("class", "hidden");
}

//User Interface Logic
function charaterCreator() {
  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    hideResults();
    const input1 = document.querySelector(input1).value;
    const operator = document.getElementById("input2[name='operator']:checked").value;
    const empathetic = document.getElementById("empathetic");
    const psychopath = document.getElementById("psychopath");
  }  
  
    if (operator === "human" && psychopath) {
      document.getElementById("psycho-human").setAttribute("class", "hidden");
    } elseif (operator === "human" && empathetic) {
      document.getElementById("nice-person").setAttribute("class", "hidden");
    } elseif (operator === "monster" && psychopath) {
      document.getElementById("psycho-monster").setAttribute("class", "hidden");
    } elseif (operator === "monster" && empathetic) {
      document.getElementById("nice-monster").setAttribute("class", "hidden");
    }
  }

  window.addEventListener("load", function() {
    const form = document.getElementById("character-creator");
    form.addEventListener("submit", characterCreator);
  });
  
