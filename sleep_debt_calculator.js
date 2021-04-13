/* If we don’t sleep enough, we accumulate sleep debt. In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator.

The program will determine the actual and ideal hours of sleep for each night of the last week.

Finally, it will calculate, in hours, how far you are from your weekly sleep goal. */

// determining how many hours of sleep you got each night of the week
const getSleepHours = day => {
  switch (day) {
    case 'monday':
      return 8;
    break;

    case 'teusday':
      return 6;
    break;

    case 'wednesday':
      return 5;
    break;

    case 'thursday':
      return 7;
    break;

    case 'friday':
      return 5;
    break;

    case 'saturday':
      return 8;
    break;

    case 'sunday':
      return 9;
    break;
  }
}

// Now we calculate the total sleep hours that you actually slept

const getActualSleepHours = () =>
  getSleepHours('monday') +
  getSleepHours('teusday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');

// Get the ideal sleep hours that you prefer

const getIdealSleepHours = () => {
  idealHours = 8
  return idealHours * 7 // multiplying by 7 to get the total hours prefered in a week
}

// Calculate the sleep debt, if any.

const calculateSleepDebt = () => {
  actualSleepHours = getActualSleepHours();
  idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealHours) {
      console.log( 'You got the perfect amount of sleep.')
    } else if (actualSleepHours > idealSleepHours) {
      console.log(`You got ${actualSleepHours - idealSleepHours} hours more sleep than needed.`)
    } else {
      console.log(`You got ${actualSleepHours - idealSleepHours} hours less sleep than required. You should sleep more.`)
    }
  }

  calculateSleepDebt()