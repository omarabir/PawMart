import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { ClipLoader } from "react-spinners";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleDownloadReport = () => {
    if (orders.length === 0) {
      alert("No orders to generate report!");
      return;
    }

    const doc = new jsPDF("p", "pt", "a4");
    const pageWidth = doc.internal.pageSize.getWidth();

    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    const title = "My Orders Report";
    const textWidth = doc.getTextWidth(title);
    doc.text(title, (pageWidth - textWidth) / 2, 40);

    const tableColumn = [
      "Product Name",
      "Buyer Name",
      "Price",
      "Quantity",
      "Address",
      "Date",
      "Phone",
    ];

    const tableRows = orders.map((order) => [
      order.productName,
      order.buyerName,
      order.price,
      order.quantity,
      order.address,
      new Date(order.date).toLocaleDateString(),
      order.phone,
    ]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 60,
      theme: "grid",
      headStyles: {
        fillColor: [128, 90, 213],
        textColor: 255,
        fontStyle: "bold",
        halign: "center",
      },
      bodyStyles: {
        fontSize: 10,
        halign: "left",
      },
      alternateRowStyles: { fillColor: [245, 245, 245] },
      margin: { left: 20, right: 20 },
    });

    doc.save("my-orders.pdf");
  };

  useEffect(() => {
    if (!user?.email) return;

    const fetchOrders = async () => {
      try {
        const res = await fetch(
          `https://pawmart-server-weld-nu.vercel.app/orders?email=${user.email}`
        );
        const data = await res.json();
        setOrders(data);
      } catch (error) {
        console.error("Failed to load orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user?.email]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <ClipLoader size={50} color="#4f46e5" />
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold mb-2">No Orders Found 😕</h2>
        <p className="text-gray-500 text-lg">
          You haven’t placed any orders or adoption requests yet.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-black">My Orders</h1>
        <button
          onClick={handleDownloadReport}
          className="btn bg-green-500 hover:bg-green-600 text-white rounded w-full md:w-auto"
        >
          Download Report
        </button>
      </div>

      {/* Table for all screen sizes */}
      <div className="overflow-x-auto border border-gray-300 rounded-lg shadow">
        <table className="min-w-full text-sm md:text-base border-collapse">
          <thead className="bg-purple-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">Product</th>
              <th className="px-4 py-2 text-left">Buyer</th>
              <th className="px-4 py-2 text-left">Price</th>
              <th className="px-4 py-2 text-left">Quantity</th>
              <th className="px-4 py-2 text-left">Address</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Phone</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, idx) => (
              <tr key={order._id} className={idx % 2 !== 0 ? "" : ""}>
                <td className="px-4 py-2">{order.productName}</td>
                <td className="px-4 py-2">{order.buyerName}</td>
                <td className="px-4 py-2">{order.price}</td>
                <td className="px-4 py-2">{order.quantity}</td>
                <td className="px-4 py-2">{order.address}</td>
                <td className="px-4 py-2">
                  {new Date(order.date).toLocaleDateString()}
                </td>
                <td className="px-4 py-2">{order.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
