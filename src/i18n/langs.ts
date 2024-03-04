export interface ILanguageOption {
  value: any;
  label: string;
  options: { value: string; label: string };
}

export const langs: any = {
  en: { nativeName: 'English' },
  ru: { nativeName: 'Russian' },
};

export default langs;
