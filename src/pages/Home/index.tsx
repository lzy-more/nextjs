'use client';
import { useTranslations, useLocale } from 'next-intl';
import { Link, pathnames, usePathname,useRouter,redirect } from '../../navigation';
import Header from '@/components/Header';
export default function Home() {
  const t = useTranslations('global');
  const locale = useLocale();
const router = useRouter();
  const otherLocale: any = locale === 'en' ? ['zh', '中'] : ['en', 'En'];
  const pathname = usePathname();

  console.log('pathname',pathname,locale);
  
  return (
    <div>
         <Header></Header>
      {t('technological exchanges')} 1111111188888888
      <p>122222222222222222222</p>
      <button onClick={()=>{router.push('/demo?aaaa=1')}}>路由跳转</button>

      {/* 中英文切换 */}
    
 
    </div>
  );
}
