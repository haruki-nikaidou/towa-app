import {For} from "solid-js";

interface RowPickerProps {
    rows: string[];
    onPick?: (row: string) => void;
}

export default function RowPicker(props: RowPickerProps) {
    return (
        <ol class="border bg-neutral-100 border-neutral-400 flex p-3 rounded-2xl flex-wrap items-center justify-center w-full min-h-20 gap-1">
            <For each={props.rows}>
                {(row) => (
                    <li class="block">
                        <button
                            class="bg-primary-flat text-primary py-2 px-4 rounded-lg outline-0 border border-primary border-opacity-0 duration-200 hover:border-opacity-100"
                            onClick={() => props.onPick?.(row)}
                        >
                            {row}
                        </button>
                    </li>
                )}
            </For>
        </ol>
    )
}