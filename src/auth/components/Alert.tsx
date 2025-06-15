export const Alert = ({ error }: { error: string }) => {
  return (
    <div className="form__login-error">
      <p>{error}</p>
    </div>
  );
};
