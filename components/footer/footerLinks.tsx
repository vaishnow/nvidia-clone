import links from "@/data/footer-links.json";

export default function footerLinks() {
  return (
    <>
      {links.map((item, index) => (
        <div key={item.name} className="flex">
            <a href={item.url} className="whitespace-nowrap me-1">{item.name}</a>
            {index < links.length - 1 && "|"}
        </div>
      ))}
    </>
  );
}
