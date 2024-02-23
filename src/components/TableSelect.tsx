import {For} from "solid-js";

export interface TableItem {
    name: string;
}

export interface TableSelectProps {
    items: TableItem[];
    selected: number;
    onSelect?: (item: number) => void;
}

export default function TableSelect(props: TableSelectProps) {
    return (
        <ul class="bg-neutral-200 p-3 space-y-1 rounded-2xl flex items-center justify-center gap-3 flex-wrap">
            <For each={props.items}>
                {(item, index) => (
                    <li class="block h-full">
                        <button
                            classList={{
                                "bg-primary-flat": index() === props.selected,
                                "text-primary": index() === props.selected,
                                "bg-neutral-100": index() !== props.selected,
                                "text-neutral-900": index() !== props.selected,
                                "border-primary": index() === props.selected,
                                "w-full": true,
                                "text-left": true,
                                "py-2": true,
                                "px-4": true,
                                "rounded-full": true,
                                "border": true,
                                "duration-200": true,
                                "hover:border-primary": index() !== props.selected,
                            }}
                            onClick={() => props.onSelect?.(index())}
                        >
                            {item.name}
                        </button>
                    </li>
                )}
            </For>
        </ul>
    )
}