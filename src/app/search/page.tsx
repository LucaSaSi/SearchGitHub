"use client";
import { Search, Trash } from "lucide-react";
import User from "../user/page";
import { buscarUsuarioGitHub } from "../../service/data";
import { useState } from "react";
import ErrorPage from "../error/page";

export default function Confer() {
    const [user, setUser] = useState("");
    const [name, setName] = useState("");
    const [avatar, setAvatar] = useState("");
    const [bio, setBio] = useState("");
    const [userExiste, setUserExiste] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser(e.target.value);
    };

    const handleSearch = async () => {
        if (!user) return;

        setLoading(true);
        setUserExiste(false);
        setError(false);

        try {
            const data = await buscarUsuarioGitHub(user);

            setTimeout(() => {
                if (data) {
                    setName(data.name);
                    setAvatar(data.avatar);
                    setBio(data.bio);
                    setUserExiste(true);
                } else {
                    setUserExiste(false);
                    setError(true);
                }
                setLoading(false);
            }, 2000);
        } catch (error) {
            console.error("Erro ao buscar usuário:", error);
            setError(true);
            setLoading(false);
        }
    };

    const handleReset = () => {
        setUser("");
        setName("");
        setAvatar("");
        setBio("");
        setUserExiste(false);
        setError(false);
    };

    return (
        <div className="flex flex-col w-full gap-10 border-amber-400 justify-center items-center">
            <div className="flex justify-between items-center h-16 w-1/3 bg-gray-100 rounded-sm">
                <input
                    type="text"
                    placeholder="Digite o nome do usuário"
                    className="text-black pl-3 w-full font-semibold outline-none"
                    onChange={handleChange}
                    value={user}
                />
                <button
                    onClick={userExiste || error ? handleReset : handleSearch}
                    type="button"
                    className="flex justify-center items-center rounded-lg bg-blue-600 border-2 h-full w-18 hover:bg-blue-700"
                >
                    {userExiste || error ? (
                        <Trash color="white" className="transition-transform duration-200 hover:scale-125" />
                    ) : (
                        <Search color="white" className="transition-transform duration-200 hover:scale-125" />
                    )}
                </button>
            </div>

            <div className="flex justify-center items-center w-full">
                {loading && <h1 className="mt-5 text-lg font-semibold text-blue-500 animate-bounce">Carregando...</h1>}

                {!loading && userExiste && <User name={name} avatar={avatar} bio={bio} />}

                {!loading && error && <ErrorPage />}
            </div>
        </div>
    );
}
