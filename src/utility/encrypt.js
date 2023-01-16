import JSEncrypt from 'jsencrypt';

export const encryptString = (publicKey, stringToEncrypt) => {
  const rsa = new JSEncrypt();
  rsa.setPublicKey(publicKey);
  const encryptedString = rsa.encrypt(stringToEncrypt);
  return encryptedString;
}