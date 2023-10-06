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
      <table className="divide-y divide-solid">
        <thead className="bg-slate-100 text-sm text-gray-400 leading-[3.5rem] uppercase">
          <tr>
            <th className="pl-5">orderno</th>
            <th>deliverydate</th>
            <th>customer</th>
            <th>trackingno</th>
            <th>status</th>
            <th>consignee</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-solid">
          {shipmentData.map((order) => {
            return (
              <tr
                className="text-gray-500 text-sm divide-y divide-solid"
                key={order.orderNo}>
                <td className="pl-5 pr-10 w-1/4">{order.orderNo}</td>
                <td className="pr-20">{order.date}</td>
                <td className="w-1/3">{order.customer}</td>
                <td className="pr-10 w-1/5">{order.trackingNo}</td>
                <td className="pr-20">{order.status}</td>
                <td className="w-2/5">{order.consignee}</td>
                <td>
                  <ShipmentModal
                    order={order}
                    updateShipmentData={updateShipmentData}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-danger divide-y divide-solid mr-2"
                    onClick={() => deleteShipmentData(order.orderNo)}>
                    <i class="bi bi-trash3-fill"></i>
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
