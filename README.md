# 🌱 WellSpring Life - [Link](https://robicacodeaza-wellspring-life.vercel.app)
An administration app created for business owners who need to manage multiple properties(cabins as we call them). It offers easy access and useful features from bookings to settings to facilitate obtaining a better profit, everything from a SaSS tailored to every specific business.


## ❇️ Technologies

- `Vite`
- `React.js`
- `JavaScript`
- `React-Router`
- `React Query`
- `React-Hook-Form`
- `ContextApi`
- `React-Hot-Toast`
- `Date-Fns`
- `Recharts`
- `Supabase`
- `EsLint`
- `Styled Components`
- `CSS`
- `React-Icons`



## 💎 Features

Here's what you can do with WellSpring - Life:

- **Dashboard**: Here you can inspect the overall status of your business, containing significant statistics about bookings, sales, check-ins and occupancy rate, as well as an overall view of the duration summary of bookings.

- **Booking**: A table containing all the necessary details about the status of the current bookings offering the ability to mark them as paid, or to add extra prices for special requirements. 

- **Cabins**: A table showing all the current properties managed by the business owner, offering the possibility to CREATE, EDIT and DELETE cabins(properties).

- **Users**: Allows user creation only inside the app by the owner of the business, thus providing a software tailored to the one ordering it. 

- **Settings**: Here are some business-related preferences: minimum nights/booking ... breakfast prices. Those settings are created for every business order depending on their requests.



  
## 🧑‍🍳 The Process

The project represents a personal idea that allows small business owners to manage their cabins without headaches, having access to a simple yet effective solution.
I developed it following a User Story structure, then I defined the main features of the app, afterwards I thought about the Routing and necessary Tech Stack to bring her idea and my personal touch to life.

While building everything, I took notes on what I learned so I didn't miss out on it. I also documented the behind-the-scenes processes every time a feature was added.

This way, I understood what I've built. The funny thing is, as soon as I started to document what happened behind the scenes and the features I've added, it made me realize that we fully understand something once we've actually taken a step back, thought about it, and documented what we've done. I strongly believe this is a good practice to follow when learning something new.



## 📚 What I Learned

During this project, I've picked up important skills and a better understanding of complex ideas, which improved my logical thinking.

### ❔ React Query :

- Using an efficient, functional and clean way of interacting with the database while maintaining abstraction and respecting an opinionated way of programming.

### 👤 User Management and User's Data:

- Login constructed via email of the business owner, created separately in the database by the developer, thus allowing afterwards only the business owner to create some other users.
- Managed every user's data via login and ensured every interaction with the app had its signature based on its unique ID.
- Allowing user creation only after login.


### 🇫 Discovering React-Hook-Form:

- Easy management of the forms having access to default values served in conjunction with the data coming from *Supabase* via *React Query*.

### 🔍 Deep Dive into ContextApi:

- ContextApi represents a good solution that solves the problem of conditional responsive components and also conveys the possibility to create two-tone website variants(dark&light)

### ✏️ Supabase with SQL editor and PostgreSQL:

- Supabase Provides a CLI for JavaScript but sometimes updating Arrays inside a Row needed a personal touch and help from our friend SQL.

### 🪝 React Custom Hooks and TypeScript Practices:

- TypeScript allowed to catch errors early in production while working with defined data provided by Supabase dataTypes. Defining custom hooks(ex: usage of local storage) represented a good principle of DRY.

### 🏰 UI Component Library and Reusable Components - Styled Components

### 📈 Overall Growth:

Each part of this project helped me understand more about building apps, managing complex information, and improving user experience. It was more than just making a tool. It was about solving problems, learning new things, and improving my skills for future work.



## 💡 How can it be improved?

- Adding special offers inside the app.
- Add more statistics.
- Add proper testing to the app.
- Add a special zone of tasks assigned to every cabin.
- Add a task assignment to every specific user.
- Add specific details for every booking.


## 🏃 Running the Project

To run the project in your local environment, follow these steps:

```bash
# Clone the repository
git clone https://github.com/RobicaCodeaza/wellspring-life.git
# Navigate to the project directory
cd your-project

# Install dependencies
npm install

# Run the project
npm run dev

# Open http://localhost:5173 (or the address shown in your console) in your web browser to view the app.


```


## 🍿 Video

To be Added

