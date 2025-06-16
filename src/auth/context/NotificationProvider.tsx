import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Notification } from "../../types";

interface NotificationContextType {
  notification: Notification | null;
  showNotification: (notification: Notification) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notification, setNotification] = useState<Notification | null>(null);

  const showNotification = (notification: Notification) => {
    setNotification(notification);
  };

  useEffect(() => {
    if (notification) {
      const timeout = setTimeout(() => setNotification(null), 4000);
      return () => clearTimeout(timeout);
    }
  }, [notification]);

  return (
    <NotificationContext.Provider value={{ notification, showNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context)
    throw new Error(
      "useNotification must be used within Notification Provider"
    );
  return context;
};
