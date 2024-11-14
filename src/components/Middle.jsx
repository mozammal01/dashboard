import data from "../assets/data.json"

const Middle = () => {
  console.log(data);
  const { mainTop , overviewHeader} = data;
  const { title, tabs, timePicker } = mainTop

  const {title: header, subtitle} = overviewHeader;

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
        <div className="col-span-3 border-[2px] m-[15px] rounded-xl">Main Right</div>

      </div>
    </div>
  );
};

export default Middle;