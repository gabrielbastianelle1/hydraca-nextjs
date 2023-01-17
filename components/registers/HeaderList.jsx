import { orderByInsulin, orderByGlucose } from './orders'

export default function HeaderList({
    registers,
    order,
    setOrder,
    setRegistersSorted
}) {
    const onClickInsulin = () => {
        setRegistersSorted(orderByInsulin({ registers, order }))
        order == 'asc' ? setOrder('desc') : setOrder('asc')
    }

    const onClickGlucose = () => {
        setRegistersSorted(orderByGlucose({ registers, order }))
        order == 'asc' ? setOrder('desc') : setOrder('asc')
    }

    return (
        <div
            style={{
                width: 'inherit'
            }}
            className="sticky top-0 px-6 py-3  grid grid-cols-2 lg:grid-cols-4  bg-headerList text-white font-bold p-2 rounded-lg px-10 "
        >
            <p>Data</p>
            <p
                className="relative hidden lg:block cursor-pointer"
                onClick={onClickGlucose}
            >
                <span className="absolute -left-5">
                    <OrderIcon />
                </span>
                Glicose
            </p>
            <p>Tipo insulina</p>
            <p
                className="relative hidden lg:block cursor-pointer"
                onClick={onClickInsulin}
            >
                <span className="absolute -left-5">
                    <OrderIcon />
                </span>
                Insulina
            </p>
        </div>
    )
}

function OrderIcon() {
    return (
        <svg
            width="15"
            height="26"
            viewBox="0 0 15 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g opacity="0.5">
                <g clip-path="url(#clip0_96_357)">
                    <path
                        d="M12.2542 17.7247C12.1757 17.6594 12.0703 17.6228 11.9606 17.6228C11.8509 17.6228 11.7455 17.6594 11.667 17.7247L7.27274 21.3755L2.87935 17.7247C2.80086 17.6594 2.69548 17.6228 2.58576 17.6228C2.47603 17.6228 2.37066 17.6594 2.29216 17.7247C2.25388 17.7565 2.22346 17.7945 2.20269 17.8364C2.18192 17.8784 2.17121 17.9234 2.17121 17.969C2.17121 18.0145 2.18192 18.0596 2.20269 18.1015C2.22346 18.1435 2.25388 18.1814 2.29216 18.2132L6.96596 22.0955C7.04804 22.1637 7.15812 22.2019 7.27274 22.2019C7.38736 22.2019 7.49744 22.1637 7.57952 22.0955L12.2533 18.2132C12.2916 18.1814 12.322 18.1435 12.3428 18.1015C12.3636 18.0596 12.3743 18.0145 12.3743 17.969C12.3743 17.9234 12.3636 17.8784 12.3428 17.8364C12.322 17.7945 12.2916 17.7565 12.2533 17.7247L12.2542 17.7247Z"
                        fill="white"
                    />
                </g>
                <g clip-path="url(#clip1_96_357)">
                    <path
                        d="M12.2542 8.03223C12.1757 8.09757 12.0703 8.13416 11.9606 8.13416C11.8509 8.13416 11.7455 8.09757 11.667 8.03223L7.27274 4.38142L2.87935 8.03223C2.80085 8.09757 2.69548 8.13416 2.58575 8.13416C2.47603 8.13416 2.37065 8.09757 2.29216 8.03223C2.25388 8.00046 2.22346 7.96249 2.20269 7.92054C2.18191 7.87859 2.17121 7.83352 2.17121 7.78799C2.17121 7.74246 2.18191 7.69739 2.20269 7.65544C2.22346 7.61349 2.25388 7.57552 2.29216 7.54375L6.96596 3.66145C7.04804 3.59326 7.15812 3.5551 7.27274 3.5551C7.38736 3.5551 7.49744 3.59326 7.57952 3.66145L12.2533 7.54375C12.2916 7.57552 12.322 7.61349 12.3428 7.65544C12.3636 7.69739 12.3743 7.74246 12.3743 7.78799C12.3743 7.83352 12.3636 7.87859 12.3428 7.92054C12.322 7.96249 12.2916 8.00046 12.2533 8.03223L12.2542 8.03223Z"
                        fill="white"
                    />
                </g>
            </g>
            <defs>
                <clipPath id="clip0_96_357">
                    <rect
                        width="11.987"
                        height="14.0645"
                        fill="white"
                        transform="translate(14.3049 13.7346) rotate(90)"
                    />
                </clipPath>
                <clipPath id="clip1_96_357">
                    <rect
                        width="11.987"
                        height="14.0645"
                        fill="white"
                        transform="matrix(-5.12869e-08 -1 -1 3.72549e-08 14.3049 12.0223)"
                    />
                </clipPath>
            </defs>
        </svg>
    )
}
