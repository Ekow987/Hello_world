import React from "react";
import Show from "../component/Hp/Grid";
import imageUrl from "../component/Laptopimg/dims.jpg";
import imageUr2 from "../component/Laptopimg/envy.jpg";
import imageUr3 from "../component/Laptopimg/note.png";
import imageUr4 from "../component/Laptopimg/omen.jpg";
import imageUr5 from "../component/Laptopimg/stream.jpeg";
import imageUr7 from "../component/Laptopimg/hdtouch.jpg";
import imageUr8 from "../component/Laptopimg/intel.jpg";
import imageUr9 from "../component/Laptopimg/rosegold.jpg";
import imageUr10 from "../component/Laptopimg/thinlight.jpg";

// import Show2 from '../component/Hp/Grid2';
// import Show3 from '../component/Hp/Grid3';
// import Show4 from '../component/Hp/Grid4';
// import Show5 from '../component/Hp/Grid5';

function Addhp(props) {
  return (
    <div>
      <Show
        title="HP Pavillion"
        text="HP 2022 New 15 Laptop, 15.6 HD LED Display, Intel Dual-Core Processor, Intel UHD Graphics, 16GB DDR4 RAM, 1TB SSD, Ethernet Port, USB Type-C, Long Battery Life, Windows 11"
        totalPrice={479}
        hplaps={imageUrl}
      />
      <Show
        title="HP Envy"
        text="2022 Newest HP 14 FHD Laptop for Business and Student, AMD Ryzen3 3250U (Beat i5 7200U), 16GB RAM, 1TB SSD, Webcam, Wi-Fi, Bluetooth, HDMI, Fast Charge, Windows 11, ROKC Mousepad"
        totalPrice={509}
        hplaps={imageUr2}
      />
      <Show
        title="HP Note"
        text="HP 2022 New 15 Laptop, 15.6 HD LED Display, Intel Dual-Core Processor, Intel UHD Graphics, 16GB DDR4 RAM, 1TB SSD, Ethernet Port, USB Type-C, Long Battery Life, Windows 11"
        totalPrice={406}
        hplaps={imageUr3}
      />
      <Show
        title="HP Omen"
        text="HP Omen Laptop (2022 Model), 15.6 HD Display, Intel Celeron Quad-Core Processor, 16GB DDR4 RAM, 1TB SSD, Online Conferencing, Webcam, HDMI, WiFi, Bluetooth, Windows 11"
        totalPrice={509}
        hplaps={imageUr4}
      />
      <Show
        title="HP Stream"
        text="2022 Newest HP Stream 14in HD Laptop, Intel Celeron N4020(up to 2.8GHz), 8GB RAM, 128GB Space(64GB eMMC+ Card), 1-Year Office 365, WiFi, HDMI, USB-C, Webcam, Bluetooth, Windows 11S,Rose Gold+JVQ MP"
        totalPrice={3019}
        hplaps={imageUr5}
      />
      <Show
        title="HP Chromebook"
        text="HP 2022 Newest Chromebook 11.6 HD Thin Light Laptop Computer for Business Student, Intel Celeron N3350 Up to 2.4 GHz, 4GB Memory, 32GB eMMC,Webcam, USB-C, WiFi, Bluetooth,"
        totalPrice={300}
        hplaps={imageUr10}
      />
      <Show
        title="HP Touch screen"
        text="HP 2022 Newest Touch-Screen Laptops for College Student & Business, 15.6 inch HD Computer, Intel 11th Core i5-1135G7, 32GB RAM, 1TB SSD, Fast Charge, HDMI, Webcam, Wi-Fi, Windows 11,"
        totalPrice={400}
        hplaps={imageUr7}
      />
      <Show
        title="HP Flagship"
        text="HP 2022 Flagship 15.6 HD Touchscreen IPS Laptop, 4-Core i5-1135G7(Up to 4.2GHz, Beat i7-1060G7), 16GB RAM, 1TBGB PCIe SSD, Iris Xe Graphics, Bluetooth, WiFi, Windows 11 Home"
        totalPrice={90}
        hplaps={imageUr8}
      />
      <Show
        title="HP Premium "
        text="2022 HP Premium 14-inch HD Thin and Light Laptop, Intel Quad-Core Processor, 16GB RAM, 64GB Storage, Long Battery Life, Webcam, Bluetooth, HDMI, Wi-Fi, Rose Gold, Windows 11 + 1 Year"
        totalPrice={90}
        hplaps={imageUr9}
      />
    </div>
  );
}

export default Addhp;
