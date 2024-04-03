import links from "@/data/footer-links.json";

export default function footerLinks() {
  return (
    <>
      {links.map((item, index) => (
        <>
          <a href={item.url}>{item.name}</a> {index < links.length - 1 && " | "}
        </>
      ))}
    </>
  );
}
