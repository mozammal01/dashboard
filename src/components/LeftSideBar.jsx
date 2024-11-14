import data from "../assets/data.json"

const LeftSideBar = () => {

  console.log(data);

  const { leftNavOpen, sidebarLinks, channel, bottomLinks } = data


  return (
    <div className="p-[20px] text-center">
      {
        leftNavOpen &&
        // Channel
        <div>

          <div className="my-[6px] mb-[20px] space-y-[5px]">
            <div className="">
              <img className="rounded-full w-[112px] mx-auto" src={channel?.thumbnail} alt="thumbnail" />
            </div>
            <p className="font-bold text-lg">{channel?.label}</p>
            <p className="text-gray-500">{channel?.name}</p>
          </div>

          {/* Side links */}
          {
            sidebarLinks?.map((links, i) => (
              <div key={i} className="flex items-center gap-[8px] p-[10px]">
                <div className="size-[24px]" dangerouslySetInnerHTML={{ __html: links?.icon }} />
                <p>{links?.label}</p>
              </div>
            ))
          }

          <div className="mt-[20px]">
            {/* Bottom Links */}
            {
              bottomLinks?.map((links, i) => (
                <div key={i} className="flex items-center gap-[8px] p-[10px]">
                  <div className="size-[24px]" dangerouslySetInnerHTML={{ __html: links?.icon }} />
                  <p>{links?.label}</p>
                </div>
              ))
            }
          </div>

        </div>
      }


    </div>
  );
};

export default LeftSideBar;