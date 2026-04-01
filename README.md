# holidaycalendar

The Festival Calendar & National Holiday Tracker is a high-performance, static web application that provides instant cultural, historical, and holiday context for any day of the year. Built entirely with vanilla web technologies, the application operates 100% client-side.

Users can select any date via an intuitive, native UI to discover global events and regional festivals. The standout engineering feature of the application is its custom algorithmic backend: it utilizes a Doubly Linked List data structure to map out the year's national holidays. When a user selects a date, the application traverses this optimized list to instantly calculate the exact "next" and "previous" national holidays relative to their selection, bypassing the need for slow, brute-force array iterations.

 Features
Algorithmic Holiday Traversal: Constructs a custom Doubly Linked List (Node and DoublyLinkedList classes) in JavaScript upon initialization. This optimizes the search for adjacent (next/previous) holidays within a selected month.

Client-Side Data Architecture: Houses a comprehensive 365-day dataset of historical milestones and festivals locally within a structured JavaScript object (data.js). This eliminates server latency and API dependencies.

Interactive & Native UI: Utilizes native HTML5 date input methods for a seamless, accessible, and mobile-responsive user experience without relying on bloated third-party calendar libraries.

Tech Stack
Frontend Structure: HTML5 (Semantic elements, native input controls)
Styling: CSS3 (Flexbox for centered, responsive layout; minimalist UI design)
Logic & Algorithms: Vanilla JavaScript (ES6+)

Preview
<img width="1918" height="1015" alt="image" src="https://github.com/user-attachments/assets/0b7627b1-baaf-4607-a4bd-06cb9f0332d2" />
