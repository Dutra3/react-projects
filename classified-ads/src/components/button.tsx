type Props = {
    label: string;
}

export const Button = ({ label }: Props) => {
    return (
        <button className="px-6 py-3 rounded bg-blue-700 text-white">
            {label}
        </button>
    )
}