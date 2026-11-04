import { useLang } from '../i18n.jsx';

const PRODUCT_URL = 'https://store.peka.ai.id/produk/prompt-automation-konten-sosmed-7-fase-39';

export default function Banner() {
  const { t } = useLang();
  return (
    <div className="topbanner" role="note">
      <p>
        {t.banner.text}{' '}
        <a href={PRODUCT_URL}>{t.banner.link}</a>
      </p>
    </div>
  );
}
