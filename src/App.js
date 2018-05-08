import React, { Component } from 'react';
import './App.css';
import 'w3-css/w3.css';
import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

// Add the icon to the library so you can use it in your page
fontawesome.library.add(solid.faUser)

class App extends Component {
  render() {
    return (
    <div class="font">
      <div class="w3-top">
        <div class="w3-bar" id="myNavbar">
          <a class="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right" href="" onclick="toggleFunction()" title="Toggle Navigation Menu">
            <i class="fa fa-bars"></i>
          </a>
          <a href="#home" class="w3-bar-item w3-button" id="menu">HOME</a>
          <a href="#about" class="w3-bar-item w3-button w3-hide-small" id="menu"><i class="fa fa-user"></i> ABOUT</a>
          <a href="#portfolio" class="w3-bar-item w3-button w3-hide-small" id="menu"><i class="fa fa-th"></i> MENU</a>
          <a href="#contact" class="w3-bar-item w3-button w3-hide-small" id="menu"><i class="fa fa-envelope"></i> CONTACT</a>
          <a href="" class="w3-bar-item w3-button w3-right w3-hide-small w3-hover-red" id="menu">
            <i class="fa fa-search"></i>
          </a>
        </div>
        <div id="navDemo" class="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium">
          <a href="#about" class="w3-bar-item w3-button" onclick="toggleFunction()">ABOUT</a>
          <a href="#portfolio" class="w3-bar-item w3-button" onclick="toggleFunction()">MENU</a>
          <a href="#contact" class="w3-bar-item w3-button" onclick="toggleFunction()">CONTACT</a>
          <a href="" class="w3-bar-item w3-button">SEARCH</a>
         </div>
        </div>
        
      <div class="bgimg-1 w3-display-container" id="home">
      
      </div>
      
      <div class="w3-content w3-container w3-padding-64" id="about">
      <ScrollAnimation animateIn="fadeIn">
        <h2 class="w3-center">ABOUT ME</h2>
        <h3 class="w3-center"><em>เครื่องแกง</em></h3><br></br>
        <h5>เครื่องแกง เป็นวัตถุดิบต่างๆที่จำเป็นต่อการปรุงอาหาร หรือส่วนผสมที่นำมาผสมผสานกันเพื่อให้เกิดรสชาติใหม่ นั่นก็คือ "น้ำพริกแกง" ที่ทำให้อาหารประเภทแกง รสกลมกล่อม กลิ่นหอม อร่อย ซึ่งจะมีรสชาติ เค็ม เผ็ด เปรั้ยว และหวาน แต่ละประเภทจะแตกต่างกันไปตามการปรุง.
        </h5>
        <br></br>
        <div class="w3-row">
          <div class="w3-col m6 w3-center w3-padding-large">
          <br></br>
          <h4><b><i class="fa fa-asterisk w3-margin-right"></i>ส่วนประกอบ</b></h4>
          <br></br>
            <img src="https://scontent.fbkk1-6.fna.fbcdn.net/v/t1.15752-9/s2048x2048/31958771_1694186803962201_3261355344311353344_n.jpg?_nc_fx=fbkk1-5&_nc_cat=0&oh=048c5c0ecdcd0ac6cb16f07c20198306&oe=5B888757" class="w3-round w3-image w3-opacity w3-hover-opacity-off" alt="Photo of Me" width="400" height="333" />
          </div>
          <div class="w3-col m6 w3-hide-small w3-padding-large">
            <br></br>
            <br></br>
            <h4><ins>ประกอบไปด้วย วัตถุดิบต่างๆดังนี้</ins></h4><br></br>
		        <h6 class="size"><ul>
			      <li> พริกแห้ง แยกได้เป็นสองชนิดคือ พริกแห้งเม็ดใหญ่ และพริกขี้หนูแห้ง </li>
			      <li> ผิวมะกรูด </li>
		  	    <li> ตะไคร้ </li>
			      <li> รากผักชี </li>
			      <li> กระชาย </li>
            <li> พริกสด </li>
			      <li> กระเทียม </li>
			      <li> หอมแดง </li>
			      <li> ใบมะกรูด </li>
			      <li> เครื่องเทศ ได้แก่ เมล็ดผักชี หรือลูกผักชี, เมล็ดยี่หร่า, ดอกจันทร์แปดกรีบ, ลูกกระวาน, ใบกระวาน, กานพลู, ดีปลี, พริกหมอ หรือมะแข่น, อบเชย.</li>
            </ul>
            </h6>
          </div>
        </div>
        <br></br>
        <br></br>
        <div class="w3-row">
          <div class="w3-col m6 w3-hide-small w3-padding-large">
            <br></br>
            <br></br>
			      <h4><ins> ประเภทของแกง </ins></h4>
            <br></br>
            <h6 class="size">
              แบ่งออกเป็น 2 ประเภทใหญ่ คือ 
            <br></br>
			        1. แกงใส่กะทิ แบ่งได้เป็น 2 ชนิด <br></br>
              <ul>
                <li> แกงกะทิที่ใส่พริกแกง เช่น แกงคั่ว, แกงเทโพ, พะแนง, แกงกะหรี่ </li>
                <li> แกงกะทิที่ไม่ใส่พริกแกง เช่น ต้มกะทิสายบัว, ต้มข่าไก่ </li>
              </ul>
		          2. แกงไม่ใส่กะทิ แบ่งได้เป็น 2 ชนิด <br></br>
              <ul>
                <li> แกงไม่ใส่กะทิที่ใส่พริกแกง เช่น แกงป่า, แกงส้ม </li>
                <li> แกงไม่ใส่กะทิที่ไม่ใส่พริกแกง เช่น แกงจืด, ต้มส้ม, ต้มเค็ม </li>
              </ul>
            </h6>
          </div>
          <div class="w3-col m6 w3-center w3-padding-large">
          <h4><b><i class="fa fa-asterisk w3-margin-right"></i>ประเภทของแกง</b></h4><br></br>
            <img src="https://scontent.fbkk1-4.fna.fbcdn.net/v/t1.15752-9/31958343_1694223377291877_4482626047933677568_n.jpg?_nc_fx=fbkk1-5&_nc_cat=0&oh=c0bad4f560420a3438e0298344f3ff57&oe=5B958681" 
            class="w3-round w3-image w3-opacity w3-hover-opacity-off" onclick="onClick(this)" alt="The mist over the mountains" width="400" height="333" />
          </div>
        </div>
      </ScrollAnimation>
      </div>
      <div class="w3-row w3-center w3-dark-grey w3-padding-16">

        <div class="w3-quarter w3-section">
          <span class="w3-xlarge">14+</span><br></br>
         Partners
        </div>
        <div class="w3-quarter w3-section">
          <span class="w3-xlarge">55+</span><br></br>
         Projects Done
        </div>
        <div class="w3-quarter w3-section">
          <span class="w3-xlarge">89+</span><br></br>
         Happy Clients
        </div>
        <div class="w3-quarter w3-section">
          <span class="w3-xlarge">150+</span><br></br>
         Meetings
        </div>
      </div>

      <div class="bgimg-2 w3-display-container">
        <div class="w3-display-middle">
          <span class="w3-xxlarge w3-text-white w3-wide">MENU</span>
        </div>
      </div>

    </div>
    
    );
  }
}

export default App;
