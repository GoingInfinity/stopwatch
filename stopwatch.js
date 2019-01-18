class Stopwatch {
  constructor(display) {
    this.running = false; // Stopwatch status
    this.display = display; // Target Id to display stopwatch value
    this.time = [0,0,0]; // [minute, seconds, milliseconds]
    this.count = 0
  }

  start() {
    // Checks if stopwatch is running
    if (this.running) return
    this.running = true

    // Stopwatch timer function using setInterval to update values
    this.count = setInterval(() => {
      if (this.time[2] == 99) {
        this.time[2] = 0
        if (this.time[1] == 59) {
          this.time[1] = 0
          this.time[0]++
        } else this.time[1]++
      } else this.time[2]++
      this.update()
    }, 10)
  }

  pause() {
    this.running = false
    clearInterval(this.count)
  }

  reset() {
    this.time = [0,0,0]
    this.update()
  }

  update() {
    const formattedTime = this.time.map(time => time < 10 ? "0" + time : time)
    const temp = document.querySelector("#"+this.display)
    temp.children[0].innerText = formattedTime[0]
    temp.children[1].innerText = formattedTime[1]
    temp.children[2].innerText = formattedTime[2]

    // const childNodes = temp.getElementsByTagName('div')
    // temp.firstChild.nodeValue = `${formattedTime[0]} : ${formattedTime[1]} : ${formattedTime[2]}`
  }
}

// Used to store Stopwatch classes
const store = {
  s1: new Stopwatch("timer__1")
}

class StopwatchContainer {
  constructor() {
    this.stopwatchCount = 2 // Value is used to create unique id || key
    this.htmlElements = ['start', 'pause', 'reset']
  }

  addStopwatch() {
    store['s'+this.stopwatchCount] = new Stopwatch(`timer__${this.stopwatchCount}`)

    const node = document.createElement("div")
    node.setAttribute('class', 'stopwatch')
    node.setAttribute('id', `stopwatch__${this.stopwatchCount}`)

    const timer = document.createElement("div")
    timer.setAttribute('class', 'timer')
    timer.setAttribute('id', `timer__${this.stopwatchCount}`)
    timer.innerHTML = '<span>00</span><span>00</span><span>00</span>'

    const controls = document.createElement("div")
    controls.setAttribute('class', 'controls') 

    // Control butttons
    this.htmlElements.forEach(ele => {
      var html = `<div id='${ele}' onclick='store.s${this.stopwatchCount}.${ele}()' >${ele}</div>`
      controls.innerHTML += html
    })

    // Increment count
    this.stopwatchCount++

    node.appendChild(timer)
    node.appendChild(controls)
    document.querySelector('.stopwatch__container').appendChild(node)
  }
}

const stopwatchContainer = new StopwatchContainer()

