import React, { useState, useEffect } from 'react';
import logo from '../asset/img/pardi_design_logo.svg';
import '../style/Navbar.css';
import $ from 'jquery';

$(document).ready(function () {
  // NavBar
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
  // Play & Pause Button
  var btn = $('.button');
  btn.click(function () {
    btn.toggleClass('paused');
    return false;
  });
});

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
            <button className="button"></button>
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
