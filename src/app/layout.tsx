import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Webring } from "@/components/Webring";
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Bancha Suphi',
  description: ``,
  images: [
    {
      url: 'https://lh3.googleusercontent.com/pw/AP1GczN6Ck6e1M4TKvAak4EWnuZGepYiAXbT2JsmhdnnS0pfUmTa6C8xAeF1qVQoeBIrutRfr1_JCVKNQfIsoFf2Eadh9fNSFytWdNMMnlMlEwiJIZuvK7BDUnlhA7vWDg3lgVDdI-22m3nUHf-iZWWUViKHlHr-_6eikBV8mpotmqI19jL6DvMjmV1oMSpa9QTUNN5jn93sbd1vACI6Ezs15zzFgYJgNtZ5tS1XRPhdS04TB8tJbb3AkFin_y3mHYqtp0DnB45CMVGgkrmUBRMK8m16b035HksMBoWtPfmaZT0LkDjjvGTpyyxduIof02KRSwjmTwE1DThfPcXnFpA6sVMoC6LgVOwha-ZQTiGK5l4Bmp4IljM2Cs2ilI3Zlphh5yxlNeA6CBydWlq8SuzKo8_bMW8VmoxNcGi7aBAIGD-OHHXxfK9cUZN9vr4RUdTw-_sNanaaXqcgJjRepplQOeKXfdS0RF0wSWb_ALvti1iWzuHaYsTSEeLmtR1NiotHgOaDFFsuaAgfnKd1COwLVh5P3DIWT5Qk_dwowe670hu2fCcuSiV2g5RMUinRoxGoq0amBZen5ynrRLxXhTpz8b3w37no2xXUzKxDY8gR5mJai4UzOcTRcyfuA9ubPh75-iSJ9raG3sbhqPYJqhKxbwW6HXi4WhoMrH9lNp528QLS1mnys6_vM1zH4rbNwYUeSXQnw7xpRQcUF5Cve45lEj8j5avlhZS5JfyVnrIHKlCxBF_-xSB2S82c0B3UsbMDFjqNVDIeYmiI36HoO2U5VJNhqUeGwwRQNCF_IpRZeFy1xyHDbLVD33hUmnwB27erv8jxljXSffcHCH7ahJTbzVIlCGSM0eg57dZJY8Y20PIWJJFIcaXqegpTilSeDnvemdZjebuSjs4FmE31h6kOJJ8BrNCu5qFwaMEzyCLQevS-OfjkUEFYQorpcelsfd4gKZGHZYGo7UGUZtRy6a4quPSokQRggtNVzw=w729-h911-s-no-gm?authuser=0',
      width: 800,
      height: 600,
    },
    {
      url: 'https://lh3.googleusercontent.com/pw/AP1GczN6Ck6e1M4TKvAak4EWnuZGepYiAXbT2JsmhdnnS0pfUmTa6C8xAeF1qVQoeBIrutRfr1_JCVKNQfIsoFf2Eadh9fNSFytWdNMMnlMlEwiJIZuvK7BDUnlhA7vWDg3lgVDdI-22m3nUHf-iZWWUViKHlHr-_6eikBV8mpotmqI19jL6DvMjmV1oMSpa9QTUNN5jn93sbd1vACI6Ezs15zzFgYJgNtZ5tS1XRPhdS04TB8tJbb3AkFin_y3mHYqtp0DnB45CMVGgkrmUBRMK8m16b035HksMBoWtPfmaZT0LkDjjvGTpyyxduIof02KRSwjmTwE1DThfPcXnFpA6sVMoC6LgVOwha-ZQTiGK5l4Bmp4IljM2Cs2ilI3Zlphh5yxlNeA6CBydWlq8SuzKo8_bMW8VmoxNcGi7aBAIGD-OHHXxfK9cUZN9vr4RUdTw-_sNanaaXqcgJjRepplQOeKXfdS0RF0wSWb_ALvti1iWzuHaYsTSEeLmtR1NiotHgOaDFFsuaAgfnKd1COwLVh5P3DIWT5Qk_dwowe670hu2fCcuSiV2g5RMUinRoxGoq0amBZen5ynrRLxXhTpz8b3w37no2xXUzKxDY8gR5mJai4UzOcTRcyfuA9ubPh75-iSJ9raG3sbhqPYJqhKxbwW6HXi4WhoMrH9lNp528QLS1mnys6_vM1zH4rbNwYUeSXQnw7xpRQcUF5Cve45lEj8j5avlhZS5JfyVnrIHKlCxBF_-xSB2S82c0B3UsbMDFjqNVDIeYmiI36HoO2U5VJNhqUeGwwRQNCF_IpRZeFy1xyHDbLVD33hUmnwB27erv8jxljXSffcHCH7ahJTbzVIlCGSM0eg57dZJY8Y20PIWJJFIcaXqegpTilSeDnvemdZjebuSjs4FmE31h6kOJJ8BrNCu5qFwaMEzyCLQevS-OfjkUEFYQorpcelsfd4gKZGHZYGo7UGUZtRy6a4quPSokQRggtNVzw=w729-h911-s-no-gm?authuser=0',
      width: 1800,
      height: 1600,
      alt: 'Bancha Suphi',
    },
  ],
  openGraph: {
    title: 'Bancha Suphi',
    description: ``,
    url: 'https://krypton-2rx1.onrender.com/',
    images: [
      {
        url: 'https://lh3.googleusercontent.com/pw/AP1GczN6Ck6e1M4TKvAak4EWnuZGepYiAXbT2JsmhdnnS0pfUmTa6C8xAeF1qVQoeBIrutRfr1_JCVKNQfIsoFf2Eadh9fNSFytWdNMMnlMlEwiJIZuvK7BDUnlhA7vWDg3lgVDdI-22m3nUHf-iZWWUViKHlHr-_6eikBV8mpotmqI19jL6DvMjmV1oMSpa9QTUNN5jn93sbd1vACI6Ezs15zzFgYJgNtZ5tS1XRPhdS04TB8tJbb3AkFin_y3mHYqtp0DnB45CMVGgkrmUBRMK8m16b035HksMBoWtPfmaZT0LkDjjvGTpyyxduIof02KRSwjmTwE1DThfPcXnFpA6sVMoC6LgVOwha-ZQTiGK5l4Bmp4IljM2Cs2ilI3Zlphh5yxlNeA6CBydWlq8SuzKo8_bMW8VmoxNcGi7aBAIGD-OHHXxfK9cUZN9vr4RUdTw-_sNanaaXqcgJjRepplQOeKXfdS0RF0wSWb_ALvti1iWzuHaYsTSEeLmtR1NiotHgOaDFFsuaAgfnKd1COwLVh5P3DIWT5Qk_dwowe670hu2fCcuSiV2g5RMUinRoxGoq0amBZen5ynrRLxXhTpz8b3w37no2xXUzKxDY8gR5mJai4UzOcTRcyfuA9ubPh75-iSJ9raG3sbhqPYJqhKxbwW6HXi4WhoMrH9lNp528QLS1mnys6_vM1zH4rbNwYUeSXQnw7xpRQcUF5Cve45lEj8j5avlhZS5JfyVnrIHKlCxBF_-xSB2S82c0B3UsbMDFjqNVDIeYmiI36HoO2U5VJNhqUeGwwRQNCF_IpRZeFy1xyHDbLVD33hUmnwB27erv8jxljXSffcHCH7ahJTbzVIlCGSM0eg57dZJY8Y20PIWJJFIcaXqegpTilSeDnvemdZjebuSjs4FmE31h6kOJJ8BrNCu5qFwaMEzyCLQevS-OfjkUEFYQorpcelsfd4gKZGHZYGo7UGUZtRy6a4quPSokQRggtNVzw=w729-h911-s-no-gm?authuser=0',
        width: 800,
        height: 600,
      },
      {
        url: 'https://lh3.googleusercontent.com/pw/AP1GczN6Ck6e1M4TKvAak4EWnuZGepYiAXbT2JsmhdnnS0pfUmTa6C8xAeF1qVQoeBIrutRfr1_JCVKNQfIsoFf2Eadh9fNSFytWdNMMnlMlEwiJIZuvK7BDUnlhA7vWDg3lgVDdI-22m3nUHf-iZWWUViKHlHr-_6eikBV8mpotmqI19jL6DvMjmV1oMSpa9QTUNN5jn93sbd1vACI6Ezs15zzFgYJgNtZ5tS1XRPhdS04TB8tJbb3AkFin_y3mHYqtp0DnB45CMVGgkrmUBRMK8m16b035HksMBoWtPfmaZT0LkDjjvGTpyyxduIof02KRSwjmTwE1DThfPcXnFpA6sVMoC6LgVOwha-ZQTiGK5l4Bmp4IljM2Cs2ilI3Zlphh5yxlNeA6CBydWlq8SuzKo8_bMW8VmoxNcGi7aBAIGD-OHHXxfK9cUZN9vr4RUdTw-_sNanaaXqcgJjRepplQOeKXfdS0RF0wSWb_ALvti1iWzuHaYsTSEeLmtR1NiotHgOaDFFsuaAgfnKd1COwLVh5P3DIWT5Qk_dwowe670hu2fCcuSiV2g5RMUinRoxGoq0amBZen5ynrRLxXhTpz8b3w37no2xXUzKxDY8gR5mJai4UzOcTRcyfuA9ubPh75-iSJ9raG3sbhqPYJqhKxbwW6HXi4WhoMrH9lNp528QLS1mnys6_vM1zH4rbNwYUeSXQnw7xpRQcUF5Cve45lEj8j5avlhZS5JfyVnrIHKlCxBF_-xSB2S82c0B3UsbMDFjqNVDIeYmiI36HoO2U5VJNhqUeGwwRQNCF_IpRZeFy1xyHDbLVD33hUmnwB27erv8jxljXSffcHCH7ahJTbzVIlCGSM0eg57dZJY8Y20PIWJJFIcaXqegpTilSeDnvemdZjebuSjs4FmE31h6kOJJ8BrNCu5qFwaMEzyCLQevS-OfjkUEFYQorpcelsfd4gKZGHZYGo7UGUZtRy6a4quPSokQRggtNVzw=w729-h911-s-no-gm?authuser=0',
        width: 1800,
        height: 1600,
        alt: 'Bancha Suphi',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body className={inter.className}>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <Webring />
        <Navbar />
        <div className="flex justify-center">
          <div className="container px-5">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
