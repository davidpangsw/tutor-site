"use client";
import React, { useContext, useState } from 'react';
import { Card, Col, Row, Table } from 'react-bootstrap';
import { ContactContext } from './ContactContext';
import { FaWeixin, FaEnvelope, FaCopy } from 'react-icons/fa';
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
  const { wechat, email, wechat_url } = contacts;
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


  const data: { [key: string]: { label: string, value: string, url?: string, linkIcon: React.ReactNode | null } } = {
    // 'phone': {
    //   label: 'Phone',
    //   value: phone,
    //   // url: '#',
    //   linkIcon: (<FaPhone />),
    // },
    // 'whatsapp': {
    //   label: 'WhatsApp',
    //   value: whatsapp,
    //   url: `https://wa.me/${whatsapp}`,
    //   linkIcon: (<FaWhatsapp />),
    // },
    'wechat': {
      label: 'WeChat',
      value: wechat,
      url: wechat_url,
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
      <h1>{t('title')}</h1>
      <Card style={style}>
        <Card.Header>{t('title')}</Card.Header>
        <Card.Body className="py-0">
          <Row>
            <Col className="p-0" md={12}>
              <Table>
                <tbody>
                  {Object.keys(data).map((name: string) => {
                    const { label, value, url, linkIcon } = data[name];
                    return (
                      <tr key={name}>
                        <td>
                          <Link href="">
                            <FaCopy onClick={() => copyToClipboard(label, value)} />
                          </Link>
                        </td>
                        <td>
                          <Link href={url ?? '#'} target={url ? "_blank" : "_self"} > {linkIcon} </Link>
                        </td>
                        <td>
                          {value}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
              {copySuccess ?
                (<Card.Text className="text-success">
                  {copySuccess}
                </Card.Text>) :
                (<Card.Text className="text-info">
                  Click <FaCopy /> to copy
                </Card.Text>)
              }
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ContactCard;
