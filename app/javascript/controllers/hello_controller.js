import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    console.log("Connect")
    this.interval = setInterval(() => console.log("Hello World"), 1000)
  }

  disconnect () {
    console.log("Disconnect")
    clearInterval(this.interval)
  }
}
