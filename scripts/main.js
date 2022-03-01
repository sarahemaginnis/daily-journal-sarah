/*
    The main module will be responsible for dynamically updating the HTML
    that displays in the browswer to the people using the application.
*/
import { DailyJournal } from "./DailyJournal.js"

const container = document.querySelector("#entries")

const render = () => {
    container.innerHTML = DailyJournal()
}

render()