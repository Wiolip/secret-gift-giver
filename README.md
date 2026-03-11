# 🎁 Secret Secret Gift Giver

A professional **Fullstack** application to organize gift exchanges (Secret Santa). Now powered by a **custom Serverless API** and deployed in the cloud. Built with **React**, **Node.js**, and **Bulma CSS**.

## 🔗 Live Demo
Check out the working application here:
`https://secret-gift-giver-ten.vercel.app/`

## 🚀 Features (New & Improved)

* **Cloud-Native Backend**: Migrated from local `json-server` to **Vercel Serverless Functions** (Node.js).
* **Full CRUD Operations**:
    * **Create**: Add participants with validation (Formik & Yup).
    * **Read**: Real-time synchronization with the server using **Axios**.
    * **Delete**: Remove individuals with immediate server-side updates.
* **Master-Detail View**: Advanced routing using **React Router 6** with a side-by-side list and info panel.
* **Robust Validation**: Strict schemas for Names, Emails, and Newsletter consent using **Yup**.
* **Professional UI**: Fully responsive layout powered by **Bulma CSS**, featuring loading states and error notifications.
* **Fair Draw Logic**: Designed to ensure a perfect "Secret Santa" loop where no one draws themselves (requires min. 3 people).

## 🛠️ Tech Stack

* **Frontend**: React (Vite)
* **Backend**: Node.js (Vercel Serverless Functions)
* **HTTP Client**: Axios
* **Routing**: React Router 6 (Nested Routes & Outlet Context)
* **Forms**: Formik & Yup
* **ID Generation**: Nanoid
* **Styling**: Bulma CSS



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

3.  **Environment Setup**
    Create a `.env` file in the root directory:
    ```env
    VITE_BACKEND_URL=/api
    ```

4.  **Run Development Server**
    ```bash
    npm run dev
    ```

## 🏗️ Project Roadmap

* [x] Migrate from `json-server` to custom Serverless API.
* [x] Implement **Nanoid** for secure participant identification.
* [x] Create **Master-Detail** layout for better UX.
* [ ] **Next**: Connect to a persistent Database (e.g., Vercel KV or MongoDB).
* [ ] **Next**: Implement automated "Secret Santa" email notifications.
