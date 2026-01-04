import { headers } from 'next/headers';
import { getAppConfig } from '@/lib/livekit/utils';
import LogoIcon from '@/public/logo-icon.svg';
import Image from 'next/image';
import Link from 'next/link';

interface AppLayoutProps {
  children: React.ReactNode;
}

export default async function AppLayout({ children }: AppLayoutProps) {
  const hdrs = await headers();
  const { companyName, logo, logoDark } = await getAppConfig(hdrs);

  return (
    <div className="h-screen w-full bg-background text-foreground">
      <header className="fixed top-0 left-0 z-50 hidden w-full flex-row justify-between p-6 md:flex">
        <Link href={"/client"}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image src={LogoIcon} alt={`${companyName} Logo`} className="block size-6 dark:hidden" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image
            src={LogoIcon ?? logo}
            alt={`${companyName} Logo`}
            className="hidden size-6 dark:block"
          />
        </Link>
        <span className="text-foreground font-mono text-xs font-bold tracking-wider uppercase">
          Built with{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.livekit.io/agents"
            className="underline underline-offset-4"
          >
            LiveKit Agents
          </a>
        </span>
      </header>
      {children}
    </div>
  );
}
