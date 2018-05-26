import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom'

class Keawwan extends Component {
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
                <div class="bgimg-7 w3-display-container" id="home">

                </div>

                <div class="w3-content w3-container w3-padding-64" id="about">
                    <ScrollAnimation animateIn="fadeIn">
                        <h2 class="w3-center">ABOUT ME</h2>
                        <h3 class="w3-center font"><em>แกงเขียวหวาน</em></h3><br></br>
                        <h5 class=" font">“แกงเขียวหวาน” แกงที่มีเอกลักษณ์เฉพาะ เพราะน้ำแกงเป็นสีเขียวอ่อน ที่ได้จากสีของพริกชี้ฟ้าสดสีเขียวกับพริกขี้หนูสดสีเขียว มีรสเผ็ดนำ รสเค็มและมันตาม โขลกเครื่องแกงแบบเดียวกับแกงเผ็ด เมื่อนำพริกแกงไปผัดกับน้ำกะทิ น้ำแกงจะออกเป็นสีเขียวอ่อนตามสีของพริก จึงเรียกว่า “แกงเขียวหวาน” ซึ่งใช้เครื่องปรุงรสแบบเดียวกับแกงเผ็ด แต่รสชาติของแกงเขียวหวานจะจัดจ้านกว่า 
                            </h5>
                        <br></br>
                        <div class="w3-row">
                            <div class="w3-col m6 w3-hide-small w3-padding-large">
                                <br></br>
                                <br></br>
                                <br></br>
                                <h4 class=" font"><ins>คุณค่าทางอาหาร</ins></h4><br></br>
                                <h6 class="size font">
                                    ประกอบด้วยโปรตีน ไขมัน ในปริมาณพอสมควร มีใยอาหารสูง มะเขือพวง เป็นยาระงับปวด ห้ามเลือด ขับปัสสาวะ รักษาโรคหลอดลม และไขข้ออักเสบ ใบมะกรูด ช่วยป้องกันโรคมะเร็ง ใบโหระพา แก้จุกเสียด ท้องอืด แน่นท้อง ช่วยเจริญอาหาร พริกชี้ฟ้า ช่วยเจริญอาหาร ขับลม เป็นยาระบาย ช่วยขับเสมหะ แก้หวัด หัวหอม ช่วยบรรเทาอาการหวัด หายใจไม่ออก กระเทียม ช่วยลดระดับโคเลสเตอรอลในเลือด ข่า ช่วยขับลม แก้อาการแน่น จุกเสียด ท้องอืด ท้องเฟ้อ ขับเสมหะ ตะไคร้ ลดอาการจุกเสียด แน่นท้อง ท้องอืดท้องเฟ้อ รากผักชี ช่วยขับถ่ายสารพิษออกจากร่างกาย แก้โรคกระเพาะ พริกไทย ช่วยย่อยอาหาร ทำให้รู้สึกสบายท้อง ขับลม ขับเหงื่อ ลดความร้อนในร่างกาย ยี่หร่า ช่วยขับลม ช่วยย่อยอาหาร
                                </h6>
                            </div>
                            <div class="w3-col m6 w3-center w3-padding-large  font">
                                <br></br>
                                <br></br>
                                <br></br>
                                <img src="https://scontent.fbkk13-1.fna.fbcdn.net/v/t1.15752-9/33610133_1711530515561163_7975452113427759104_n.jpg?_nc_cat=0&_nc_eui2=AeEk0jr8lW3EbMqVuLYTlulPyzm5EfFWdvmvSFPW_BBXImWSPB1na7hvgtIbBMGilf_Ra9zKS7Rp5yHomA0khxgtS6T1Aj5UNzsTdLDlLwiTPg&oh=9275f6343ccb5fe62d98dbcdef6e1ce1&oe=5B8243E2" class="w3-round w3-image w3-opacity w3-hover-opacity-off" alt="Photo of Me" width="400" height="333" />
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
                                        <li> เนื้อไก่(สะโพก) 200 กรัม </li>
                                        <li> หัวกะทิ 250 กรัม </li>
                                        <li> หางกะทิ 500 กรัม </li>
                                        <li> น้ำปลา 2 ช้อนโต๊ะ </li>
                                        <li> น้ำตาลปี๊บ 1 ช้อนโต๊ะ </li>
                                        <li> ใบมะกรูดฉีก 4 ใบ </li>
                                        <li> มะเขือเปราะ 4 ลูก </li>
                                        <li> ใบโหระพา 1/4 ถ้วยตวง </li>
                                        <li> พริกชี้ฟ้าแดงหั่นแฉลบ 1 เม็ด</li>
                                        <li> พริกชี้ฟ้าเขียวเม็ดใหญ่ 1 ถ้วยตวง</li>
                                        <li> พริกขี้หนู 5 เม็ด</li>
                                    </ul>
                                    </h6>
                                </div>
                                <div class="w3-col m6 w3-padding-large  font">
                                    <br></br>

                                    <h6 class="size font"><ul>
                                        <li> เกลือป่น 1 ช้อนชา </li>
                                        <li> พริกไทยขาว 5-7 เม็ด </li>
                                        <li> พริกขี้หนูแดง 5 เม็ด </li>
                                        <li> รากผักชี 1 ช้อนโต๊ะ </li>
                                        <li> ผิวมะกรูดซอย 1ช้อนชาว </li>
                                        <li> ตะไคร้ซอย 2 ต้น  </li>
                                        <li> ข่า(ซอย) 2 ช้อนชา </li>
                                        <li> หอมแดง 4 หัว </li>
                                        <li> กระเทียม 5-6 กลีบ </li>
                                        <li> ลูกผักชีคั่วป่น 1 ช้อนชา </li>
                                        <li> ยี่หร่าคั่วป่น 1 ช้อนชา</li>
                                        <li> กะปิ 1/2 ช้อนโต๊ะ </li>
                                    </ul>
                                    </h6>
                                </div>

                            </div>
                            <h3><ins>วิธีทำ</ins></h3>
                            <br></br>
                            <br></br>
                            <h6 class="size font">
                            1.	 ทำพริกแกงเขียวหวานโดยการ โขลกพริกชี้ฟ้าเขียวและพริกขี้หนู เติมเกลือป่น โขลกละเอียด ตามด้วยพริกไทยเม็ด รากผักชี ผิวมะกรูด โขลกละเอียด ใส่ข่าและตะไคร้ โขลกต่อ ตามด้วยหอมแดงและกระเทียม โขลกละเอียด สุดท้ายใส่ลูกผักชี ยี่หร่า และกะปิ โขลกผสมให้เครื่องแกงเข้ากันและละเอียดดี  ได้พริกแกงเขียวหวาน
                            <br></br>
                            2.	 ตั้งหม้อ ใส่หัวกะทิ ผัดกับพริกแกงเขียวหวาน ใช้ไฟอ่อน คอยคนจนกะทิแตกมัน ใส่เนื้อไก่ ใบมะกรูดฉีก ผัดต่อจนไก่เริ่มสุก ใส่หางกะทิ รอเดือด ปรุงรสด้วยน้ำปลาและน้ำตาลปี๊บ ใส่มะเขือเปราะ รอเดือด ใบโหระพา พริกชี้ฟ้าแดงหั่นแฉลบ ปิดไฟ ตักเสิร์ฟ
                            </h6>
                            <center>
                            <br></br>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/CPZQTfYDtP0?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
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

export default Keawwan;