const MyModal = ({ closeModal }) => {
  return (
    <>
      <div className="modal-wrapper ">
        <div className="modal-container">
          <h2>Stay Tuned</h2>
          <p>
            Subscribe to our newsletter and never miss our designs, latest
            news.etc
          </p>
          <button onClick={closeModal}>Accept It</button>
        </div>
      </div>
    </>
  );
};
export default MyModal;
