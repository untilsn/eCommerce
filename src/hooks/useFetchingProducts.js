import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../config/firebaseConfigure";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { displayCart } from "../redux/slice/storeSlice";

export function useFetchingProducts(user) {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      if (!user) return;
      try {
        const wishlistsQuery = query(
          collection(db, "carts"),
          where("userId", "==", user.uid)
        );

        const unsubscribe = onSnapshot(wishlistsQuery, (snapshot) => {
          const newProductIds = [];
          snapshot.forEach((doc) => {
            const wishlistItem = doc.data();
            newProductIds.push(wishlistItem.productId);
          });

          if (newProductIds.length === 0) {
            dispatch(displayCart([]));
            return;
          }

          const productsQuery = query(
            collection(db, "products"),
            where("id", "in", newProductIds)
          );

          onSnapshot(productsQuery, (snapshot) => {
            const fetchedProducts = [];
            snapshot.forEach((doc) => {
              fetchedProducts.push(doc.data());
            });
            dispatch(displayCart(fetchedProducts));
          });
        });

        return () => unsubscribe();
      } catch (error) {
        console.log("Error in useFetchingProducts:", error);
      }
    };

    fetchData();
  }, [user, dispatch]);
}
