
import { useRouter } from "next/router";
import { Button } from "@chakra-ui/react";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <h1>INCONTRO</h1>
      <Button colorScheme="blue" onClick={() => router.push("/scanner")}>
        Scanear QR
      </Button>
      <Button colorScheme="blue" onClick={() => router.push("/cart")}>
        Mi Carrito
      </Button>
    </div>
  );
}
