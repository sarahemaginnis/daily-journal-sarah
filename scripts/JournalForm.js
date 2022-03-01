/*
    This module returns the HTML for the journal input fields.
*/

export const JournalForm = () => {
    return `
    <form class="entryForm">
    <fieldset class="verticalFieldset">
        <legend>Date</legend>
        <input type="date" name="entryDate" class="entryForm__date">
    </fieldset>
    <fieldset class="verticalFieldset">
        <legend>Concepts Covered</legend>
        <input type="text" name="conceptsCovered" id="conceptsCoveredInput" class="entryForm_conceptsCovered">
    </fieldset>
    <fieldset class="verticalFieldset">
        <legend>Journal Entry</legend>
        <textarea type="textarea" name="journalEntry" id="journalEntryInput"
            class="entryForm_journalEntry"></textarea>
    </fieldset>
    <fieldset>
        <legend>Mood for the Day</legend>
        <select name="" id="">
            <option value="">Happy</option>
            <option value="">Sad</option>
            <option value="">Frustrated</option>
        </select>
    </fieldset>
    </form>
    <button type="button">Record Journal Entry</button>
    `
}