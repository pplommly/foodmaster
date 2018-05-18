import React, { Component } from 'react';
import 'w3-css/w3.css';
import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div>
                <div class="w3-top">
          <div class="w3-bar" id="myNavbar">
            <a class="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right" href="" onclick="toggleFunction()" title="Toggle Navigation Menu">
              <i class="fa fa-bars"></i>
            </a>
            <a href="#home" class="w3-bar-item w3-button" id="menu">HOME</a>
            <a href="#about" class="w3-bar-item w3-button w3-hide-small" id="menu"><i class="fa fa-user"></i> ABOUT</a>
            <a href="#Menu" class="w3-bar-item w3-button w3-hide-small" id="menu"><i class="fa fa-th"></i> MENU</a>
            <a href="#contact" class="w3-bar-item w3-button w3-hide-small" id="menu"><i class="fa fa-envelope"></i> CONTACT</a>
            <a href="" class="w3-bar-item w3-button w3-right w3-hide-small w3-hover-red" id="menu">
              <i class="fa fa-search"></i>
            </a>
          </div>
          <div id="navDemo" class="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium">
            <a href="#about" class="w3-bar-item w3-button" onclick="toggleFunction()">ABOUT</a>
            <a href="#Menu" class="w3-bar-item w3-button" onclick="toggleFunction()">MENU</a>
            <a href="#contact" class="w3-bar-item w3-button" onclick="toggleFunction()">CONTACT</a>
            <a href="" class="w3-bar-item w3-button">SEARCH</a>
          </div>
        </div>
                <div class="bgimg-1 w3-display-container" id="home">
          
          </div>

          <div class="w3-content w3-container w3-padding-64" id="about">
            <ScrollAnimation animateIn="fadeIn">
              <h2 class="w3-center">ABOUT ME</h2>
              <h3 class="w3-center font"><em>เครื่องแกง</em></h3><br></br>
              <h5 class=" font">เครื่องแกง เป็นวัตถุดิบต่างๆที่จำเป็นต่อการปรุงอาหาร หรือส่วนผสมที่นำมาผสมผสานกันเพื่อให้เกิดรสชาติใหม่ นั่นก็คือ "น้ำพริกแกง" ที่ทำให้อาหารประเภทแกง รสกลมกล่อม กลิ่นหอม อร่อย ซึ่งจะมีรสชาติ เค็ม เผ็ด เปรั้ยว และหวาน แต่ละประเภทจะแตกต่างกันไปตามการปรุง.
                </h5>
              <br></br>
              <div class="w3-row">
                <div class="w3-col m6 w3-center w3-padding-large  font">
                  <br></br>
                  <h4><b><i class="fa fa-asterisk w3-margin-right"></i>ส่วนประกอบ</b></h4>
                  <br></br>
                  <img src="https://scontent.fbkk1-6.fna.fbcdn.net/v/t1.15752-9/s2048x2048/31958771_1694186803962201_3261355344311353344_n.jpg?_nc_fx=fbkk1-5&_nc_cat=0&oh=048c5c0ecdcd0ac6cb16f07c20198306&oe=5B888757" class="w3-round w3-image w3-opacity w3-hover-opacity-off" alt="Photo of Me" width="400" height="333" />
                </div>
                <div class="w3-col m6 w3-hide-small w3-padding-large font">
                  <br></br>
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
              <div class="w3-row font">
                <div class="w3-col m6 w3-hide-small w3-padding-large">
                  <br></br>
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
                  <h4><b><i class="fa fa-asterisk w3-margin-right font"></i>ประเภทของแกง</b></h4><br></br>
                  <img src="https://scontent.fbkk1-4.fna.fbcdn.net/v/t1.15752-9/31958343_1694223377291877_4482626047933677568_n.jpg?_nc_fx=fbkk1-5&_nc_cat=0&oh=c0bad4f560420a3438e0298344f3ff57&oe=5B958681"
                    class="w3-round w3-image w3-opacity w3-hover-opacity-off" onclick="onClick(this)" alt="The mist over the mountains" width="400" height="333" />
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <div class="bgimg-2 w3-display-container" id="Menu">
            <div class="w3-display-middle">
              <span class="w3-xxlarge w3-text-white w3-wide">MENU</span>
            </div>
          </div>

          <div class="w3-content w3-container w3-padding-64">
            <div>
              <ScrollAnimation animateIn="fadeIn">
                <center>
                  <img id="text1" src="https://scontent.fbkk1-6.fna.fbcdn.net/v/t1.15752-9/32456690_1700715493309332_1684494239439781888_n.png?_nc_fx=fbkk1-5&_nc_cat=0&oh=f06a48687738c6a882d0095c047f8a24&oe=5B9B2146"
                    class="w3-round w3-image " onclick="onClick(this)" alt="The mist over the mountains" width="120" height="0" />
                    <Link to="/Keawwan">
                  <img id="img1" src="https://scontent.fbkk1-6.fna.fbcdn.net/v/t1.15752-9/32555225_2055233191416559_1687662666878812160_n.png?_nc_fx=fbkk1-5&_nc_cat=0&_nc_eui2=AeF6WfIkC5ZoXIEactUqScgy83lbtFUf5niMvu4tf2UPuQC0MkV94rKAHSYn0Z3JbOgQFaC17DykbULtHRJ9X54k4pmXcQzb3lkfy7ZP9HF2vg&oh=7fab479c55cfadb4a682cfa356d28220&oe=5B7E8055"
                    class="w3-round w3-image " onclick="onClick(this)" alt="The mist over the mountains" width="330" height="330" />
                    </Link>
                    <Link to="/Tomyum">    
                  <img id="img2" src="https://scontent.fbkk1-1.fna.fbcdn.net/v/t1.15752-0/p240x240/32581996_2055233204749891_5614855448080416768_n.png?_nc_fx=fbkk1-5&_nc_cat=0&_nc_eui2=AeHsvCuIisMnCheLuXOOf04l9XkvhuYZNyFUh5mjoOKckDNlwmFEGDodtctAwcil8JQeyDxoGapCwNwoV2BqovOlYpT13CBJhc35kydnhsPFXw&oh=cd7d15000d73e56bba16487f620253fd&oe=5B7EBDE0"
                    class="w3-round w3-image " onclick="onClick(this)" alt="The mist over the mountains" width="342" height="342" />
                    </Link>  
                  <img id="text2" src="https://scontent.fbkk1-5.fna.fbcdn.net/v/t1.15752-9/32558025_1700715506642664_7734842840005476352_n.png?_nc_fx=fbkk1-5&_nc_cat=0&oh=73f17f302596d0c1cee8feac13d770cc&oe=5B523A18"
                    class="w3-round w3-image " onclick="onClick(this)" alt="The mist over the mountains" width="120" height="0" />
                  <img id="text3" src="https://scontent.fbkk1-5.fna.fbcdn.net/v/t1.15752-9/32430377_1700715486642666_2766852321886339072_n.png?_nc_fx=fbkk1-5&_nc_cat=0&oh=427166495cd6aaacf3b23833f93247ae&oe=5B5410D8"
                    class="w3-round w3-image " onclick="onClick(this)" alt="The mist over the mountains" width="120" height="0" />
                    <Link to="/Kangped"> 
                  <img id="img3" src="https://scontent.fbkk1-1.fna.fbcdn.net/v/t1.15752-0/p240x240/32583354_2055233201416558_7598638857134800896_n.png?_nc_fx=fbkk1-5&_nc_cat=0&_nc_eui2=AeFVHGN22DuEH0RguzQdhEeaNUAm7Qi4TfSCJ2Aht30b7v2pFJyrBcoO0qcq2tyMN731NcuAmUwqv119lEXKjXiYVZRwnsOYGzMwARzKPoVCaw&oh=68a3e6e78ffaac874eb032d38fcb5911&oe=5B505365"
                    class="w3-round w3-image " onclick="onClick(this)" alt="The mist over the mountains" width="330" height="330" />
                    </Link>  
                    <Link to="/Kangleang"> 
                  <img id="img4" src="https://scontent.fbkk1-3.fna.fbcdn.net/v/t1.15752-0/s261x260/32402362_2055233188083226_2147875632485236736_n.png?_nc_fx=fbkk1-5&_nc_cat=0&_nc_eui2=AeGUa-E8zpHC1nFpVWksYUiw2M_VtlehQJkg73KUoAVjktFpjM9P27cA0z88LAkMtLmfFgT06BKoYzjLWNRettBxY1Q03UP-qqNppz940ZPgLA&oh=f5f730b50b1c3e1f5c5cd39e1f4284ed&oe=5B9712B8"
                    class="w3-round w3-image " onclick="onClick(this)" alt="The mist over the mountains" width="345" height="345" />
                    </Link>  
                  <img id="text4" src="https://scontent.fbkk1-6.fna.fbcdn.net/v/t1.15752-9/32669007_1700715499975998_694969903706275840_n.png?_nc_fx=fbkk1-5&_nc_cat=0&oh=8ca728fba3846c99212f09f42ea3c023&oe=5B7D9AAD"
                    class="w3-round w3-image " onclick="onClick(this)" alt="The mist over the mountains" width="120" height="0" />
                </center>
              </ScrollAnimation>
            </div>
          </div>

          <div class="bgimg-2 w3-display-container" id="contact">
            <div class="w3-display-middle">
              <span class="w3-xxlarge w3-text-white w3-wide">CONTRACT</span>
            </div>
          </div>

          <div class="w3-content w3-container w3-padding-64">
            <ScrollAnimation animateIn="fadeIn">
              <center>
                <div class="w3-row w3-padding-32 w3-section">
                  <h3 class="w3-center">MY RESTURANT</h3>
                  <p class="w3-center"><em>I'd love your feedback!</em></p>
                  <div class="w3-col w3-panel">
                    <div class="w3-large w3-margin-bottom">
                      <i class="fa fa-map-marker fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Bangkok, Thailand<br></br>
                      <i class="fa fa-phone fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Phone: +6663-516-1829<br></br>
                      <i class="fa fa-envelope fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Email: ZabsD@gmail.com<br></br>
                    </div>
                    <p>Swing by for a cup of <i class="fa fa-coffee"></i>, or leave me a note:</p>
                    <form>
                      <div class="w3-row-padding">
                        <div class="w3-half">
                          <input class="w3-input w3-border" type="text" placeholder="Name" required name="Name" />
                        </div>
                        <div class="w3-half">
                          <input class="w3-input w3-border" type="text" placeholder="Email" required name="Email" />
                        </div>
                      </div>
                      <br></br>
                      <input class="w3-input w3-border" type="text" placeholder="Message" required name="Message" />
                      <button class="w3-button w3-black w3-right w3-section" type="submit">
                        <i class="fa fa-paper-plane"></i> SEND MESSAGE
              </button>
                    </form>
                    <div class="w3-col  w3-container" >
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.098276793865!2d100.49281881474823!3d13.65178540328158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a251bb6b0cf1%3A0xf656e94ff13324ad!2z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LmA4LiX4LiE4LmC4LiZ4LmC4Lil4Lii4Li14Lie4Lij4Liw4LiI4Lit4Lih4LmA4LiB4Lil4LmJ4Liy4LiY4LiZ4Lia4Li44Lij4Li1!5e0!3m2!1sth!2sth!4v1526324662400"
                        width="800" height="400" frameborder="0" allowfullscreen></iframe>
                    </div>

                  </div>
                </div>
              </center>
            </ScrollAnimation>
          </div>
            </div>
        );
    }
}

export default Home;