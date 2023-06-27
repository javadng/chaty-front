const DiamondContainer = props => {
  return (
    <div className="flex justify-center items-center h-48">
      <div className="w-48 h-48 transform rotate-45 p-7 bg-slate-200 bg-opacity-25">
        {props.children}
      </div>
    </div>
  );
};

export default DiamondContainer;
