import {
  faAngleLeft,
  faAngleRight,
  faCheck,

} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

export default function Product() {
  const { path } = useParams();
  const [query, setQuery] = useSearchParams();
  const selectedColor = query.get("color") || "";
  const selectedSize = query.get("size") || "";
  const selectedQuantity = parseInt(query.get("quantity")) || 1;
  const [product, setProduct] = useState(null);
  const [xPercent, setXPercent] = useState(0);
  const [yPercent, setYPercent] = useState(0);
  const [mirrorPosition, setMirrorPosition] = useState({ x: 0, y: 0 });
  const [showMirror, setShowMirror] = useState(false);
  const [index, setIndex] = useState(0);
  const imgRef = useRef();

  const changeQuery = (key, value) => {
    query.set(key, value);
    setQuery(query);
  };

  useEffect(() => {
    setProduct({
      id: 1,
      name: "Relaxed Fit Kaki Pants",
      path: "rlkpants",
      price: 250000,
      quantity: 10,
      description: `NOCTURNAL ® Relaxed Fit Kaki Pants
Không chỉ trendy &đẹp với đường xếp li độc đáo , Quần Kaki ống suông nhà Nọc còn được nâng cấp về chất vải & có độ hoàn thiện cao, mang lại trải nghiệm mặc thoải mái hơn bao giờ hết, xứng đáng được gọi là cực phẩm cần phải có!

• Chất liệu : Premium cotton kaki dày dặn, mịn mềm.

• Thiết kế xếp li không chỉ làm quần lên form đẹp mà còn siêu thoải mái khi mặc với phần đùi rộng.

• :Phần lưng được bo chun co giãn dễ mặc và tùy chỉnh, phù hợp mọi dáng người.

• Size: S / M / L / XL

Xem từng ảnh để thấy những chi tiết thú vị nhé!

Note: Bảng size ở ảnh cuối mỗi mẫu hoặc ở mục Bảng quy đổi kích cỡ.`,
      colors: [
        {
          code: "#000000",
          name: "đen",
        },
        {
          code: "#FF0000",
          name: "đỏ",
        },
        {
          code: "#FFFFFF",
          name: "trắng",
        },
      ],
      type: {
        id: 1,
        subType: "long pants",
        type: "bottom",
      },
      imgs: [
        "https://nocturnal.vn/wp-content/uploads/2024/05/4-1-scaled.jpg",
        "https://nocturnal.vn/wp-content/uploads/2024/05/5-4-scaled.jpg",
        "https://nocturnal.vn/wp-content/uploads/2024/05/07ad7756-72d7-47b4-b68b-b34a0e448c2c.jpg",
        "https://nocturnal.vn/wp-content/uploads/2024/05/Commercial-Frame-Relaxed-Kaki-Pants-1.jpg",
        "https://nocturnal.vn/wp-content/uploads/2024/05/Commercial-Frame-Relaxed-Kaki-Pants-2.jpg",
      ],
      sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    });
  }, []);

  const handleMouseMove = (e) => {
    if (window.innerWidth >= 1024) {
      const img = imgRef.current.getBoundingClientRect();
      const x = e.clientX - img.left;
      const y = e.clientY - img.top;
      setXPercent((x / img.width) * 100);
      setYPercent((y / img.height) * 100);
      setMirrorPosition({ x: x - 50, y: y - 50 });
      setShowMirror(true);
    }
  };

  const handleMouseLeave = () => {
    setShowMirror(false);
  };

  const handleBtnChangeSlide = (v) => {
    const len = product?.imgs.length;
    if (index + v < 0 || index + v >= len) return;
    setIndex(index + v);
  };
  const handleAddToCart = () => {};
  return (
    <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row md:p-10">
      <div
        className={`hidden lg:flex flex-col lg:w-[10%] h-[500px] overflow-y-auto`}
      >
        {product?.imgs?.map((i, idx) => (
          <img
            key={i}
            src={i}
            className="w-full hover:opacity-50"
            alt="product"
            onClick={() => setIndex(idx)}
          />
        ))}
      </div>

      <div className="w-full md:w-[50%] lg:w-[40%] h-[500px] relative flex justify-center group lg:bg-gray-100 lg:dark:bg-gray-800">
        <button
          disabled={index === 0}
          className="block lg:hidden lg:group-hover:block w-10 h-10 bg-gray-200 rounded-full dark:bg-gray-400 absolute disabled:opacity-50 top-1/2 left-0"
          onClick={() => handleBtnChangeSlide(-1)}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <img
          src={product?.imgs?.[index]}
          ref={imgRef}
          className="w-full h-[500px] object-contain lg:group-hover:w-11/12 lg:object-cover lg:group-hover:object-contain"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          alt={product?.name}
        />
        <button
          disabled={index === product?.imgs?.length - 1}
          className="block lg:hidden lg:group-hover:block w-10 h-10 bg-gray-200 rounded-full dark:bg-gray-400 absolute disabled:opacity-50 top-1/2 right-0"
          onClick={() => handleBtnChangeSlide(1)}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
        {showMirror && (
          <div
            id="zoom-mirror"
            className="w-[150px] h-[150px] bg-cover bg-center bg-no-repeat absolute border-2 rounded-full shadow"
            style={{
              backgroundImage: `url(${product?.imgs?.[index]})`,
              backgroundSize: "1500px",
              backgroundPosition: `${xPercent}% ${yPercent}%`,
              left: `${mirrorPosition.x}px`,
              top: `${mirrorPosition.y}px`,
              pointerEvents: "none",
            }}
          ></div>
        )}
      </div>

      <div className="w-full md:w-[50%] px-4 flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">{product?.name}</h2>
        <p>
          Price:{" "}
          {product?.price.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
          })}
        </p>
        <div className="color-container flex">
          <p>Color: </p>
          <div className="flex gap-2 ml-4 flex-wrap">
            {product?.colors?.map((color, index) => (
              <div
                key={index}
                onClick={() => changeQuery("color", color?.name)}
                className="rounded-full w-10 aspect-1 border-2 border-black dark:border-white hover:opacity-30 cursor-pointer"
                style={{
                  backgroundColor: color?.code,
                }}
                title={color?.name}
              >
                <div
                  className={`bg-slate-300 w-full aspect-1 rounded-full opacity-50 flex justify-center items-center ${
                    selectedColor === color?.name ? "block" : "hidden"
                  }`}
                >
                  <FontAwesomeIcon icon={faCheck} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="size-container flex">
          <p>Size: </p>
          <div className="flex gap-2 ml-4 flex-wrap">
            {product?.sizes?.map((size, index) => (
              <div
                onClick={() => changeQuery("size", size)}
                key={index}
                className="rounded-full text-center w-16 py-2 border-2 border-black dark:border-white hover:opacity-30 cursor-pointer relative"
              >
                {size}
                <div
                  className={`absolute w-full h-full py-2 rounded-full text-center top-0 bg-black text-white dark:text-black dark:bg-white
                    ${selectedSize === size ? "block" : "hidden"}`}
                >
                  <FontAwesomeIcon icon={faCheck} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between gap-4 items-center h-14">
          <div className="quantity-editor h-14 flex">
            <button
              className="w-10 border-2"
              disabled={parseInt(selectedQuantity) <= 1}
              onClick={() => {
                changeQuery("quantity", parseInt(selectedQuantity) - 1);
              }}
            >
              -
            </button>
            <input
              type="text"
              className="w-14 border-y-2 text-center bg-white text-black dark:bg-gray-900 dark:text-white"
              value={selectedQuantity}
              onChange={(e) =>
                changeQuery("quantity", parseInt(e.target.value) || 1)
              }
            />
            <button
              className="w-10 border-2"
              onClick={() =>
                changeQuery("quantity", parseInt(selectedQuantity) + 1)
              }
            >
              +
            </button>
          </div>
          <button
            onClick={handleAddToCart}
            className="w-full bg-black h-14 text-white py-2 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-300 uppercase"
          >
            Add to cart
          </button>
        </div>
        <hr />

        <pre className="whitespace-pre-wrap text-justify">
          {product?.description}
        </pre>
      </div>
    </div>
  );
}
