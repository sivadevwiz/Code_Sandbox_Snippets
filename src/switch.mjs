
const x = 1;

switch(x) {
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    default:
        console.log("NA");
        break;
}

const dayOfWeek = "Tuesday";

switch (dayOfWeek) {
  case "Monday": case "Tuesday": case "Wednesday": case "Thursday": case "Friday":
    console.log("It's a weekday!");
    break;
  case "Saturday": case "Sunday":
    console.log("It's a weekend!");
    break;
  default:
    console.log("Invalid day of the week.");
    break;
}

