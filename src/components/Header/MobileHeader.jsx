const MobileHeader = ({ isOpen, onClose, items }) => {
  return (
    <div
      className={`md:hidden glass-effect py-4 px-6 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="flex flex-col space-y-4">
        {items.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-white hover:text-orange-400 transition-colors font-medium"
            onClick={onClose}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileHeader;
