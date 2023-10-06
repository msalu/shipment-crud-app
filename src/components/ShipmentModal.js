import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function EditShipmentData(props) {
  const [orderNo, setOrderNo] = useState(props.order.orderNo);
  const [date, setDate] = useState(props.order.date);
  const [customer, setCustomer] = useState(props.order.customer);
  const [trackingNo, setTrackingNo] = useState(props.order.trackingNo);
  const [status, setStatus] = useState(props.order.status);
  const [consignee, setConsignee] = useState(props.order.consignee);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpdate = (e) => {
    e.preventDefault();
    props.updateShipmentData(
      orderNo,
      date,
      customer,
      trackingNo,
      status,
      consignee
    );
    handleClose();
  };

  return (
    <>
      <Button
        className="m-2 text-white"
        variant="info"
        onClick={handleShow}>
        <i class="bi bi-person-vcard-fill"></i>
      </Button>
      <Modal
        show={show}
        onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <form
            id="modal"
            className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
                  htmlFor="order">
                  Order No.
                </label>
                <input
                  disabled
                  className="opacity-50 appearance-none block w-full bg-gray-200 text-gray-500 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="order"
                  type="text"
                  value={orderNo}
                  onChange={(e) => {
                    setOrderNo(e.target.value);
                  }}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
                  htmlFor="date">
                  Delivery Date
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="date"
                  type="text"
                  value={date}
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
                  htmlFor="customer">
                  Customer
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-500 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="order"
                  type="text"
                  value={customer}
                  onChange={(e) => {
                    setCustomer(e.target.value);
                  }}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
                  htmlFor="tracking">
                  Tracking No.
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="tracking"
                  type="text"
                  value={trackingNo}
                  onChange={(e) => {
                    setTrackingNo(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
                  htmlFor="status">
                  Status
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-500 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="status"
                  type="text"
                  value={status}
                  onChange={(e) => {
                    setStatus(e.target.value);
                  }}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
                  htmlFor="consignee">
                  Consignee
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="consignee"
                  type="text"
                  value={consignee}
                  onChange={(e) => {
                    setConsignee(e.target.value);
                  }}
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
            form="modal"
            onClick={handleClose}>
            Close
          </button>
          <button
            className="bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded"
            form="modal"
            onClick={handleUpdate}>
            Update
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
