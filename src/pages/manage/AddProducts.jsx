import React, { Fragment, useState } from "react";
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
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../config/firebaseConfigure";
import Description from "../../components/quill/Description";

const productStatus = ["approved", "pedding", "reject"];

const AddProducts = () => {
  const { categories } = useSelector((state) => state.store);
  const { user } = useSelector((state) => state.auth);
  const [url, setUrl] = useState("");
  const [urls, setUrls] = useState([]);
  const [comment, setComment] = useState("");

  const { control, watch, setValue, getValues, handleSubmit, reset } = useForm({
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
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectStatus, setSelectStatus] = useState("");
  const handleSelectCategory = (category) => {
    setSelectedCategory(category.toLowerCase());
  };
  const handleStatus = (status) => {
    setSelectStatus(status);
  };
  const {
    progress,
    image,
    handleSelectImage,
    handleRemoveImage,
    handleResetUpload,
  } = useFirebaseImage(setValue, getValues);
  const handleDeleteImage = (url) => {
    handleRemoveImage(url);
  };
  const handleAddUrl = () => {
    if (urls.length > 5) return toast.error("only 5 images or less");
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
    if (!image && !urls) {
      console.log("Bạn cần phải cung cấp urls nếu không có image.");
      return;
    }
    try {
      const docRef = collection(db, "products");
      await addDoc(docRef, {
        title: values.title,
        images: combinedImages,
        category: selectedCategory,
        desc: comment,
        user: user?.uid,
        createAt: serverTimestamp(),
        stock: Number(values.stock),
        price: Number(values.price),
        status: selectStatus,
        reviews: [],
        productId: v4(),
      });

      toast.success("add products success");
      reset();
      setSelectStatus("");
      setSelectedCategory("");
      setUrls([]);
      setComment("");
      handleResetUpload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveUrl = (urlItem, index) => {
    const newUrls = urls.filter((url) => url !== urlItem);
    setUrls(newUrls);
  };

  return (
    <Fragment>
      <DashboardHeading>Create Products</DashboardHeading>

      <form className="mt-10 " onSubmit={handleSubmit(handleAddProducts)}>
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
              className="flex flex-col max-h-[550px] overflow-y-auto gap-3 p-5 bg-white border rounded-md border-dark border-opacity-20 "
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
          <Button
            type="submit"
            // $isloading={loading}
            // disabled={loading}
          >
            Add Product
          </Button>
        </div>
      </form>
    </Fragment>
  );
};

export default AddProducts;
