import "../stories/button.css";
import searchIcon from '../images/search.svg';

export interface ButtonProps {
    /** Is this the principal call to action on the page? */
    primary?: boolean;
    /** What background color to use */
    backgroundColor?: string;
    /** How large should the button be? */
    size?: "small" | "medium" | "large";
    /** Button contents */
    label: string;

    icon?: boolean;
    /** Optional click handler */
    onClick?: () => void;
}

export const Button = ({
    primary = true,
    size = "medium",
    backgroundColor,
    label = "Change this text",
    icon = true,
    onClick,
    ...props
}: ButtonProps) => {
    const mode = primary
        ? "storybook-button--primary"
        : "storybook-button--secondary";
const classes = ["storybook-button", `storybook-button--${size}`, mode].join(" ");

    return (
        <button
            type="button"
            className={classes}
            style={{ backgroundColor }}
            onClick={onClick}
            {...props}
        >
            {icon && <img src={searchIcon} alt="" className="storybook-button-icon" />}
            {label}
        </button>
    );
};
