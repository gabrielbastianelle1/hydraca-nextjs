export default function Button({ children, onClick }) {
    return (
        <button
            onClick={onClick}
            className="mt-5 p-3 bg-colorButton rounded-xl text-white"
        >
            {children}
        </button>
    )
}
