new Vue({
  el: "#app",
  data: {
    appName: "Vue-JS Calculator",
    values: [],
    result: "",
    store: [],
    restartScreen: false,
    memory: Number(localStorage.getItem("memory"))
  },
  methods: {
    press: function(e) {
      e.preventDefault();
      let value = e.target.innerHTML;
      if (this.values[0] == "0") {
        this.values.pop();
        this.values.push(value);
      } else if (this.restartScreen) {
        this.values = [];
        this.restartScreen = false;
        this.values.push(value);
      } else {
        this.values.push(value);
      }
      console.log(this.store);
    },
    off: function(){
        this.clear();
        this.values = []
    },
    pushToStore: function() {
      let vals = document.getElementById("values").innerHTML;
      if (vals.length > 0) {
        this.store.push(vals);
      }
      this.restartScreen = true;
    },
    evaluate: function() {
      let latestVal = document.getElementById("values").innerHTML;
      this.store.push(latestVal);
      let storedVals = this.store.join("");
      var answer = eval(storedVals);
      this.store = [];
      this.values = [answer];
      this.restartScreen = true;
    },
    clear: function() {
      this.values = ["0"];
      this.store = [];
      this.restartScreen = false;
    },
    divide: function() {
      this.pushToStore();
      if (this.store.length > 0) {
        this.store.push("/");
      }
      console.log(this.store);
    },
    multiply: function() {
      this.pushToStore();
      if (this.store.length > 0) {
        this.store.push("*");
      }
      console.log(this.store);
    },
    subtract: function() {
      this.pushToStore();
      if (this.store.length > 0) {
        this.store.push("-");
      }
      console.log(this.store);
    },
    add: function() {
      this.pushToStore();
      if (this.store.length > 0) {
        this.store.push("+");
      }
      console.log(this.store);
    },
    equals: function() {
      this.evaluate();
    },
    memoryRecall: function() {
      let memory = Number(localStorage.getItem("memory"));
      this.values = [memory];
      this.restartScreen = true;
    },
    memoryAdd: function() {
      let currentVal = Number(document.getElementById("values").innerHTML);
      let newMemory = Number(this.memory) + currentVal;
      localStorage.setItem("memory", newMemory);
      this.restartScreen = true;
    },
    memorySub: function() {
      let currentVal = Number(document.getElementById("values").innerHTML);
      let newMemory = Number(this.memory) - currentVal;
      localStorage.setItem("memory", newMemory);
      this.restartScreen = true;
    },
    squareRoot() {
      let currentVal = Number(document.getElementById("values").innerHTML);
      let sqrt = Math.sqrt(currentVal);
      this.values = [sqrt];
      this.restartScreen = true;
    },
    percentage() {
      this.pushToStore();
      if (this.store.length > 0) {
        this.store.push("/100*");
      }
      console.log(this.store);
    },
    plusMinus() {
      if (this.values[0] == "-") {
        this.values.shift();
      } else if (this.values[0] != 0) {
        this.values.unshift("-");
      } else {
        this.values[0] = "-";
      }
    //   console.log(this.values);
    //   console.log(this.values[0]);
    }
  },
  mounted: function() {
    let memory = localStorage.getItem("memory");
    if (!memory) {
      localStorage.setItem("memory", 0);
    } else {
      this.memory = memory;
    }
    console.log("memory=>", memory);
  }
});
