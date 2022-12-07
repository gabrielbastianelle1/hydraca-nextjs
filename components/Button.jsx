export default function Button({ children, onClick }) {
    return (
        <button
            onClick={onClick}
            className="p-3 bg-colorButton rounded-xl text-white"
        >
            {children}
        </button>
    )
}
