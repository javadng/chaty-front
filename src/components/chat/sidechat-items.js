const SideBarChatItem = props => {
  const isActiveClass = props.isActive
    ? 'bg-royal-yellow text-dark-c'
    : 'text-gray-400';

  return (
    <li
      data-name={props.name}
      onClick={props.onClick}
      className={`sidbar-item flex items-center p-2 my-2 rounded-xl cursor-pointer ${isActiveClass}`}
    >
      {props.children}
      {props.shown && (
        <span className="ml-3 sm:hidden block">{props.name}</span>
      )}
      <span className="ml-3 hidden sm:block">{props.name}</span>
    </li>
  );
};

export default SideBarChatItem;
