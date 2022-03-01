/*
 *   Data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

const database = {
    "entries": [
        {
            id: 1,
            date: "01/31/2022",
            concept: "HTML & CSS",
            entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
            mood: "Happy"
        },
        {
            id: 2,
            date: "02/27/2022",
            concept: "JavaScript & JSON",
            entry: "My small group worked on JSON servers to store data.",
            mood: "Happy"
        },
        {
            id: 3,
            date: "02/01/2022",
            concept: "JavaScript",
            entry: "We had a guest lecture with Dr. T, who taught us about array methods.",
            mood: "Happy"
        }
    ]
}

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const getJournalEntries = () => {
    const copyOfData = database.entries.map(entry => ({...entry}))
    return copyOfData
}