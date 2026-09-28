import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface InAppModalState {
  isOpen: boolean;
  title: string;
  subtitle?: string;
  content: ReactNode | null;
  onClose?: () => void;
}

interface ModalContextType {
  modalState: InAppModalState;
  showModal: (config: {
    title: string;
    subtitle?: string;
    content: ReactNode;
    onClose?: () => void;
  }) => void;
  closeModal: () => void;
}

const defaultState: InAppModalState = {
  isOpen: false,
  title: '',
  subtitle: undefined,
  content: null,
};

const ModalContext = createContext<ModalContextType>({
  modalState: defaultState,
  showModal: () => {},
  closeModal: () => {},
});

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [modalState, setModalState] = useState<InAppModalState>(defaultState);

  const showModal = (config: {
    title: string;
    subtitle?: string;
    content: ReactNode;
    onClose?: () => void;
  }) => {
    setModalState({
      isOpen: true,
      title: config.title,
      subtitle: config.subtitle,
      content: config.content,
      onClose: config.onClose,
    });
  };

  const closeModal = () => {
    if (modalState.onClose) {
      modalState.onClose();
    }
    setModalState(defaultState);
  };

  return (
    <ModalContext.Provider value={{ modalState, showModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useInAppModal = () => useContext(ModalContext);
