import {Show} from "solid-js";

interface InputProps {
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    label?: string;
    type: 'text' | 'password';
    errorMessage?: string;
}

export default function Input(props: InputProps) {
    return (
        <div>
            <input
                aria-label={props.label}
                value={props.value}
                onChange={(e) => props.onChange && props.onChange(e.target.value)}
                placeholder={props.placeholder}
                type={props.type}
                class="border border-gray-300 rounded-xl w-full p-3 outline-none focus:border-primary hover:border-primary transition duration-200 bg-white placeholder:text-neutral-400"
            />
            <Show when={props.errorMessage}>
                <p class="text-red-500 text-sm">{props.errorMessage}</p>
            </Show>
        </div>
    );

}