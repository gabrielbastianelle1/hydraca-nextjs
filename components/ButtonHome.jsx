export default function ButtonHome({ children, onClick }) {
    return (
        <button
            onClick={onClick}
            class="inline-block px-36 py-2.5   bg-colorButton text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
            {children}
        </button>
    )
}
