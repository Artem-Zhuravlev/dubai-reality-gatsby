import React, {
  ReactNode,
  useCallback,
  useContext,
  useState
} from 'react';

interface ModalContextProps {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ModalContext = React.createContext<ModalContextProps>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, [isOpen]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, [isOpen]);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
