import data from "../assets/data.json"

const Middle = () => {
  console.log(data);
  const { mainTop, overviewHeader, rightCard } = data;
  const { title, tabs, timePicker } = mainTop

  const { title: header, subtitle } = overviewHeader;

  return (
    <div className="py-[40px]">

      {/* Top */}
      <div className="border-b-[2px] px-[40px] flex items-center justify-between">
        {/* Left */}
        <div>
          <h1 className="text-3xl font-medium">{title}</h1>
          <div className="flex gap-[30px] mt-[40px]">
            {tabs.map((tab, i) => <p key={i} className={tabs[0] === tab ? 'font-bold pb-[15px] border-b-[3px] border-black' : ''}>{tab}</p>)}
          </div>
        </div>

        {/* Right */}
        <div>
          <div />

          <div className="flex items-center justify-between gap-[80px]">
            <div>
              <p>{timePicker?.label}</p>
              <p>{timePicker?.value}</p>
            </div>
            <div className="size-[24px]" dangerouslySetInnerHTML={{ __html: timePicker?.icon }} />
          </div>

        </div>

      </div>

      {/* Main */}
      <div className="grid grid-cols-12">

        {/* Left  */}
        <div className="col-span-9">
          <div className="text-center my-[20px] space-y-5">
            <h1 className="text-4xl font-bold">{header.main}</h1>
            <p>{subtitle.main}</p>
          </div>
        </div>

        {/* Right */}
        <div className="col-span-3 border-[2px] m-[15px] rounded-xl p-[15px]">
          <div>

            <h4 className="text-2xl font-semibold">{rightCard?.title}</h4>
            <div className="flex items-center gap-[4px] mb-[20px]">
              <div className="size-[10px] rounded-full bg-[#2FA5CB] " />
              <h4>{rightCard?.subtitle}</h4>
            </div>
          </div>
          <hr />


          <div className="my-[10px]">
            <h4 className="text-2xl font-semibold">{rightCard?.subscribers?.value}</h4>
            <div className="flex items-center gap-[4px] mb-[20px]">
              <h4>{rightCard?.subscribers?.label}</h4>
            </div>
          </div>
          <hr />

          <div className="my-[10px]">
            <h4 className="text-2xl font-semibold">{rightCard?.views?.value}</h4>
            <div className="flex items-center gap-[4px] mb-[20px]">
              <h4>{rightCard?.views?.label}</h4>
            </div>
          </div>

          <div>
            <div className="my-[20px] flex justify-between">
              <h4 className="">{rightCard?.topContent?.label1}</h4>
              <h4 className="">{rightCard?.topContent?.label2}</h4>
            </div>
            <div className="">
              {
                rightCard?.topContent?.items.map((item, i) => 
                  <div className="flex gap-[10px] mb-[10px] justify-between" key={i}>
                    <img className="w-[68px] rounded-xl" src={item?.thumbnail} alt="" />
                    <p className="max-w-[150px] truncate">{item?.title}</p>
                    <p>{item?.views}</p>
                  </div>
                )
              }
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Middle;