import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import { PeoplePage } from "@/pages/PeoplePage";
import { ExchangePage } from "@/pages/ExchangePage";
import { PersonInfoPage } from "@/pages/PersonInfoPage";
import { PageNotFound } from "@/pages/404";
import { AddPersonPage } from "@/pages/AddPersonPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <PeoplePage noOutlet />,
      },
      {
        path: "people",
        element: <PeoplePage />,
        children: [
          {
            path: ":personName",
            element: <PersonInfoPage />,
          },
        ],
      },
      {
        path: "exchange",
        element: <ExchangePage />,
      },
      {
        path: "add-person",
        element: <AddPersonPage/>,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);
