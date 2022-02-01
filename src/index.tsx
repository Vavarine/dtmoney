import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";

import App from "./App";

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelance de website",
          type: "deposit",
          category: "Dev",
          amount: 4500,
          createdAt: new Date("2022-01-15 09:00:00"),
        },
        {
          id: 2,
          title: "Compra de jogo",
          type: "withdraw",
          category: "Lazer",
          amount: 50,
          createdAt: new Date("2022-01-15 10:00:00"),
        },
        {
          id: 3,
          title: "Conta de luz",
          type: "withdraw",
          category: "Contas",
          amount: 120,
          createdAt: new Date("2022-01-5 16:00:00"),
        },
        {
          id: 4,
          title: "Hakathon",
          type: "deposit",
          category: "Dev",
          amount: 40,
          createdAt: new Date("2022-01-06 23:00:00"),
        },
      ],
    });
  },
  routes() {
    this.namespace = "api";

    this.get("transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
