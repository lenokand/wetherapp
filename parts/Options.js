
// Icons

const weatherOptions = {
    Rain:{
        iconName:'weather-lightning-rainy',
        gradient:["#373b44","#4286f4"],
        advice: "Don't forget your umbrella and raincoat! Stay dry."
    },
    Snow:{
        iconName:'weather-snowy',
        gradient:["#2980b9","#6dd5fa","#ffffff"],
        advice: "Bundle up, it's snowing! Enjoy the winter weather."
    },
    Thunderstorm:{
        iconName:'weather-windy-variant',
        gradient:["#F0F2F0","#000C40"],
        advice: "Stay indoors and be safe during the thunderstorm."
    },
    Drizzle:{
        iconName:'weather-partly-rainy',
        gradient:['#4c669f', '#3b5998', '#192f6a'],
        advice: "Light rain today. Grab an umbrella just in case."
    },
    Mist:{
        iconName:'weather-partly-rainy',
        gradient:['#7f7fd5', '#86a8e7', '#91eae4'],
        advice: "Be cautious when driving in misty conditions."
    },
    Smoke:{
        iconName:"weather-partly-rainy",
        gradient:['#7f7fd5', '#86a8e7', '#91eae4'],
        advice: "Poor air quality due to smoke. Stay indoors if possible."
    },
    Haze:{
        iconName:"weather-partly-rainy",
        gradient:['#7f7fd5', '#86a8e7', '#91eae4'],
        advice: "Hazy conditions today. Take it easy and stay hydrated."
    },
    Dust:{
        iconName:"weather-partly-rainy",
        gradient:['#7f7fd5', '#86a8e7', '#91eae4'],
        advice: "Dusty weather. Protect your eyes and wear a mask."
    },
    Fog:{
        iconName:"weather-partly-rainy",
        gradient:['#7f7fd5', '#86a8e7', '#91eae4'],
        advice: "Low visibility due to fog. Drive carefully."
    },
    Clouds:{
        iconName:'cloud',
        gradient:['#7f7fd5', '#86a8e7', '#91eae4'],
        advice: "Partly cloudy. Enjoy the day with outdoor activities."
    },
    Clear:{
        iconName:'weather-sunny',
        gradient:['#fceabb', '#f8b500'],
        advice: "Clear skies and sunshine. Perfect weather for outdoor fun."
    },
    Ash:{
        iconName:'cloud',
        gradient:['#fceabb', '#86a8e7', '#91eae4'],
        advice: "Ash in the air due to volcanic activity. Stay indoors and use masks."
    }
}
const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const daysOfWeekLong = [
                         "Sunday",
                         "Monday",
                         "Tuesday",
                         "Wednesday",
                         "Thursday",
                         "Friday",
                         "Saturday"
                       ];
const monthNames = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
      ];
export  {weatherOptions, daysOfWeek, daysOfWeekLong, monthNames}
