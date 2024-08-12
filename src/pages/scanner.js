
import dynamic from "next/dynamic";

const QRScanner = dynamic(() => import("../components/QRScanner"), {
  ssr: false,
});

export default function Scanner() {
  const handleScan = (data) => {
    if (data) {
      router.push(`/product?data=${encodeURIComponent(data)}`);
    }
  };

  return (
    <div>
      <h1>Scan QR Code</h1>
      <QRScanner onScan={handleScan} />
    </div>
  );
}
