import { Footer } from './_components/footer';
import { Header } from './_components/header';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main className="flex-1" id="main">
                {children}
            </main>
            <Footer />
        </>
    );
}
