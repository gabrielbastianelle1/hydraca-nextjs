export default function Button({ children, onClick }) {
    return (
        <button
            onClick={onClick}
            className="p-3 bg-colorButton rounded-xl text-white hover:bg-blue-800 active:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-300"
        >
            {children}
        </button>
    )
}
