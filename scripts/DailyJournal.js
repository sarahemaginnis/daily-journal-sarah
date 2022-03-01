/*
While the main module is responsible for actually putting your application's
HTML code into the browser for viewing, this component is responsible for
generating the overall structure of your HTML.
*/

import { Entries } from "./Entries.js"
import { JournalForm } from "./JournalForm.js"

export const DailyJournal = () => {
    return `
        <div class="entryList">
            ${ Entries() }       
        </div>
        <article class="entryForm">
            ${JournalForm()}
        </article>
    `
}