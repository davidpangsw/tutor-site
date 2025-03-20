interface IContact {
  text: string;
  wechat: string;
  wechat_url: string,
  email: string;
}

const CONTACTS: IContact = {
  text: '778-316-4509',
  wechat: 'davidvancouvertutor',
  wechat_url: 'https://u.wechat.com/kGjdNybM2wYC-AMUSGyGrvc',
  email: 'davidpangsw@hotmail.com',
}

export { CONTACTS };
export type { IContact };
