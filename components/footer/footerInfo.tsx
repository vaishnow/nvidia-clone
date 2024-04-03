interface Props {
  footerList: {
    title: string;
    links: { name: string; url: string }[];
  };
}

export default function FooterInfo({ footerList: { title, links } }: Props) {
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {links.map((item) => (
          <li key={item.name}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
