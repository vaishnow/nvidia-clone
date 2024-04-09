type Lists = {
  listhead: string;
  listitems: {
    name: string;
    url: string;
  }[];
}[];

interface Props {
  className?: string;
  data?: Lists;
}

export default function DropDown({ className, data }: Props) {
  return (
    <div
      className={`w-full lg:absolute left-0 bg-nv-light shadow-inner lg:flex top-full text-sm ${className}`}
    >
      {data?.map((item, index) => (
        <div key={index} className="w-full p-4">
          <h1 className="font-semibold text-black text-nowrap">
            {item.listhead}
          </h1>
          <hr className="shadow border-slate-400 my-3" />
          <ul className="flex flex-col flex-wrap max-h-full">
            {item.listitems?.map((li, index) => (
              <li key={index} className="max-w-64 py-1">
                <a href={li.url}>{li.name}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
