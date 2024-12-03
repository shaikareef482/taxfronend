import React from "react";
import { useNavigate } from "react-router-dom";

// Define the structure of a category
interface Category {
  title: string;
  image_Url: string;
}

// Define the props for DropDown component
interface DropDownProps {
  categoriesData: Category[];
  setDropDown: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropDown: React.FC<DropDownProps> = ({ categoriesData, setDropDown }) => {
  const navigate = useNavigate();

  const submitHandle = (category: Category) => {
    navigate(`/products?category=${category.title}`);
    setDropDown(false);
    window.location.reload();
  };

  return (
    <div className="dropdown-menu show w-100 bg-white shadow-sm rounded-bottom">
      {categoriesData &&
        categoriesData.map((category, index) => (
          <div
            key={index}
            className="d-flex align-items-center py-2 px-3 cursor-pointer"
            onClick={() => submitHandle(category)}
          >
            <img
              src={category.image_Url}
              style={{
                width: "25px",
                height: "25px",
                objectFit: "contain",
                marginLeft: "10px",
                userSelect: "none",
              }}
              alt={category.title}
            />
            <h3 className="m-0 ms-3">{category.title}</h3>
          </div>
        ))}
    </div>
  );
};

export default DropDown;