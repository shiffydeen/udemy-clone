import React, {useState} from 'react';
import styled from "styled-components";
import Course from "./Course";
import {PYTHON, WEB_DEVELOPMENT, DATA_SCIENCE, AWS, DESIGN, MARKETING} from "../utils/constants";
import courses from '../utils/data';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [courseDisplay, setCourseDisplay] = useState(courses)

  const categories = ["All", ...new Set(courses.map((courses) => courses.category))]
  // console.log(categories)

  const tabHandler = (category) => {
    setActiveTab(category);
    setCourseDisplay(category === "All" ? courses : courses.filter((course) => course.category === category))
  };

  const capitalizeString = (string) => {
    if (!string || typeof string !== "string") {
      return string;
    }
    return string
      .split(" ") // Split the string into words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
      .join(" "); // Join the words back into a single string
  }

  return (
    <TabsWrapper>
      <div className='tabs'>
        <ul className='flex flex-wrap'>
          {categories.map((category) => (
            <li className='tabs-head-item'>
              <button type = "button" className={`tab-btn ${activeTab === category ? "select" : ""}`} onClick = {() => tabHandler(category)}>{capitalizeString(category)}</button>
            </li>
          ))}
          {/* <li className='tabs-head-item'>
            <button type = "button" className={`tab-btn ${activeTab === PYTHON ? "select" : "null"}`} onClick = {() => tabHandler(PYTHON)}>Python</button>
          </li>
          <li className='tabs-head-item'>
            <button type = "button" className={`tab-btn ${activeTab === WEB_DEVELOPMENT ? "select" : ""}`} onClick = {() => tabHandler(WEB_DEVELOPMENT)}>Web Development</button>
          </li>
          <li className='tabs-head-item'>
            <button type = "button" className={`tab-btn ${activeTab === DATA_SCIENCE ? "select" : ""}`} onClick = {() => tabHandler(DATA_SCIENCE)}>Data Science</button>
          </li>
          <li className='tabs-head-item'>
            <button type = "button" className={`tab-btn ${activeTab === AWS ? "select" : ""}`} onClick = {() => tabHandler(AWS)}>AWS Certification</button>
          </li>
          <li className='tabs-head-item'>
            <button type = "button" className={`tab-btn ${activeTab === DESIGN ? "select" : ""}`} onClick = {() => tabHandler(DESIGN)}>Design</button>
          </li>
          <li className='tabs-head-item'>
            <button type = "button" className={`tab-btn ${activeTab === MARKETING ? "select" : ""}`} onClick = {() => tabHandler(MARKETING)}>Marketing</button>
          </li> */}
        </ul>

        <div className='tabs-body'>
          {/* {
            courses.filter(course => course.category === activeTab).map((course) => (
              <Course key = {course.id} {...course} />
            ))
          } */}
          {
            courseDisplay.map((course) => (
              <Course key = {course.id} {...course} />
            ))
          }
        </div>
      </div>
    </TabsWrapper>
    
  )
}

const TabsWrapper = styled.div`
  .tabs{
    margin-top: 16px;
    .tabs-head-item button{
      border: 1px solid rgba(0, 0, 0, 0.7);
      padding: 10px 13px;
      margin-right: 6px;
      transition: var(--transition);
      font-weight: 500;
      font-size: 15px;
      margin-bottom: 10px;

      &:hover{
        background-color: var(--clr-black);
        color: var(--clr-white);
      }
    }
    .tabs-head-item .select{
      background-color: var(--clr-black);
      color: var(--clr-white);
    }

    .tabs-body{
      margin-top: 32px;
    }

    @media screen and (min-width: 600px){
      .tabs-body{
        display: grid;
        gap: 26px;
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media screen and (min-width: 992px){
      .tabs-body{
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media screen and (min-width: 1400px){
      .tabs-body{
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
`;

export default Tabs