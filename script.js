/**
 * Represents an IllegalExperienceException
 */
class IllegalExperienceException extends Error {
    /**
     * @param  {string} message the message text to display with this error.
     */
    constructor(message) {
        super(message);
        this.name = "IllegalExperienceException";
    }
}

/**
 * 
 * 
 * @param  {Date} dateStarted the year this topic was started.
 * @returns {TextNode} a text node containing the number of years of experience I have in a topic.
 */
function calculateExperience(dateStarted) {
    let suffix = "year",
        experience = new Date().getFullYear() - dateStarted.getFullYear()
    if (experience < 0) {
        throw new IllegalExperienceException("Experience cannot be negative.");
    } 
    
    if (experience == 0) {
        suffix = "months";
        experience = new Date().getMonth() - dateStarted.getMonth();
    } else if (experience > 1) {
        suffix = "years";
    }
    return document.createTextNode(`${experience} ${suffix}`);
}
const startedCoding = new Date(2015, 06, 01);       // The date I started coding.
const frontendStarted = new Date(2015, 06, 01);       // The date I started coding.
const frameworksStarted = new Date(2016, 06, 01);       // The date I started coding.
const backendStarted = new Date(2017, 06, 01);       // The date I started coding.
const softwareEngineeringStarted = new Date(2022, 04, 01);       // The date I started coding.

// Make years dynamic so they don't need to be updated yearly.
document.getElementById("frontend-years").append(calculateExperience(frontendStarted))
document.getElementById("backend-years").append(calculateExperience(backendStarted))
document.getElementById("software-engineering-years").append(calculateExperience(softwareEngineeringStarted))
document.getElementById("framework-years").append(calculateExperience(frameworksStarted))
document.getElementById("years-coding").append(calculateExperience(startedCoding));
document.getElementById("started-coding").append(startedCoding.toDateString());