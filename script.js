function formatName(firstName, lastName) {
    return `${firstName} ${lastName}`
}

function getGreeting(timeOfDay) {
    if (timeOfDay === "morning") {
        return "Good morning, ";
    } else  if (timeOfDay === "afternoon") {
        return "Good afternoon, ";
    } else if (timeOfDay === "evening") {
        return "Good evening, ";
    }
}

function createGreeting(firstName, lastName,timeOfDay) {
    const fullName = formatName(firstName, lastName);
    const greeting = getGreeting(timeOfDay);
    return `${greeting} ${fullName}`;
}
  