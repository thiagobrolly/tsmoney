import { useState } from 'react';
// import gtag from 'ga-gtag';
import Modal from 'react-modal';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyles } from './styles/global';
import { TransactionsProvider } from './hooks/useTransactions';
import RoutesApp from './routes';

Modal.setAppElement('#root'); // acessibilidade: diz que o elemneto root não está acessivel enqunto o modal estiver aberto

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    // gtag('event', 'click_new_transaction', {
    //   event_category: 'create transaction',
    //   event_label: 'Criando Transação',
    // });

    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <RoutesApp />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyles />
    </TransactionsProvider>
  );
}

export default App;
