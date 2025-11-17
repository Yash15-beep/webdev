# SkillSwap - Full Stack Application

## Project Overview
SkillSwap is a peer-to-peer skill exchange platform built with Node.js, Express, MongoDB, and Handlebars. Students can share skills, discover learning partners, and manage skill exchanges.

## Technical Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Template Engine**: Handlebars (HBS)
- **Frontend**: Vanilla JavaScript, CSS3
- **Dev Tool**: Nodemon

## Key Features

### 1. HTML & CSS
- Semantic HTML structure
- Responsive design with CSS Grid and Flexbox
- Mobile-first approach
- Professional styling with gradient effects and smooth transitions

### 2. JavaScript Interactivity
- Modal popups for exchange requests
- Real-time search and filtering
- Form validation with regex
- localStorage for request management
- Interactive buttons and hover effects

### 3. OOP Implementation
- **SkillManager class** - Manages skill operations (filter, search, statistics)
- **UserManager class** - Manages user operations (matching, statistics)
- Class-based architecture with reusable methods

### 4. Data-Driven Pages
- **Browse Skills page** (/skills) - Displays skills from MongoDB with category filtering
- **Browse Users page** (/users) - Lists users with search functionality
- Both pages use JSON data fetched from the database

### 5. MongoDB CRUD Operations
- **Create**: Add new skills and users
- **Read**: Retrieve skills, users, and exchanges
- **Update**: Modify skill and user information
- **Delete**: Remove skills and users

### 6. Handlebars Templates
- **main.hbs** - Main layout template
- **header.hbs** - Navigation header (reused on all pages)
- **footer.hbs** - Footer (reused on all pages)
- Individual page templates for each route

### 7. Express Routing
- Home route (/)
- Skills routes (/skills) with CRUD operations
- Users routes (/users) with CRUD operations
- Error handling

## Installation & Setup

### Prerequisites
- Node.js installed
- MongoDB running locally

### Steps
1. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

2. Create .env file with MongoDB URI

3. Run with Nodemon:
   \`\`\`bash
   npm run dev
   \`\`\`

4. Visit http://localhost:3000

## Project Structure
\`\`\`
.
├── server.js                 # Main Express server
├── routes/
│   ├── index.js            # Home and about routes
│   ├── skills.js           # Skills CRUD routes
│   └── users.js            # Users CRUD routes
├── models/
│   ├── User.js             # User MongoDB schema
│   ├── Skill.js            # Skill MongoDB schema
│   └── Exchange.js         # Exchange MongoDB schema
├── classes/
│   ├── SkillManager.js     # OOP class for skills
│   └── UserManager.js      # OOP class for users
├── views/
│   ├── layouts/
│   │   └── main.hbs        # Main layout
│   ├── partials/
│   │   ├── header.hbs      # Header partial
│   │   └── footer.hbs      # Footer partial
│   └── *.hbs               # Page templates
├── public/
│   ├── css/
│   │   └── styles.css      # Stylesheet
│   └── js/
│       └── script.js       # Client-side JavaScript
└── package.json            # Dependencies
\`\`\`

## Evaluation Checklist
- ✓ HTML & CSS with responsive design
- ✓ JavaScript interactive features (modals, filters, search)
- ✓ OOP concepts (SkillManager and UserManager classes)
- ✓ Node.js/Express backend with routing
- ✓ Nodemon for development
- ✓ Handlebars templates with shared layouts
- ✓ MongoDB CRUD operations
- ✓ Two data-driven pages (skills and users)
- ✓ Interactive and dynamic elements

## Viva Questions
1. Explain the MVC pattern used in this project
2. How does Handlebars help avoid code duplication?
3. What OOP concepts are used and why?
4. Describe the MongoDB schema design
5. How does the skill filtering work?
6. Explain the routing structure
