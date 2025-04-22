import React from 'react';

type PageModalProps = {
  id?: string;
  title: string;
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
  footer?: React.ReactNode;
  backdropClosable?: boolean;
};

function PageModal({
  id,
  title,
  show,
  onClose,
  children,
  footer,
  backdropClosable = true,
}: PageModalProps) {
  if (!show) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="modal-backdrop fade show"
        onClick={backdropClosable ? onClose : undefined}
      />

      {/* Modal */}
      <div
        className="modal fade show d-block"
        id={id}
        tabIndex={-1}
        role="dialog"
        aria-labelledby={`${id}Label`}
        aria-hidden={!show}
        onClick={backdropClosable ? onClose : undefined}
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered max-h-80"
          role="document"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="modal-content"
            style={{
              maxHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div className="modal-header">
              <h5 className="modal-title" id={`${id}Label`}>
                {title}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={onClose}
              />
            </div>

            <div className="modal-body">{children}</div>

            {footer && <div className="modal-footer">{footer}</div>}
          </div>
        </div>
      </div>
    </>
  );
}

export default PageModal;
