import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  buttonText,
  title,
  onClose,
  name,
  isOpen,
  onSubmit,
  hasRedirectButton,
  redirectButtonText,
  redirectButtonClick,
}) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content modal__content-form">
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
        ></button>
        <h3 className="modal__title-form">{title}</h3>
        <form onSubmit={onSubmit} className="modal__children">
          {children}
          <button className="modal__form-button" type="submit">
            {buttonText}
          </button>
          {hasRedirectButton && (
            <button
              className="modal__redirect-button"
              onClick={redirectButtonClick}
              type="button"
            >
              {redirectButtonText}
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
