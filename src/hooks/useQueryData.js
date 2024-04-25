import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfigure";

export function useQueryData(productId) {
  const [detailItem, setDetailItem] = useState("");

  useEffect(() => {
    if (!productId) return;

    async function fetchDetailProduct() {
      try {
        const colRef = doc(db, "products", productId);
        const data = await getDoc(colRef);
        if (data.exists()) {
          setDetailItem({ id: data.id, ...data.data() });
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchDetailProduct();
  }, [productId]);

  return [detailItem];
}
