import React from "react";
import Show from "../component/Dell/Grid";
import imageUrl from "../component/Laptopimg/dell1.jpg";
import imageUr2 from "../component/Laptopimg/dell2.jpg";
import imageUr3 from "../component/Laptopimg/dell3.jpg";
import imageUr4 from "../component/Laptopimg/dell4.jpg";
import imageUr5 from "../component/Laptopimg/dell5.jpg";
import imageUr7 from "../component/Laptopimg/dell6.jpg";
import imageUr8 from "../component/Laptopimg/dell7.jpg";
import imageUr9 from "../component/Laptopimg/dell8.jpg";
import imageUr10 from "../component/Laptopimg/dell9.jpg";
import Foot from "../component/Footer";

// import Show2 from '../component/Hp/Grid2';
// import Show3 from '../component/Hp/Grid3';
// import Show4 from '../component/Hp/Grid4';
// import Show5 from '../component/Hp/Grid5';

function Addhp(props) {
  return (
    <div>
      <Show
        title="Dell Inspiron 3000 "
        text="Dell Inspiron 3000 Series 3521 Business Laptop Computer [Windows 11 Pro], 15.6 HD Display, Intel Celeron N4020, 16GB RAM, 1TB PCIe SSD, Intel UHD Graphic, Numeric Keypad, Wi-Fi,"
        totalPrice={300}
        delllaps={imageUrl}
      />
      <Show
        title="Dell Inspiron 3515"
        text="Sponsored 
        Dell Inspiron 3515 Laptop, 15.6 HD Screen, AMD Ryzen 5 3450U Processor, 32GB RAM, 2TB PCIe SSD, Webcam, SD Card Reader, HDMI, Wi-Fi, Windows 11 Home, Carbon Black"
        totalPrice={500}
        delllaps={imageUr2}
      />
      <Show
        title="Dell 2022 Newest Vostro 5620"
        text="Dell 2022 Newest Vostro 5620 Business Laptop, 16 FHD Display, 12th Gen Intel Core i7-1260P, 32GB RAM, 1TB SSD, FHD Webcam, HDMI, Backlit Keyboard, Fingerprint Reader, Wi-Fi 6, Windows"
        totalPrice={406}
        delllaps={imageUr3}
      />
      <Show
        title="Dell Inspiron 15 3520 "
        text="Dell Inspiron 15 3520 Laptop - 15.6-inch FHD (1920x1080) 120Hz Display, Core i5-1235U Processor, 16GB DDR4 RAM, 512GB SSD, WiFi 6, Iris Xe Graphics, Win 11 Home - Carbon Black"
        totalPrice={450}
        delllaps={imageUr4}
      />
      <Show
        title="Fast Dell Latitude E5470"
        text="Fast Dell Latitude E5470 HD Business Laptop Notebook PC (Intel Core i5-6300U, 8GB Ram, 256GB Solid State SSD, HDMI, Camera, WiFi, SC Card Reader) Win 10 Pro (Renewed)"
        totalPrice={460}
        delllaps={imageUr5}
      />
      <Show
        title="Dell Inspiron 15 3000"
        text="Dell Inspiron 15 3000 Series 3511 Laptop, 15.6 FHD Touchscreen, Intel Core i5-1035G1, 32GB DDR4 RAM, 1TB PCIe SSD, SD Card"
        totalPrice={480}
        delllaps={imageUr10}
      />
      <Show
        title="Dell Latitude 7490"
        text="Dell Latitude 7490 Intel Core i7-8650U 16GB DDR4 RAM, 512GB SSD 14 FHD Windows 10 Pro Laptop (Renewed)"
        totalPrice={600}
        delllaps={imageUr7}
      />
      <Show
        title="Dell Latitude 7480"
        text="Dell Latitude 7480 Laptop - Intel Core i5-7300U CPU 2.60GHz, 16GB RAM, 256GB SSD, 14 HD Display, Webcam, Windows 10 Pro (Renewed)"
        totalPrice={500}
        delllaps={imageUr8}
      />
      <Show
        title="Dell Inspiron Laptop"
        text="Dell Inspiron Laptop, 15.6 HD Display, AMD Ryzen 5 3450U Processor, 32GB RAM, 1TB SSD, Webcam, HDMI, SD Card Reader, Wi-Fi, Windows 11 Home, Carbon Black"
        totalPrice={450}
        delllaps={imageUr9}
      />
      <Foot/>
    </div>
  );
}

export default Addhp;
