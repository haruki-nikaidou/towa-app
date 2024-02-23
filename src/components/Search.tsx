import {createSignal} from "solid-js";

export interface SearchProps {
    onSearch?: (value: string) => void;
}

export default function Search(props: SearchProps) {
    const [search, setSearch] = createSignal("");
    return (
        <div class="flex items-center w-full rounded-l-full p-0.5 rounded-r-full border-neutral-400 border">
            <input
                type="text"
                value={search()}
                class="py-2 px-4 rounded-l-full h-full flex-1 block outline-0 bg-neutral-200"
                onInput={(e) => {setSearch(e.currentTarget.value)}}
            />
            <button
                class="hover:border-primary border-primary-flat inline border-2 duration-200 bg-primary-flat text-primary py-2 px-3 rounded-r-full h-full"
                onClick={() => props.onSearch?.("")}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </button>
        </div>
    );
}
