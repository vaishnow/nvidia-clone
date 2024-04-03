import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export default function footerSocial() {
  const socials = [
    {
      url: "https://www.facebook.com/NVIDIA",
      reactIconName: <FaFacebookF />,
    },
    {
      url: "https://www.instagram.com/nvidia/?hl=en",
      reactIconName: <FaInstagram />,
    },
    {
      url: "https://www.linkedin.com/company/nvidia/",
      reactIconName: <FaLinkedinIn />,
    },
    {
      url: "https://twitter.com/nvidia",
      reactIconName: <FaXTwitter />,
    },
    {
      url: "https://www.youtube.com/user/nvidia",
      reactIconName: <FaYoutube />,
    },
  ];

  return (
    <>
      {socials.map((item) => (
        <a href={item.url}> {item.reactIconName}</a>
      ))}
    </>
  );
}
