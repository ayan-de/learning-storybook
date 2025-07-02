import '../stories/search.css';

export interface SearchProps {
    logo?: boolean;
    placeholder?: string;
    size?: "small" | "medium" | "large";
    backgroundColor?: string;
}

export const Search = ({
    logo = true,
    placeholder = "Search tasks...",
    size = "medium",
    backgroundColor,
    ...props
}: SearchProps) => {
    const baseClass = `search--${size}`;
    const logoClass = logo ? '' : `${baseClass}--nologo`;

    return (
        <input
            className={[baseClass, logoClass].filter(Boolean).join(' ')}
            type="search"
            placeholder={placeholder}
            style={{ backgroundColor }}
            {...props}
        />
    );
};
