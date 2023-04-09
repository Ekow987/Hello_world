import React from "react";
import Lenovo from "../component/Leno/Grid";
import imageUrl from "../component/Laptopimg/leno1.jpg";
import imageUr2 from "../component/Laptopimg/leno2.jpg";
import imageUr3 from "../component/Laptopimg/leno3.jpg";
import imageUr5 from "../component/Laptopimg/leno4.jpg";
import imageUr7 from "../component/Laptopimg/leno5.jpg";
import imageUr8 from "../component/Laptopimg/leno7.jpg";
import imageUr9 from "../component/Laptopimg/leno8.jpg";
import imageUr10 from "../component/Laptopimg/leno9.jpg";
import Foot from "../component/Footer";
// import imageUr11 from "../component/Laptopimg/leno10.jpg";




function Addleno() {
  return (
    <div>
      <Lenovo title="Lenovo IdeaPad 3 Laptop" text="Lenovo IdeaPad 3 Laptop, 17.3 FHD IPS Display, AMD Ryzen 5 5625U Processor (Beats i7-1255U), Wi-Fi 6, Fingerprint" lenolap={imageUrl} totalPrice={589}  />

      <Lenovo title="Lenovo 15.6 IdeaPad 1 Laptop" text="Lenovo 15.6 IdeaPad 1 Laptop, AMD Dual-core Processor, 15.6 HD Anti-Glare Display, Wi-Fi 6 and Bluetooth 5.0, HDMI, Windows 11 Home in S Mode(20GB RAM | 1TB SSD)" lenolap={imageUr2} totalPrice={300} />
      <Lenovo title="Lenovo" text="Lenovo 2022 Newest Ideapad 3 Laptop, 15.6 HD Touchscreen, 11th Gen Intel Core i3-1115G4 Processor, 8GB DDR4 RAM, 256GB PCIe NVMe SSD, HDMI, Webcam, Wi-Fi 5, Bluetooth, Windows 11 Home, Almond" lenolap={imageUr3} totalPrice={383} />
      {/* <Lenovo title="Lenovo" text="New Brand" lenolap={imageUr4} totalPrice={400} /> */}
      <Lenovo title="Lenovo IdeaPad 15.6" text="Lenovo IdeaPad 15.6 Laptop Newest, 15.6 Inch HD Anti-Glare Display, AMD Dual-core Processor, 20GB RAM 1TB SSD, WiFi6" lenolap={imageUr5} totalPrice={399} />
      {/* <Lenovo title="Lenovo" text="New Brand" lenolap={imageUr6} totalPrice={300} /> */}
      <Lenovo title="Lenovo ThinkBook 15" text="Lenovo ThinkBook 15 Premium Business Laptop, AMD Ryzen 5 5500U Processor (6 Cores, 4.0GHz), 15.6 FHD IPS Anti-Glare Display, 12GB RAM, 512GB SSD, Backlit Keyboard, Fingerprint Reader," lenolap={imageUr7} totalPrice={576} />
      <Lenovo title="Lenovo Thinkpad Yoga" text="Lenovo Thinkpad Yoga 11e Laptop 11.6inch Touchscreen Convertible Ultrabook PC, Intel Quad Core Processor, 128GB Solid State Drive, 4GB DDR3 RAM, HD Webcam, LED, HDMI, Bluetooth, Windows 10 (Renewed)" lenolap={imageUr8} totalPrice={129} />
      <Lenovo title="Lenovo Chromebook" text="Lenovo Chromebook S330 14in Laptop Computer, Mediatek MT8173C up to 1.7 Ghz, 4GB RAM, 32GB eMMC SSD, Bluetooth, HDMI, USB-C, SD Card Reader, Chrome OS, Black (Renewed)" lenolap={imageUr9} totalPrice={40} />
      <Lenovo title="Lenovo Thinkpad T430 " text="Lenovo Thinkpad T430 Built Business Laptop Computer (Intel Dual Core i5 Up to 3.3 Ghz Processor, 8GB Memory, 320GB HDD, Webcam, DVD, Windows 10 Professional) (Renewed)"  lenolap={imageUr10} totalPrice={180} />
      <Foot/>
    </div>
  );
}

export default Addleno;
