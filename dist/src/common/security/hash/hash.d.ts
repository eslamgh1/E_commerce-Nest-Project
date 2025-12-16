export declare const Hash: ({ plainText, saltRounds }: {
    plainText: any;
    saltRounds?: number | undefined;
}) => Promise<string>;
export declare const Compare: ({ plainText, cipherText }: {
    plainText: any;
    cipherText: any;
}) => Promise<boolean>;
