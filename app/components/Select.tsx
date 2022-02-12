import React from "react";

interface Option {
  value: string;
  text: string;
}

interface TypeSelect {
  options: Option[];
  handleSelect?: (option: Option) => void;
  title: string;
}
export default function Select(props: TypeSelect) {
  const { options, handleSelect, title } = props;
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [currentOption, setCurrentOption] = React.useState<Option>(options[0]);

  const handleSelectOption = (option: Option) => {
    setCurrentOption(option);
    handleSelect && handleSelect(option);
    // setIsOpen(false);
  };

  return (
    <div className="flex justify-center relative">
      <span
        className="sr-only"
        id={title}
      >{`${title} ${currentOption.text}`}</span>
      <button
        className="bg-app-rhino py-1 px-4 min-w-[220px] h-[72px] rounded-md text-white font-[14px] flex justify-center items-center"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-labelledby={title}
      >
        <div className="flex">
          <div>{title} :</div>
          <span className="font-bold ml-2 tracking-wide">
            {currentOption.text}
          </span>
        </div>
      </button>
      {isOpen && (
        <div className="absolute bottom-[-250px] shadow-lg min-w-[255px] rounded-md">
          <ul className="divide-y divide-solid" role="listbox">
            {options.map((option) => (
              <li
                key={`${option.value}`}
                className="text-app-lynch p-4 font-[16px]"
                onClick={() => handleSelectOption(option)}
                role="option"
              >
                <button className="w-full text-left ml-4">
                  <div className="flex justify-between">
                    <span className="tracking-wide">{option.text}</span>
                    {option.value === currentOption.value && (
                      <img
                        src="./assets/icon-check.svg"
                        className="w-[15px] h-[15px] mr-4"
                      />
                    )}
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
