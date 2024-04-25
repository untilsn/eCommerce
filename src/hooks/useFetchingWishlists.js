import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "../config/firebaseConfigure";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  displayWishlist,
  displayWishlistLength,
} from "../redux/slice/storeSlice";

export async function useFetchingWishlists(user) {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      if (!user) return [];
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
          dispatch(displayWishlistLength(newProductIds));
          const productsQuery = query(
            collection(db, "products"),
            where("id", "in", newProductIds)
          );
          console.log(productsQuery);
          getDocs(productsQuery)
            .then((querySnapshot) => {
              const fetchedProducts = [];
              querySnapshot.forEach((doc) => {
                fetchedProducts.push(doc.data());
              });
              dispatch(displayWishlist(fetchedProducts));
            })
            .catch((error) => {
              console.log("Error fetching products:", error);
              dispatch(displayWishlist([]));
            });
        });
        return () => unsubscribe();
      } catch (error) {
        console.log("Error in useFetchingWishlists:", error);
        return [];
      }
    };

    fetchData();
  }, [user]);
}
