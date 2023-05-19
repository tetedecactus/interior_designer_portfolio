import logo from '../asset/img/pardi_design_logo.svg';
import '../style/Navbar.css';
import $ from 'jquery';
import { FaPause, FaPlay } from 'react-icons/fa';
import {IonIcon} from "react-ion-icon";

$(document).ready(function () {
  $('#mobile_nav').click(function () {
    //toggles nav and ensures other elements play nice too
    if ($('#primary_nav').css('left') < '0px') {
      $('#primary_nav').animate({ left: '0px' }, 200);
      $('#wrapper_main_content').animate({ left: '250px' }, 300);
      // $('#wrapper_main_content').css('overflow-y', 'hidden');
      // $('body').css('overflow-x', 'hidden');
      // $('#primary_nav').css('overflow-y', 'hidden');
    } else {
      $('#primary_nav').animate({ left: '-315px' }, 200);
      $('#wrapper_main_content').animate({ left: '0px' }, 200);
      // $('#wrapper_main_content').css('overflow-y', 'hidden');
      // $('body').css('overflow-x', 'hidden');
    }
  });
}); //end

/*  play button */
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const playBtn = document.querySelector('.circle__btn');
const wave1 = document.querySelector('.circle__back-1');
const wave2 = document.querySelector('.circle__back-2');

function Navbar() {
  return (
    <header className="nav-bar">
      <div className=" flex justify-between text-center items-center justify-center">
        <nav id="primary_nav" className="">
          <a href="#" id="mobile_nav">
            &#9776;
          </a>
          <ul>
            <img
              className="justify-center items-center"
              src={logo}
              alt="Pardi Design Logo"
              width={130}
            />
            <div class="circle">
              <span class="circle__btn">
                <IonIcon class="pause" name="pause" />
                <IonIcon class="play" name="play" />
                <FaPause class="pause" name="pause" />
                <FaPlay class="play" name="play" />
              </span>
              <span class="circle__back-1"></span>
              <span class="circle__back-2"></span>
            </div>
            <li>
              <a href="#">Home</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
