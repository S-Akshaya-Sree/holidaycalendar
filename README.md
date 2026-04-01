# holidaycalendar

It’s a lightweight, dependency-free web application that acts as a smart calendar. Instead of just showing dates, it tells the user if a specific day is a festival, a historical event, or a designated National Holiday. Its standout feature is its ability to instantly calculate the next and previous national holidays relative to the user's selected date.

# Core Features:
Smart Date Querying: Users can pick any day of the year using a native HTML5 date picker and instantly get historical and cultural context for that day.

Contextual Navigation: If a user selects a random Tuesday, the app doesn't just tell them about that Tuesday; it looks ahead and behind to tell them when the next and previous National Holidays are occurring within that month.

Tech Stack
  HTML5: Structures the application. We used semantic, simple inputs like <input type="date"> to ensure it works natively on both desktop and mobile browsers without needing custom UI widgets.

  CSS3: Handles the presentation. The design is kept intentionally minimalist and clean, utilizing CSS Flexbox to perfectly center the application on the screen and manage the layout of the input elements.

  Vanilla JavaScript (ES6+): Handles the DOM manipulation (grabbing the user's input and updating the text on the screen) and executes the core logic and algorithms.

  PHP: Acts as the data provider. PHP stores the 365-day dataset in an associative array and seamlessly injects it into the JavaScript environment on page load using json_encode().

Preview:

