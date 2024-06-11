import Image from "next/image";
import { Social } from "@/components/Social";
import { PositionStat } from "@/components/PositionStat";

export default () => {  
  return (
    <>
      <div className="flex flex-col justify-center max-lg:w-auto h-screen">
        <div className="flex flex-col w-full items-center justify-center">
          <div className="flex flex-row w-full max-lg:flex-col gap-5 items-center justify-center">
            <div className="flex w-full justify-center">
              <Image
                id="profile-phum"
                className="drop-shadow-md object-cover rounded-lg"
                src="https://lh3.googleusercontent.com/pw/AP1GczN6Ck6e1M4TKvAak4EWnuZGepYiAXbT2JsmhdnnS0pfUmTa6C8xAeF1qVQoeBIrutRfr1_JCVKNQfIsoFf2Eadh9fNSFytWdNMMnlMlEwiJIZuvK7BDUnlhA7vWDg3lgVDdI-22m3nUHf-iZWWUViKHlHr-_6eikBV8mpotmqI19jL6DvMjmV1oMSpa9QTUNN5jn93sbd1vACI6Ezs15zzFgYJgNtZ5tS1XRPhdS04TB8tJbb3AkFin_y3mHYqtp0DnB45CMVGgkrmUBRMK8m16b035HksMBoWtPfmaZT0LkDjjvGTpyyxduIof02KRSwjmTwE1DThfPcXnFpA6sVMoC6LgVOwha-ZQTiGK5l4Bmp4IljM2Cs2ilI3Zlphh5yxlNeA6CBydWlq8SuzKo8_bMW8VmoxNcGi7aBAIGD-OHHXxfK9cUZN9vr4RUdTw-_sNanaaXqcgJjRepplQOeKXfdS0RF0wSWb_ALvti1iWzuHaYsTSEeLmtR1NiotHgOaDFFsuaAgfnKd1COwLVh5P3DIWT5Qk_dwowe670hu2fCcuSiV2g5RMUinRoxGoq0amBZen5ynrRLxXhTpz8b3w37no2xXUzKxDY8gR5mJai4UzOcTRcyfuA9ubPh75-iSJ9raG3sbhqPYJqhKxbwW6HXi4WhoMrH9lNp528QLS1mnys6_vM1zH4rbNwYUeSXQnw7xpRQcUF5Cve45lEj8j5avlhZS5JfyVnrIHKlCxBF_-xSB2S82c0B3UsbMDFjqNVDIeYmiI36HoO2U5VJNhqUeGwwRQNCF_IpRZeFy1xyHDbLVD33hUmnwB27erv8jxljXSffcHCH7ahJTbzVIlCGSM0eg57dZJY8Y20PIWJJFIcaXqegpTilSeDnvemdZjebuSjs4FmE31h6kOJJ8BrNCu5qFwaMEzyCLQevS-OfjkUEFYQorpcelsfd4gKZGHZYGo7UGUZtRy6a4quPSokQRggtNVzw=w729-h911-s-no-gm?authuser=0"
                alt="Bancha Suphi"
                width={288}
                height={288}
              />
            </div>

            <div className="flex flex-col w-full justify-center max-lg:items-center">
              <span className="font-bold lg:text-2xl text-xl text-gray-700">HELLO I'M</span>
              <span className="font-bold lg:text-6xl text-3xl tracking-[-0.05em]">BANCHA</span>
              <span className="font-bold lg:text-6xl text-3xl tracking-[-0.05em]">SUPHI</span>
              <PositionStat />
              <Social />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
