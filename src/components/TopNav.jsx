import data from "../assets/data.json"

const TopNav = () => {

  const { topNav } = data;

  const { menuIcon, logo, search, help, create } = topNav

  return (
    <div className="shadow-md p-[5px] px-[20px] grid grid-cols-4 items-center justify-between">
      {/* Left */}
      <div className="flex items-center  gap-[20px]">
        <div className="size-[44px]" dangerouslySetInnerHTML={{ __html: menuIcon }} />
        <img width={97} src={logo} alt="" />
      </div>


      {/* MIddle */}
      <div className="col-span-2">
        <div className="size-[30px] absolute z-[1] top-[18px] left-[390px]" dangerouslySetInnerHTML={{ __html: search?.icon }} />
        <input className="w-[655px] rounded-3xl bg-slate-200 p-[5px] ps-[50px] px-[20px] border-[2px] relative" type="search" name="search" id="" placeholder={search?.placeholder} />
      </div>

      {/* End */}
      <div className="ps-[20] flex items-center gap-[20px]">
        <div className="size-[30px]" dangerouslySetInnerHTML={{ __html: help }} />
        <div className="flex items-center gap-[3px] border rounded-3xl p-[2px] px-[9px]">
          <div className="size-[30px]" dangerouslySetInnerHTML={{ __html: create?.icon }} />
          <p className="">{create?.label}</p>
        </div>

        <div className="flex items-center gap-[10px] border rounded-xl p-[2px] px-[9px]">
          <img className="rounded-full w-[32px] mx-auto" src={data?.channel?.thumbnail} alt="thumbnail" />
          <div>
          <p className="">{data?.channel?.label}</p>
          <p className="text-gray-500">{data?.channel?.name}</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default TopNav;