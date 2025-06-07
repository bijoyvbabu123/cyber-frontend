function Navbar() {
    return <nav className="bg-gray-800 fixed w-full text-amber-800 ">

        <a href="/">
            <img src="/cyber_dark_logo.svg" alt="homepage" />
        </a>

        <input
            type="text"
            placeholder=""
        />

        <ul className="list-none">
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
            <li>
                <a href="/contact">Contact Us</a>
            </li>
            <li>
                <a href="/blog">Blog</a>
            </li>
        </ul>

        <a href="/favorites">
            <img src="/favorites_selected_icon.svg" alt="" />
        </a>

        <a href="/cart">
            <img src="/cart_icon.svg" alt="" />
        </a>

        <a href="/account">
            <img src="/user_icon.svg" alt="" />
        </a>

    </nav>
}

export default Navbar