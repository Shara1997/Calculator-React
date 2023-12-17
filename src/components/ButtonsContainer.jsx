import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onButtonClick, buttonText }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.btnContainer}>
      {buttonNames.map((buttons) => (
        <button
          className={styles.button}
          onClick={() => onButtonClick(buttons)}
        >
          {buttons}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
