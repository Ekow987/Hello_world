import React from "react";
import Show from "../component/Apple/Grid";
import imageUrl from "../component/Laptopimg/mac1.jpg";
import imageUr2 from "../component/Laptopimg/mac2.jpg";
import imageUr3 from "../component/Laptopimg/mac3.jpg";
import imageUr4 from "../component/Laptopimg/mac4.jpg";
import imageUr5 from "../component/Laptopimg/mac5.jpg";
import imageUr7 from "../component/Laptopimg/mac6.jpg";
import imageUr8 from "../component/Laptopimg/mac7.jpg";
import imageUr9 from "../component/Laptopimg/mac8.jpg";
import imageUr10 from "../component/Laptopimg/mac9.jpg";
import Foot from "../component/Footer";

// import Show2 from '../component/Hp/Grid2';
// import Show3 from '../component/Hp/Grid3';
// import Show4 from '../component/Hp/Grid4';
// import Show5 from '../component/Hp/Grid5';

function Addhp(props) {
  return (
    <div>
      <Show
        title="Apple 2020 MacBook Air Laptop"
        text="Apple 2020 MacBook Air Laptop M1 Chip, 13 Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Gray"
        totalPrice={799}
        applelaps={imageUrl}
      />
      <Show
        title="Apple 2022 MacBook Air Laptop"
        text="Apple 2022 MacBook Air Laptop with M2 chip: 13.6-inch Liquid Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera. Works with iPhone and iPad; Space"
        totalPrice={509}
        applelaps={imageUr2}
      />
      <Show
        title="Late 2019 Apple MacBook Pro"
        text="Late 2019 Apple MacBook Pro Touch Bar with 2.4GHz Gen 8 Core Intel i9 (16 inches, 32GB RAM, 4GB RAM, 1TB SSD) Space Gray (Renewed)"
        totalPrice={1399}
        applelaps={imageUr3}
      />
      <Show
        title="Apple MacBook Pro"
        text="Apple MacBook Pro with Intel Core i5, 2.8GHz, (13.3-inches, 8GB, 512GB SSD) - Silver (Renewed)"
        totalPrice={495}
        applelaps={imageUr4}
      />
      <Show
        title="Apple 2021 MacBook Pro"
        text="Apple 2021 MacBook Pro (14-inch, M1 Pro chip with 10‑core CPU and 16‑core GPU, 16GB RAM, 1TB SSD) - Silver"
        totalPrice={1999}
        applelaps={imageUr5}
      />
      <Show
        title="Apple 15in MacBook Pro"
        text="Apple 15in MacBook Pro, Retina, Touch Bar, 2.9GHz Intel Core i7 Quad Core, 16GB RAM, 512GB SSD, Space Gray, MPTT2LL/A (Renewed)"
        totalPrice={300}
        applelaps={imageUr10}
      />
      <Show
        title="Apple 2022 MacBook Pro"
        text="Apple 2022 MacBook Pro Laptop with M2 chip: 13-inch Retina Display, 8GB RAM, 256GB ​​​​​​​SSD ​​​​​​​Storage, Touch Bar, Backlit Keyboard, FaceTime HD Camera. Works with iPhone and iPad; Silver"
        totalPrice={400}
        applelaps={imageUr7}
      />
      <Show
        title="Apple MacBook Air"
        text="Apple MacBook Air MJVE2LL/A 13-inch Laptop (1.6GHz Core i5,8GB RAM,128GB SSD) (Renewed)"
        totalPrice={450}
        applelaps={imageUr8}
      />
      <Show
        title="Late 2019 Apple MacBook Pro"
        text="Late 2019 Apple MacBook Pro Touch Bar with 2.4GHz Gen 8 Core Intel i9 (16 inches, 32GB RAM, 4GB RAM, 1TB SSD) Space Gray (Renewed)"
        totalPrice={480}
        applelaps={imageUr9}
      />
      <Foot/>
    </div>
  );
}

export default Addhp;
