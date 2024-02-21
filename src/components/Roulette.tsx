import {Index, Show} from "solid-js";
import Button from "./Button.tsx";

interface RouletteProps {
    value: number;
    label?: string;
    onValueChange?: (value: number) => void;
}

export default function Roulette(props: RouletteProps) {
    const range = () => {
        return [props.value - 2, props.value - 1, props.value, props.value + 1, props.value + 2]
    }
    return (
        <div class="border-y p-2 bg-neutral-100 rounded-full">
            <label class="block text-center">
                Roulette {props.label}
            </label>
            <ul class="flex justify-center mt-2 gap-2 items-center">
                <li>
                    <Button
                        onClick={() => props.onValueChange?.(props.value - 1)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"/>
                        </svg>
                    </Button>
                </li>
                <Index each={range()}>
                    {(value,) => (
                        <li>
                            <Show
                                when={value() !== props.value}
                                fallback={
                                    <span class="h-full text-primary border-primary py-2 px-4 rounded-xl outline-0">
                                        {value()}
                                    </span>
                                }
                            >
                                <Button
                                    onClick={() => props.onValueChange?.(value())}
                                >
                                    {value()}
                                </Button>
                            </Show>
                        </li>
                    )}
                </Index>
                <li>
                    <Button
                        onClick={() => props.onValueChange?.(props.value + 1)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
                        </svg>
                    </Button>
                </li>
            </ul>
        </div>
    );
}