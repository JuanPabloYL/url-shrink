import { Popup } from "./app/components/Popup";
import { useNotification } from "./auth/context/NotificationProvider";
import { AppRouter } from "./router/AppRouter";

export const App = () => {
  const { notification } = useNotification();
  return (
    <>
      {notification && <Popup notification={notification} />}
      <AppRouter />
    </>
  );
};
