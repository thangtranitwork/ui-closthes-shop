import {
  faAngleDown,
  faBars,
  faCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Pagination from "../components/Pagination";
import Product from "../components/Product";
import { useParams } from "react-router-dom";

export default function Category() {
  const { type, subtype } = useParams();
  const subTypes = ["LONG PANTS", "SHORTS PANTS"];
  const products = [
    {
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
          code: "#FFFFFF",
          name: "black",
        },
        {
          code: "#FF0000",
          name: "red",
        },
      ],
      type: {
        id: 1,
        name: "long pants",
        type: "bottom",
      },
      imgs: [
        "https://nocturnal.vn/wp-content/uploads/2024/05/4-1-scaled.jpg",
        "https://nocturnal.vn/wp-content/uploads/2024/05/5-4-scaled.jpg",
      ],
    },
    {
      id: 2,
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
          code: "#FFFFFF",
          name: "black",
        },
        {
          code: "#FF0000",
          name: "red",
        },
      ],
      type: {
        id: 1,
        name: "long pants",
        type: "bottom",
      },
      imgs: [
        "https://nocturnal.vn/wp-content/uploads/2024/05/4-1-scaled.jpg",
        "https://nocturnal.vn/wp-content/uploads/2024/05/5-4-scaled.jpg",
      ],
    },
    {
      id: 3,
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
          code: "#FFFFFF",
          name: "black",
        },
        {
          code: "#FF0000",
          name: "red",
        },
      ],
      type: {
        id: 1,
        name: "long pants",
        type: "bottom",
      },
      imgs: [
        "https://nocturnal.vn/wp-content/uploads/2024/05/4-1-scaled.jpg",
        "https://nocturnal.vn/wp-content/uploads/2024/05/5-4-scaled.jpg",
      ],
    },
    {
      id: 4,
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
          code: "#FFFFFF",
          name: "black",
        },
        {
          code: "#FF0000",
          name: "red",
        },
      ],
      type: {
        id: 1,
        name: "long pants",
        type: "bottom",
      },
      imgs: [
        "https://nocturnal.vn/wp-content/uploads/2024/05/4-1-scaled.jpg",
        "https://nocturnal.vn/wp-content/uploads/2024/05/5-4-scaled.jpg",
      ],
    },
    {
      id: 5,
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
          code: "#FFFFFF",
          name: "black",
        },
        {
          code: "#FF0000",
          name: "red",
        },
      ],
      type: {
        id: 1,
        name: "long pants",
        type: "bottom",
      },
      imgs: [
        "https://nocturnal.vn/wp-content/uploads/2024/05/4-1-scaled.jpg",
        "https://nocturnal.vn/wp-content/uploads/2024/05/5-4-scaled.jpg",
      ],
    },
    {
      id: 6,
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
          code: "#FFFFFF",
          name: "black",
        },
        {
          code: "#FF0000",
          name: "red",
        },
      ],
      type: {
        id: 1,
        name: "long pants",
        type: "bottom",
      },
      imgs: [
        "https://nocturnal.vn/wp-content/uploads/2024/05/4-1-scaled.jpg",
        "https://nocturnal.vn/wp-content/uploads/2024/05/5-4-scaled.jpg",
      ],
    },
    {
      id: 7,
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
          code: "#FFFFFF",
          name: "black",
        },
        {
          code: "#FF0000",
          name: "red",
        },
      ],
      type: {
        id: 1,
        name: "long pants",
        type: "bottom",
      },
      imgs: [
        "https://nocturnal.vn/wp-content/uploads/2024/05/4-1-scaled.jpg",
        "https://nocturnal.vn/wp-content/uploads/2024/05/5-4-scaled.jpg",
      ],
    },
    {
      id: 8,
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
          code: "#FFFFFF",
          name: "black",
        },
        {
          code: "#FF0000",
          name: "red",
        },
      ],
      type: {
        id: 1,
        name: "long pants",
        type: "bottom",
      },
      imgs: [
        "https://nocturnal.vn/wp-content/uploads/2024/05/4-1-scaled.jpg",
        "https://nocturnal.vn/wp-content/uploads/2024/05/5-4-scaled.jpg",
      ],
    },
    {
      id: 9,
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
          code: "#FFFFFF",
          name: "black",
        },
        {
          code: "#FF0000",
          name: "red",
        },
      ],
      type: {
        id: 1,
        name: "long pants",
        type: "bottom",
      },
      imgs: [
        "https://nocturnal.vn/wp-content/uploads/2024/05/4-1-scaled.jpg",
        "https://nocturnal.vn/wp-content/uploads/2024/05/5-4-scaled.jpg",
      ],
    },
  ];
  const filterColors = [
    {
      color: "Cream",
      quantity: 10,
    },
    {
      color: "Black",
      quantity: 9,
    },
    {
      color: "Lead Gray",
      quantity: 12,
    },
  ];
  const [selectedSize, setSelectedSize] = useState(12);
  const [selectedCol, setSelectedCol] = useState(2);
  const [selectedOption, setSelectedOption] = useState("1");

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value * 1);
  };
  const handleColChange = (e) => {
    setSelectedCol(e.target.value * 1);
  };
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <div className="text-3xl uppercase font-bold">{subtype}</div>
      <nav className="mb-4">
        {/* Mobile menu */}
        <div className="lg:hidden flex flex-col relative">
          <input
            className="hidden peer/category-menu"
            type="checkbox"
            id="category-menu"
          />
          <label
            htmlFor="category-menu"
            className="h-7 pl-5 hover:text-gray-500 flex items-center"
          >
            Product catalog
            <FontAwesomeIcon className="text-md ml-3" icon={faAngleDown} />
          </label>
          {/* Dropdown menu */}
          <div className="hidden peer-checked/category-menu:flex flex-col gap-3 items-start pl-5 mt-3">
            {subTypes.map((st) => (
              <button
                key={st}
                className="text-left w-1/5 relative after:content-[''] dark:after:bg-white after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:bg-black after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop menu */}
        <div className="hidden font-medium h-16 items-center uppercase lg:flex gap-10">
          {subTypes.map((st) => (
            <button
              key={st}
              className="relative after:content-[''] dark:after:bg-white after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:bg-black after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
            >
              {st}
            </button>
          ))}
        </div>
      </nav>

      <hr className="hr-full" />
      <section className="my-4">
        <div className="lg:hidden">
          <div className="flex justify-between mb-2">
            <input
              className="hidden peer/filter-menu"
              type="checkbox"
              id="filter-menu"
            />
            <label htmlFor="filter-menu" className="h-7 ml-5">
              <FontAwesomeIcon className="text-2xl" icon={faBars} />
              <span className="text-2xl ml-2">Show filter</span>
            </label>
            <div className="relative">
              <select
                value={selectedOption} // Liên kết state với select
                onChange={handleSelectChange} // Gọi hàm khi thay đổi
                className="bg-transparent placeholder:text-gray-400 text-sm border border-gray-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-gray-400 hover:border-gray-400 shadow-sm focus:shadow-md appearance-none cursor-pointer text-black bg-white dark:text-white dark:bg-gray-600"
              >
                <option className="dark:text-white dark:bg-gray-600" value="1">
                  Latest
                </option>
                <option className="dark:text-white dark:bg-gray-600" value="2">
                  Price: Low to High
                </option>
                <option className="dark:text-white dark:bg-gray-600" value="3">
                  Price: High to Low
                </option>
                <option className="dark:text-white dark:bg-gray-600" value="4">
                  Popularity
                </option>
              </select>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.2"
                stroke="currentColor"
                className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-gray-700 dark:text-gray-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                />
              </svg>
            </div>
            <div className="px-10 pt-2 fixed top-0 left-0 h-full w-1/2 bg-white dark:bg-black dark:text-white z-50 transform -translate-x-full transition-transform duration-300 peer-checked/filter-menu:translate-x-0 flex flex-col font-medium uppercase">
              <label
                className="self-end mb-2 hover:scale-110"
                htmlFor="filter-menu"
              >
                <FontAwesomeIcon className="text-2xl" icon={faXmark} />
              </label>
              <div>
                <p className="text-xl">LỌC THEO GIÁ</p>
                <div>
                  <div className="w-12 mr-1">Từ</div>
                  <input className="w-full shadow appearance-none border rounded py-2 leading-tight focus:outline-none focus:shadow-outline text-black bg-white dark:bg-gray-600 dark:text-white pl-5" />
                  <div className="w-12 mr-1">Đến</div>
                  <input className="w-full shadow appearance-none border rounded py-2 leading-tight focus:outline-none focus:shadow-outline text-black bg-white dark:bg-gray-600 dark:text-white pl-5" />
                </div>

                <button className="w-full mt-3 p-2 bg-gray-300 px-5 dark:bg-gray-500 hover:bg-gray-700 hover:text-gray-100">
                  Lọc
                </button>
                <hr className="bg-gray-100 h-[1px] my-4" />
                <p className="text-xl">LỌC THEO</p>
                <div className="flex flex-col gap-4 my-4">
                  {filterColors?.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center text-lg"
                    >
                      <div className="inline-flex items-center">
                        <label
                          className="flex items-center cursor-pointer relative"
                          htmlFor={`check-${item?.color}`}
                        >
                          <input
                            type="checkbox"
                            className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow dark:shadow-gray-100 hover:shadow-md border border-gray-300 checked:bg-gray-800 checked:border-gray-800 dark:bg-gray-900 dark:checked:bg-white dark:checked:border-white"
                            id={`check-${item?.color}`}
                          />
                          <span className="absolute text-white dark:text-gray-900 opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <FontAwesomeIcon
                              className="h-3.5 w-3.5 text-current"
                              icon={faCheck}
                            />
                          </span>
                        </label>
                        <label
                          className="cursor-pointer ml-2 text-gray-600 dark:text-white text-md"
                          htmlFor={`check-${item?.color}`}
                        >
                          {item?.color}
                        </label>
                      </div>
                      <p>({item?.quantity})</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className={`ml-5 grid sm:grid-cols-2 md:grid-cols-3`}>
            {products.map((product, index) => (
              <Product key={index} product={product} />
            ))}
          </div>
          <Pagination current={2} total={100} onChange={(num) => alert(num)} />
        </div>
        <div className="hidden lg:flex my-4">
          <div className="w-1/4">
            <p className="text-xl">FILTER BY PRICE</p>
            <div>
              <div className="w-12 mr-1">From</div>
              <input className="w-full shadow appearance-none border rounded py-2 leading-tight focus:outline-none focus:shadow-outline text-black bg-white dark:bg-gray-600 dark:text-white pl-5" />
              <div className="w-12 mr-1">To</div>
              <input className="w-full shadow appearance-none border rounded py-2 leading-tight focus:outline-none focus:shadow-outline text-black bg-white dark:bg-gray-600 dark:text-white pl-5" />
            </div>

            <button className="w-full mt-3 p-2 bg-gray-300 px-5 dark:bg-gray-500 hover:bg-gray-700 hover:text-gray-100">
              Filter
            </button>
            <hr className="bg-gray-100 h-[1px] my-4" />
            <p className="text-xl">Filter by color</p>
            <div className="flex flex-col gap-4 my-4">
              {filterColors?.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center text-lg"
                >
                  <div className="inline-flex items-center">
                    <label
                      className="flex items-center cursor-pointer relative"
                      htmlFor={`check-${item?.color}`}
                    >
                      <input
                        type="checkbox"
                        className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow dark:shadow-gray-100 hover:shadow-md border border-gray-300 checked:bg-gray-800 checked:border-gray-800 dark:bg-gray-900 dark:checked:bg-white dark:checked:border-white"
                        id={`check-${item?.color}`}
                      />
                      <span className="absolute text-white dark:text-gray-900 opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <FontAwesomeIcon
                          className="h-3.5 w-3.5 text-current"
                          icon={faCheck}
                        />
                      </span>
                    </label>
                    <label
                      className="cursor-pointer ml-2 text-gray-600 dark:text-white text-md"
                      htmlFor={`check-${item?.color}`}
                    >
                      {item?.color}
                    </label>
                  </div>
                  <p>({item?.quantity})</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-3/4 flex flex-col gap-4">
            <div className="flex items-center self-end gap-5">
              <div className="flex">
                Display:
                <div className="ml-3 size-selector flex gap-2">
                  <label className={selectedSize === 9 ? "font-bold" : ""}>
                    <input
                      type="radio"
                      name="sizes"
                      value="9"
                      id="radio-9"
                      className="hidden"
                      onChange={handleSizeChange} // Gọi hàm khi có thay đổi
                      checked={selectedSize === 9} // Kiểm tra giá trị đang được chọn
                    />
                    9
                  </label>
                  <span>/</span>
                  <label className={selectedSize === 12 ? "font-bold" : ""}>
                    <input
                      type="radio"
                      name="sizes"
                      value="12"
                      id="radio-12"
                      className="hidden"
                      onChange={handleSizeChange}
                      checked={selectedSize === 12}
                    />
                    12
                  </label>
                  <span>/</span>
                  <label className={selectedSize === 18 ? "font-bold" : ""}>
                    <input
                      type="radio"
                      name="sizes"
                      value="18"
                      id="radio-18"
                      className="hidden"
                      onChange={handleSizeChange}
                      checked={selectedSize === 18}
                    />
                    18
                  </label>
                  <span>/</span>
                  <label className={selectedSize === 24 ? "font-bold" : ""}>
                    <input
                      type="radio"
                      name="sizes"
                      value="24"
                      id="radio-24"
                      className="hidden"
                      onChange={handleSizeChange}
                      checked={selectedSize === 24}
                    />
                    24
                  </label>
                </div>
              </div>
              <div className="flex">
                Column:
                <div className="ml-3 size-selector flex gap-2">
                  <label className={selectedCol === 2 ? "font-bold" : ""}>
                    <input
                      type="radio"
                      name="sizes"
                      value="2"
                      id="radio-2"
                      className="hidden"
                      onChange={handleColChange}
                      checked={selectedCol === 2}
                    />
                    2
                  </label>
                  <span>/</span>
                  <label className={selectedCol === 3 ? "font-bold" : ""}>
                    <input
                      type="radio"
                      name="sizes"
                      value="3"
                      id="radio-3"
                      className="hidden"
                      onChange={handleColChange}
                      checked={selectedCol === 3}
                    />
                    3
                  </label>
                  <span>/</span>{" "}
                  <label className={selectedCol === 4 ? "font-bold" : ""}>
                    <input
                      type="radio"
                      name="sizes"
                      value="4"
                      id="radio-4"
                      className="hidden"
                      onChange={handleColChange}
                      checked={selectedCol === 4}
                    />
                    4
                  </label>
                </div>
              </div>
              <div className="relative">
                <select
                  value={selectedOption}
                  onChange={handleSelectChange}
                  className="w-full bg-transparent placeholder:text-gray-400 text-sm border border-gray-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-gray-400 hover:border-gray-400 shadow-sm focus:shadow-md appearance-none cursor-pointer text-black bg-white dark:text-white dark:bg-gray-600"
                >
                  <option
                    className="dark:text-white dark:bg-gray-600"
                    value="1"
                  >
                    Latest
                  </option>
                  <option
                    className="dark:text-white dark:bg-gray-600"
                    value="2"
                  >
                    Price: Low to High
                  </option>
                  <option
                    className="dark:text-white dark:bg-gray-600"
                    value="3"
                  >
                    Price: High to Low
                  </option>
                  <option
                    className="dark:text-white dark:bg-gray-600"
                    value="4"
                  >
                    Popularity
                  </option>
                </select>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.2"
                  stroke="currentColor"
                  className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-gray-700 dark:text-gray-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                  />
                </svg>
              </div>
            </div>
            <div
              className={`ml-5 grid ${
                selectedCol === 2
                  ? "grid-cols-2"
                  : selectedCol === 3
                  ? "grid-cols-3"
                  : selectedCol === 4
                  ? "grid-cols-4"
                  : "grid-cols-1"
              }`}
            >
              {products.map((product, index) => (
                <Product key={index} product={product} />
              ))}
            </div>

            <Pagination
              current={2}
              total={100}
              onChange={(num) => alert(num)}
            />
          </div>
        </div>
      </section>
    </div>
  );
}