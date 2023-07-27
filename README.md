# My MVP - Workout Flo

This web app is designed for females to be able to look at the different workouts they could do depending on which phase they are in their menstrual cycle. 
Users can add and delete workouts as well as register and log in to the app.
This uses React.js and Express (Node.js). The implementation includes async/await for handling API requests.

### 🟡 Version 1

- **🌱 Next version:** Users would have a section of their favourite videos.
  
### 📦 Dependencies

1. Run `npm install` in project directory.

2. `cd client` and run `npm install`.

3. Run `npm install react-router-dom`.

4. Run `npm run dev` to open on the localhost.

5. Run npm start to open the API

### 💾 Database Setup

1. Create a database called `test`.
2. Create a `.env` file in the project directory with the following structure:

| Variable | Value         |
| -------- | ------------- |
| DB_HOST  | localhost     |
| DB_USER  | `<username>`  |
| DB_NAME  | test          |
| DB_PASS  | `<password>`  |

## 📋 Tables in test:

| Tables_in_test          |
| ----------------------- |
| menstrual               |
| follicular              |
| ovulation               |
| luteal                  |

## 📋 Table structure for menstrual/ follicular/ ovulation/ luteal:

| Field         | Type          | Null | Key | Default | Extra          |
| ------------- | ------------  | ---- | --- | ------- | -------------- |
| id            | int           | NO   | PRI | NULL    | auto_increment |
| workout       | varchar(255)  | NO   |     | NULL    |                |
| video         | varchar(255)  | NO   |     | NULL    |                |
| embedid       | varchar(255)  | NO   |     | NULL    |                |



