import React, { Fragment, useEffect, useState } from "react";
import InputContaint from "../../components/input/InputContaint";
import InputForm from "../../components/input/InputForm";
import { Option, Radio, Select } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import Button from "../../components/button/Button";
import ImageUpload from "../../components/ImageUpload";
import DashboardHeading from "../../modules/dashboard/DashboardHeading";
import { FiMinus } from "react-icons/fi";
import { v4 } from "uuid";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFirebaseImage } from "../../hooks/useFirebaseImage";
import {
  collection,
  getDocs,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../config/firebaseConfigure";
import Description from "../../components/quill/Description";
import { useSearchParams } from "react-router-dom";
import { useQueryData } from "../../hooks/useQueryData";

const productStatus = ["approved", "pending", "reject"];

const DashboardUpdateProduct = () => {
  const [idProduct] = useSearchParams();
  const getIdProduct = idProduct.get("id");
  const { categories } = useSelector((state) => state.store);
  const { user } = useSelector((state) => state.auth);
  const [url, setUrl] = useState("");
  const [urls, setUrls] = useState([]); // Ensure urls is an array
  const [comment, setComment] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectStatus, setSelectStatus] = useState("");

  const { control, setValue, getValues, handleSubmit, reset } = useForm({
    mode: "onChange",
    defaultValues: {
      images: [],
      category: "",
      desc: "comment",
      user: "",
      createAt: serverTimestamp(),
      stock: "",
      price: "",
      status: "selectStatus",
      reviews: [],
    },
  });
  const handleSelectCategory = (category) => {
    setSelectedCategory(category.toLowerCase());
  };
  const handleStatus = (status) => {
    setSelectStatus(status);
  };
  const { image, handleSelectImage, handleRemoveImage } = useFirebaseImage(
    setValue,
    getValues
  );
  const handleDeleteImage = (url) => {
    handleRemoveImage(url);
  };
  const handleAddUrl = () => {
    if (urls.length > 5) return toast.error("Only 5 images or less");
    if (urls.some((item) => item === url)) {
      setUrl("");
      return;
    }
    if (url.trim() !== "") {
      setUrls((prevUrls) => [...prevUrls, url]);
      setUrl("");
    }
  };
  const handleValueChange = (e) => {
    setUrl(e.target.value);
  };
  const combinedImages = [...image, ...urls];
  const handleAddProducts = async (values) => {
    if (!values || !user) return;
    if (!image.length && !urls.length) {
      console.log("Bạn cần phải cung cấp urls nếu không có image.");
      return;
    }
    try {
      const collectionRef = collection(db, "products");
      const queryDoc = query(
        collectionRef,
        where("productId", "==", getIdProduct)
      );
      const querySnapshot = await getDocs(queryDoc);

      if (querySnapshot.empty) {
        console.log("Không tìm thấy sản phẩm.");
        return;
      }

      const docRef = querySnapshot.docs[0].ref;
      await updateDoc(docRef, {
        title: values.title,
        images: combinedImages,
        category: selectedCategory,
        desc: comment,
        createAt: serverTimestamp(),
        stock: Number(values.stock),
        price: Number(values.price),
        status: selectStatus,
      });

      toast.success("Cập nhật sản phẩm thành công");
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveUrl = (urlItem) => {
    const newUrls = urls.filter((url) => url !== urlItem);
    setUrls(newUrls);
  };

  const [detailItem] = useQueryData(getIdProduct);

  useEffect(() => {
    if (detailItem) {
      reset(detailItem);
      setUrls(detailItem.images || []); // Ensure detailItem.images is an array
      setSelectedCategory(detailItem.category || "");
      setComment(detailItem.desc || "");
      setSelectStatus(detailItem.status || "");
    }
  }, [detailItem, reset]);

  return (
    <Fragment>
      <DashboardHeading>Products (Update)</DashboardHeading>
      <form className="mt-10" onSubmit={handleSubmit(handleAddProducts)}>
        <div className="grid grid-cols-2 mb-10 gap-x-10 gap-y-16">
          <InputContaint>
            <InputForm
              control={control}
              placeholder="Enter your title"
              name="title"
            ></InputForm>
          </InputContaint>

          <InputContaint>
            <Select
              value={selectedCategory}
              variant="standard"
              label="Select Category"
              onChange={(e) => handleSelectCategory(e)}
            >
              {categories?.length > 0 &&
                categories.map((category) => (
                  <Option value={category.name} key={v4()}>
                    {category.name}
                  </Option>
                ))}
            </Select>
          </InputContaint>
          {/* //todo upload images */}
          <InputContaint>
            <ImageUpload
              image={combinedImages}
              onClick={handleDeleteImage}
              onchange={(e) => handleSelectImage(e)}
            ></ImageUpload>
          </InputContaint>
          {/* //todo upload urls */}
          <InputContaint>
            <InputForm
              type="url"
              onClick={handleAddUrl}
              name="url"
              control={control}
              value={url}
              onChange={handleValueChange}
              placeholder="Paste the URL images"
              displayButton={true}
            ></InputForm>
            <ol
              type="1"
              start="1"
              className="flex flex-col max-h-[550px] overflow-y-auto gap-3 p-5 bg-white border rounded-md border-dark border-opacity-20"
            >
              {urls.map((url, index) => (
                <li
                  title={url}
                  key={v4()}
                  className="relative flex items-center justify-between p-3 overflow-hidden rounded-lg group hover:bg-gray hover:bg-opacity-5"
                >
                  {url}
                  <span
                    onClick={() => handleRemoveUrl(url, index)}
                    className="flex items-center justify-center absolute bg-dark bg-opacity-10 right-3 to-50% invisible w-6 h-6 rounded-full select-none group-hover:visible group-hover:select-auto hover:bg-gray hover:bg-opacity-50"
                  >
                    <FiMinus />
                  </span>
                </li>
              ))}
            </ol>
          </InputContaint>
          <InputContaint>
            <InputForm
              name="price"
              type="number"
              control={control}
              placeholder="Enter number of price"
            ></InputForm>
          </InputContaint>
          <InputContaint>
            <InputForm
              type="number"
              control={control}
              placeholder="Enter your stock"
              name="stock"
            ></InputForm>
          </InputContaint>
          <InputContaint>
            {/* <Toggle
              on={watchHot === true}
              onClick={() => setValue("hot", !watchHot)}
            ></Toggle> */}
          </InputContaint>
          <InputContaint>
            <div className="flex items-center gap-x-5">
              {productStatus.map((sta) => (
                <Radio
                  key={v4()}
                  onClick={() => handleStatus(sta)}
                  name="type"
                  label={sta}
                />
              ))}
            </div>
          </InputContaint>
        </div>

        {/* description */}
        <Description comment={comment} setComment={setComment}></Description>
        <div className="flex items-center justify-center w-full mx-auto mt-20">
          <Button type="submit">Add Product</Button>
        </div>
      </form>
    </Fragment>
  );
};

export default DashboardUpdateProduct;
