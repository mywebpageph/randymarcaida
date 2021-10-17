

var id, wid, inProgBar, container, percInterv;
var randNum, perc, div, add, div2, pe;
wid = 0;
inProgBar = document.getElementById("content");
container = document.getElementById("container");
percTest = document.getElementById("perTest");



function func(){
  load.style.color = "blue";
  load.innerHTML = "Loading...";
  clearInterval(id);
  id = setInterval(initProg, 50);
  clearInterval(percInterv);
  percInterv = setInterval(percent, 1000);
  function percent(){
    div = 496 / 100;
    randNum = div * Math.random();
    perc = Math.round(randNum);
    add = wid + perc;
    div2 = add / div;
    pe = Math.round(div2);
    percTest.innerHTML = pe + "%";
    if (wid == 496) {
      percTest.innerHTML = "100%";
      percTest.style.left = "5px";
      clearInterval(percInterv);
      setTimeout(hide, 100);
      function hide(){
        percTest.style.visibility = "hidden";
      }
    }
  }
  function initProg(){
    if (wid == 496) {
      load.innerHTML = "Loading finished!";
      inProgBar.style.backgroundColor = "#4df6ff";
      inProgBar.style.width = "496px";
      load.style.color = "red";
      container.style.border = "2px solid blue";
      clearInterval(id);
    } else {
      wid++
      inProgBar.style.width = add + "px";
    }
  }
}

func();