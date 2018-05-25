import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom'

class Tomyum extends Component {
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
                <div class="bgimg-6 w3-display-container" id="home">

                </div>

                <div class="w3-content w3-container w3-padding-64" id="about">
                    <ScrollAnimation animateIn="fadeIn">
                        <h2 class="w3-center">ABOUT ME</h2>
                        <h3 class="w3-center font"><em>ต้มยำกุ้ง</em></h3><br></br>
                        <h5 class=" font">“ต้มยำกุ้ง” เปรียบเสมือนตราสัญลักษณ์ของอาหารไทยเนื่องจากได้รับความนิยมทั้งในและต่างประเทศมาเป็นเวลานาน ด้วยรสชาติกลมกล่อมคือมีทั้งรสเปรี้ยว เค็ม เผ็ด และหวานเล็กน้อย ทั้งยังมีกลิ่นหอมจากสมุนไพรที่มีประโยชน์ อาทิ ข่า ตะไคร้ ใบมะกรูด พริก และหอมแดง ทำให้ต้มยำกุ้งเป็นอาหารไทยที่ได้รับคะแนนเป็นอันดับ 4 ในการจัดอันดับ 50 อาหารยอดนิยมระดับโลก (พ.ศ. 2554) โดยเว็บไซต์ www.travel.cnn.com ซึ่งปัจจุบัน ต้มยำมี 2 แบบ คือ แบบน้ำใส และน้ำข้น ต้มยำน้ำใสคือสูตรดั้งเดิม ส่วนต้มยำน้ำข้นเป็นสูตรที่เกิดขึ้นภายหลังโดยการใส่น้ำพริกเผา นม หรือกะทิ
                            </h5>
                        <br></br>
                        <div class="w3-row">
                        <div class="w3-col m6 w3-center w3-padding-large  font">
                                <br></br>
                                <br></br>
                                <img src="https://scontent.fbkk1-3.fna.fbcdn.net/v/t1.15752-9/33442872_1709770285737186_8209875826489950208_n.jpg?_nc_fx=fbkk1-5&_nc_cat=0&_nc_eui2=AeEN9N4SFgZfmUw7SLly_NKF-cIkB5kjGVuEk71Zpwtl7310F08Kyn4TzjApaHWNRjKeke3iAPFQuNFFbs3P4ztuv46heQR81ZrXog5f5BGINw&oh=2bfe9f0a14b2af4a731a9880c31ba0fc&oe=5B8EE37F" class="w3-round w3-image w3-opacity w3-hover-opacity-off" alt="Photo of Me" width="400" height="333" />
                            </div>
                            <div class="w3-col m6 w3-hide-small w3-padding-large">
                                <br></br>
                                <br></br>
                                <h4 class=" font"><ins>คุณค่าทางอาหาร</ins></h4><br></br>
                                <h6 class="size font">
                                    ต้มยำกุ้งเป็นอาหารจานชุมนุมสมุนไพรที่ทำให้รู้สึกสดชื่น กระชุ่มกระชวย  สมองปลอดโปร่ง เพราะข่า ตะไคร้ ใบมะกรูด ล้วนมีน้ำมันหอมระเหยที่อบอวลอยู่ในจานอาหาร และมีสรรพคุณช่วยขับลม ให้ความสดชื่น  ผสานไปกับรสหวานของเนื้อกุ้งและเห็ด  กุ้งเป็นอาหารทะเลที่มีโปรตีนสูงแต่ไขมันต่ำ มีวิตามินบี 12 ที่ช่วยสร้างเม็ดเลือดแดง และป้องกันโรคโลหิตจาง
                                </h6>
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
                                        <li> น้ำ 2 1/2  ถ้วยตวง </li>
                                        <li> ข่าซอย 3 ช้อนโต๊ะ </li>
                                        <li> ตะไคร้ 2-3 ต้น  </li>
                                        <li> หัวกุ้งและเปลือกกุ้ง 1/2 ถ้วยตวง </li>
                                        <li> เห็ดฟางหั่น 1/2 ถ้วยตวง </li>
                                        <li> พริกขี้หนูแดงบุบ 4-5 เม็ด </li>
                                        <li> น้ำพริกเผา 1-2 ช้อนโต๊ะ </li>
                                    </ul>
                                    </h6>
                                </div>
                                <div class="w3-col m6 w3-padding-large  font">
                                    <br></br>

                                    <h6 class="size font"><ul>
                                        <li> น้ำปลา 4 ช้อนโต๊ะ </li>
                                        <li> กุ้ง 3 ตัว </li>
                                        <li> นมข้นจืด 1/2 ถ้วยตวง </li>
                                        <li> ใบมะกรูด 4-5 ใบ  </li>
                                        <li> น้ำมะนาว 2 ช้อนโต๊ะ </li>
                                        <li> ผักชีสับ 2 ช้อนโต๊ะ </li>
                                    </ul>
                                    </h6>
                                </div>

                            </div>
                            <h3><ins>วิธีทำ</ins></h3>
                            <br></br>
                            <br></br>
                            <h6 class="size font">
                                1. 	ตั้งหม้อใส่น้ำรอจนเดือดจัด ใส่ข่าซอย ตะไคร้บุบเล็กน้อยลงไป รอเดือดแล้วใส่เห็ดดฟางและหัวกุ้งเพื่อกลิ่นและความมัน ลดไฟเหลือไฟกลางรอจนน้ำซุปเดือดอีกครั้งและหอมดี ประมาณ 4 นาที 
                                <br></br>
                                2.	 ตามด้วยพริกขี้หนูแดง น้ำพริกเผา น้ำปลา คนจนเข้ากัน เมื่อเดือดอีกครั้งใส่เนื้อกุ้งลงไปเอาแค่ให้สุกแค่ 95 เปอร์เซ็นต์ แล้วตามด้วยนม อุ่นจนเดือดเล็กน้อยอีกครั้ง ฉีกใบมะกรูดใส่ลงไป ปิดไฟบีบมะนาว แล้วโรยด้วยผักชีแล้วตักเสิร์ฟ
                            </h6>
                            <br></br>
                            <br></br>
                            <center>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/fromu-mUey4?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
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

export default Tomyum;