import React from 'react';
import styles from './UnderConstruction.module.css'; // Make sure to create this CSS file
import { useTranslations } from 'next-intl';

const UnderConstruction = () => {
  const t = useTranslations('common');
  return (
    <div
    className={styles.underConstruction}
    >
      <div className={styles.loadingCircle}></div>
      <p className={styles.loadingText}>{t('Under Construction')}</p>
    </div>
  );
}

export default UnderConstruction;
