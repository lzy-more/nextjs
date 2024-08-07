import React from 'react';
import { useLocale } from 'next-intl';
// import {}from 'react-dom'
import { Link, usePathname,useRouter } from '../../navigation';
// import { useRouter } from 'next/navigation'

export default function Header() {
    const locale = useLocale();
    const otherLocale = locale === 'en' ? ['zh', '中'] : ['en', 'En'];
    const pathname:any = usePathname();
    const router = useRouter();
    const { query } = router;
    console.log('Current locale:', locale);
    console.log('Other locale:', otherLocale);
    console.log('Current pathname:', pathname);
    console.log('Current query:', query);

    return (
        <div>
            <p>中英文切换头部</p>
   
            <button onClick={()=>{
                const newUrl = new URL(window.location.href);
                console.log(otherLocale[0],'otherLocale[0]otherLocale[0]otherLocale[0]',pathname,locale+pathname);
                
                location.href = `${otherLocale[0]+pathname}?${newUrl.searchParams.toString()}`;
                // router.replace(`${locale+pathname}?${newUrl.searchParams.toString()}`);
            }}>切换语言</button>
        </div>
    );
}
