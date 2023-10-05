import { useEffect, useState } from "react";
import axios from "axios";
import ShipmentModal from "./ShipmentModal";

export default function ShipmentData(props) {
  const [shipmentData, setShipmentData] = useState([]);

  useEffect(() => {
    axios
      .get("./Shipments.json")
      .then((response) => {
        setShipmentData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  function updateShipmentData(
    orderNo,
    newDate,
    newCustomer,
    newTrackingNo,
    newStatus,
    newConsignee
  ) {
    const updatedShipmentData = shipmentData.map((shipment) => {
      if (orderNo === shipment.orderNo) {
        return {
          ...shipment,
          date: newDate,
          customer: newCustomer,
          trackingNo: newTrackingNo,
          status: newStatus,
          consignee: newConsignee,
        };
      }
      return shipment;
    });
    setShipmentData(updatedShipmentData);
  }

  function deleteShipmentData(orderNo) {
    const updatedShipmentData = shipmentData.filter(
      (item) => item.orderNo !== orderNo
    );
    setShipmentData(updatedShipmentData);
  }

  return (
    <>
      <div className="mt-3">
        <h3>Shipment Data from API with Axios</h3>
      </div>
      <table>
        <thead>
          <tr>
            <th className="">ORDERNO</th>
            <th className="">DELIVERYDATE</th>
            <th className="">CUSTOMER</th>
            <th className="">TRACKINGNO</th>
            <th className="">STATUS</th>
            <th className="">CONSIGNEE</th>
          </tr>
        </thead>
        <tbody>
          {shipmentData.map((order) => {
            return (
              <tr
                className="text-sm"
                key={order.orderNo}>
                <td className="">{order.orderNo}</td>
                <td className="">{order.date}</td>
                <td className="">{order.customer}</td>
                <td className="">{order.trackingNo}</td>
                <td className="">{order.status}</td>
                <td className="">{order.consignee}</td>
                <td>
                  <ShipmentModal
                    order={order}
                    updateShipmentData={updateShipmentData}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteShipmentData(order.orderNo)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
