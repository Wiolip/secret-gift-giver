# 🎁 Secret Santa Gift Giver

A professional React application to organize gift exchanges (Secret Santa), now powered by a **real-time REST API backend**. Built with **React**, **React Router**, and **Bulma CSS**.



## 🚀 Features (New & Improved)

* **Persistent Data**: Participants are now saved permanently to a **JSON database** via a REST API.
* **Full CRUD Operations**:
    * **Create**: Add new participants with validation (Formik & Yup).
    * **Read**: Fetch and synchronize the list from the server using Axios.
    * **Delete**: Remove individuals or clear entire selections with a secure confirmation dialog.
* **Advanced Selection Logic**:
    * **Select All**: Quick selection of all participants for large groups.
    * **Smart Selection**: Real-time tracking and unlocking of the draw feature.
* **Professional Error Handling**: Custom notifications and safe `try-catch` blocks to handle server issues gracefully in English.
* **Fair Draw Algorithm**: Uses the Fisher-Yates shuffle to ensure nobody draws themselves.
* **Responsive Design**: Fully styled with Bulma CSS, mobile-friendly.

## 🛠️ Tech Stack

* **Frontend**: React (Vite)
* **Backend**: JSON Server (REST API simulation)
* **HTTP Client**: Axios (for asynchronous server communication)
* **Routing**: React Router 6
* **Form Management**: Formik & Yup (for robust validation)
* **Styling**: Bulma CSS, Classnames
* **State Management**: React Context API (via Outlet Context)



## 📦 Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/wiolip/secret-gift-giver.git](https://github.com/wiolip/secret-gift-giver.git)
    cd secret-gift-giver
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Database Setup**
    The app uses `json-server`. Ensure you have a `db.json` file in your root folder with the following structure:
    ```json
    {
      "people": []
    }
    ```

## 🏃‍♂️ How to Run

To run the full application, you need to start both the server and the frontend:

**1. Start the Backend (Terminal 1):**

```bash
npx json-server --watch backend-moc/db.json --port 3001
```

**2. Start the Frontend (Terminal 2):**
```bash
Bash
npm run dev
```


##  🏗️ Project Roadmap

[x] Integrate REST API with Axios.

[x] Implement permanent Delete functionality.

[x] Add "Select All" feature for better UX.

[ ] Next: Expand database to include Email addresses

[ ] Next: Implement automated "Secret Santa" email notifications.

[ ] Next: Add newsletter subscription status.
