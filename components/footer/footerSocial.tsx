import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export default function footerSocial() {
  const size="size-6 mx-2"
  const socials = [
    {
      url: "https://www.facebook.com/NVIDIA",
      reactIconName: <FaFacebookF className={size}/>,
    },
    {
      url: "https://www.instagram.com/nvidia/?hl=en",
      reactIconName: <FaInstagram className={size}/>,
    },
    {
      url: "https://www.linkedin.com/company/nvidia/",
      reactIconName: <FaLinkedinIn className={size}/>,
    },
    {
      url: "https://twitter.com/nvidia",
      reactIconName: <FaXTwitter className={size}/>,
    },
    {
      url: "https://www.youtube.com/user/nvidia",
      reactIconName: <FaYoutube className={size}/>,
    },
  ];

  return (
    <div className="flex">
      {socials.map((item) => (
        <a href={item.url} key={item.url}> {item.reactIconName}</a>
      ))}
    </div>
  );
}
