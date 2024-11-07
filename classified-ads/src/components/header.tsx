import Link from "next/link";
import { Button } from "./button";

export const Header = () => {
    return (
        <header className="flex justify-between items-center py-10">
            <div className="text-3xl font-bold">Dutra Carros</div>
            <div>
                <Link href={'/add'}>
                    <Button label="Cadastrar carro" />
                </Link>
            </div>
        </header>
    );
};