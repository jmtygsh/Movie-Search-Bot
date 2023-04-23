import Link from 'next/link';

const Navbar = () => {
    return (
        <div className='navbar-section'>
            <div className='navbar-container text-center'>
                <ul className='navbar'>
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/Pricing'}>Pricing</Link></li>
                    <li><Link href={'/About-us'}>About Us</Link></li>
                    <li><Link href={'/Contact-us'}>Contact Us</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
