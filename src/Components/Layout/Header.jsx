import { SearchEngine } from "../searchEngin";

export const Header = () => {
    return (
        <header className="header">
            <div className="header__left">
                <div className="logo">TradeLogo</div>
                <nav className="nav">
                    <a href="#markets" className="nav__link">Markets</a>
                    <a href="#stocks" className="nav__link">Stocks</a>
                    <a href="#crypto" className="nav__link">Crypto</a>
                    <a href="#forex" className="nav__link">Forex</a>
                </nav>
            </div>
            <div className="header__right">
                <SearchEngine />
            </div>
        </header>
    );
}