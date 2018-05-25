import React, { Component } from 'react';
import 'w3-css/w3.css';
import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom'

class Kangleang extends Component {
    render() {
        return (
            <div>
                <div class="w3-top">
                    <div class="w3-bar" id="myNavbar">
                        <a class="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right" href="" onclick="toggleFunction()" title="Toggle Navigation Menu">
                            <i class="fa fa-bars"></i>
                        </a>
                        <Link to="/" class="w3-bar-item w3-button" id="menu">HOME</Link>
                        <a href="#about" class="w3-bar-item w3-button w3-hide-small" id="menu"><i class="fa fa-user"></i> ABOUT</a>
                        <a href="#Howto" class="w3-bar-item w3-button w3-hide-small" id="menu"><i class="fa fa-th"></i> HOW TO</a>
                        <a href="#Comment" class="w3-bar-item w3-button w3-hide-small" id="menu"><i class="fa fa-envelope"></i> COMMENT</a>
                        <a href="" class="w3-bar-item w3-button w3-right w3-hide-small w3-hover-red" id="menu">
                            <i class="fa fa-search"></i>
                        </a>
                    </div>
                    <div id="navDemo" class="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium">
                        <a href="#about" class="w3-bar-item w3-button" onclick="toggleFunction()">ABOUT</a>
                        <a href="#Menu" class="w3-bar-item w3-button" onclick="toggleFunction()">HOW TO</a>
                        <a href="#contact" class="w3-bar-item w3-button" onclick="toggleFunction()">COMMENT</a>
                        <a href="" class="w3-bar-item w3-button">SEARCH</a>
                    </div>


                </div>
                <div class="bgimg-4 w3-display-container" id="home">

                </div>

                <div class="w3-content w3-container w3-padding-64" id="about">
                    <ScrollAnimation animateIn="fadeIn">
                        <h2 class="w3-center">ABOUT ME</h2>
                        <h3 class="w3-center font"><em>แกงเลียง</em></h3><br></br>
                        <h5 class=" font">“แกงเลียง” เป็นแกงไทยโบราณ ที่มีน้ำแกงไม่ใส หรือข้นเกินไป รสชาติเค็มพอดี มีรสเผ็ดร้อนจากพริกไทย แต่ไม่เผ็ดจัดจนเกินไป เครื่องแกงเลียงมีพริกไทย หอมแดงและกะปิเป็นหลัก ส่วนประกอบจะเน้นที่ผัก มากกว่าเนื้อสัตว์ ส่วนใหญ่เป็นผักพื้นบ้าน ที่หาง่าย เช่น ฟักทอง บวบ น้ำเต้าอ่อน ตำลึง หัวปลี และผักที่ขาดไม่ได้คือใบแมงลักซึ่งทำให้แกงเลียงมีกลิ่นหอมเป็นเอกลักษ
                            </h5>
                        <br></br>
                        <div class="w3-row">
                            <div class="w3-col m6 w3-hide-small w3-padding-large">
                                <br></br>
                                <br></br>
                                <br></br>
                                <h4 class=" font"><ins>คุณค่าทางอาหาร</ins></h4><br></br>
                                <h6 class="size font">
                                    แกงเลียง สามารถช่วยในการลดอนุมูลอิสระหรือลดอันตรายที่เกิดจากสิ่งแวดล้อม หรือแม้กระทั่งความเป็นพิษที่เข้าสู่ร่างกายได้
                                    แกงเลียงเป็นอาหารไทยโบราณชนิดหนึ่งที่เหมาะที่จะนำมาบริโภคเป็นประจำ  เพราะเป็นอาหารที่ไม่ให้พลังงานสูงมากนัก สามารถรับประทานได้บ่อย
                                    เพราะจะให้ใยอาหาร วิตามิน แร่ธาตุ ตลอดจนสารต่างๆ ที่เป็นประโยชน์ต่อร่างกาย
                                </h6>
                            </div>
                            <div class="w3-col m6 w3-center w3-padding-large  font">
                                <br></br>
                                <br></br>
                                <img src="https://scontent.fbkk2-4.fna.fbcdn.net/v/t1.15752-9/33298760_1709770225737192_2694143159834771456_n.jpg?_nc_cat=0&oh=11f2522174501a8102ae4e4eb0bc2161&oe=5B78891A" class="w3-round w3-image w3-opacity w3-hover-opacity-off" alt="Photo of Me" width="400" height="333" />
                            </div>

                        </div>
                        <br></br>
                        <br></br>
                    </ScrollAnimation>
                </div>
                <div class="bgimg-2 w3-display-container" id="Howto">
                    <div class="w3-display-middle">
                        <span class="w3-xxlarge w3-text-white w3-wide">HOW TO</span>
                    </div>
                </div>
                <div class="w3-content w3-container w3-padding-64">
                    <div>
                        <ScrollAnimation animateIn="fadeIn">
                            <h2 class="w3-center"><ins>How to cook</ins></h2>
                            <br></br>
                            <br></br>
                            <h3><ins>ส่วนประกอบ</ins></h3>
                            <br></br>

                            <div class="w3-row" >
                                <div class="w3-col m6 w3-hide-small w3-padding-large">
                                    <br></br>

                                    <h6 class="size font"><ul>
                                        <li> บวบงู 2 ลูก </li>
                                        <li> เห็ดนางรมหลวง 4 ดอก </li>
                                        <li> ข้าวโพดอ่อน 4 ฝัก </li>
                                        <li> ฟักทอง 1 เสี้ยว </li>
                                        <li> กุ้ง 10 ตัว </li>
                                        <li> น้ำตาลทราย 1 ชช </li>
                                        <li> เกลือ 1/2 ชช. </li>
                                        <li> น้ำปลา 1 ชช </li>
                                        <li> ใบแมงลัก 1 ถ้วย </li>
                                    </ul>
                                    </h6>
                                </div>
                                <div class="w3-col m6 w3-padding-large  font">
                                    <br></br>

                                    <h6 class="size font"><ul>
                                        <li> เนื้อกุ้งต้มสุก 4 ตัว </li>
                                        <li> รากผักชี 1 ราก </li>
                                        <li> พริกขี้หนูแดง 5 เม็ด </li>
                                        <li> กระเทียม 5 กลีบ  </li>
                                        <li> หอมแดง 5 หัว </li>
                                        <li> กะปิ 1 ชช. </li>
                                        <li> พริกไทยขาว 1 ชต. (ชนิดเม็ด) </li>
                                        <li> น้ำซุปไก่ 600 มล. </li>
                                    </ul>
                                    </h6>
                                </div>

                            </div>
                            <h3><ins>วิธีทำ</ins></h3>
                            <br></br>
                            <h6 class="size font">
                                1. โขลกเครื่องพริกแกงทั้งหมดเข้าด้วยกันจนละเอียด พักไว้ก่อน <br></br>
                                2. หั่นฟักทอง ชิ้นหนา 1 นิ้ว , บวบงู-ข้าวโพดอ่อน-เห็ดหั่นเฉียง <br></br>
                                3. ตั้งน้ำซุปให้เดือด เติมเครื่องแกงที่โขลกไว้แล้วลงไป ตามด้วยฟักทอง ปิดฝาไว้ 10 นาที <br></br>
                                4. เติมข้าวโพดอ่อน , บวบ , กุ้ง ปรุงรสด้วยเกลือ ,น้ำตาล , น้ำปลา <br></br>
                                5. เติมเห็ดลงไป ตามด้วยใบแมงลัก เป็นอันเสร็จ <br></br>
                            </h6>
                            <br></br>
                            <br></br>
                            <center>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/Ixg9AhMywq8?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                            </center>
                        </ScrollAnimation>
                    </div>
                </div>
                <div class="bgimg-2 w3-display-container" id="Comment">
                    <div class="w3-display-middle">
                        <span class="w3-xxlarge w3-text-white w3-wide">COMMENT</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Kangleang;