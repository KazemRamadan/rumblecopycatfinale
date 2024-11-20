import { HomeIcon, Signature, UsersRound, LogOut, SquareChartGantt, UserRoundCheck } from 'lucide-react';
import Link from 'next/link';

import { NavButton } from '@/components/NavButton';
import { ModeToggle } from '@/components/ui/ModeToggle';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { Button } from '@/components/ui/button';


export function Header() {
    return (
        <header className='animate-slide bg-background h-12 p-2 border-b sticky top-0 z-20'>

            <div className='flex h-8 items-center justify-between w-full'>

                <div className='flex items-center gap-2'>
                    <NavButton href='/home' label='Home' icon={HomeIcon} />
                    <Link href='/home' className='flex-justify-center items-center gap-2 ml-0' title='Home' >
                        <h1 className='hidden sm:block text-l font-bold m-0 mt-0'>
                            RMBL CopyCat
                        </h1>
                    </Link>
                </div>
                <div className='flex items-center'>
                    <NavButton href='/authors' label='Authors' icon={Signature} />
                    <NavButton href='/followers' label='Followers' icon={UserRoundCheck} />
                    <NavButton href='/users' label='Users' icon={UsersRound} />
                    <NavButton href='https://copycat-roadmap.vercel.app/' label='Feature Request' icon={SquareChartGantt} />
                    <ModeToggle/>

                    <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Logout"
                    title="Logout"
                    className='rounded-full'
                    asChild
                    >
                        <LogoutLink>
                            <LogOut />
                        </LogoutLink>
                    </Button>
                </div>
            </div>
        </header>
    )
}