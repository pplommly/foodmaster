import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom'

class Kangped extends Component {
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
                <div class="bgimg-5 w3-display-container" id="home">

                </div>

                <div class="w3-content w3-container w3-padding-64" id="about">
                    <ScrollAnimation animateIn="fadeIn">
                        <h2 class="w3-center">ABOUT ME</h2>
                        <h3 class="w3-center font"><em>แกงเผ็ด</em></h3><br></br>
                        <h5 class=" font">“แกงเผ็ด” เป็นแกงที่มีลักษณ์เด่นเป็นพิเศษตรงที่น้ำแกงเป็นสีแดง ด้วยการใช้พริกแห้งพันธุ์พริกบางช้าง แกงเผ็ดจะมีรสเผ็ดนำ มีรสเค็มและมันตาม สูตรโบราณมักจะปรุงรสชาติให้เผ็ดจัดเหมือนแกงป่า เนื้อสัตว์ที่นิยมนำมาใช้กับแกงเผ็ด มักจะเป็นเนื้อวัว หมู ไก่ เป็ด และสัตว์ป่า อย่าง นกกระทา หมูป่า เพราะพริกแกงใช้วัตถุดิบที่มีกลิ่นเครื่องเทศและเผ็ดร้อน สามารถดับกลิ่นคาวของเนื้อสัตว์ได้เป็นอย่างดี 
                            </h5>
                        <br></br>
                        <div class="w3-row">
                        <div class="w3-col m6 w3-center w3-padding-large  font">
                                <br></br>
                                <br></br>
                                <img src="https://scontent.fbkk2-4.fna.fbcdn.net/v/t1.15752-9/33438348_1709770272403854_6915644486185910272_n.jpg?_nc_cat=0&oh=3b543ece1d41b2bd8bc5751e4c9014b9&oe=5BC39CE0" class="w3-round w3-image w3-opacity w3-hover-opacity-off" alt="Photo of Me" width="400" height="333" />
                                </div>
                            <div class="w3-col m6 w3-hide-small w3-padding-large">
                                <br></br>
                                <br></br>
                                <br></br>
                                <h4 class=" font"><ins>คุณค่าทางอาหาร</ins></h4><br></br>
                                <h6 class="size font">
                                    แกงเผ็ดมีคุณสมบัติที่เป็นประโยชน์ต่อสุขภาพ ช่วยลดการอักเสบ ที่เกิดขึ้นจากกระบวนการต่างๆ ภายในร่างกายหรือแม้กระทั่งสิ่งแวดล้อมที่เป็นพิษเข้าสู่ร่างกายของเรา จึงทำให้ช่วยในการป้องกันโรคที่เกี่ยวข้องกับการอักเสบ ไม่ว่าจะเป็นโรคเบาหวาน โรคมะเร็ง หรือโรคอื่นๆ
                                </h6>
                            </div>
                                                    </div>
                        <br></br>
                        <br></br>
                    </ScrollAnimation>
                </div>
                <div class="bgimg-8 w3-display-container" id="Howto">
                    <div class="w3-display-middle">
                        <span class="w3-xxxlarge w3-text-black w3-wide">HOW TO</span>
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
                                        <li> เนื้อหมูสันนอก 200 กรัม </li>
                                        <li> ฟักทองหั่นชิ้นพอคำ 1 ถ้วยตวง </li>
                                        <li> หัวกะทิ 250 กรัม </li>
                                        <li> หางกะทิ 500 กรัม </li>
                                        <li> น้ำปลา 2 ช้อนโต๊ะ </li>
                                        <li> น้ำตาลปี๊บ 1 ช้อนโต๊ะ </li>
                                        <li> ใบมะกรูดฉีก 4 ใบ </li>
                                        <li> ใบโหระพา 1/2 ถ้วยตวง </li>
                                        <li> พริกชี้ฟ้าแดงหั่นแฉลบ 1 เม็ด </li>
                                        <li> พริกแห้งเม็ดใหญ่ 10เม็ด </li>
                                        <li> กะปิ 1/2 ช้อนโต๊ะ </li>
                                    </ul>
                                    </h6>
                                </div>
                                <div class="w3-col m6 w3-padding-large  font">
                                    <br></br>

                                    <h6 class="size font"><ul>
                                        <li> เกลือป่น 1 ช้อนชา </li>
                                        <li> พริกไทยขาว 5-7 เม็ด </li>
                                        <li> รากผักชี 1 ช้อนโต๊ะ </li>
                                        <li> ผิวมะกรูดซอย 1 ช้อนชา  </li>
                                        <li> ตะไคร้ซอย 2 ต้น  </li>
                                        <li> ข่า(ซอย) 2 ช้อนชา </li>
                                        <li> หอมแดง 4 หัว </li>
                                        <li> กระเทียม  5-6 กลีบ </li>
                                        <li> ลูกผักชีคั่วป่น 1 ช้อนชา </li>
                                        <li> ยี่หร่าคั่วป่น 1 ช้อนชา </li>
                                    </ul>
                                    </h6>
                                </div>

                            </div>
                            <h3><ins>วิธีทำ</ins></h3>
                            <br></br>
                            <h6 class="size font">
                                1.	 ทำพริกแกงเผ็ดโดยการ โขลกพริกแห้ง(เลาะเม็ดออกแช่น้ำให้นิ่ม)เติมเกลือป่น โขลกละเอียด ตามด้วยพริกไทยเม็ด รากผักชี ผิวมะกรูดโขลกให้ละเอียด ใส่ข่าและตะไคร้ โขลกต่อ ตามด้วยหอมแดงและกระเทียม โขลกให้ละเอียดสุดท้ายใส่ลูกผักชี ยี่หร่า และกะปิ โขลกผสมให้เครื่องแกงเข้ากันและละเอียดดี  ได้พริกแกงเผ็ด
                                <br></br>
                                2.	 ตั้งหม้อใส่หัวกะทิ ผัดกับพริกแกงเผ็ด ใช้ไฟอ่อน คอยคนจนกะทิแตกมัน ใส่เนื้อหมู ผัดจนหมูเริ่มสุกใส่ฟักทอง ใบมะกรูดฉีก ใส่หางกะทิ รอเดือดและฟักทองสุกดี ปรุงรสด้วยน้ำปลาและน้ำตาลปี๊บ รอเดือด ใบโหระพา พริกชี้ฟ้าแดงหั่นแฉลบ ปิดไฟ ตักเสิร์ฟ           
                            </h6>
                            <br></br>
                            <br></br>
                            <center>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/K4yekneOYAA?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                            </center>
                        </ScrollAnimation>
                    </div>
                </div>
                <div class="bgimg-9 w3-display-container" id="Comment">
                    <div class="w3-display-middle">
                        <span class="w3-xxxlarge w3-text-white w3-wide">COMMENT</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Kangped;