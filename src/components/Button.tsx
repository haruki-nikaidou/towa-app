import type {JSX} from "solid-js";

interface ButtonProps {
    children: JSX.Element | string;
    onClick?: () => void;
}

export default function Button(props: ButtonProps) {
    return(
        <button onClick={props.onClick} class="flat-button">
            {props.children}
        </button>
    );
}