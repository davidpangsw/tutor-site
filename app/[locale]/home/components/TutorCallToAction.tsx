
import { useTranslations } from 'next-intl';
import React from 'react'
import { Button, Container } from 'react-bootstrap'
import styles from './TutorCallToAction.module.css'

const TutorCallToAction = () => {
  const t = useTranslations('your_tutor_page.tutor_call_to_action');

  return (
    <Container className={styles.callToActionSection}>
      <div className={styles.highlightText}>
        {t('highlight_text')}
        <span className={styles.discountBadge}>{t('discount_badge')}</span>
      </div>
      <Button
        className={styles.callToActionButton}
        href="https://forms.gle/aqiwB1zVSEV9AoX77"
        target="_blank"
        rel="noopener noreferrer"
        as="a"
      >
        {t('call_to_action')}
      </Button>
    </Container>
  )
}

export default TutorCallToAction