import {
    createLocalizedPathnamesNavigation,
  } from 'next-intl/navigation';
  import type { Pathnames } from 'next-intl/routing';
  export const defaultLocale = 'en';
  
  export const locales = ['en', 'zh'] as const;
  
  export const localePrefix ='never'
    // process.env.NEXT_PUBLIC_LOCALE_PREFIX === 'never' ? 'never' : 'as-needed';
  
  export const pathnames:any = {
    '/': '/en/home',
    // '/user': '/user',
    // '/dashboard': '/dashboard',
    // '/nested': {
    //   en: '/next-home',
    //   zh: '/next-zh-home'
    // },
  } satisfies Pathnames<typeof locales>;
  
  export const {Link, redirect, usePathname, useRouter} =
    createLocalizedPathnamesNavigation({
      locales,
      localePrefix,
      pathnames
    });