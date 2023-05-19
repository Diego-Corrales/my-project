import Link from 'next/link'

const links = [{
    label: 'Home',
    route: '/',
  }, {
    label: 'Resume',
    route: '/resume',
  }, {
    label: 'Portfolio',
    route: '/portfolio',
  }, {
    label: 'Contact',
    route: '/contact',
  }] 

export function Header() {
    return (
        <header className=''>
          <nav>
            <ul className='flex items-center h-20 border-solid rounded-md border-gray-300 border-2 gap-20 p-6 text-xl'>
              {links.map(({ label, route }) => (
                <li key={route}>
                  <Link href={route}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
    )
}