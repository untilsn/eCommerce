import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { displayWishlist } from "../redux/slice/storeSlice";
import { db } from "../config/firebaseConfigure";

export function useFetchingWishlists(user) {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      if (!user) return;
      try {
        const wishlistsQuery = query(
          collection(db, "wishlists"),
          where("userId", "==", user.uid)
        );

        const unsubscribe = onSnapshot(wishlistsQuery, (snapshot) => {
          const newProductIds = [];
          snapshot.forEach((doc) => {
            const wishlistItem = doc.data();
            newProductIds.push(wishlistItem.productId);
          });

          if (newProductIds.length === 0) {
            dispatch(displayWishlist([]));
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
            dispatch(displayWishlist(fetchedProducts));
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
