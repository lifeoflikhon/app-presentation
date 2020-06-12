function countdown(days, hours, minutes, seconds) {
  return `
    <div class="col">
      <div class="row">
        <div class="col-12"><h1 class="days">${
          days < 10 ? `0${days}` : days
        }</h1></div>
        <div class="col-12"><p>Days</p></div>
      </div>
    </div>
    <div class="col">
      <div class="row">
        <div class="col-12"><h1 class="hours">${
          hours < 10 ? `0${hours}` : hours
        }</h1></div>
        <div class="col-12"><p>Hours</p></div>
      </div>
    </div>
    <div class="col">
      <div class="row">
        <div class="col-12"><h1 class="minutes">${
          minutes < 10 ? `0${minutes}` : minutes
        }</h1></div>
        <div class="col-12"><p>Minutes</p></div>
      </div>
    </div>
    <div class="col">
      <div class="row">
        <div class="col-12"><h1 class="seconds">${
          seconds < 10 ? `0${seconds}` : seconds
        }</h1></div>
        <div class="col-12"><p>Seconds</p></div>
      </div>
    </div>
  `;
}
