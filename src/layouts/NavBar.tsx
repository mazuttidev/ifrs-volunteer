import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function Navbar() {
    return (
        <nav className="w-full border-b bg-white dark:bg-gray-900 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* LOGO */}
                <div className="text-xl font-bold text-primary">
                    <Link to="/">LOGO</Link>
                </div>

                {/* Links */}
                <div className="flex items-center space-x-6">
                    <Link to="/" className="hover:text-primary">
                        Início
                    </Link>
                    <Link to="/actions" className="hover:text-primary">
                        Ações
                    </Link>
                    <Link
                        to="/how-to-participate"
                        className="hover:text-primary"
                    >
                        Como Participar
                    </Link>
                    <Link to="/ranking" className="hover:text-primary">
                        Ranking
                    </Link>
                    <Link to="/login" className="hover:text-primary">
                        Entrar
                    </Link>
                </div>

                {/* Botão CTA */}
                <div>
                    <Button asChild>
                        <Link to="/how-to-participate">Quero Ajudar</Link>
                    </Button>
                </div>
            </div>
        </nav>
    );
}
