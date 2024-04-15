"use client";
import { useEffect, useState } from "react";
import styles from "./affiliates.module.css";
import Image from "next/image";
import affiliatesData from "../../../data/affiliates.json";

const Affiliates = () => {
  const [affiliates, setAffiliates] = useState([]);

  useEffect(() => {
    const getAffiliates = async () => {
      setAffiliates(affiliatesData);
      swiperRef.current.swiper.update();
    };

    getAffiliates();
  }, []);

  /* ORIGINAL
  const getAffiliates = async () => {
    const response = await fetch("http://localhost:3000/api/affiliates");
    const data = await response.json();
    setAffiliates(data);
  };

  useEffect(() => {
    getAffiliates();
  }, []);


  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, file } = e.target.elements;

    if (!title.value || !file.files[0]) {
      console.log("Du mangler at tilføje en fil eller titel!");
      return;
    }

    const formData = new FormData();
    formData.append("title", title.value);
    formData.append("file", file.files[0]);

    let response = await fetch("http://localhost:3000/api/affiliate", {
      method: "POST",
      body: formData,
    });

    let data = await response.json();

    getAffiliates();
  };

  const handleDelete = async (e, id) => {
    e.preventDefault();
    let response = await fetch("http://localhost:3000/api/affiliate?id=" + id, {
      method: "DELETE",
    });
    let data = await response.json();

    getAffiliates();
  }; */

  return (
    <div className={styles.container}>
      <h2>Affiliates</h2>

      {affiliates.map((affiliate, index) => {
        return (
          <span className={styles.affiliateContainer} key={index}>
            <Image
              className={styles.affiliateImg}
              src={affiliate.imagePath}
              alt={affiliate.title}
              width={100}
              height={100}
            />
            <button onClick={(e) => handleDelete(e, affiliate._id)}>
              Delete
            </button>
          </span>
        );
      })}

      <h3>Add New Afiliate</h3>

      {/* <form onSubmit={handleSubmit}> */}
      <form>
        <label>
          {" "}
          Affiliate title
          <input
            type="title"
            name="title"
            placeholder="Affiliate Title"
            defaultValue={"New Partner in Food"}
          />
        </label>
        <label>
          {" "}
          Choose File
          <input type="file" name="file" placeholder="Select File" />
        </label>
        <button>Upload</button>
      </form>
    </div>
  );
};
export default Affiliates;
