interface Props {
  footerList: {
    title: string;
    links: { name: string; url: string }[];
  };
}

export default function FooterInfo({ footerList: { title, links } }: Props) {
  return (
    <div>
      <h1 className="font-bold text-2xl">{title}</h1>
      <hr className="border-nv-gray my-4" />
      <ul className="text-nv-green max-sm:flex flex-wrap">
        {links.map((item) => (
          <li key={item.name} className="mb-3 max-sm:mx-3">
            <a href={item.url} target="_blank" rel="noopener noreferrer">{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
