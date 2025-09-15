"use client";
import React, { useContext, useState } from 'react';
import { Card } from 'react-bootstrap';
import { ContactContext } from './ContactContext';
import { FaWeixin, FaEnvelope, FaCopy, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
interface ContactCardProps {
  style?: React.CSSProperties,
}
const ContactCard = (props: ContactCardProps) => {
  // const { t: c } = useTranslation('common');
  const t = useTranslations('contact_card');

  const { style } = props;
  const context = useContext(ContactContext);
  // console.log(context)
  if (!context) {
    throw new Error("ContactContext is undefined. (Is it wrapped by Provider?");
  }
  const { contacts } = context;
  const { text, wechat, email } = contacts;
  const [copySuccess, setCopySuccess] = useState('');
  const copyToClipboard = async (label: string, text: string) => {

    if (!navigator.clipboard) {
      // 1. The Clipboard API only works in HTTPS environments or localhost during development.
      // 2. Not all browsers support the Clipboard API, especially in older versions.
      setCopySuccess(t('apiNotAvailable'));
      return
    }
    await navigator.clipboard.writeText(text);
    setCopySuccess(t('copySuccess', { label: t(label) }));
    // setTimeout(() => setCopySuccess(''), 2000);
  };


  const data: { [key: string]: { label: string, value: string, copyValue?: string, url?: string, linkIcon: React.ReactNode | null } } = {
    'text': {
      label: 'phone (text-only)',
      value: text,
      copyValue: text.replace(/[-\s()]/g, ''), // Remove hyphens, spaces, and parentheses for copying
      // url: '#',
      linkIcon: (<FaPhone />),
    },
    'whatsapp': {
      label: 'WhatsApp',
      value: text,
      copyValue: text.replace(/[-\s()]/g, ''), // Remove hyphens, spaces, and parentheses for copying
      // url: `https://wa.me/${whatsapp}`,
      linkIcon: (<FaWhatsapp />),
    },
    'wechat': {
      label: 'WeChat',
      value: wechat,
      // url: wechat_url,
      linkIcon: (<FaWeixin color="#7BB32E" />),
    },
    'email': {
      label: 'Email',
      value: email,
      url: `mailto:${email}`,
      linkIcon: (<FaEnvelope />),
    },
  }

  return (
    <div>
      <Card style={style} className="shadow-sm border-0">
        <Card.Header className="bg-primary text-white text-center py-3">
          <h4 className="mb-0">{t('title')}</h4>
        </Card.Header>
        <Card.Body className="p-4">
          <div className="contact-methods">
            {Object.keys(data).map((name: string) => {
              const { label, value, copyValue, url, linkIcon } = data[name];
              return (
                <div key={name} className="contact-item mb-3 p-3 rounded bg-light border">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center flex-grow-1">
                      <div className="contact-icon me-3 text-primary" style={{ fontSize: '1.5rem' }}>
                        {url ? (
                          <Link href={url} target={url ? "_blank" : "_self"} className="text-decoration-none text-primary">
                            {linkIcon}
                          </Link>
                        ) : (
                          linkIcon
                        )}
                      </div>
                      <div className="contact-info flex-grow-1">
                        <div className="contact-label text-muted small text-uppercase fw-bold">
                          {t(label)}
                        </div>
                        <div className="contact-value fw-semibold">
                          {value}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard(label, copyValue || value)}
                      className="btn btn-outline-secondary btn-sm d-flex align-items-center"
                      title={`Copy ${t(label)}`}
                    >
                      <FaCopy className="me-1" />
                      <span className="d-none d-sm-inline">Copy</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-3 text-center">
            {copySuccess ? (
              <div className="alert alert-success py-2 mb-0">
                <small>{copySuccess}</small>
              </div>
            ) : (
              <div className="text-muted">
                <small>
                  <FaCopy className="me-1" />
                  Click copy button to copy contact information
                </small>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ContactCard;
