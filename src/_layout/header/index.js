import Link from 'next/link';
import Image from 'next/image';

import { colors , businessData , pageLinks } from '../../data';


export default function HeaderComponent () {
    return (
      <header className={ colors.colorHeader }>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">

          <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
            <div className="flex items-center">
              <a href="/" className='flex items-center'>
                <span className="sr-only"> </span>
                
                <Image src='/logo_keep.jpg' width="50" height="50" className="rounded-sm"/>
                
                <h1 className={ "font-bold text-white px-2" }> 
                    { businessData.companyName }
                </h1>
              </a>

              <div className="hidden ml-10 space-x-8 lg:block">

                { pageLinks.map((link) => (
                  <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                    {link.name}
                  </a>
                ))}

              </div>
            </div>

            <div className="ml-10 space-x-4">
              <h3 className="inline-block py-2 px-4 text-base font-bold text-white">
                07899 065 547
              </h3>
              
              <Link href='/contact'>
                  <a className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-bold text-indigo-600 hover:bg-indigo-50">
                    get in contact
                  </a>
              </Link>
            </div>
          </div>
          <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
            { pageLinks.map((link) => (
                <Link href={link.href}>
                      <a key={link.name} className="text-base font-bold text-white hover:text-indigo-50">
                          {link.name}
                      </a>
                </Link>
            ))}
          </div>
        </nav>
      </header>
    )
  }
  