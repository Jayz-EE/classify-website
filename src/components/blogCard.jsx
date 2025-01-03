import React from "react";
import StyledButton3 from "../components/styled_button_3";

const BlogCard = ({ blog, handleShow }) => {
  const { blogTitle, blogDetail, targetModal, blogImage} = blog;

  return (
    <div className="row g-0 mb-4 blog-card">
      <div className="col-md-8 d-flex flex-column justify-content-center">
        <div className="card-body">
          <h5 className="card-title">{blogTitle}</h5>
          <p className="card-text">{blogDetail}</p>
          <StyledButton3
            button_name={"Read More"}
            handleClick={() => handleShow(targetModal)}
          />
        </div>
      </div>
      <div className="col-md-4 d-flex align-items-center">
        <img
          src={blogImage}
          className="img-fluid rounded-start"
          alt="Blog Image"
        />
      </div>
    </div>
  );
};

export default BlogCard;
