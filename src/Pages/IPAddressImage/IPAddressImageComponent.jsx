import IPImages from "../../utils/IPImages";

const IPAddressImageComponent = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-[1rem]">
        {IPImages.map((data) => {
          const { id, image } = data;
          return <img src={image} alt="" key={id} />;
        })}
      </div>
    </>
  );
};

export default IPAddressImageComponent;
