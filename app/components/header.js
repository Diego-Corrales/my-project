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
        <header className='flex w-100 h-40 gap-40 bg-cyan-300 justify-around items-center rounded-3xl border-cyan-800 border-8'>
          <div className=''>
            <h2 className='text-4xl text-black'>Diego Omar Corrales</h2>
            <h3 className='text-2xl text-black'>Front-end Developer - Buenos Aires/Argentina</h3>
          </div>
          <nav>
            <ul className='flex items-center bg-cyan-800 text-white h-20 border-solid rounded-3xl border-white border-2 p-10 text-2xl gap-10'>
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