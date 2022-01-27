import { useState } from "react";
import Modal from "react-modal";

import { Header } from "components/Header";
import { Dashboard } from "components/Dashboard";
import { TransactionsTable } from "components/TransactionsTable";
import { NewTransactionModal } from "components/NewTransactionModal";

import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <TransactionsTable />
      <GlobalStyle />
    </>
  );
}

export default App;
