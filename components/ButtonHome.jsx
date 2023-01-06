export default function ButtonHome({ children, onClick }) {
    return (
        <button
            onClick={onClick}
            class="inline-block w-full p-3  lg:w-64  bg-colorButton text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-900 hover:shadow-lg focus:bg-blue-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition rounded-l duration-150 ease-in-out"
        >
            {children}
        </button>
    )
}
